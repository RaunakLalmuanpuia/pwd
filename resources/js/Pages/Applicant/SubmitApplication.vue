

<template>
    <Head title="Draft Application" />
    <q-page padding>
        <div class="p-4 bg-background rounded-lg shadow-md">
            <h2 class="text-lg font-bold">Name of Post</h2>
            <p class="text-base">{{ jobDetail.post_name }}</p>
            <h2 class="text-lg font-bold mt-4">Number of Post</h2>
            <p class="text-base">{{ jobDetail.no_of_post }}</p>

            <h2 class="text-lg font-bold mt-4">Application Last Date</h2>
            <p class="text-base">{{ formatDateTime(jobDetail.application_deadline) }}</p>

            <h2 class="text-lg font-bold mt-4">Application Fee </h2>
            <p class="text-base">General -{{ jobDetail.application_fee_general }}. SC\ST\Others- {{ jobDetail.application_fee_other }}</p>

            <h2 class="text-lg font-bold mt-4">Certification by Head of Department / Cadre Authority (PDF)</h2>
            <a href="#" class="inline-block mt-2 bg-destructive text-destructive-foreground py-2 px-4 rounded-lg hover:bg-destructive/80"> DOWNLOAD TEMPLATE </a>
        </div>

        <div class="mt-6 flex justify-between w-full">

            <div class="p-4" v-if="applicant">
                <button
                    @click="toggleDiv"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {{ isVisible ? "Hide Profile" : "Show Profile" }}
                </button>
            </div>
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
            <h2 class="text-lg font-bold mb-3">Mandatory Documents</h2>
            <div class="grid grid-cols-2 gap-4">
                <div
                    v-for="document in mandatoryDocuments"
                    :key="document.id"
                    class="row col-xs-12 col-sm-6 print-hide"
                >
                    <div class="col-xs-8 flex items-center text-grey-6">
                        <label class="block text-sm font-medium">{{ document.document_name }}</label>
                        <q-btn
                            :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"
                            color="primary"
                            flat
                            @click="handleOpen(document.document_attachments)"
                        />
                    </div>

                    <div class="col-xs-4">
                        <!-- File Input -->

                        <input
                            type="file"
                            :id="'file-' + document.id"
                            @change="handleFileUpload($event, document.id)"
                            class="text-sm mt-2"

                        />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="optionalDocuments.length !== 0" class="p-4 bg-background rounded-lg shadow-md">
            <h2 class="text-lg font-bold mb-3">Optional Documents</h2>
            <div class="grid grid-cols-2 gap-4">
                <div
                    v-for="document in optionalDocuments"
                    :key="document.id"
                    class="row col-xs-12 col-sm-6 print-hide"
                >
                    <!--                {{document.document_attachments.document_path}}-->
                    <div class="col-xs-8 flex items-center text-grey-6">
                        <label class="block text-sm font-medium">{{ document.document_name }}</label>
                        <q-btn v-if="document.document_attachments.document_path"
                               :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"
                               color="primary"
                               flat
                               @click="handleOpen(document.document_attachments)"
                        />
                    </div>

                    <div class="col-xs-4">
                        <!-- File Input -->


                        <input
                            type="file"
                            :id="'file-' + document.id"
                            @change="handleFileUpload($event, document.id)"
                            class="text-sm mt-2"
                        />


                    </div>
                </div>
            </div>
        </div>



        <div class="mx-auto bg-white dark:bg-card shadow-lg rounded-lg p-6 flex flex-col items-center mt-2">
            <h2 class="text-red-500 text-2xl font-bold text-center tracking-widest">D E C L A R A T I O N</h2>
            <p class="text-red-500 mt-4">
                I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge
                and belief and nothing has been concealed therein. I understand that if the information given by me is proved false / not true,
                I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn.
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


            <div class="flex items-center gap-8 justify-center mt-4">
                <!-- Delete Button - Red for danger action -->
                <button
                    @click="deleteApplication(jobDetail.id)"
                    class="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                    :disabled="processing"
                >
                    Delete Draft
                </button>

                <!-- Update Button - Yellow for update action -->
                <button
                    @click="submitDocument"
                    class="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                    :disabled="processing"
                >
                    Update
                </button>

                <!-- Payment Button - Disabled when processing -->
                <button
                    class="bg-accent text-accent-foreground text-white px-6 py-3 rounded-md hover:bg-accent/80 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
                    :disabled="processing"
                    @click="pay"
                >
                    {{ processing ? 'Submitting...' : 'Make Payment' }}
                </button>
            </div>
    </q-page>






