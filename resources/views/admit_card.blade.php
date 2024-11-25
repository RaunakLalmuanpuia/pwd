<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admit Card</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
        }
        .container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid #000;
            border-radius: 10px;
        }
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
            margin-top: 30px;
        }
        .footer p {
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <img src="{{ asset('images/mpsc-logo.png') }}" alt="MPSC Logo">
        <h1>MIZORAM PUBLIC SERVICE COMMISSION</h1>
        <p>Mizoram New Capital Complex, Khatla, Aizawl : Mizoram</p>
    </div>

    <div class="admit-card-title">ADMIT CARD</div>

    @foreach($jobDetail->applications as $application)
        <div class="applicant-details">
            <p><strong>Name:</strong> {{ $application->applicant->user->name }}</p>
            <p><strong>Father/Mother:</strong> {{ $application->applicant->parents_name }}</p>
            <p><strong>Roll No:</strong> {{ $application->application_id }}</p>
            <p><strong>Phone No:</strong> {{ $application->applicant->user->phone }}</p>
            <p><strong>Examination:</strong> {{ $jobDetail->post_name }} - {{ $jobDetail->description }}</p>
        </div>

        <div class="exam-details">
            <h3>Examination Details</h3>
            @if($jobDetail->exams->count() > 0)
                <table class="min-w-full mt-4 border border-border">
                    <thead>
                    <tr class="bg-secondary text-secondary-foreground">
                        <th class="border border-border p-2">Subject Name</th>
                        <th class="border border-border p-2">Exam Date</th>
                        <th class="border border-border p-2">Exam Time</th>
                        <th class="border border-border p-2">Exam Center</th> <!-- Added Exam Center column -->
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($jobDetail->exams as $exam)
                        @foreach($exam->subjects as $subject)
                            @foreach($jobDetail->applications as $application)
                                <tr>
                                    <td class="border border-border p-2">{{ $subject->subject_name }}</td>
                                    <td class="border border-border p-2">{{ $subject->exam_date }}</td>
                                    <td class="border border-border p-2">{{ $subject->exam_time }}</td>
                                    <td class="border border-border p-2">
                                        @if($application->examCenter)
                                            {{ $application->examCenter->center_name }} - {{ $application->examCenter->location }} <!-- Assuming 'name' is the field for the exam center -->
                                        @else
                                            Not Assigned
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        @endforeach
                    @endforeach
                    </tbody>
                </table>
            @else
                <p>No exams available for the job: {{ $jobDetail->post_name }}.</p>
            @endif
        </div>

        <div class="venue-details">
            <h3>VENUE</h3>
            @foreach($jobDetail->applications as $application)
                @if($application->examCenter)
                    <p><strong>Exam Center:</strong> {{ $application->examCenter->center_name }}</p>
                    <p><strong>Location:</strong> {{ $application->examCenter->location }}</p>
                @else
                    <p>Exam center details not available.</p>
                @endif
            @endforeach
        </div>


        <div class="footer">
            <p>Sd/- Controller of Examinations</p>
            <p>Mizoram Public Service Commission : Aizawl</p>
        </div>
    @endforeach
</div>

</body>
</html>
