

<template>

    <q-toolbar padding class="card justify-center">
        <q-tabs padding>

            <q-item clickable v-ripple
                    :active="route().current()==='report.submitted'"
                    :class="{ 'q-item--active': route().current() === 'report.submitted' }"
                    @click="$inertia.get(route('report.submitted'))">
                <q-item-section>
                    APPLICATIONS
                </q-item-section>
            </q-item>


            <q-item clickable v-ripple
                    :class="{ 'q-item--active': route().current() === 'report.writtenExam' }"
                    :active="route().current()==='report.writtenExam'"
                    @click="$inertia.get(route('report.writtenExam'))">
                <q-item-section>
                    EXAM REPORT
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple
                    :class="{ 'q-item--active': route().current() === 'report.exam_center' }"
                    :active="route().current()==='report.exam_center'"
                    @click="$inertia.get(route('report.exam_center'))">
                <q-item-section>
                    EXAM CENTER
                </q-item-section>
            </q-item>


        </q-tabs>
    </q-toolbar>
    <q-page padding>


        <p class="q-ma-none page-title py-3"> Exam Center </p>
        <br/>
        <q-form @submit="onFilter" class="row  q-col-gutter-md q-pa-md">

            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="selectedDepartment"
                    outlined
                    dense
                    :options="departments"
                    clearable
                    label="Select Department"
                    @update:model-value="onDepartmentChange"
                    :rules="[
                  val => !!val || 'Department is required'
                ]"
                />
            </div>

            <!-- Job Selection -->
            <div class="col-xs-12 col-sm-6">
                <template v-if="!selectedDepartment">
                    <p>Please select a department to see jobs.</p>
                </template>

                <template v-else-if="jobs.length > 0">
                    <q-select
                        v-model="selectedJob"
                        outlined
                        dense
                        clearable
                        :options="jobs"
                        label="Select Job"
                        @update:model-value="onJobChange"
                        :rules="[val => !!val || 'Job is required']"
                    />
                </template>

                <template v-else>
                    <p>No jobs available for the selected department.</p>
                </template>
            </div>

            <div v-if="selectedJob" class="col-xs-12 col-sm-6">
                <template v-if="!selectedJob">
                    <p>Please select a job to see exams center.</p>
                </template>

                <template v-else-if="exam_center.length > 0">
                    <q-select
                        v-model="form.exam_center"
                        outlined
                        dense
                        clearable
                        :options="exam_center"
                        label="Select Exam Center"
                        :rules="[val => !!val || 'Exam Center is required']"
                    />
                </template>


            </div>

            <div class="col-xs-12 col-sm-6"/>
            <div class="col-xs-12">
                <p class="ztext q-ma-none">optional</p>
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.state"
                    @update:model-value="onStateChange"
                    outlined
                    class="my-input"
                    dense
                    :options="states"
                    clearable
                    label="State"
                />
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.district"
                    outlined
                    class="my-input"
                    dense
                    :options="districts"
                    clearable
                    label="District"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.gender"
                    outlined
                    class="my-input"
                    dense
                    :options="genders"
                    clearable
                    label="Gender"
                />
            </div>

            <div class="col-xs-12">
                <q-separator/>
            </div>
            <div class="col-xs-12">
                <q-btn type="submit" color="primary" rounded label="Generate"/>
            </div>
        </q-form>
    </q-page>

</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { ref } from 'vue';
import axios from "axios";
import {useQuasar} from "quasar";
// Declare the reactive `tab` variable
const tab = ref('mails');

const props = defineProps(['departments', 'jobs', 'exams', 'exam_center']);

defineOptions({
    layout:AdminLayout
})

import {router, useForm, usePage} from "@inertiajs/vue3";
const q = useQuasar();
const page = usePage();
const form = useForm({
    status:'',
    state:'',
    district:'',
    gender:'',
    exam_center:null,
    posts:'',
    department: '',

})

// Reactive state for selections
const selectedDepartment = ref(null);
const selectedJob = ref(null);

const jobs = ref([]); // Jobs based on selected department
const exams = ref([]); // Exams based on selected job



const onDepartmentChange = () => {
    selectedJob.value = null;
    exams.value = [];
    if (selectedDepartment.value) {
        router.get(
            route("report.exam_center"),
            { department: selectedDepartment.value.value }, // Pass department ID
            {
                preserveState: true,
                replace: true,
                onSuccess: (page) => {
                    jobs.value = page.props.jobs;
                },
            }
        );
    } else {
        jobs.value = [];
    }
};


// Fetch exams when a job is selected
const onJobChange = () => {
    form.exam = null;
    if (selectedJob.value) {
        router.get(
            route("report.exam_center"),
            { job_id: selectedJob.value.value }, // Pass job ID
            {
                preserveState: true,
                replace: true,
                onSuccess: (page) => {
                    exams.value = page.props.exams;
                },
            }
        );
    } else {
        exams.value = [];
    }
};



const statuses=[
    // {value:['VERIFIED'],label:'Verified'},
    {value:['ELIGIBLE'],label:'Eligible'},
    {value:['SUBMITTED'],label:'Pending'},
    {value:['APPROVED'],label:'Approved'},
    {value:['ELIGIBLE','SUBMITTED','APPROVED'],label:'All'},
]
const genders=[
    {value:'Male',label:'Male'},
    {value:'Female',label:'Female'},

]

const posts=[
    {value:'LDC',label:'LDC'},
    {value:'UDC',label:'UDC'},

]


const onFilter = () => {
    q.loading.show(); // Show loading indicator (assuming you're using Quasar's loading plugin)
    console.log(selectedJob);

    // Include the selected job dynamically into the form
    form.posts = selectedJob; // Add selected job to form
    form.department = selectedDepartment;

    if (!selectedDepartment || !form.posts) {
        q.notify({
            type: 'warning',
            message: !selectedDepartment
                ? 'Please select a department.'
                : 'No Job Avaliable for the selected department.',
            position: 'bottom',
        });
        q.loading.hide();
    }


    // Generate the URL using Inertia's route helper
    const url = route('report.exam_center.download');

    // Make a GET request to the URL with responseType as 'blob'
    axios.post(url, form, { responseType: 'blob' })
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

<style scoped>

.card {
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #dedede;
    background-color: #fff;
}

.q-item--active {
    border-bottom: 2px solid #027be3; /* Blue color for active state, adjust as needed */
    font-weight: bold; /* Optional: to make active item stand out more */
}
</style>
