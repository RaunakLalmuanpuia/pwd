

<template>
    <q-page padding>
        <p class="page-title">Application Detail</p>
        <div class="zcard q-pa-sm flex justify-between items-center">
            <q-btn
                class="q-ma-none q-pa-none"
                flat
                icon="arrow_left"
                label="back"
                @click="$router.back()"
            />
            <div class="flex">
                <q-btn label="Payments" @click="openPaymentDialog" />
            </div>
        </div>
        <br />
<!--        {{jobDetails}}-->
        <div class="row zcard q-pa-md">
            <div class="col-xs-12">
                <div class="column">
                    <q-img
                        :src="'/storage/' + jobDetails.applications[0]?.applicant?.passport_photo"
                        class="q-my-lg"
                        :ratio="1"
                        style="width: 120px"
                        alt="Application Detail"
                    />

                </div>
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Regn No</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.id || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Applied Jobs</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.post_name || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Applicant name</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.name || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Father/Mother</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.parents_name || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Gender</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.sex || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Mobile</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.phone || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Category</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.community || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Date of birth</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.date_of_birth || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-5">Disability</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.disability === 1 ? 'Yes' : 'No' }}
            </div>

            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>
            <div class="col-xs-12 text-grey-6">Permanent Address</div>

            <div class="col-xs-12 col-sm-3 text-grey-6">State</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_state || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">District</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_district || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">City/Town/Village</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_city || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Locality</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_locality || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Street</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_street || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">House no</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.permanent_house_no || '--' }}

            </div>

            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>
            <div class="col-xs-12 text-grey-6">Communication Address</div>

            <div class="col-xs-12 col-sm-3 text-grey-6">State</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_state || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">District</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_district || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">City/Town/Village</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_city || '--' }}
            </div>
            <div class="col-xs-12 col-sm-3 text-grey-6">Locality</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_locality || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Street</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_street || '--' }}
            </div>

            <div class="col-xs-12 col-sm-3 text-grey-6">House no</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.user?.address?.communication_house_no || '--' }}

            </div>

            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>

            <div class="col-xs-12 text-grey-6">Education</div>

            <div class="col-xs-12 col-sm-3 text-grey-6">Qualification</div>
            <div class="col-xs-12 col-sm-3 text-weight-medium">
                {{ jobDetails.applications[0]?.applicant?.qualification || '--' }}
            </div>

            <div v-if="jobDetails.applications[0]?.applicant?.qualification === 'Doctorate'" style="display: flex; flex-wrap: wrap; gap: 10px;">
                <!-- Graduate Qualification -->
                <div style="display: flex; flex: 1 1 100%; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream">
                        <span style="color: #6c757d;">Graduate Qualification Degree:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.graduateDegree || '--' }}</span>
                    </div>
                    <div v-if="jobDetails.applications[0]?.applicant?.graduateStream">
                        <span style="color: #6c757d;">Graduate Qualification Stream:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.graduateStream || '--' }}</span>
                    </div>
                </div>

                <!-- Post Graduate Qualification -->
                <div style="display: flex; flex: 1 1 100%; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <div v-if="jobDetails.applications[0]?.applicant?.postGraduateDegree && jobDetails.applications[0]?.applicant?.postGraduateStream">
                        <span style="color: #6c757d;">Post Graduate Qualification Degree:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.postGraduateDegree || '--' }}</span>
                    </div>
                    <div v-if="jobDetails.applications[0]?.applicant?.postGraduateStream">
                        <span style="color: #6c757d;">Post Graduate Qualification Stream:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.postGraduateStream || '--' }}</span>
                    </div>
                </div>

                <!-- Doctorate Qualification -->
                <div style="display: flex; flex: 1 1 100%; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <div v-if="jobDetails.applications[0]?.applicant?.doctorateDegree && jobDetails.applications[0]?.applicant?.doctorateStream">
                        <span style="color: #6c757d;">Doctorate Qualification Degree:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.doctorateDegree || '--' }}</span>
                    </div>
                    <div v-if="jobDetails.applications[0]?.applicant?.doctorateStream">
                        <span style="color: #6c757d;">Doctorate Qualification Stream:</span>
                        <span style="font-weight: 500;">{{ jobDetails.applications[0]?.applicant?.doctorateStream || '--' }}</span>
                    </div>
                </div>
            </div>


            <!-- Show all qualifications if qualification is Doctorate -->
            <div v-if="jobDetails.applications[0]?.applicant?.qualification === 'Doctorate'">
                <!-- Graduate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateStream || '--' }}
                </div>

                <!-- Post Graduate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateDegree && jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-grey-6">Post Graduate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateDegree && jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.postGraduateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-grey-6">Post Graduate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.postGraduateStream || '--' }}
                </div>

                <!-- Doctorate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.doctorateDegree && jobDetails.applications[0]?.applicant?.doctorateStream" class="col-xs-12 col-sm-3 text-grey-6">Doctorate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.doctorateDegree && jobDetails.applications[0]?.applicant?.doctorateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.doctorateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.doctorateStream" class="col-xs-12 col-sm-3 text-grey-6">Doctorate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.doctorateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.doctorateStream || '--' }}
                </div>
            </div>

            <!-- Show Post Graduate and Graduate qualifications if qualification is Post Graduate -->
            <div v-if="jobDetails.applications[0]?.applicant?.qualification === 'Post Graduate'">
                <!-- Post Graduate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateDegree && jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-grey-6">Post Graduate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateDegree && jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.postGraduateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-grey-6">Post Graduate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.postGraduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.postGraduateStream || '--' }}
                </div>

                <!-- Graduate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateStream || '--' }}
                </div>
            </div>

            <!-- Show only Graduate qualifications if qualification is Graduate -->
            <div v-if="jobDetails.applications[0]?.applicant?.qualification === 'Graduate'" >
                <!-- Graduate Qualification -->
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Degree</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateDegree && jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateDegree || '--' }}
                </div>

                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-grey-6">Graduate Qualification Stream</div>
                <div v-if="jobDetails.applications[0]?.applicant?.graduateStream" class="col-xs-12 col-sm-3 text-weight-medium">
                    {{ jobDetails.applications[0]?.applicant?.graduateStream || '--' }}
                </div>
            </div>





            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>

            <div class="col-xs-12 text-grey-6 q-my-md text-weight-medium">
                Documents
            </div>

            <div
                v-for="(item, i) in jobDetails.applications[0]?.application_documents"
                :key="i"
                class="row col-xs-12 col-sm-6 print-hide"
            >
                <div class="col-xs-8 flex items-center text-grey-6">
                    {{ item?.job_document?.document_name }}
                </div>
                <div class="col-xs-4">
                    <q-btn
                        :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"
                        color="primary"
                        flat
                        @click="handleOpen(item)"
                    />
                </div>
            </div>

            <div class="col-xs-12">
                <q-separator class="q-my-md" />
            </div>
        </div>
        <br/>
        <q-dialog v-model="dialogVisible" >
            <div class="full-print flex justify-center items-center ">
                <div class="row zcard q-pa-md " style="max-width: 480px">

                    <div class="col-xs-12">
                        <p class="ztext ztext-md">Payment Detail</p>
                    </div>

                    <div class="col-xs-12 col-sm-3 ztext">Status</div>
                    <div class="col-xs-12 col-sm-9  text-weight-medium">{{ jobDetails.applications[0].transaction?.status || 'NA'}}
                    </div>
                    <div class="col-xs-12 col-sm-3 ztext">Order ID</div>
                    <div class="col-xs-12 col-sm-9 text-weight-medium">{{ jobDetails.applications[0].transaction?.order_id}}</div>

                    <div class="col-xs-12 col-sm-3 ztext">Transaction ID</div>
                    <div class="col-xs-12 col-sm-9 text-weight-medium">{{ jobDetails.applications[0].transaction?.transaction_id }}</div>
                    <div class="col-xs-12 col-sm-3 ztext">Date</div>
                    <div class="col-xs-12 col-sm-9 text-weight-medium">{{ jobDetails.applications[0].transaction?.created_at }}</div>
                    <div class="col-xs-12 col-sm-3 ztext">Amount</div>
                    <div class="col-xs-12 col-sm-9 text-weight-medium">{{ jobDetails.applications[0].transaction?.amount }}</div>

                    <div class="col-xs-12">
                        <q-separator class="q-my-sm"/>
                    </div>


                    <div class="col-xs-12 print-hide ">
                        <q-btn color="primary" label="Print" rounded style="min-width: 120px" @click="print"/>
                    </div>

                </div>

            </div>
        </q-dialog>
    </q-page>
</template>


<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import {ref} from 'vue'
import {useQuasar} from "quasar";

defineOptions({
    layout:AdminLayout
})

const props = defineProps(['jobDetails']);

const dialogVisible = ref(false);

const openPaymentDialog = () => {
    dialogVisible.value = true;
};

const closeDialog = () => {
    dialogVisible.value = false;
};
const handleOpen = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = item?.full_path;
    a.click();
};


</script>
<style scoped>
.page-title {
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: normal;
    color: #333333;

}

</style>
