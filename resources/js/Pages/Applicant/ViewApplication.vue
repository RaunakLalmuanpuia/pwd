

<template>
    <Head title="Application" />
    <q-page padding>



        <div class="p-4 bg-background rounded-lg shadow-md">
            <h2 class="text-lg font-bold">Name of Post</h2>
            <p class="text-base">{{ jobDetail.post_name }}</p>
            <h2 class="text-lg font-bold mt-4">Number of Post</h2>
            <p class="text-base">{{ jobDetail.no_of_post }}</p>

            <h2 class="text-lg font-bold mt-4">Application Last Date</h2>
            <p class="text-base">{{ jobDetail.application_deadline }}</p>

            <h2 class="text-lg font-bold mt-4">Application Fee</h2>
            <p class="text-base">{{ jobDetail.application_fee }}</p>

            <h2 class="text-lg font-bold mt-4">Certification by Head of Department / Cadre Authority (PDF)</h2>
            <a href="#" class="inline-block mt-2 bg-destructive text-destructive-foreground py-2 px-4 rounded-lg hover:bg-destructive/80"> DOWNLOAD TEMPLATE </a>
        </div>
        <div class="mt-6 flex justify-between w-full">
            <div class="p-4">
                <button
                    @click="toggleDiv"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {{ isVisible ? "Hide Profile" : "Show Profile" }}
                </button>
            </div>
            <!-- Right-aligned and smaller image container -->
            <div class="p-4">
                <button
                    @click="toggleDivPayment"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {{ isVisiblePayment ? "Hide Payment" : "Show Payment" }}
                </button>
            </div>
        </div>


    <!--    {{application.transaction}}-->

        <div v-if="isVisiblePayment" class="max-w-sm mx-auto bg-card p-6 rounded-lg shadow-lg">
            <div class="flex items-center justify-center mb-4">
                <template v-if="application.transaction.status === 'TXN_SUCCESS'">
                    <q-icon name="check_circle"  />
                </template>
                <template v-else-if="application.transaction.status === 'TXN_FAILURE'">
                    <q-icon name="cancel"/>
                </template>
                <template v-else>
                    <q-icon name="hourglass_empty"  />
                </template>
            </div>
            <h2 class="text-lg font-semibold text-center text-primary">FEE PAYMENT RECEIPT</h2>
            <table class="w-full mt-4">
                <tbody>
                <tr>
                    <td class="border-b border-muted">
                        <span class="text-muted-foreground">Txn. ID</span>
                    </td>
                    <td class="border-b border-muted text-right">
                        <span class="text-muted-foreground">{{ application.transaction.transaction_id }}</span>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-muted">
                        <span class="text-muted-foreground">Order ID</span>
                    </td>
                    <td class="border-b border-muted text-right">
                        <span class="text-muted-foreground">{{ application.transaction.order_id }}</span>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-muted">
                        <span class="text-muted-foreground">Amount</span>
                    </td>
                    <td class="border-b border-muted text-right">
                        <span class="text-muted-foreground">{{ application.transaction.amount }}</span>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-muted">
                        <span class="text-muted-foreground">Date</span>
                    </td>
                    <td class="border-b border-muted text-right">
                        <span class="text-muted-foreground">{{ application.transaction.created_at }}</span>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-muted">
                        <span class="text-muted-foreground">Status</span>
                    </td>
                    <td class="border-b border-muted text-right">
                        <span class="text-green-600 font-semibold">{{ application.transaction.status }}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>


        <div v-if="isVisible" class="flex flex-col md:flex-row p-4 bg-background rounded-lg shadow-md">
            <div class="w-full md:w-1/2 p-4 border-r border-border">
                <div class="flex items-center mb-4">
                    <q-img
                        :src="`/storage/${applicant.passport_photo}`"
                        alt="Passport Size Photo"
                        class="mr-4"
                        style="width: 120px; height: 120px; object-fit: cover;" />
                    <div>
                        <h3 class="text-md font-bold">{{ applicant?.user.name }}</h3>
                        <p class="text-muted-foreground">Name (As HSLC Cert. / Service Book)</p>
                    </div>
                </div>
                <p><strong>Sex:</strong> {{ applicant?.sex }}</p>
                <p><strong>Mobile No:</strong> {{ applicant?.user.phone }}</p>
                <p><strong>Parent's Name:</strong> {{ applicant?.parents_name }}</p>
                <p><strong>Date of Birth:</strong> {{ applicant?.date_of_birth }}</p>
                <p><strong>Community:</strong> {{ applicant?.community }}</p>
                <p><strong>Religion:</strong> {{ applicant?.religion }}</p>
                <p><strong>Nationality:</strong> {{ applicant?.nationality }}</p>
                <p><strong>Qualification:</strong>{{applicant?.qualification}}, {{applicant?.graduateDegree}}</p>
                <p><strong>Working knowledge of Mizo Language:</strong> {{applicant?.mizo_proficiency ? 'YES' : 'NO'}}</p>
                <p><strong>Person with Disability:</strong> {{ applicant?.disability ? 'YES' : 'NO' }}</p>
                <p><strong>Person with Disability Detail:</strong>{{applicant?.disability_type}}</p>
            </div>

            <div class="w-full md:w-1/2 p-4">
                <h2 class="text-lg font-semibold">Permanent Address</h2>
                <p><strong>House No:</strong>{{applicant?.user.address.permanent_house_no }}</p>
                <p><strong>Street:</strong> {{applicant?.user.address.permanent_street }}</p>
                <p><strong>Locality (Veng):</strong> {{applicant?.user.address.permanent_locality }}</p>
                <p><strong>Landmark:</strong> {{applicant?.user.address.permanent_landmark }}</p>
                <p><strong>Town / City:</strong> {{applicant?.user.address.permanent_city }}</p>
                <p><strong>District:</strong> {{applicant?.user.address.permanent_district }}</p>
                <p><strong>State / UT:</strong> {{applicant?.user.address.permanent_state }}</p>
                <p><strong>PIN:</strong> {{applicant?.user.address.permanent_pin_code }}</p>
                <h2 class="text-lg font-semibold mt-4">Communication Address</h2>
                <p><strong>House No:</strong> {{applicant?.user.address.communication_house_no }}</p>
                <p><strong>Street:</strong> {{applicant?.user.address.communication_street }}</p>
                <p><strong>Locality (Veng):</strong> {{applicant?.user.address.communication_locality }}</p>
                <p><strong>Landmark:</strong> {{applicant?.user.address.communication_landmark }}</p>
                <p><strong>Town / City:</strong> {{applicant?.user.address.communication_city }}</p>
                <p><strong>District:</strong> {{applicant?.user.address.communication_district }}</p>
                <p><strong>State / UT:</strong>{{applicant?.user.address.communication_state }}</p>
                <p><strong>PIN:</strong> {{applicant?.user.address.communication_pin_code }}</p>
            </div>
        </div>





        <div v-if="mandatoryDocuments.length !== 0" class="p-4 bg-background rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-3">Required Documents</h2>
            <div class="grid grid-cols-2 gap-4">
                <div
                    v-for="document in mandatoryDocuments" :key="document.id"
                    class="row col-xs-12 col-sm-6 print-hide"
                >
    <!--                {{document.document_attachments}}-->
                    <div class="col-xs-8 flex items-center text-grey-6">
                        <label class="block text-sm font-medium text-bold">{{ document.document_name }}</label>
                    </div>

                    <div class="col-xs-4">
                        <q-btn
                            :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"
                            color="primary"
                            flat
                            @click="handleOpen(document.document_attachments)"
                        />
                    </div>
                </div>
            </div>
        </div>


        <div v-if="optionalDocuments.length !== 0" class="p-4 bg-background rounded-lg shadow-md">
                <h2 class="text-lg font-bold mb-3">Optional Documents</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div
                        v-for="document in optionalDocuments" :key="document.id"
                        class="row col-xs-12 col-sm-6 print-hide"
                    >
                        <div class="col-xs-8 flex items-center text-grey-6">
                            <label class="block text-sm font-medium text-bold">{{ document.document_name }}</label>
                        </div>

                        <div class="col-xs-4">
                            <q-btn
                                :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"
                                color="primary"
                                flat
                                @click="handleOpen(document.document_attachments)"
                            />
                        </div>
                    </div>
                </div>
            </div>


        <q-separator/>
        <div class="mx-auto bg-white dark:bg-card shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 class="text-red-500 text-2xl font-bold text-center tracking-widest">D E C L A R A T I O N</h2>
            <p class="text-red-500 mt-4">
                I hereby declare that all the statements made in this application are true and complete to the best of my knowledge and belief. I understand that action can be taken against me by the Commission,
                if I am declared by them to be guilty of any type of misconduct mentioned herein.
            </p>
            <div class="mt-6 flex justify-between w-full">
                <div>
                    <span class="text-red-500 font-semibold">Date :</span>
                    <span class="text-red-500">{{ formatDate(application.created_at)}}</span>
                </div>
                <!-- Right-aligned and smaller image container -->
                <div class="flex items-center justify-end flex-col">
                    <img
                        v-if="applicant?.signature_photo"
                        :alt="'Signature of the Candidate'"
                        :src="`/storage/${applicant?.signature_photo}`"
                        class="border border-zinc-300 rounded w-40 h-40 object-contain"
                    />
                    <p class="text-red-500 text-center mt-2">Signature of the Candidate</p>
                </div>
            </div>
        </div>


    </q-page>

</template>


<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
import {Head, useForm} from '@inertiajs/vue3';

defineOptions({
    layout:ApplicantLayout
})
const props = defineProps(['jobDetail', 'mandatoryDocuments', 'applicant','application', 'optionalDocuments']);

const isVisible = ref(false); // Tracks visibility of the div
const isVisiblePayment = ref(false);
const toggleDiv = () => {
    isVisible.value = !isVisible.value; // Toggle the value of isVisible
};

const toggleDivPayment = () => {
    isVisiblePayment.value = !isVisiblePayment.value;
}



// Function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const handleOpen = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    // a.href = item?.document_path;
    a.href = `/storage/${item?.document_path}`;
    a.click();
};


</script>
