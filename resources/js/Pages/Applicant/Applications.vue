<template>
    <div class="p-4">
        <h1 class="text-2xl font-semibold mb-4">Your Applications</h1>

        <!-- Handle Empty State -->
        <div v-if="applications.length === 0" class="text-center bg-gray-100 p-6 rounded-lg">
            <p class="text-gray-600 text-lg">You have not submitted any applications yet.</p>
        </div>

        <!-- Applications Table -->
        <div v-else class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-300 w-full text-left">
                <thead class="bg-gray-100">
                <tr>
                    <th class="border border-gray-300 px-4 py-2">Job Post</th>
                    <th class="border border-gray-300 px-4 py-2">Status</th>
                    <th class="border border-gray-300 px-4 py-2">Submitted At</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="application in applications"
                    :key="application.id"
                    class="hover:bg-gray-50 odd:bg-white even:bg-gray-50"
                >
                    <td class="border border-gray-300 px-4 py-2">
                        {{ application.job_detail?.post_name || "N/A" }}
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        <!-- Status Badge -->
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
                            {{ application.status || "Pending" }}
                        </span>
<!--                            {{application}}-->
                        <!-- Show Admit Card Button -->
                        <template
                            v-if="application.status === 'approved' &&
                                  application.exam_center_id &&
                                  application.job_detail?.exams?.some(exam => exam.subjects?.length > 0)"
                        >
                            <button
                                @click="openAdmitCard(application.job_detail.id)"
                                class="btn btn-primary ml-2"
                            >
                                Admit Card
                            </button>
                        </template>
                        <template v-else-if="application.status === 'approved'">
                            <p class="text-sm text-gray-500 italic">
                                Exam center or subjects not assigned
                            </p>
                        </template>
                    </td>
                    <td class="border border-gray-300 px-4 py-2">
                        {{ new Date(application.created_at).toLocaleDateString() }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";

import {Head, Link} from '@inertiajs/vue3';
const props = defineProps(["applications"]);

defineOptions({
    layout: ApplicantLayout,
});

// Define the function to open the admit card
const openAdmitCard = (jobDetailId) => {
    const url = route('admit-card-job', jobDetailId);
    window.open(url, '_blank'); // Opens the link in a new tab
};

</script>