</template>


<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
import {useForm, router, Head} from '@inertiajs/vue3';
import {useQuasar} from "quasar";
import axios from 'axios';


const q = useQuasar(); // Quasar instance

defineOptions({
    layout:ApplicantLayout
})

const props = defineProps(['jobDetail', 'mandatoryDocuments', 'applicant','application', 'optionalDocuments']);

const form = useForm({
    document_id: null,
    file: null,
    application_id: props.application.id,
});

const processing = ref(false);

function handleFileUpload(event, documentId) {
    form.document_id = documentId;
    form.file = event.target.files[0];
}

const submitDocument = () => {

    q.dialog({
        title:'Confirmation',
        message:'Do you want to update the Application?',
        ok:'Proceed',
        cancel: 'Back'
    }).onOk(()=>{
        form.post(route('application.update', { jobDetail: props.jobDetail.id }), {
            onSuccess: () => {
                form.reset();
            },
        });
    })



};

const isVisible = ref(false); // Tracks visibility of the div

const toggleDiv = () => {
    isVisible.value = !isVisible.value; // Toggle the value of isVisible
};

// Function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
};

const deleteApplication = (item) => {
    q.dialog({
        title:'Confirmation',
        message:'Do you want to delete the Application?',
        ok:'Proceed',
        cancel: 'Back'
    }).onOk(()=>{
       router.delete(route('application.delete_draft', item))
    })

}
const formatDateTime = (date) => {
    if (!date) return '';
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(date));
};
const handleOpen = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    // a.href = item?.document_path;
    a.href = `/storage/${item?.document_path}`;
    a.click();
};
const pay=()=>{
    q.dialog({
        title:'Confirmation',
        message:'Application is draft by default and you can pay later. Do you want to proceed with payment',
        ok:'Proceed',
        cancel: 'Back'
    }).onOk(()=>{
        q.loading.show()
        // .finally(()=>q.loading.hide())
        axios.post('/paytm/initiate',{
            job_ids:props.jobDetail.id,
            application_id:props.application.id,
        })
            .then(res=>{
                const {token, order_id, amount} = res.data;


                var config = {
                    "root": "",
                    "flow": "DEFAULT",
                    "data": {
                        "orderId": order_id, /* update order id */
                        "token": token, /* update token value */
                        "tokenType": "TXN_TOKEN",
                        "amount": amount /* update amount */
                    },
                    "handler": {
                        "notifyMerchant": function(eventName,data){
                            console.log("notifyMerchant handler function called");
                            console.log("eventName => ",eventName);
                            console.log("data => ",data);
                        }
                    }
                };

                if(window.Paytm && window.Paytm.CheckoutJS){
                    window.Paytm.CheckoutJS.init(config)
                        .then(function onSuccess() {
                            // after successfully updating configuration, invoke JS Checkout
                            window.Paytm.CheckoutJS.invoke();
                        }).catch(function onError(error){
                        console.log("error => ",error);
                    });

                }else{
                    console.log("Error Paytm")
                    q.notify({type:'warning',message:'Unable to load Checkout Page: Please Reload to try again'})
                }
            })
            .catch(err=>{
                console.log(err)
                q.notify({type:'negative',message:err?.response?.data?.message||err.toString()})
            })
            .finally(()=>{
                q.loading.hide();
            })
    })
}

</script>
