<table>
    <thead>
    <tr>
        <th>Exam Name</th>
        <th>Subject Name</th>
        <th>Applicant Name</th>
        <th>Marks</th>
        <th>Remark</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($exams as $exam)
        @foreach ($exam->subjects as $subject)
            @foreach ($subject->examMarks as $examMark)
                <tr>
                    <td>{{ $exam->exam_name }}</td>
                    <td>{{ $subject->subject_name }}</td>
                    <td>{{ $examMark->applicant->user->name ?? 'N/A' }}</td>
                    <td>{{ $examMark->marks }}</td>
                    <td>{{ $examMark->remark }}</td>
                </tr>
            @endforeach
        @endforeach
    @endforeach
    </tbody>
</table>
