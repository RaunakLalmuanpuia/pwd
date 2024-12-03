<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="container mx-auto p-4">
                    <h3 class="text-h5 q-mb-md py-4">Personal Details</h3>
                    <q-page>

                        <q-form @submit="submit" @reset="onReset">

                            <q-input
                                filled
                                v-model.trim="form.name"
                                label="Your Name *"
                                lazy-rules
                                :error="!!form.errors?.name"
                                :error-message="form.errors?.name?.toString()"
                                :rules="[(val) => !!val || 'Name is required']"
                            />
                            <q-input
                                filled
                                v-model.trim="form.phone"
                                label="Phone Number *"
                                type="tel"
                                maxlength="10"
                                lazy-rules
                                :error="!!form.errors?.phone"
                                :error-message="form.errors?.phone?.toString()"
                                :rules="[(val) => (val && val.length <= 10) || 'Phone number is required']"
                            />
                            <q-input
                                filled
                                v-model="form.email"
                                label="Email *"
                                lazy-rules
                                :error="!!form.errors?.email"
                                :error-message="form.errors?.email?.toString()"
                                :rules="[(val) => (val && val.length > 0) || 'Email is required']"
                            />
                            <q-input
                                filled
                                v-model="form.parents_name"
                                label="Parents Name *"
                                lazy-rules
                                :error="!!form.errors?.parents_name"
                                :error-message="form.errors?.parents_name?.toString()"
                                :rules="[(val) => (val && val.length > 0) || 'Parents Name is required']"
                            />
                            <q-select
                                filled
                                v-model="form.sex"
                                label="Sex *"
                                lazy-rules
                                :error="!!form.errors?.sex"
                                :error-message="form.errors?.sex?.toString()"
                                :rules="[(val) => (val && val.length > 0) || 'Sex is required']"
                                :options="['Male', 'Female', 'Others']"
                            />
                            <q-select
                                filled
                                v-model="form.marital_status"
                                label="Marital Status *"
                                :error="!!form.errors?.marital_status"
                                :error-message="form.errors?.marital_status?.toString()"
                                :rules="[(val) => (val && val.length > 0) || 'Marital Status is required']"
                                :options="['Single', 'Married', 'Divorced', 'Widowed']"
                            />
                            <q-input
                                label="Date Of Birth"
                                filled
                                v-model="form.date_of_birth"
                                :error="!!form.errors?.date_of_birth"
                                :error-message="form.errors?.date_of_birth?.toString()"
                                mask="date"
                                :rules="['date']"
                            >
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy
                                            cover
                                            transition-show="scale"
                                            transition-hide="scale"
                                        >
                                            <q-date v-model="form.date_of_birth" today-btn>
                                                <div class="row items-center justify-end">
                                                    <q-btn
                                                        v-close-popup
                                                        label="Close"
                                                        color="primary"
                                                        flat
                                                    />
                                                </div>
                                            </q-date>
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                            <q-select
                                filled
                                v-model="form.community"
                                label="Community"
                                lazy-rules
                                :error="!!form.errors?.community"
                                :error-message="form.errors?.community?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please select your community']"
                                :options="[
                    { label: 'Scheduled Tribe', value: 'Scheduled Tribe' },
                    { label: 'Scheduled Caste', value: 'Scheduled Caste' },
                    { label: 'Other Backward Class', value: 'Other Backward Class' },
                    { label: 'General', value: 'General' }
                ]"
                            />
                            <q-select
                                filled
                                v-model="form.religion"
                                label="Religion"
                                lazy-rules
                                :error="!!form.errors?.religion"
                                :error-message="form.errors?.religion?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Religion']"
                                :options="[
                    { label: 'Hindu', value: 'Hindu' },
                    { label: 'Muslim', value: 'Muslim' },
                    { label: 'Sikh', value: 'Sikh' },
                    { label: 'Christian', value: 'Christian' },
                    { label: 'Buddhist', value: 'Buddhist' },
                    { label: 'Others', value: 'Others' },
                ]"
                            />
                            <q-select
                                filled
                                v-model="form.nationality"
                                label="Nationality"
                                lazy-rules
                                :error="!!form.errors?.nationality"
                                :error-message="form.errors?.nationality?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Nationality']"
                                :options="[
                    { label: 'Indian', value: 'Indian' },
                    { label: 'Others', value: 'Others' },

                ]"
                            />

                            <q-select
                                filled
                                v-model="form.qualification"
                                label="Qualification"
                                lazy-rules
                                :error="!!form.errors?.qualification"
                                :error-message="form.errors?.qualification?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please Select your qualification']"
                                :options="['Non Graduate', 'Graduate', 'Post Graduate', 'Doctorate']"
                            />

                            <div v-if="form.qualification === 'Graduate' || form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                                <q-input
                                    filled
                                    v-model="form.graduateDegree"
                                    label="Graduate Degree"
                                    lazy-rules
                                    :error="!!form.errors?.graduateDegree"
                                    :error-message="form.errors?.graduateDegree?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your graduate degree']"
                                />
                                <q-input
                                    filled
                                    v-model="form.graduateStream"
                                    label="Graduate Stream"
                                    lazy-rules
                                    :error="!!form.errors?.graduateStream"
                                    :error-message="form.errors?.graduateStream?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your graduate stream']"
                                />
                            </div>

                            <!-- Post Graduate Degree and Stream -->
                            <div v-if="form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                                <q-input
                                    filled
                                    v-model="form.postGraduateDegree"
                                    label="Post Graduate Degree"
                                    lazy-rules
                                    :error="!!form.errors?.postGraduateDegree"
                                    :error-message="form.errors?.postGraduateDegree?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your post graduate degree']"
                                />
                                <q-input
                                    filled
                                    v-model="form.postGraduateStream"
                                    label="Post Graduate Stream"
                                    lazy-rules
                                    :error="!!form.errors?.postGraduateStream"
                                    :error-message="form.errors?.postGraduateStream?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your post graduate stream']"
                                />
                            </div>

                            <!-- Doctorate Degree and Stream -->
                            <div v-if="form.qualification === 'Doctorate'">
                                <q-input
                                    filled
                                    v-model="form.doctorateDegree"
                                    label="Doctorate Degree"
                                    lazy-rules
                                    :error="!!form.errors?.doctorateDegree"
                                    :error-message="form.errors?.doctorateDegree?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your doctorate degree']"
                                />
                                <q-input
                                    filled
                                    v-model="form.doctorateStream"
                                    label="Doctorate Stream"
                                    lazy-rules
                                    :error="!!form.errors?.doctorateStream"
                                    :error-message="form.errors?.doctorateStream?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your doctorate stream']"
                                />
                            </div>

                            <q-select
                                filled
                                v-model="form.mizo_proficiency"
                                label="Knowledge Of Mizo Language"
                                lazy-rules
                                :error="!!form.errors?.mizo_proficiency"
                                :error-message="form.errors?.mizo_proficiency?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Mizo Proficiency']"
                                :options="[
                    { label: 'Yes', value: 'Yes' },
                    { label: 'No', value: 'No' }
                  ]"
                            />

                            <q-select
                                filled
                                v-model="form.disability"
                                label="Person With Disability"
                                lazy-rules
                                :error="!!form.errors?.disability"
                                :error-message="form.errors?.disability?.toString()"
                                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Nationality']"
                                :options="[
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' }
                  ]"
                            />

                            <!--    {{form.disability}}-->
                            <div v-if="form.disability === 'Yes'|| form.disability.value === '1'">
                                <q-select
                                    filled
                                    v-model="form.disability_type"
                                    label="Disability Type"
                                    lazy-rules
                                    :error="!!form.errors?.disability_type"
                                    :error-message="form.errors?.disability_type?.toString()"
                                    :rules="[(val) => (val !== null && val !== '') || 'Please Select your disability type']"
                                    :options="[
                      'Hearing',
                      'Locomotor',
                      'Vision',
                      'Autism, Intellectual & Learning Disability, Mental Illness',
                      'Multiple Disability (Amongst Above)'
                    ]"
                                />
                            </div>

                            <div v-if="!existingData">
                                <q-file
                                    v-model="form.passport_attachment"
                                    label="Passport Photo"
                                    filled
                                    counter
                                    :error="!!form.errors?.passport_attachment"
                                    :error-message="form.errors?.passport_attachment?.toString()"
                                    accept=".jpg, .jpeg, .png"
                                    :counter-label="counterLabelFn"
                                    style="max-width: 300px"
                                    hint="Max file size: 2 MB / only .jpeg, .png, .jpg"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                                <q-file
                                    v-model="form.signature_attachment"
                                    label="Signature"
                                    filled
                                    counter
                                    :error="!!form.errors?.signature_attachment"
                                    :error-message="form.errors?.signature_attachment?.toString()"
                                    accept=".jpg, .jpeg, .png"
                                    :counter-label="counterLabelFn"
                                    style="max-width: 300px"
                                    hint="Max file size: 2 MB / only .jpeg, .png, .jpg"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                            </div>


                            <div v-if="existingData">
                                <!-- Display Passport and Signature Photo Section -->
                                <div class="flex gap-20 items-start">
                                    <!-- Passport Photo Section -->
                                    <div class="flex flex-col items-center">
                                        <p>Passport Photo:</p>
                                        <div v-if="existingData.passport_photo" class="flex flex-col items-center gap-4">
                                            <!-- Show Image -->
                                            <q-img
                                                :src="`/storage/${existingData.passport_photo}`"
                                                alt="Passport Photo"
                                                class="w-32 h-32 object-cover rounded border"
                                                width="150px"
                                                height="150px"
                                                fit="fill"
                                                :error="!!form.errors?.passport_attachment"
                                                :error-message="form.errors?.passport_attachment?.toString()"
                                            />
                                            <!-- Edit Button -->
                                            <q-btn
                                                icon="edit"
                                                label="Edit"
                                                color="primary"
                                                class="mt-2"
                                                @click="showEditPassport = !showEditPassport"
                                            />
                                            <!-- File Input for Editing Passport Photo -->
                                            <div v-if="showEditPassport" class="mt-4">
                                                <p>Upload New Passport Photo:</p>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    @change="handleFileChange($event, 'passport_attachment')"
                                                />
                                            </div>
                                        </div>
                                        <p v-else>No passport photo uploaded</p>
                                    </div>

                                    <!-- Signature Photo Section -->
                                    <div class="flex flex-col items-center">
                                        <p>Signature Photo:</p>
                                        <div v-if="existingData.signature_photo" class="flex flex-col items-center gap-4">
                                            <!-- Show Image -->
                                            <q-img
                                                :src="`/storage/${existingData.signature_photo}`"
                                                alt="Signature Photo"
                                                class="w-32 h-32 object-cover rounded border"
                                                width="150px"
                                                height="150px"
                                                fit="fill"
                                                :error="!!form.errors?.passport_attachment"
                                                :error-message="form.errors?.passport_attachment?.toString()"
                                            />
                                            <!-- Edit Button -->
                                            <q-btn
                                                icon="edit"
                                                label="Edit"
                                                color="primary"
                                                class="mt-2"
                                                @click="showEditSignature = !showEditSignature"
                                            />
                                            <!-- File Input for Editing Signature Photo -->
                                            <div v-if="showEditSignature" class="mt-4">
                                                <p>Upload New Signature Photo:</p>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    @change="handleFileChange($event, 'signature_attachment')"
                                                />
                                            </div>
                                        </div>
                                        <p v-else>No signature photo uploaded</p>
                                    </div>
                                </div>
                            </div>


                            <div class="q-pa-md">
                                <q-toggle
                                    v-model="third"
                                    checked-icon="check"
                                    color="green"
                                    unchecked-icon="clear"
                                    label="I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge and belief and nothing has been concealed therein. I understand that if the information given by me is proved false/not true, I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn."
                                />
                            </div>
                            <div>
                                <!--                <q-btn @click="submit" label="Submit" type="submit" color="primary" />-->

                                <q-btn
                                    @click="submit"
                                    :label="submitButtonLabel"
                                    type="submit"
                                    color="primary"
                                />
                                <q-btn
                                    label="Reset"
                                    type="reset"
                                    color="primary"
                                    flat
                                    class="q-ml-sm"
                                />
                            </div>
                        </q-form>
                    </q-page>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>

