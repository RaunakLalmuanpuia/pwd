<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="container mx-auto p-6">
                        <h1 class="text-3xl font-bold text-gray-800 mb-6">New Job Applications List</h1>
<!--                        {{jobDetails}}-->
<!--                        <div-->
<!--                            v-for="jobDetail in jobDetails"-->
<!--                            :key="jobDetail.id"-->
<!--                            class="mb-8 bg-white shadow-lg rounded-lg overflow-hidden"-->
<!--                        >-->
<!--                            &lt;!&ndash; Job Header &ndash;&gt;-->
<!--                            <div class="p-6 bg-blue-50">-->
<!--                                <h2 class="text-2xl font-semibold text-blue-800">{{ jobDetail.post_name }}</h2>-->
<!--                                <p class="text-sm text-gray-600 mt-1">-->
<!--                                    Posted on:-->
<!--                                    <span class="font-semibold">{{ formatDate(jobDetail.created_at) }}</span>-->
<!--                                </p>-->
<!--                            </div>-->

<!--                            &lt;!&ndash; Job Details &ndash;&gt;-->
<!--                            <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">-->
<!--                                    <p class="text-sm">Number of Posts: <span class="font-medium">{{ jobDetail.no_of_post }}</span></p>-->
<!--                                    <p class="text-sm">Application Deadline:<span class="font-medium">{{ formatDate(jobDetail.application_deadline) }}</span></p>-->
<!--                                    <p class="text-sm">Application Fee: <span class="font-medium">₹{{ jobDetail.application_fee }}</span></p>-->
<!--                                    <p class="text-sm">Description:<span class="font-medium">{{ jobDetail.description }}</span></p>-->
<!--                            </div>-->

<!--                            &lt;!&ndash; Action Buttons &ndash;&gt;-->
<!--                            <div class="p-6 bg-gray-50 flex justify-end space-x-4">-->
<!--                                <button-->
<!--                                    class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"-->
<!--                                    @click="$inertia.get(route('admin.applications.show', jobDetail.id))"-->
<!--                                >-->
<!--                                    View Applications-->
<!--                                </button>-->

<!--                            </div>-->
<!--                        </div>-->

                        <q-list>
                            <q-item  class="zcard q-mt-sm" v-for="(item,index) in jobDetails" :key="index">
                                <q-item-section avatar>
                                    <q-avatar square>
                                        <q-chip square :label="index+1"/>
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{item?.post_name}} Posted on: {{ formatDate(item?.created_at) }} </q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <div class="flex items-center">
                                        <div class="text-caption">No of Applications</div>
                                        <q-chip text-color="white" square color="primary" :label="item?.applications_count" />
                                        <q-btn-dropdown rounded flat dropdown-icon="more_vert" class="q-pa-sm">
                                            <q-list class="q-pa-sm">
                                                <q-item v-close-popup clickable  @click="$inertia.get(route('admin.applications.show_submission', item.id))">
                                                    <q-item-section><q-item-label>Detail of applications</q-item-label></q-item-section>
                                                </q-item>
                                                <q-item v-close-popup clickable>
                                                    <q-item-section><q-item-label>Generate Excel</q-item-label></q-item-section>
                                                </q-item>

                                            </q-list>
                                        </q-btn-dropdown>
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
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
