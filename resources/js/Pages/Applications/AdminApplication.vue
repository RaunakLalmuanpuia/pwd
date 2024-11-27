<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="container mx-auto p-6">
                    <h1 class="text-3xl font-bold mb-8 text-center text-gray-800">Admin - Job Applications</h1>

                    <!-- Job Details Card -->
                    <div class="mb-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 class="text-2xl font-semibold text-gray-800 mt-4">{{ jobDetails.post_name }}</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <p class="text-sm text-gray-600">Department ID: <span class="font-semibold">{{ jobDetails.department_id }}</span></p>
                            <p class="text-sm text-gray-600">Number of Posts: <span class="font-semibold">{{ jobDetails.no_of_post }}</span></p>
                            <p class="text-sm text-gray-600">Salary: <span class="font-semibold text-green-600">₹{{ jobDetails.salary }}</span></p>
                            <p class="text-sm text-gray-600">Age Limit: <span class="font-semibold">{{ jobDetails.age_limit }}</span></p>
                            <p class="text-sm text-gray-600">Qualification: <span class="font-semibold">{{ jobDetails.qualification }}</span></p>
                            <p class="text-sm text-gray-600">Application Deadline: <span class="font-semibold">{{ formatDate(jobDetails.application_deadline) }}</span></p>
                            <p class="text-sm text-gray-600">Application Fee: <span class="font-semibold text-green-600">₹{{ jobDetails.application_fee }}</span></p>
                        </div>

                        <p class="text-sm text-gray-600 mt-4">Description: <span class="font-semibold">{{ jobDetails.description }}</span></p>

                        <!-- Required Documents Section -->
                        <div v-if="jobDetails.documents && jobDetails.documents.length > 0" class="mt-6">
                            <h3 class="font-semibold text-lg text-gray-700">Required Documents</h3>
                            <ul class="list-disc pl-5 mt-2">
                                <li v-for="doc in jobDetails.documents" :key="doc.id" class="text-gray-600">{{ doc.document_name || 'Unnamed Document' }}</li>
                            </ul>
                        </div>
                        <p v-else class="text-gray-500 mt-2">No Required Documents</p>
                        <div class="mt-4 mb-6">
                            <input
                                type="text"
                                v-model="searchTerm"
                                placeholder="Search by Applicant Name"
                                class="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <!-- Applications Table -->
                        <table class="table-auto border-collapse border border-gray-300 w-full mt-6 text-sm">
                            <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 py-2 text-left text-gray-600">Applicant Name</th>
                                <th class="px-4 py-2 text-left text-gray-600">Roll No</th>
                                <th class="px-4 py-2 text-left text-gray-600">Community</th>
                                <th class="px-4 py-2 text-left text-gray-600">Disability</th>
                                <th class="px-4 py-2 text-left text-gray-600">Status</th>
                                <th class="px-4 py-2 text-left text-gray-600">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="application in filteredApplications" :key="application.id" class="hover:bg-gray-50 transition duration-150">
<!--                                {{application}}-->
                                <td class="px-4 py-2">{{ application.applicant.user?.name || 'N/A' }}</td>
                                <td class="px-4 py-2">{{ application.application_id || 'N/A' }}</td>
                                <td class="px-4 py-2">{{ application.applicant?.community || 'N/A' }}</td>
                                <td class="px-4 py-2">{{ application.applicant?.disability ? 'Yes' : 'No' }}</td>
                                <td class="px-4 py-2">
                                        <span
                                            :class="[
                                                'px-2 py-1 rounded-full text-xs font-semibold',
                                                application.status === 'approved'
                                                    ? 'bg-green-100 text-green-800'
                                                    : application.status === 'rejected'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800',
                                            ]"
                                        >
                                            {{ application.status || 'Pending' }}
                                        </span>
                                </td>
                                <td class="px-4 py-2">
                                    <button @click="previewApplication(application)" class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150">
                                        Preview
                                    </button>
                                    <button v-if="application.status !== 'approved'" @click="updateStatus(application.id, 'approved')" class="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded mr-2 transition duration-150">
                                        Approve
                                    </button>
                                    <button v-if="application.status !== 'rejected'" @click="updateStatus(application.id, 'rejected')" class="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded transition duration-150">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Application Preview Dialog -->
    <div v-if="dialogVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white rounded-lg p-6 w-3/4 max-w-3xl transition-all transform scale-105">
            <h2 class="text-xl font-semibold mb-4">Application Preview</h2>
            <p><strong>Applicant Name:</strong> {{ selectedApplication?.applicant.user?.name || 'N/A' }}</p>
            <p><strong>Community:</strong> {{ selectedApplication?.applicant?.community || 'N/A' }}</p>
            <p><strong>Disability:</strong> {{ selectedApplication?.applicant?.disability ? 'Yes' : 'No' }}</p>
            <p><strong>Status:</strong> {{ selectedApplication?.status || 'Pending' }}</p>

            <!-- Uploaded Documents Section -->
            <div v-if="selectedApplication?.application_documents && selectedApplication.application_documents.length > 0" class="mt-4">
                <strong>Uploaded Documents:</strong>
                <ul class="list-disc pl-5">
                    <li v-for="doc in selectedApplication.application_documents" :key="doc.id" class="text-gray-600">
                        <div>
                            <strong>Document Name:</strong> {{ doc.job_document?.document_name || 'Unnamed Document' }}
                        </div>
                        <div>
                            <strong>Path:</strong>
                            <a :href="doc.document_path" target="_blank" class="text-blue-500 underline">View Document</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mt-4 text-right">
                <button @click="dialogVisible = false" class="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import { ref, computed } from 'vue';

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

// Search input value
const searchTerm = ref('');

// Filtered applications based on the search term
const filteredApplications = computed(() => {
    return props.jobDetails.applications.filter(application => {
        const applicantName = application.applicant.user?.name.toLowerCase() || '';
        return applicantName.includes(searchTerm.value.toLowerCase());
    });
});
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
<style scoped>
/* Enhance button hover effects */
button:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
}

/* Modal animation */
.transition-all {
    transition: all 0.3s ease-in-out;
}

/* Optional custom styling */
.bg-gray-800 {
    background-color: rgba(0, 0, 0, 0.6);
}

/* Tailwind customization */
.list-disc {
    list-style-type: disc;
    padding-left: 1.25rem;
}
</style>
