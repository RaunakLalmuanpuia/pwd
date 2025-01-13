<template>


    <q-page padding>
        <Head title="Submissions" />
        <p class="page-title">Draft Applications</p>
        <div class="row q-gutter-md">

            <div v-if="applications.length === 0" class="col-12 zcard q-pa-md">
                <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 4a3 3 0 016 0v9a3 3 0 11-6 0V4zM5 6a3 3 0 016 0v7a3 3 0 11-6 0V6z" clip-rule="evenodd"/>
                </svg>
                <p class="text-gray-600 text-lg text-center">You have not submitted any applications yet.</p>
            </div>

            <div v-else class="col-12 zcard q-pa-md">
                <q-list>
                    <q-item class="zcard q-mt-sm" v-for="(item,index) in applications" :key="index">
                        <q-item-section avatar>
                            <q-avatar square>
                                <q-chip square :label="index+1"/>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Post Name: {{ item.job_detail?.post_name || "N/A" }} <br> Applied on: {{ formatDate(item?.submitted_at) }}
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="flex items-center">
                                <q-chip clickable
                                        @click="printApplication(item.job_detail.id)"
                                        text-color="white" square color="primary" label="Print" />
                                <q-chip clickable
                                        @click="$inertia.get(route('application.viewApplication', item.job_detail.id))"
                                        text-color="white" square color="primary" label="View Application" />
<!--                                <q-btn @click="$inertia.get(route('application.viewApplication', item.job_detail.id))" rounded flat class="q-pa-sm" color="primary" square label="View Application"/>-->

                            </div>

                        </q-item-section>
                    </q-item>
                </q-list>
            </div>

        </div>
    </q-page>
<!--    <div class="py-12">-->
<!--        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
<!--            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">-->
<!--                <div class="container mx-auto p-4">-->
<!--&lt;!&ndash;                    <h2 class="text-2xl font-bold mb-4">Your Applications</h2>&ndash;&gt;-->
<!--                    <div v-if="applications.length === 0" class="text-center bg-gray-100 p-8 rounded-lg shadow-md">-->
<!--                        <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                            <path fill-rule="evenodd" d="M9 4a3 3 0 016 0v9a3 3 0 11-6 0V4zM5 6a3 3 0 016 0v7a3 3 0 11-6 0V6z" clip-rule="evenodd"/>-->
<!--                        </svg>-->
<!--                        <p class="text-gray-600 text-lg">You have not submitted any applications yet.</p>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Applications Table &ndash;&gt;-->
<!--                    <div v-else class="overflow-x-auto">-->
<!--                        <div class="bg-background text-primary-foreground min-h-screen p-4">-->
<!--                            <h1 class="text-3xl font-bold mb-4">Applied Applications</h1>-->
<!--                            <div  v-for="application in applications" :key="application.id" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--                                <div class="bg-card p-4 rounded-lg shadow-md">-->
<!--                                    <h2 class="text-lg font-bold mb-2">{{ application.job_detail?.post_name || "N/A" }}</h2>-->
<!--                                    <p class="text-sm text-muted-foreground mb-2">No. of Posts: {{application.job_detail?.no_of_post || "N/A"}}</p>-->
<!--                                    <p class="text-sm text-muted-foreground mb-4">Applied on:  {{ formatDate(application.created_at)}}</p>-->

<!--                                    <div class="flex items-center justify-between mb-4">-->
<!--                                        <span class="text-sm font-semibold">Status:</span>-->
<!--                                        <span class="text-sm font-semibold text-accent">{{ application.status }}</span>-->
<!--                                    </div>-->

<!--                                    <div class="flex items-center justify-between">-->
<!--                                        <button  @click="$inertia.get(route('application.viewApplication', application.job_detail.id))" class="bg-secondary text-primary-foreground px-4 py-2 rounded-md mr-2 hover:bg-primary/80">View Details</button>-->
<!--                                        <button v-if="application.status === 'approved' || application.status === 'eligible'  && application.exam_center_id &&  application.job_detail?.exams?.some(exam => exam.subjects?.length > 0)"-->
<!--                                                @click="openAdmitCard(application.job_detail.id)"-->
<!--                                                class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">Download Admit Card</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

</template>


<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";

import {Head, Link} from '@inertiajs/vue3';
import axios from "axios";
const props = defineProps(["applications"]);

defineOptions({
    layout: ApplicantLayout,
});



const printApplication = (jobId) => {
    console.log();
    const url = route('my-application', jobId);
    axios.get(url, { responseType: 'blob' })
        .then((res) => {
            const blob = new Blob([res.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.click();
        })
        .catch((err) => {
            q.notify({ type: "negative", message: "Cannot Download Application" });
        });
};


const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based)
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
};

</script>
