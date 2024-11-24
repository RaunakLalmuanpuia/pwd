<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-semibold text-center mb-6">Assign Marks for Exam: {{ exam.exam_name }}</h1>

        <form @submit.prevent="submit" class="space-y-6">
            <!-- Applicant Marks Input Section -->
            <div v-for="(applicant, index) in applicants" :key="applicant.id" class="border p-4 rounded-lg shadow-sm bg-gray-50">
                <h2 class="text-lg font-semibold text-gray-700 mb-4">{{ applicant.user.name }}</h2>

                <div v-for="(subject, subjectIndex) in subjects" :key="subject.id" class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">{{ subject.subject_name }}</label>

                    <input
                        v-model="marks[index][subject.id]"
                        type="number"
                        min="0"
                        max="100"
                        :placeholder="`Marks for ${subject.subject_name}`"
                        class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <div v-if="marks[index][subject.id] < 0 || marks[index][subject.id] > 100" class="text-red-500 text-sm mt-1">
                        Marks must be between 0 and 100.
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button
                    type="submit"

                    class="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md disabled:opacity-50"
                >
                    <span>Save Marks</span>
                </button>
            </div>
        </form>

        <!-- Marks List -->
        <div v-if="examMarks.length" class="mt-8">
            <h2 class="text-lg font-semibold mb-4">Marks List</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full table-auto">
                    <thead class="bg-gray-200">
                    <tr>
                        <th class="border px-4 py-2 text-left">Applicant Name</th>
                        <th v-for="subject in subjects" :key="subject.id" class="border px-4 py-2 text-left">{{ subject.subject_name }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(applicant, index) in applicants" :key="applicant.id">
                        <td class="border px-4 py-2">{{ applicant.user.name }}</td>
                        <td v-for="subject in subjects" :key="subject.id" class="border px-4 py-2">
                            {{ getExistingMark(applicant.id, subject.id) }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})
const props = defineProps({
    exam: Object,  // Exam details
    applicants: Array,  // List of applicants for this exam
    subjects: Array,  // List of subjects for this exam
    examMarks: Array,  // Existing marks for the exam (grouped by applicant_id)
});

// Function to get existing marks for a given applicant and subject
const getExistingMark = (applicantId, subjectId) => {
    const marksForApplicant = props.examMarks[applicantId];
    if (marksForApplicant) {
        const markData = marksForApplicant.find((mark) => mark.subject_id === subjectId);
        return markData ? markData.marks : null;
    }
    return null;
};

// Initialize the marks data for each applicant and subject
const marks = ref(
    props.applicants.map((applicant, index) => {
        const applicantMarks = {};
        props.subjects.forEach((subject) => {
            // Set existing marks if available
            const existingMark = getExistingMark(applicant.id, subject.id);
            applicantMarks[subject.id] = existingMark !== null ? existingMark : null;
        });
        return applicantMarks;
    })
);

// Initialize the form with Inertia's useForm
const form = useForm({
    marks: [], // Empty array initially, will be populated on submit
});

// Function to handle form submission
const submit = () => {
    const markData = [];
    props.applicants.forEach((applicant, index) => {
        props.subjects.forEach((subject) => {
            const mark = marks.value[index][subject.id];
            if (mark !== null) { // Ensure marks are not null
                markData.push({
                    applicant_id: applicant.id,
                    subject_id: subject.id,
                    marks: mark,
                });
            }
        });
    });

    form.marks = markData; // Add marks to the form

    form.post(route('exams.storeMarks', props.exam.id));
};
</script>
