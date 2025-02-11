<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatisticController extends Controller
{
    //
    public function districtWise(Request $request)
    {
        $genderCounts = DB::select("
        SELECT
            addr.permanent_district AS district,
            SUM(CASE WHEN a.sex = 'male' THEN 1 ELSE 0 END) AS male_count,
            SUM(CASE WHEN a.sex = 'female' THEN 1 ELSE 0 END) AS female_count
        FROM
            applications AS app
        JOIN
            applicants AS a ON app.applicant_id = a.id
        JOIN
            addresses AS addr ON a.user_id = addr.user_id
        WHERE
            app.status <> 'DRAFT'
        GROUP BY
            addr.permanent_district
    ");

//        dd($genderCounts);

        return [
            'data' => $genderCounts
        ];
    }

    public function jobWise(Request $request)
    {
        $jobCount = JobDetail::select('job_details.id', 'job_details.post_name as name')
            ->withCount(['applications' => function ($query) {
                $query->where('status', '<>', 'Draft');
            }])
            ->get()
            ->map(function ($job) {
                return [
                    'id' => $job->id,
                    'name' => $job->name,
                    'job_count' => $job->applications_count
                ];
            });

        return [
            'data' => $jobCount
        ];
    }

    public function districtJobWise(Request $request)
    {
        $data = Address::with(['user.applicants.applications' => function ($query) {
            $query->where('status', '<>', 'DRAFT');
        }])
            ->get()
            ->flatMap(function ($address) {
                if (!$address->user || !$address->user->applicants) {
                    return []; // Skip addresses without users or applicants
                }

                return $address->user->applicants->applications
                    ->groupBy('job_details_id')
                    ->map(function ($applications, $jobId) use ($address) {
                        $job = JobDetail::find($jobId);

                        return [
                            'district_id' => $address->permanent_district,
                            'district' => $address->permanent_district, // Assuming it's a string; change if ID-based
                            'job_id' => $job ? $job->id : null,
                            'name' => $job ? $job->post_name : null,
                            'job_count' => $applications->count()
                        ];
                    })->values();
            });

        return [
            'data' => $data
        ];
    }


}
