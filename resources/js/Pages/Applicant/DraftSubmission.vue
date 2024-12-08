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
                        <div class="bg-background text-primary-foreground min-h-screen p-4">
                            <h1 class="text-3xl font-bold mb-4">My Job Applications: Drafts</h1>
                            <div  v-for="application in applications" :key="application.id" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div class="bg-card p-4 rounded-lg shadow-md">
                                    <h2 class="text-lg font-bold mb-2">{{ application.job_detail?.post_name || "N/A" }}</h2>
                                    <p class="text-sm text-muted-foreground mb-2">No. of Posts: {{application.job_detail?.no_of_post || "N/A"}}</p>
                                    <p class="text-sm text-muted-foreground mb-4">Applied on:  {{ formatDate(application.created_at)}}</p>

                                    <div class="flex items-center justify-between mb-4">
                                        <span class="text-sm font-semibold">Status:</span>
                                        <span class="text-sm font-semibold text-accent">{{ application.status }}</span>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <button  @click="$inertia.get(route('application.viewApplication', application.job_detail.id))" class="bg-secondary text-primary-foreground px-4 py-2 rounded-md mr-2 hover:bg-primary/80">View Details</button>
                                        <button  @click="$inertia.get(route('application.viewApplicationDraft', application.job_detail.id))" class="bg-secondary text-primary-foreground px-4 py-2 rounded-md mr-2 hover:bg-primary/80">Submit Application</button>
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based)
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
};

</script>
