<script setup>
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
</script>

<template>
    <div>
        <h1>Admin - Applications</h1>

        <div v-for="jobDetail in jobDetails" :key="jobDetail.id">
            <h2 class="font-semibold text-xl mt-6">{{ jobDetail.post_name }}</h2>
            <table class="table-auto border-collapse border border-gray-300 w-full mt-4">
                <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2">Applicant</th>
                    <th class="border border-gray-300 px-4 py-2">Status</th>
                    <th class="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="application in jobDetail.applications" :key="application.id">
                    {{application}}
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.applicant?.name || 'N/A' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.status || 'Pending' }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        <button
                            v-if="application.status !== 'approved'"
                            @click="updateStatus(application.id, 'approved')"
                            class="bg-green-500 text-white py-1 px-4 rounded">
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
