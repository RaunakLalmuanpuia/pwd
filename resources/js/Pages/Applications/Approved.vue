<template>
    <q-page padding>
        <p class="page-title">Job Qualified Application</p>

        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-tabs
                    stretch
                    shrink
                    v-model="state.tab"
                    align="start"
                    @update:model-value="handleNavigation"
                >
                    <q-space/>
                    <q-input v-model="state.search"
                             autofocus
                             outlined
                             dense
                             @keyup.enter="handleSearch"
                             bg-color="white"
                             placeholder="Search"
                    >
                        <template v-slot:append>
                            <q-icon name="search"/>
                        </template>
                    </q-input>
                </q-tabs>

                <div class="flex q-gutter-sm">
                    <q-btn @click="generateExcel" color="accent" label="Generate Excel" class=""/>
                    <q-separator vertical/>
                    <q-btn outline :to="{name:'admit-card:download'}" label="Download Admit Card" no-caps/>
                    <q-separator vertical/>
                    <q-btn color="primary"  @click="$inertia.get(route('exams.marks_assign'))" label="Exam Result Entry" no-caps/>
                </div>
            </div>

            <div class="col-12 zcard q-pa-md">
                <q-list>
                    <q-item  class="zcard q-mt-sm" v-for="(item,index) in jobDetails.data" :key="index">
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
                <div class="col-12">

                    <div class="flex q-gutter-sm">
                        <q-btn :disable="!!!jobDetails.prev_page_url" @click="$inertia.get(jobDetails.prev_page_url)" flat round icon="chevron_left"/>
                        <q-btn :disable="!!!jobDetails.next_page_url" @click="$inertia.get(jobDetails.next_page_url)" flat round icon="chevron_right"/>
                    </div>
                </div>
            </div>
        </div>
    </q-page>

</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import {ref, watch, reactive} from 'vue';

import axios from "axios";
import {useQuasar} from "quasar";
import {router} from "@inertiajs/vue3";

const q = useQuasar();
defineOptions({
    layout:AdminLayout
})

const props = defineProps(['jobDetails', 'search']);

const state=reactive({
    search:props?.search,
    tab: route().current(),
})

const search = ref('');


const handleSearch=e=>{
    router.get(route('admin.applications.index_approved'), {
        search: state.search
    });

}

const handleNavigation=(value)=> {
    router.get(route(value))
}

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
    q.loading.show(); // Show loading indicator (assuming you're using Quasar's loading plugin)

    // Generate the URL using Inertia's route helper
    const url = route('export.job.details', jobId);

    // Make a GET request to the URL with responseType as 'blob'
    axios.get(url, { responseType: 'blob' })
        .then((res) => {
            // Create an object URL from the response data and trigger a download
            const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', Date.now() + '.xlsx'); // Set a dynamic file name
            link.click();
        })
        .catch((err) => {
            // Show an error notification if something goes wrong
            q.notify({
                type: 'negative',
                message: err.response?.data?.message || 'Failed to download file',
            });
        })
        .finally(() => {
            q.loading.hide(); // Hide loading indicator
        });
};

</script>
