<script setup>

import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})

import { useForm } from '@inertiajs/vue3';

const props = defineProps(['jobDetails']);

const approveRejectForm = useForm({
    status: '',
});

const updateStatus = (applicationId, status) => {
    approveRejectForm.put(route('admin.applications.changeStatus', { application: applicationId }), {
        data: {
            status: status,
        },
        onSuccess: () => {
            approveRejectForm.reset();
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
            <h2 class="font-semibold text-xl mt-6">{{ jobDetail.post_name }}</h2>
            <p class="text-sm text-gray-600">Department ID: {{ jobDetail.department_id }}</p>
            <p class="text-sm text-gray-600">Number of Posts: {{ jobDetail.no_of_post }}</p>
            <p class="text-sm text-gray-600">Salary: ₹{{ jobDetail.salary }}</p>
            <p class="text-sm text-gray-600">Age Limit: {{ jobDetail.age_limit }}</p>
            <p class="text-sm text-gray-600">Qualification: {{ jobDetail.qualification }}</p>
            <p class="text-sm text-gray-600">Application Deadline: {{ formatDate(jobDetail.application_deadline) }}</p>
            <p class="text-sm text-gray-600">Application Fee: ₹{{ jobDetail.application_fee }}</p>
            <p class="text-sm text-gray-600">Description: {{ jobDetail.description }}</p>

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
</template>
