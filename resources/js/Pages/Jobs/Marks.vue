<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
        <!-- Job details header -->
        <div class="mb-8">
            <h2 class="text-3xl font-semibold text-gray-800">{{ jobDetail.post_name }}</h2>
            <p class="text-lg text-gray-600">Salary: <span class="font-semibold text-green-600">{{ jobDetail.salary }}</span></p>
            <p class="text-lg text-gray-600">Application Deadline: <span class="font-semibold text-red-600">{{ jobDetail.application_deadline }}</span></p>
        </div>

        <!-- Applicants' marks table -->
        <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse shadow-md rounded-lg">
                <thead>
                <tr class="bg-gray-200">
                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border">Applicant Name</th>
                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border">Subjects</th>
                    <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 border">Exam Center</th>
                </tr>
                </thead>
                <tbody>
                <!-- Loop through applicants -->
                <tr v-for="applicant in applicants" :key="applicant.id" class="hover:bg-gray-50 transition duration-150">
                    <td class="px-6 py-4 border text-gray-700">{{ applicant.applicant.user.name }} : {{applicant.application_id}}</td>

                    <!-- Subjects for the applicant -->
                    <td class="px-6 py-4 border text-gray-700">
                        <div v-if="applicant.applicant.exam_marks && applicant.applicant.exam_marks.length">
                            <ul class="list-disc pl-5">
                                <li v-for="(examMark, index) in applicant.applicant.exam_marks" :key="index">
                                    <span class="font-semibold">{{ examMark.subject.subject_name }}:</span> {{ examMark.marks }}
                                </li>
                            </ul>
                        </div>
                        <div v-else>
                            <ul class="list-disc pl-5">
                                <li v-for="(subject, index) in applicant.applicant.subjects" :key="index">
                                    <span class="font-semibold">{{ subject.subject_name }}:</span> Marks not assigned
                                </li>
                            </ul>
                        </div>
                    </td>

                    <!-- Exam center -->
                    <td class="px-6 py-4 border text-gray-700">
                        <span v-if="applicant.exam_center" class="font-semibold">{{ applicant.exam_center.center_name }}-{{ applicant.exam_center.location }}</span>
                        <span v-else class="text-gray-500" data-tooltip="Exam center not assigned">Not Assigned</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout: AdminLayout
});

const props = defineProps({
    jobDetail: Object,
    applicants: Array,
});
</script>

<style scoped>
/* Add some basic styling */
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
}

th {
    background-color: #f4f4f4;
    font-weight: bold;
}

td {
    background-color: #fff;
}

/* Tooltip styling */
[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
}

/* Hover effect */
tr:hover {
    background-color: #f9fafb;
}

.list-disc {
    padding-left: 20px;
}

.text-green-600 {
    color: #16a34a;
}

.text-red-600 {
    color: #dc2626;
}

.text-gray-700 {
    color: #374151;
}

.text-gray-600 {
    color: #4b5563;
}

.text-gray-500 {
    color: #6b7280;
}
</style>
