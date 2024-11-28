<template>
    <Head title="Citizen Applications" />
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="container mx-auto p-4">
<!--                    <h2 class="text-2xl font-bold mb-4">Your Applications</h2>-->
                    <div v-if="applications.length === 0" class="text-center bg-gray-100 p-8 rounded-lg shadow-md">
                        <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M9 4a3 3 0 016 0v9a3 3 0 11-6 0V4zM5 6a3 3 0 016 0v7a3 3 0 11-6 0V6z" clip-rule="evenodd"/>
                        </svg>
                        <p class="text-gray-600 text-lg">You have not submitted any applications yet.</p>
                    </div>

                    <!-- Applications Table -->
                    <div v-else class="overflow-x-auto">
<!--                        <table class="table-auto border-collapse border border-gray-300 w-full text-left">-->
<!--                            <thead class="bg-gray-100">-->
<!--                            <tr>-->
<!--                                <th class="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600">Job Post</th>-->
<!--                                <th class="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600">Status</th>-->
<!--                                <th class="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600">Submitted At</th>-->
<!--                            </tr>-->
<!--                            </thead>-->
<!--                            <tbody>-->
<!--                            <tr-->
<!--                                v-for="application in applications"-->
<!--                                :key="application.id"-->
<!--                                class="hover:bg-gray-50 odd:bg-white even:bg-gray-100"-->
<!--                            >-->
<!--                                <td class="border border-gray-300 px-4 py-3">-->
<!--                                    {{ application.job_detail?.post_name || "N/A" }}-->
<!--                                </td>-->
<!--                                <td class="border border-gray-300 px-4 py-3 ">-->
<!--                                    &lt;!&ndash; Status Badge &ndash;&gt;-->
<!--                                    <span-->
<!--                                        :class="[-->
<!--                                    'px-3 py-1 rounded-full text-xs font-semibold',-->
<!--                                    application.status === 'approved'-->
<!--                                        ? 'bg-green-100 text-green-800'-->
<!--                                        : application.status === 'rejected'-->
<!--                                        ? 'bg-red-100 text-red-800'-->
<!--                                        : 'bg-yellow-100 text-yellow-800',-->
<!--                                ]"-->
<!--                                    >-->
<!--                                {{ application.status || "Pending" }}-->
<!--                            </span>-->

<!--                                    &lt;!&ndash; Show Admit Card Button &ndash;&gt;-->
<!--                                    <div>-->
<!--                                        <template-->
<!--                                            v-if="application.status === 'eligible' &&-->
<!--                                            application.exam_center_id &&-->
<!--                                             application.job_detail?.exams?.some(exam => exam.subjects?.length > 0)"-->
<!--                                            >-->
<!--                                            <button-->
<!--                                                @click="openAdmitCard(application.job_detail.id)"-->
<!--                                                class="inline-block mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"-->
<!--                                            >-->
<!--                                                Admit Card-->
<!--                                            </button>-->
<!--                                        </template>-->
<!--                                        <template v-else-if="application.status === 'approved'">-->
<!--                                            <p class="text-sm text-gray-500 italic">-->
<!--                                                Admit Card not yet available.-->
<!--                                            </p>-->
<!--                                        </template>-->
<!--                                    </div>-->
<!--                                </td>-->
<!--                                <td class="border border-gray-300 px-4 py-3">-->
<!--                                    {{ formatDate(application.created_at)}}-->
<!--                                </td>-->
<!--                            </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
                        <div class="bg-background text-primary-foreground min-h-screen p-4">
                            <h1 class="text-3xl font-bold mb-4">My Job Applications</h1>
                            <div  v-for="application in applications" :key="application.id" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div class="bg-card p-4 rounded-lg shadow-md">
<!--                                    {{application.job_detail.id}}-->
                                    <h2 class="text-lg font-bold mb-2">{{ application.job_detail?.post_name || "N/A" }}</h2>
                                    <p class="text-sm text-muted-foreground mb-2">No. of Posts: {{application.job_detail?.no_of_post || "N/A"}}</p>
                                    <p class="text-sm text-muted-foreground mb-4">Applied on:  {{ formatDate(application.created_at)}}</p>

                                    <div class="flex items-center justify-between mb-4">
                                        <span class="text-sm font-semibold">Status:</span>
                                        <span class="text-sm font-semibold text-accent">{{ application.status }}</span>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <button  @click="$inertia.get(route('application.viewApplication', application.job_detail.id))" class="bg-secondary text-primary-foreground px-4 py-2 rounded-md mr-2 hover:bg-primary/80">View Details</button>
                                        <button v-if="application.status === 'approved' && application.exam_center_id &&  application.job_detail?.exams?.some(exam => exam.subjects?.length > 0)"
                                                @click="openAdmitCard(application.job_detail.id)"
                                                class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">Download Admit Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based)
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
};

</script>
