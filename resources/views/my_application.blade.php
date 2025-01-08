<style>
    @page {
        size: 8.5in 11in;
        margin: .3in;
    }

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        src: url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300&family=Poppins:wght@100;200;300;400;500;600;700&display=swap) format('truetype');
    }

    * {
        font-family: 'Open Sans', serif;
        font-size: 14px;
    }

    .row_underline {
        border-bottom: solid #adadad;
        border-width: 1px;

    }

    .box {
        border-top: solid #adadad;
        border-bottom: solid #adadad;
        border-width: 1px;
    }

    .rect {
        border-width: 1.5px;
        border-color: #adadad;
        border-style: solid;
    }

    p {
        padding: 0;
        margin: 0;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        padding: 6px;


    }

    .zlabel {
        font-family: 'Open Sans', serif;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #6d6d6d;
    }

    .zvalue {
        font-family: 'Open Sans', serif;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #484848;
    }
</style>
<div>
    <div style="text-align: center">
    <span style="font-size: larger; font-weight: bold">
      APPLICATION
    </span>
    </div>
    <br><br>
    @foreach($jobDetail->applications as $application)

    <table style="width:100%">
        <tr>
            <td class="zlabel">
                Status
            </td>
            <td class="zvalue">
{{--                {{$application->status}}--}}
                {{ $application->status == 'pending' ? 'Submitted' : "Approved" }}
            </td>
            <td rowspan="6">
                <img width="100" height="120" src="{{ public_path('storage/' . $application->applicant->passport_photo) }}">
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Applied Job
            </td>
            <td class="zvalue">
                {{$jobDetail->post_name}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Regn No
            </td>
            <td class="zvalue">
                {{$application->application_id}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Applicant Name
            </td>
            <td class="zvalue">
                {{$application->applicant->user->name}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Father/Mother
            </td>
            <td class="zvalue">
                {{$application->applicant->parents_name}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Gender
            </td>
            <td class="zvalue">
                {{$application->applicant->sex}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Mobile
            </td>
            <td class="zvalue">
                {{$application->applicant->user->phone}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Category
            </td>
            <td class="zvalue">
                {{$application->applicant->community}}
            </td>
            <td rowspan="2">
                <img width="100" height="40" src="{{ public_path('storage/' . $application->applicant->signature_photo) }}">
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Date of birth
            </td>
            <td class="zvalue">
                {{\Illuminate\Support\Carbon::createFromFormat('Y-m-d', $application->applicant->date_of_birth)->format('d-m-Y')}}
            </td>
        </tr>

        <tr>
            <td colspan="3">
                <hr>
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Permanent Address
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                State
            </td>
            <td class="zvalue">
                {{$application->applicant->user->address->permanent_state}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                District
            </td>
            <td class="zvalue">
                {{$application->applicant->user->address->permanent_district}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                City/Town/Village
            </td>
            <td class="zvalue">
                {{$application->applicant->user->address->permanent_city}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Locality
            </td>
            <td class="zvalue">
                {{$application->applicant->user->address->permanent_locality}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                House no
            </td>
            <td class="zvalue">
                {{$application->applicant->user->address->permanent_house_no}}
            </td>
        </tr>

        <tr>
            <td colspan="3">
                <hr>
            </td>
        </tr>


    </table>

    <br>
    <br>
    <div>
    <span style="font-size: larger; font-weight: bold">
      PAYMENTS
    </span>
    </div>
    <table style="width: 100%;">
        <tr>
            <td class="zlabel">
                Transaction ID
            </td>
            <td class="zvalue">
                {{$application->transaction->transaction_id}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Order ID
            </td>
            <td class="zvalue">
                {{$application->transaction->order_id}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Date
            </td>
            <td class="zvalue">
                {{ \Illuminate\Support\Carbon::parse($application->transaction->date)->format('d M Y') }}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Amount
            </td>
            <td class="zvalue">
                Rs. {{$application->transaction->amount}}
            </td>
        </tr>
        <tr>
            <td class="zlabel">
                Status
            </td>
            <td class="zvalue">
                {{$application->transaction->status}}
            </td>
        </tr>
    </table>
    @endforeach
    <hr>
</div>
