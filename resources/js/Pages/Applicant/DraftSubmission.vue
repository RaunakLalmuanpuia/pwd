<template>
    <q-page padding>
        <Head title="Drafts" />
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
                            <q-item-label>Post Name: {{ item.job_detail?.post_name || "N/A" }} <br> Applied on: {{ formatDate(item?.created_at) }}
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
<!--                            <q-btn @click="$inertia.get(route('application.viewApplicationDraft', item.job_detail.id))" bordered rounded flat class="q-pa-sm" color="primary" square label="Submit Application"/>-->
                            <q-chip clickable
                                    @click="$inertia.get(route('application.viewApplicationDraft', item.job_detail.id))"
                                    text-color="white" square color="primary" label="Submit Application" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>

        </div>
    </q-page>

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
