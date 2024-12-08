

<template>


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
                @click="toggleDiv"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {{ isVisible ? "Hide Payment" : "Show Payment" }}
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



    <div class="p-4 bg-background rounded-lg shadow-md">
        <h2 class="text-lg font-bold mb-3">Required Documents</h2>
        <div class="grid grid-cols-2 gap-4">
            <div
                v-for="document in mandatoryDocuments" :key="document.id"
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
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="p-4 bg-background rounded-lg shadow-md">
        <h2 class="text-lg font-bold mb-3">Required Documents</h2>
        <div class="grid grid-cols-2 gap-4">
            <div
                v-for="document in mandatoryDocuments"
                :key="document.id"
                class="row col-xs-12 col-sm-6 print-hide"
            >
                <div class="col-xs-8 flex items-center text-grey-6">
                    <label class="block text-sm font-medium">{{ document.document_name }}</label>
                    <p v-if="document.file_path" class="text-xs text-gray-500 mt-1">Uploaded</p>
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

    <div class="flex items-center justify-between">
        <button class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">Delete Draft</button>
        <button @click="submitDocument" class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">Update</button>
<!--        <button class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">Submit Application</button>-->
        <button
            class="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80"
            :disabled="processing"
            @click="submitApplication"
        >
            {{ processing ? 'Submitting...' : 'Submit Application' }}
        </button>
    </div>




</template>


<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
import { useForm, router } from '@inertiajs/vue3';



defineOptions({
    layout:ApplicantLayout
})
const props = defineProps(['jobDetail', 'mandatoryDocuments', 'applicant','application']);

const form = useForm({
    document_id: null,
    file: null,
});


const processing = ref(false);

function handleFileUpload(event, documentId) {
    form.document_id = documentId;
    form.file = event.target.files[0];
}
//
// function submitDocument(documentId) {
//     if (!form.file) {
//         alert('Please select a file before submitting.');
//         return;
//     }
//
//     processing.value = true;
//     form.post(`/api/documents/${props.jobDetail.id}/update`, {
//         onSuccess: () => {
//             alert('Document updated successfully!');
//             form.reset();
//         },
//         onError: (errors) => {
//             console.error(errors);
//         },
//         onFinish: () => {
//             processing.value = false;
//         },
//     });
// }

const submitDocument = () => {
    form.post(route('application.update', { jobDetail: props.jobDetail.id }), {
        onSuccess: () => {
            form.reset();
        },
    });
};

const submitApplication = () => {
    router.post(route('application.submit', { jobDetail: props.jobDetail.id }), {
        onSuccess: () => {
            form.reset();
        },
    });
};

const isVisible = ref(false); // Tracks visibility of the div

const toggleDiv = () => {
    isVisible.value = !isVisible.value; // Toggle the value of isVisible
};



// Function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
const currentDate = ref(formatDate(new Date()));
const isDocumentUploaded = (documentId) => {
    return props.application.application_documents.some(
        (uploadedDoc) => uploadedDoc.document_id === documentId
    );
};

const getUploadedDocumentPath = (documentId) => {
    const uploadedDoc = props.application.application_documents.find(
        (doc) => doc.document_id === documentId
    );
    return uploadedDoc ? `/storage/${uploadedDoc.document_path}` : null;
};

</script>
