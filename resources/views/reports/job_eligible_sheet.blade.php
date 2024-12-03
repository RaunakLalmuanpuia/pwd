<div>
    <table>
        <thead>
        <tr>
            <td rowspan="3" style="align-content: center; padding: 5px; border:1px solid black">
                {{--                <img width="70" height="70" src="{{ public_path('assets/images/pwd_logo.png') }}" />--}}
            </td>
            <td colspan="6" style="text-align: center; border:1px solid black; vertical-align:center; font-size: 15px">
                <b>
                    PWD RECRUITMENT 2024
                </b>
            </td>
        </tr>
        <tr>
            <td colspan="6" style="text-align:center; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black">
                <b> <u>ELIGIBLE ATTENDANCE SHEET</u> </b>
            </td>
        </tr>
        <tr>
            <td colspan="6" style="text-align:center; font-size: 9px; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black">
                {{$jobDetail->post_name}}
            </td>
        </tr>
        <tr>
            <td colspan="4" style="border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black">
                Centre for Physical Measurement &amp; Endurance Test
            </td>
            <td colspan="3" style="border-top:1px solid black; border-bottom:1px solid black; border-right:1px solid black">
                : Center
            </td>
        </tr>
        <tr>
            <td colspan="4" style="border-top:1px solid black; border-left:1px solid black; border-bottom:1px solid black">
                Date &amp; Time of Physical Measurement &amp; Endurance Test
            </td>
            <td colspan="3" style="border-top:1px solid black; border-bottom:1px solid black; border-right:1px solid black">
                :
            </td>
        </tr>
        <tr>
            <td style="border:1px solid black">
                <b>S. No.</b>
            </td>
            <td colspan="2" style="text-align: center; border:1px solid black">
                <b>Candidate Details</b>
            </td>
            <td style="border:1px solid black">
                <b> Photo(uploaded)</b>
            </td>

            <td style="border:1px solid black">
                <b>Signature of the candidate</b>
            </td>
            <td style="border:1px solid black">
                <b>Qualified/Disqualified</b>
            </td>
            <td style="border:1px solid black">
                <b>Signature &amp; Seal of Team Leader</b>
            </td>
        </tr>
        </thead>
        <tbody>
        @foreach($jobDetail->applications as $index => $application)
            <tr>
                <td rowspan="5" style="text-align: center; vertical-align:center; border:1px solid black">
                    {{ $index + 1 }}.
                </td>
                <td style="border-top:1px solid black; border-left:1px solid black;">
                    Regn. No.
                </td>
                <td style="border-top:1px solid black; border-right:1px solid black">
                    : {{ $application->application_id }}
                </td>
                <td rowspan="5" style="align-content: center; text-align: center; vertical-align:center; border:1px solid black">
                    @if (blank($application->applicant->passport_photo))
                        <span>No Image Available</span>
                    @endif
                </td>
                <td rowspan="5" style="align-content: center; text-align: center; vertical-align:center; border:1px solid black">
                    @if (blank($application->applicant->signature_photo))
                        <span>No Signature Available</span>
                    @endif
                </td>
                <td rowspan="5" style="border: 1px solid black"></td>
                <td rowspan="5" style="border: 1px solid black"></td>
            </tr>
            <tr>
                <td style="border-left:1px solid black;">
                    Name
                </td>
                <td style="border-right:1px solid black">
                    : {{ $application->applicant->user->name }}
                </td>
            </tr>
            <tr>
                <td style="border-left:1px solid black;">
                    Father's Name
                </td>
                <td style="border-right:1px solid black">
                    : {{ $application->applicant->parents_name }}
                </td>
            </tr>
            <tr>
                <td style="border-left:1px solid black;">
                    Category
                </td>
                <td style="border-right:1px solid black">
                    : {{ $application->applicant->community }}
                </td>
            </tr>
            <tr>
                <td style="border-left:1px solid black; border-bottom:1px solid black">
                    Date of Birth
                </td>
                <td style="border-right:1px solid black; border-bottom:1px solid black">
                    : {{ \Illuminate\Support\Carbon::createFromFormat('Y-m-d', $application->applicant->date_of_birth)->format('d/m/Y') }}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
