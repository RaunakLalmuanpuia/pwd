
<template>
    <Head title="Admit Card" />
    <q-page padding>
        <p class="page-title">Admit Card</p>

        <div class="row q-gutter-md">

            <div v-if="jobs.length === 0" class="col-12 zcard q-pa-md">
                <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 4a3 3 0 016 0v9a3 3 0 11-6 0V4zM5 6a3 3 0 016 0v7a3 3 0 11-6 0V6z" clip-rule="evenodd"/>
                </svg>
                <p class="text-gray-600 text-lg">Admit card not available yet</p>
            </div>

            <div v-else class="col-12 zcard q-pa-md">
                <q-list>
                    <q-item class="zcard q-mt-sm" v-for="(item,index) in jobs" :key="index">
<!--                        {{item.settings}}-->
                        <q-item-section avatar>
                            <q-avatar square>
                                <q-chip square :label="index+1"/>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Post Name: {{ item?.post_name || "N/A" }} <br> Published Date: {{item.settings.from_admit_card}} -  Last Date: {{item.settings.to_admit_card}}
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="flex items-center">
                                <q-chip
                                    v-if="isAdmitCardAvailable(item.settings)"
                                    clickable
                                    @click="openAdmitCard(item)"
                                    text-color="white" square color="primary" label="Download Admit Card" />
                            </div>

                        </q-item-section>
                    </q-item>
                </q-list>
            </div>

        </div>
    </q-page>
</template>

<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import axios from "axios";
import {useQuasar} from "quasar";
import {Head} from "@inertiajs/vue3";

defineOptions({
    layout: ApplicantLayout,
});

const q = useQuasar();
const props = defineProps(['jobs'])

const isAdmitCardAvailable = (settings) => {
    if (!settings || !settings.from_admit_card || !settings.to_admit_card) {
        return false;
    }
    const now = new Date();
    const fromDate = new Date(settings.from_admit_card);
    const toDate = new Date(settings.to_admit_card);

    return now >= fromDate && now <= toDate;
};

const openAdmitCard = (jobId) => {
    console.log();
    const url = route('admit-card-job', jobId);
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
            q.notify({ type: "negative", message: "Cannot Download Admit Card" });
        });
};


</script>


<style scoped>

</style>
