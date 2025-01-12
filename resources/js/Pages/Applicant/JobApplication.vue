

<template>
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

    <!--            <h2 class="text-lg font-bold mt-4">Application Fee - Others</h2>-->
    <!--            <p class="text-base">{{ jobDetail.application_fee_other }}</p>-->


            <h2 class="text-lg font-bold mt-4">Certification by Head of Department / Cadre Authority (PDF)</h2>
                <a href="#" class="inline-block mt-2 bg-destructive text-destructive-foreground py-2 px-4 rounded-lg hover:bg-destructive/80"> DOWNLOAD TEMPLATE </a>

            </div>



        <div class="p-4" v-if="applicant">
            <button
                @click="toggleDiv"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {{ isVisible ? "Hide Profile" : "Show Profile" }}
            </button>

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
                <p><strong>Working knowledge of Mizo Language:</strong> {{applicant?.mizo_proficiency}}</p>
                <p><strong>Person with Disability:</strong> {{applicant?.disability}}</p>
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
            <div>
                <h2 class="text-lg font-bold mb-3">Required Documents</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="document in mandatoryDocuments" :key="document.id" class="mb-4">
                        <label class="block text-sm font-medium text-foreground">
                            Upload Proof of Prescribed Essential Qualification: {{ document.document_name }}
                        </label>
                        <div class="mt-1 flex items-center border border-border rounded-md p-2 bg-card">
                            <input
                                type="file"
                                :id="'document-' + document.id"
                                :name="'documents[' + document.id + ']'"
                                @change="(e) => form.documents[document.id] = e.target.files[0]"
                                class="flex-grow border-none focus:ring-0"
                            />
                            <span class="ml-2 text-blue-600">+</span>
                        </div>

                        <p class="mt-1 text-xs text-muted-foreground">{{ document.document_description }}</p>
                        <span v-if="form.errors[`documents.${document.id}`]">
                            {{ form.errors[`documents.${document.id}`] }}
                        </span>
                    </div>
                </div>
            </div>


        </div>

        <div v-if="optionalDocuments.length !== 0" class="p-4 bg-background rounded-lg shadow-md">
            <div class="p-4 bg-background rounded-lg shadow-md">
                <h2 class="text-lg font-bold mb-3">Optional Documents</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="document in optionalDocuments" :key="document.id" class="mb-4">
                        <label class="block text-sm font-medium text-foreground">
                             {{ document.document_name }}
                        </label>
                        <div class="mt-1 flex items-center border border-border rounded-md p-2 bg-card">
                            <input
                                type="file"
                                :id="'document-' + document.id"
                                :name="'documents[' + document.id + ']'"
                                @change="(e) => form.documents[document.id] = e.target.files[0]"
                                class="flex-grow border-none focus:ring-0"
                            />
                            <span class="ml-2 text-blue-600">+</span>
                        </div>

                        <p class="mt-1 text-xs text-muted-foreground">{{ document.document_description }}</p>
                        <span v-if="form.errors[`documents.${document.id}`]">
                            {{ form.errors[`documents.${document.id}`] }}
                        </span>
                    </div>
                </div>
            </div>


        </div>

        <div class="p-4 bg-background rounded-lg shadow-md col-xs-12 col-sm-12">
            <div class="flex justify-between items-center">
                <div class="text-grey-6">Did you study MIZO language in {{ jobDetail.mizo_proficiency }}</div>
                <div class="flex q-gutter-md">
                    <q-radio  v-model="form.mizo_proficiency" dense :val="1" label="Yes" />
                    <q-radio  v-model="form.mizo_proficiency" dense :val="0" label="No" />
                    <div v-if="form.errors.mizo_proficiency" class="input-error">
                        {{ form.errors.mizo_proficiency }}
                    </div>
                </div>
            </div>
            <!-- <p> Mizo Language Test will be conducted later</p> -->
        </div>

        <q-separator/>
        <div class="mx-auto bg-white dark:bg-card shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 class="text-red-500 text-2xl font-bold text-center tracking-widest">D E C L A R A T I O N</h2>
            <p class="text-red-500 mt-4">
                I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge
                and belief and nothing has been concealed therein. I understand that if the information given by me is proved false / not true,
                I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn.
            </p>
            <div class="mt-6 flex justify-between w-full">
                <div>
                    <span class="text-red-500 font-semibold">Date :</span>
                    <span class="text-red-500">{{ currentDate }}</span>
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
            <button @click="submitApplication" class="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 p-2 rounded-lg w-full">APPLY</button>
        </div>
    </q-page>

</template>


<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import {useQuasar} from "quasar";

defineOptions({
    layout:ApplicantLayout
})

const q = useQuasar();
const props = defineProps(['jobDetail', 'mandatoryDocuments','optionalDocuments', 'applicant']);

const isVisible = ref(false); // Tracks visibility of the div

const toggleDiv = () => {
    isVisible.value = !isVisible.value; // Toggle the value of isVisible
};

const form = useForm({
    mizo_proficiency: "",
    documents: {},
});

// Function to format the date
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-IN', options).format(date);
}

const currentDate = ref(formatDate(new Date()));

// const submitApplication = () => {
//     form.post(route('application.apply', { jobDetail: props.jobDetail.id }), {
//         onSuccess: () => {
//             form.reset();
//         },
//     });
// };

const submitApplication = () => {

    q.dialog({
        title: 'Confirm Submission',
        message: 'Are you sure you want to submit this application?',
        ok: {
            label: 'Yes',
            color: 'primary',
        },
        cancel: {
            label: 'No',
            color: 'negative',
        },
    }).onOk(() => {
        q.loading.show();
        form.post(route('application.apply', { jobDetail: props.jobDetail.id }), {
            onSuccess: (response) => {

                form.reset();
            },
            onError: (errors) => {
                q.notify({
                    type: 'negative',
                    message: errors?.message || 'An error occurred!',
                });
            },
            onFinish: () => {
                q.loading.hide();
            },
        });
    }).onCancel(() => {
        q.notify({
            type: 'info',
            color:"secondary",
            message: 'Application submission canceled.',
        });
    });
};
const formatDateTime = (date) => {
    if (!date) return '';
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(date));
};
</script>
