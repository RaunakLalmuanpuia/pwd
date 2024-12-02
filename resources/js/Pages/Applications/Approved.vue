<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="container mx-auto p-6">
                    <h1 class="text-3xl font-bold text-gray-800 mb-6">Qualified Application</h1>

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
                                            <q-item v-close-popup clickable  @click="$inertia.get(route('admin.applications.show_approved', item.id))">
                                                <q-item-section><q-item-label>Detail of applications</q-item-label></q-item-section>
                                            </q-item>
                                            <q-item v-close-popup clickable @click="exportJobDetails(item.id)">
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
import { ref, onMounted } from 'vue';
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

const exportJobDetails = (jobId) => {
    if (typeof window !== 'undefined') {
        window.location.href = route('export.job.details', jobId);
    }
};

</script>
