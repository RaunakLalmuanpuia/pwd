<style>

</style>
<div>
    <table>
        <thead>
        <tr>

            <th>Submitted at</th>

            <th>Regn No</th>
            <th>Name</th>
            <th>Parent Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Category</th>

            <th>Qualification</th>
{{--            <th>Course/Subject</th>--}}
{{--            <th>School/Institute</th>--}}
{{--            <th>Passed Year</th>--}}

            <th>Hno</th>
            <th>City/Town/Village</th>
            <th>Locality/Village</th>
            <th>District</th>
            <th>State</th>




        </tr>
        </thead>
        <tbody>
        @foreach($applications as $application)
            <tr>
                <td>{{ date('d-m-Y', strtotime($application->created_at)) }}</td>

                <td>{{ $application?->application_id }}</td>
                <td>{{ $application?->applicant->user->name ?? ''}}</td>
                <td>{{ $application?->applicant?->parents_name ??'' }}</td>
                <td>{{ date('d-m-Y', strtotime($application->applicant?->date_of_birth)) }}</td>
                <td>{{ $application->applicant?->sex ?? ''}}</td>
                <td>{{ $application->applicant?->community ?? '' }}</td>

                <td>{{ $application?->applicant?->qualification ?? '' }}</td>
{{--                <td>{{ $application?->applicant?->course ?? ''}}</td>--}}
{{--                <td>{{ $application?->education?->institute ?? '' }}</td>--}}
{{--                <td>{{ $application?->education?->passed_year ??'' }}</td>--}}

                <td>{{ $application?->applicant->user->address?->permanent_house_no ??'' }}</td>
                <td>{{ $application?->applicant->user->address?->permanent_city ??'' }}</td>
                <td>{{ $application?->applicant->user->address?->permanent_locality ??'' }}</td>
                <td>{{ $application?->applicant->user->address?->permanent_district ??'' }}</td>
                <td>{{ $application?->applicant->user->address?->permanent_state ??'' }}</td>




            </tr>
        @endforeach
        </tbody>
    </table>
</div>
