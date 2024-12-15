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
            <th>Course/Subject</th>
            <th>School/Institute</th>
            <th>Passed Year</th>

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
                <td>{{ date('d-m-Y', strtotime($application->submitted_at)) }}</td>

                <td>{{ $application?->regn_no }}</td>
                <td>{{ $application?->applicant_name ?? ''}}</td>
                <td>{{ $application?->applicant?->parent_name ??'' }}</td>
                <td>{{ date('d-m-Y', strtotime($application->applicant?->date_of_birth)) }}</td>
                <td>{{ $application->applicant?->gender ?? ''}}</td>
                <td>{{ $application->applicant?->category ?? '' }}</td>

                <td>{{ $application?->education?->qualification ?? '' }}</td>
                <td>{{ $application?->education?->course ?? ''}}</td>
                <td>{{ $application?->education?->institute ?? '' }}</td>
                <td>{{ $application?->education?->passed_year ??'' }}</td>

                <td>{{ $application?->address?->house_no ??'' }}</td>
                <td>{{ $application?->address?->town ??'' }}</td>
                <td>{{ $application?->address?->locality ??'' }}</td>
                <td>{{ $application?->address?->district_name ??'' }}</td>
                <td>{{ $application?->address?->state_name ??'' }}</td>




            </tr>
        @endforeach
        </tbody>
    </table>
</div>
