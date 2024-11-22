<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import { ref } from 'vue';

defineOptions({
    layout:AdminLayout
})

import { useForm } from '@inertiajs/vue3';

const props = defineProps(['jobDetails']);

const approveRejectForm = useForm({
    status: '',
});

const dialogVisible = ref(false); // Controls dialog visibility
const selectedApplication = ref(null); // Holds the currently selected application
// Open dialog and set selected application
const previewApplication = (application) => {
    selectedApplication.value = application;
    dialogVisible.value = true;
};

const updateStatus = (applicationId, status) => {
    approveRejectForm.status = status; // Update the form's status
    approveRejectForm.put(route('admin.applications.changeStatus', { application: applicationId }), {
        onSuccess: () => {
            approveRejectForm.reset(); // Reset the form after a successful update
        },
    });
};
// Format date utility
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

</script>

<template>
    <div>
        <h1 class="text-2xl font-bold mb-6">Admin - Applications</h1>

        <!-- Loop through job details -->
        <div v-for="jobDetail in jobDetails" :key="jobDetail.id" class="mb-8">
<!--            {{jobDetail}}-->
            <h2 class="font-semibold text-xl mt-6">{{ jobDetail.post_name }}</h2>
            <p class="text-sm text-gray-600">Department ID: {{ jobDetail.department_id }}</p>
            <p class="text-sm text-gray-600">Number of Posts: {{ jobDetail.no_of_post }}</p>
            <p class="text-sm text-gray-600">Salary: ₹{{ jobDetail.salary }}</p>
            <p class="text-sm text-gray-600">Age Limit: {{ jobDetail.age_limit }}</p>
            <p class="text-sm text-gray-600">Qualification: {{ jobDetail.qualification }}</p>
            <p class="text-sm text-gray-600">Application Deadline: {{ formatDate(jobDetail.application_deadline) }}</p>
            <p class="text-sm text-gray-600">Application Fee: ₹{{ jobDetail.application_fee }}</p>
            <p class="text-sm text-gray-600">Description: {{ jobDetail.description }}</p>

            <!-- Required Documents Section -->
            <div class="mt-4" v-if="jobDetail.documents && jobDetail.documents.length > 0">
                <h3 class="font-semibold text-lg">Required Documents</h3>
                <ul v-if="jobDetail.documents && jobDetail.documents.length > 0">
                    <li v-for="doc in jobDetail.documents" :key="doc.id">
                        {{ doc.document_name || 'Unnamed Document' }}
                    </li>
                </ul>
                <p v-else>No Required Documents</p>
            </div>
            <!-- Applications Table -->
            <table class="table-auto border-collapse border border-gray-300 w-full mt-4">
                <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2">Applicant Name</th>
                    <th class="border border-gray-300 px-4 py-2">Community</th>
                    <th class="border border-gray-300 px-4 py-2">Disability</th>
                    <th class="border border-gray-300 px-4 py-2">Status</th>
                    <th class="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="application in jobDetail.applications" :key="application.id">
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.applicant.user?.name || 'N/A' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.applicant?.community || 'N/A' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.applicant?.disability ? 'Yes' : 'No' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.status || 'Pending' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        <button
                            @click="previewApplication(application)"
                            class="bg-blue-500 text-white py-1 px-4 rounded mr-2">
                            Preview
                        </button>
                        <button
                            v-if="application.status !== 'approved'"
                            @click="updateStatus(application.id, 'approved')"
                            class="bg-green-500 text-white py-1 px-4 rounded mr-2">
                            Approve
                        </button>
                        <button
                            v-if="application.status !== 'rejected'"
                            @click="updateStatus(application.id, 'rejected')"
                            class="bg-red-500 text-white py-1 px-4 rounded">
                            Reject
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Application Preview Dialog -->
    <div v-if="dialogVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white rounded-lg p-6 w-3/4 max-w-3xl">
            <h2 class="text-xl font-semibold mb-4">Application Preview</h2>
            <p><strong>Applicant Name:</strong> {{ selectedApplication?.applicant.user?.name || 'N/A' }}</p>
            <p><strong>Community:</strong> {{ selectedApplication?.applicant?.community || 'N/A' }}</p>
            <p><strong>Disability:</strong> {{ selectedApplication?.applicant?.disability ? 'Yes' : 'No' }}</p>
            <p><strong>Status:</strong> {{ selectedApplication?.status || 'Pending' }}</p>

            <!-- Only show "Uploaded Documents" section if application_documents exists and has content -->
            <p v-if="selectedApplication?.application_documents && selectedApplication.application_documents.length > 0" class="mt-4">
                <strong>Uploaded Documents:</strong>
            </p>
            <ul v-if="selectedApplication?.application_documents && selectedApplication.application_documents.length > 0" class="list-disc pl-5">
                <li v-for="doc in selectedApplication.application_documents" :key="doc.id">
                    <div>
                        <strong>Document Name:</strong> {{ doc.job_document?.document_name || 'Unnamed Document' }}
                    </div>
                    <div>
                        <strong>Path:</strong>
                        <a :href="doc.document_path" target="_blank" class="text-blue-500 underline">
                            View Document
                        </a>
                    </div>
                </li>
            </ul>

            <div class="mt-4 text-right">
                <button @click="dialogVisible = false" class="bg-gray-500 text-white py-1 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    </div>


</template>
