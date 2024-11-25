

<template>
    <Head title="Citizen Dashboard" />

    <ApplicantLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>
        </template>

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
                                    <p class="text-muted-foreground">{{ job.no_of_post }} Posts<span class="px-3">Last Date: {{ job.application_deadline }}</span></p>

                                </div>
                                <div class="flex space-x-2">


                                    <q-btn @click="$inertia.get(route('application.show', job.id))" label="Apply"/>
                                    <q-btn @click="$inertia.get(route('application.show', job.id))" label="View"/>

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

</script>
