<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admit Card</title>
    <style>
        @page {
            size: A4;
            margin: 10mm;
        }

        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
            font-size: 12pt;
        }

        /*.container {*/
        /*    width: 100%;*/
        /*    margin: 0 auto;*/
        /*    padding: 20px;*/
        /*    border: 2px solid #000;*/
        /*    border-radius: 10px;*/
        /*}*/

        .header {
            text-align: center;
        }

        .header img {
            width: 100px;
        }

        .header h1 {
            font-size: 24px;
            margin-top: 10px;
        }

        .header p {
            font-size: 14px;
            color: #555;
        }

        .admit-card-title {
            font-size: 28px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
        }

        .applicant-details, .exam-details, .venue-details {
            margin-top: 20px;
        }

        .applicant-details p, .exam-details p {
            font-size: 16px;
            line-height: 1.5;
        }

        .exam-details table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }

        .exam-details table th, .exam-details table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }

        .exam-details table th {
            background-color: #f2f2f2;
        }

        .exam-details .am-pm {
            text-align: center;
            font-weight: bold;
            background-color: #e0e0e0;
            padding: 5px;
        }

        .venue-details p {
            font-size: 16px;
            line-height: 1.5;
        }

        .footer {
            text-align: center;
            position: absolute;
            bottom: 1px;
            width: 100%;
        }

        .footer p {
            font-size: 14px;
            color: #555;
        }

        .signature-section {
            padding: 20px;
            /*border: 1px solid #ddd;*/
            /*border-radius: 8px;*/
            margin-top: 30px;
        }

        .signature-section div {
            display: inline-block;
            vertical-align: top;
            width: 48%;
        }

        .signature-section div img {
            margin-bottom: 10px;
        }

        .signature-section .signature-text {
            text-align: right;
            font-weight: bold;
        }

        .signature-section .signature-text span {
            font-weight: lighter;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <img src="{{ public_path('images/pwd_logo.png') }}" alt="PWD Logo">
        <h1>PUBLIC WORKS DEPARTMENT MIZORAM</h1>
        <p>PWD Complex, Tuikhuahtlang, Aizawl : Mizoram</p>
    </div>

    <div class="admit-card-title">ADMIT CARD</div>

    @foreach($jobDetail->applications as $application)

        <div style="display: table; width: 100%; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Profile Picture -->
            <div style="display: table-cell; vertical-align: middle; width: 100px; text-align: center;">
                <img src="{{ public_path('storage/' . $application->applicant->passport_photo) }}" alt="Profile Picture" style=" border: 2px solid #d1d5db; width: 100px; height: 110px;" />
            </div>

            <!-- Information -->
            <div style="display: table-cell; vertical-align: middle; padding-left: 20px; width: 60%;">
                <p style="color: #4b5563; margin: 5px 0;">Name: <span style="font-weight: bold;">{{ $application->applicant->user->name }}</span></p>
                <p style="color: #4b5563; margin: 5px 0;">Father/Mother: <span style="font-weight: bold;">{{ $application->applicant->parents_name }}</span></p>
                <p style="color: #4b5563; margin: 5px 0;">Roll No: <span style="font-weight: bold;">{{ $application->application_id }}</span></p>
                <p style="color: #4b5563; margin: 5px 0;">Phone No: <span style="font-weight: bold;">{{ $application->applicant->user->phone }}</span></p>
                <p style="color: #4b5563; margin: 5px 0;">Examination: <span style="font-weight: bold;">{{ $jobDetail->post_name }} - {{ $jobDetail->description }}</span></p>
            </div>

        </div>

        <p class="mt-4 text-zinc-600 dark:text-zinc-400" style="text-indent: 2em;">
            For Competitive Examination for Recruitment to the post of {{ $jobDetail->post_name }} - {{ $jobDetail->description }}, Government of Mizoram, 2024. His/her attention is drawn to the instructions given below.
        </p>
{{--        <p class="text-zinc-600 dark:text-zinc-400" style="text-indent: 2em;">--}}
{{--            His/her attention is drawn to the instructions given below.--}}
{{--        </p>--}}
        <div class="exam-details">
            <h3>Examination Details</h3>
            @if($jobDetail->exams->count() > 0)
                <div class="overflow-x-auto">
                    @php
                        // Group all subjects by exam date
                        $groupedSubjects = $jobDetail->exams->flatMap->subjects->groupBy('exam_date');
                    @endphp

                    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                        <thead>
                        <tr style="background-color: #f2f2f2; text-align: left;">
                            <th style="padding: 8px;">Venue</th>
                            <th style="padding: 8px;">Date</th>
                            <th style="padding: 8px;">AM</th>
                            <th style="padding: 8px;">PM</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($groupedSubjects as $examDate => $subjects)
                            @php
                                // Filter AM and PM subjects for the current date
                                $amSubjects = $subjects->filter(function($subject) {
                                    $time = \Carbon\Carbon::createFromFormat('H:i:s', $subject->start_time);
                                    return $time->hour < 12; // AM before 12:00
                                });

                                $pmSubjects = $subjects->filter(function($subject) {
                                    $time = \Carbon\Carbon::createFromFormat('H:i:s', $subject->start_time);
                                    return $time->hour >= 12; // PM from 12:00 onwards
                                });
                            @endphp

                            <tr>
                                <td rowspan="1" style="padding: 8px; vertical-align: top;">
                                    {{ $application->examCenter->center_name }} - {{ $application->examCenter->location }}
                                </td>
                                <td style="padding: 8px; vertical-align: top;">
                                    {{ \Carbon\Carbon::parse($examDate)->format('d.m.Y') }}<br>
                                    ({{ \Carbon\Carbon::parse($examDate)->format('l') }})
                                </td>
                                <td style="padding: 8px; vertical-align: top;">
                                    @if($amSubjects->isEmpty())
                                        No Exams
                                    @else
                                        @foreach($amSubjects as $subject)
                                            {{ $subject->subject_name }}<br>
                                            ({{ \Carbon\Carbon::createFromFormat('H:i:s', $subject->start_time)->format('h:i A') }}) -  ({{ \Carbon\Carbon::createFromFormat('H:i:s', $subject->end_time)->format('h:i A') }})<br>
                                        @endforeach
                                    @endif
                                </td>
                                <td style="padding: 8px; vertical-align: top;">
                                    @if($pmSubjects->isEmpty())
                                        No Exams
                                    @else
                                        @foreach($pmSubjects as $subject)
                                            {{ $subject->subject_name }}<br>
                                            ({{ \Carbon\Carbon::createFromFormat('H:i:s', $subject->start_time)->format('h:i A') }}) -  ({{ \Carbon\Carbon::createFromFormat('H:i:s', $subject->end_time)->format('h:i A') }})<br>
                                        @endforeach
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            @else
                <p>No exams available for the job: {{ $jobDetail->post_name }}.</p>
            @endif
        </div>

        <div class="signature-section">
            <div style="width: 48%; text-align: left;">
                <img src="{{ public_path('storage/' . $application->applicant->signature_photo) }}" alt="Logo" style="width: 100px; margin-bottom: 10px;" />

                <p style="font-weight: bold;">({{ $application->applicant->user->name }})</p>
            </div>
            <div style="width: 48%; text-align: right;">
                <div class="signature-text">
                    <p><span>sd/-</span><br><span>(LALREMMAWIA)</span></p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>&copy; {{ date('Y') }} Public Works Department Mizoram</p>
        </div>

    @endforeach

    <div style="page-break-before: always;">
        <h2 style="text-align: center; margin-top: 20px;">INSTRUCTIONS TO CANDIDATES</h2>
        <ol style="padding: 20px; line-height: 1.8; color: #4b5563;  font-size: 12px;">
            <li>Candidates will be admitted to the Examination Hall/Room on production of this Admit Card and original ID such as EPIC or Aadhaar with a view to establish the true identity of the candidate. </li>
            <li> Admission will ordinarily be refused to a candidate who is late by 10 minutes from the start of the examination.</li>
            <li>Loss of Admit Card must be reported to the Head of Department immediately
                and duplicate copy of the same will be issued on payment of Rs 50/- (Rupees
                Fifty) only.</li>
            <li>No candidate shall be permitted to leave the Examination Hall/Room until the
                time for the examination is over.</li>
            <li>The candidates should not bring any articles such as books, notes, loose
                sheets, mobile phones, pagers, digital diaries, calculators, etc. inside the
                Examination Hall/Room.</li>
            <li> [Deleted] </li>
            <li> Answers must  be written/marked using Blue or Black Ball Point Pen and pencils should not be used unless drawing of maps, diagrams, etc is required. </li>
            <li>Particulars/Details to be filled up in the answer paper should be filled up completely and correctly, answer scripts of candidates failing to do so will not be evaluated.</li>
            <li>Candidates must attempt questions in accordance with the directions on each question paper. If questions are attempted in excess of the prescribed number, only the questions attempted first up to the prescribed number shall be evaluated and the remaining ignored.</li>
            <li>Answer scripts of candidates who do not complete the examination will not be evaluated.</li>
            <li>Wrongly numbered or un-numbered answers will not be evaluated.</li>
            <li>Any candidate who applies for his/her marksheet should enclose original or attested copy of this Admit Card.</li>
            <li>Candidates detected in using unfair means or communicating with one another or found in possession of unauthorized books, papers , mobile phones, pagers, digital diaries
            calculators, etc. during the examination shall be expelled and their names stuck off the rolls. They will be liable to be debarred from applying for all future examinations
            and selection to be conducted by the department.</li>
            <li>No candidate shall leave the examination hall/ Room without prior permission of the Invigilator.</li>
        </ol>
    </div>

    <div class="footer">
        <p>Deleted by the Mizoram Direct Recruitment (Conduct of Examination) (Amendment) Guidelines, 2019 notified in the Mizoram Gazette extra ordinary issue No.618 dated 19.09.2019</p>
    </div>
</div>

</body>
</html>
