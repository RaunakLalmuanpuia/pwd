

<template>
    <Head title="Citizen Dashboard" />

    <ApplicantLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">Jobs</div>

                    {{jobDetail}}

                    <div class="container mx-auto p-4">
                        <h2 class="text-2xl font-bold mb-4">Job Listings</h2>
                        <ul class="space-y-4"  v-for="(job, index) in jobDetail" :key="index" :job="job" >
                            <li class="bg-card p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <span class="font-semibold">{{ job.post_name }}</span>
                                    <p class="text-muted-foreground">{{ job.no_of_post }} Posts<span class="px-3">Last Date: {{ job.application_deadline }}</span></p>
<!--                                    <p class="text-muted-foreground">Last Date: {{ job.application_deadline }}</p>-->
                                    <p>asdas {{job.id}}</p>
                                </div>
                                <div class="flex space-x-2">
<!--                                    <Link-->
<!--                                        :href="route('application.show', { jobDetail: job.id })"-->
<!--                                        class="text-primary hover:text-primary/80"-->
<!--                                    >-->
<!--                                        Apply-->
<!--                                    </Link>-->

                                    <q-btn @click="$inertia.get(route('application.show', job.id))" label="Apply"/>
<!--                                    <q-btn @click="$inertia.get(route('application.edit',job?.id))" icon="o_chevron_right"/>-->
<!--                                    <a href="#" class="text-primary hover:text-primary/80" aria-label="View Details">Apply</a>-->
                                    <a href="#" class="text-primary hover:text-primary/80" aria-label="Refresh">View</a>
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
