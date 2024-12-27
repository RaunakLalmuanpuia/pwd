

<template>
    <Head title="Dashboard" />

    <ApplicantLayout>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="container mx-auto p-4">
                        <h2 class="text-2xl font-bold mb-4">Job Listings</h2>

                        <div v-if="jobDetail.length === 0" class="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                            <p class="text-xl font-semibold text-gray-600">No job postings available yet</p>
                            <p class="text-sm text-gray-500 mt-2">Please check back later for updates.</p>
                        </div>


                        <ul class="space-y-4"  v-for="(job, index) in jobDetail" :key="index" :job="job" >
                            <li class="bg-card p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <span class="font-semibold">{{ job.post_name }}</span>
                                    <br>
                                    <p class="text-muted-foreground" >{{ job.no_of_post }} Posts<span class="px-3"  :class="{'text-red-500': isDeadlinePassed(job.application_deadline)}">Last Date: {{ formatDate(job.application_deadline) }}</span></p>

                                </div>
                                <div class="flex space-x-2"  v-if="!isDeadlinePassed(job.application_deadline)" >

                                    <q-btn @click="$inertia.get(route('application.show', job.id))" label="Apply"/>
<!--                                    <q-btn @click="$inertia.get(route('application.show', job.id))" label="View"/>-->

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </ApplicantLayout>
</template>


<script setup>
import ApplicantLayout from '@/Layouts/ApplicantLayout.vue';
import {Head, Link} from '@inertiajs/vue3';

const props = defineProps({
    jobDetail:Object
})

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based)
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
};

// Method to check if the deadline has passed
const isDeadlinePassed = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    // Compare only the date part, not the time
    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);
    return today > deadlineDate;
};
</script>
