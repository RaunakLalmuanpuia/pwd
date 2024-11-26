<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="container mx-auto p-6">
                        <h1 class="text-3xl font-bold text-gray-800 mb-6">Job Applications</h1>
                        <div
                            v-for="jobDetail in jobDetails"
                            :key="jobDetail.id"
                            class="mb-8 bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <!-- Job Header -->
                            <div class="p-6 bg-blue-50">
                                <h2 class="text-2xl font-semibold text-blue-800">{{ jobDetail.post_name }}</h2>
                                <p class="text-sm text-gray-600 mt-1">
                                    Posted on:
                                    <span class="font-semibold">{{ formatDate(jobDetail.created_at) }}</span>
                                </p>
                            </div>

                            <!-- Job Details -->
                            <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                                    <p class="text-sm">Number of Posts: <span class="font-medium">{{ jobDetail.no_of_post }}</span></p>
                                    <p class="text-sm">Application Deadline:<span class="font-medium">{{ formatDate(jobDetail.application_deadline) }}</span></p>
                                    <p class="text-sm">Application Fee: <span class="font-medium">₹{{ jobDetail.application_fee }}</span></p>
                                    <p class="text-sm">Description:<span class="font-medium">{{ jobDetail.description }}</span></p>
                            </div>

                            <!-- Action Buttons -->
                            <div class="p-6 bg-gray-50 flex justify-end space-x-4">
                                <button
                                    class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                                    @click="$inertia.get(route('admin.applications.show', jobDetail.id))"
                                >
                                    View Applications
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})

const props = defineProps(['jobDetails']);

function formatDate(dateString) {
    const options = {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    return new Intl.DateTimeFormat('en-IN', options)
        .format(new Date(dateString))
        .replace(/(\d{2})\/(\d{2})\/(\d{4}),/, '$1/$2/$3');
}

</script>