import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";

defineOptions({
    layout: ApplicantLayout,
});

const props = defineProps({
    existingData: Object,
});

const third = ref(false);

const page = usePage();

function counterLabelFn({ totalSize, filesNumber, maxFiles }) {
    return `${filesNumber} files of ${maxFiles} | ${totalSize}`;
}

const form = useForm({
    name: page.props.auth.user?.name || "",
    phone: page.props.auth.user?.phone || "",
    email: page.props.auth.user?.email || "",
    parents_name: props.existingData?.parents_name || "",
    sex: props.existingData?.sex || "",
    date_of_birth: props.existingData?.date_of_birth || "",
    community: props.existingData?.community ? { label: props.existingData.community, value: props.existingData.community } : null,
    religion: props.existingData?.religion ? { label: props.existingData.religion, value: props.existingData.religion } : null,
    marital_status: props.existingData?.marital_status || "",
    nationality: props.existingData?.nationality ? { label: props.existingData.nationality, value: props.existingData.nationality } : null,
    qualification: props.existingData?.qualification || "",
    graduateDegree: props.existingData?.graduateDegree || "",
    graduateStream: props.existingData?.graduateStream || "",
    postGraduateDegree: props.existingData?.postGraduateDegree || "",
    postGraduateStream: props.existingData?.postGraduateStream || "",
    doctorateDegree: props.existingData?.doctorateDegree || "",
    doctorateStream: props.existingData?.doctorateStream || "",
    // mizo_proficiency: props.existingData?.mizo_proficiency || "",
    mizo_proficiency: props.existingData?.mizo_proficiency === 1 ? 'Yes' : props.existingData?.mizo_proficiency === 0 ? 'No' : "",
    disability: props.existingData?.disability === 1 ? 'Yes' : props.existingData?.disability === 0 ? 'No' : "",
    // disability: props.existingData?.disability || "",
    disability_type: props.existingData?.disability_type || "",
    community_attachment: null, // Files cannot be pre-filled
    passport_attachment: null,
    signature_attachment: null,
});
const showEditPassport = ref(false);
const showEditSignature =  ref(false);
// Methods
const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
        form[field] = file;
    }
};
// Show file field only if community is selected and not 'General'
const shouldShowFileField = computed(() => {
    return form.community?.value && form.community.value !== 'General';
});

const submitButtonLabel = computed(() => {
    return props.existingData ? "Update" : "Submit";
});


const submit = () => {
    form.mizo_proficiency = !!form.mizo_proficiency; // Ensure boolean
    form.disability = !!form.disability; // Ensure boolean

    const routeName = props.existingData
        ? 'applicant.bio_update' // Update route
        : 'applicant.bio_store'; // Create route

    form.post(route(routeName, props.existingData?.id), {
        onSuccess: () => {
            alert(props.existingData
                ? "Applicant created successfully!"
                : "Applicant updated successfully!");
        },
        onError: (err) => {
            console.error(err);
        },
    });
};

</script>
