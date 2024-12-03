<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="container mx-auto p-4">
<!--                    <h3 class="text-h5 q-mb-md py-4">Personal Details</h3>-->

                    <q-form class="row q-col-gutter-sm" @submit="submit">
                        <div class="col-xs-12 primary-title">Applicant details</div>
                        <div class="col-xs-12">Applicant Information</div>
                        <!--  Name-->
                        <div class="col-xs-12 col-sm-6">
                            <q-input v-model="form.name"
                                     :error="form.errors.hasOwnProperty('name')"
                                     :error-message="form.errors?.name?.toString()"
                                     :rules="[
                                         val=>!!val?.trim() || 'Applicant name is required'
                                       ]"
                                     class="my-input"
                                     dense
                                     disable
                                     input-class="test"
                                     item-aligned
                                     label="Applicant's Name"
                                     outlined
                                     @blur="delete form.errors['name']"
                            />
                        </div>
                        <!--Email-->
                        <div class="col-xs-12 col-sm-6">
                            <q-input v-model="form.email"
                                     :error="form.errors.hasOwnProperty('email')"
                                     :error-message="form.errors?.email?.toString()"
                                     :rules="[
                                         val=>!!val?.trim() || 'Email is required'
                                       ]"
                                     disable
                                     class="my-input"
                                     dense
                                     item-aligned
                                     label="Email"
                                     outlined
                                     @blur="delete form.errors['email']"
                            />
                        </div>
                        <!--phone-->
                        <div class="col-xs-12 col-sm-6">
                            <q-input v-model="form.phone"
                                     disable
                                     :rules="[
                                         val=>!!val || 'Mobile No is required',
                                         val=>val.length===10 || 'Mobile No must be 10 digit No',
                                       ]"
                                     class="my-input"
                                     dense
                                     item-aligned
                                     label="Mobile No"
                                     mask="##########"
                                     outlined
                                     :error="!!form.errors?.phone"
                                     :error-message="form.errors?.phone?.toString()"
                            />
                        </div>
                        <!--parent name-->
                        <div class="col-xs-12 col-sm-6">
                            <q-input v-model="form.parents_name"
                                     :error="form.errors.hasOwnProperty('parents_name')"
                                     :error-message="form.errors?.parents_name?.toString()"
                                     :rules="[
                                         val=>!!val || 'Parent name is required'
                                       ]"
                                     class="my-input"
                                     dense
                                     item-aligned
                                     label="Parent Name"
                                     outlined
                                     @blur="delete form.errors['parents_name']"
                            />
                        </div>
                        <!--gender-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.sex"
                                      :options="['Male', 'Female', 'Others']"
                                      :rules="[
                                         val=>!!val || 'Gender is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Gender"
                                      outlined
                                      :error="!!form.errors?.phone"
                                      :error-message="form.errors?.phone?.toString()"
                            />
                        </div>
                        <!--DOB-->
                        <div class="col-xs-12 col-sm-6">
                            <q-input v-model="form.date_of_birth"
                                     :rules="[
                                     val=>!!val || 'DOB is required',
                                     ]"
                                     class="my-input"
                                     dense
                                     item-aligned
                                     label="Date of Birth"
                                     outlined
                                     stack-label
                                     type="date"
                                     :error="form.errors.hasOwnProperty('date_of_birth')"
                                     :error-message="form.errors?.date_of_birth?.toString()"
                            />
                        </div>
                        <!--Category-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.community"
                                      :options="categories"
                                      :rules="[
                                         val=>!!val || 'Category is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Category"
                                      outlined
                            />
                        </div>
                        <!--Religion-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.religion"
                                      :options="religions"
                                      :rules="[
                                         val=>!!val || 'Religion is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Religion"
                                      outlined
                            />
                        </div>
                        <!--Nationality-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.nationality"
                                      :options="[
                                            { label: 'Indian', value: 'Indian' },
                                            { label: 'Others', value: 'Others' },

                                        ]"
                                      :rules="[
                                         val=>!!val || 'Nationality is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Nationality"
                                      outlined
                            />
                        </div>
                        <!--Maritial Status-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.marital_status"
                                      :options="['Single', 'Married', 'Divorced', 'Widowed']"
                                      :rules="[
                                         val=>!!val || 'Marital Status is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Marital Status"
                                      outlined
                            />
                        </div>
                        <!--PWD-->
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.disability"
                                      :options="[
                                          { label: 'Yes', value: 1 },
                                          { label: 'No', value: 0 }
                                        ]"
                                      :rules="[
                                         val=>!!val || 'Please select an option'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Person With Disability"
                                      outlined
                            />
                        </div>
                        <!-- if pwd-->
                        <div class="col-xs-12 col-sm-6" v-if="form.disability.value === 1 || form.disability === 'Yes'">
                            <q-select v-model="form.disability_type"
                                      :options="[
                                          'Hearing',
                                          'Locomotor',
                                          'Vision',
                                          'Autism, Intellectual & Learning Disability, Mental Illness',
                                          'Multiple Disability (Amongst Above)'
                                        ]"
                                      :rules="[
                                         val=>!!val || 'Please Select your disability type'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Disability Type"
                                      outlined
                            />
                        </div>

                        <div class="col-xs-12 col-sm-12"></div>
                        <div class="col-xs-12">
                            <q-separator/>
                        </div>

                        <!--Education Detail-->
                        <div class="col-xs-12">
                            Education Detail
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <q-select v-model="form.qualification"
                                      :options="['Non Graduate', 'Graduate', 'Post Graduate', 'Doctorate']"
                                      :rules="[
                                         val=>!!val || 'Qualification is required'
                                       ]"
                                      class="my-input"
                                      dense
                                      item-aligned
                                      label="Qualification"
                                      outlined
                            />
                        </div>
                        <div class="col-xs-12 col-sm-6"></div>
                        <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Graduate' || form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                            <div style="display: flex; width: 203%; gap: 1rem;">
                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.graduateDegree"
                                             :error="form.errors.hasOwnProperty('graduateDegree')"
                                             :error-message="form.errors?.graduateDegree?.toString()"
                                             :rules="[
                                                 val => !!val || 'Graduate Degree is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Graduate Degree"
                                             outlined
                                             @blur="delete form.errors['graduateDegree']"
                                    />
                                </div>
                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.graduateStream"
                                             :error="form.errors.hasOwnProperty('graduateStream')"
                                             :error-message="form.errors?.graduateStream?.toString()"
                                             :rules="[
                                                 val => !!val || 'Graduate Stream is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Graduate Stream"
                                             outlined
                                             @blur="delete form.errors['graduateStream']"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6"></div>
                        <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                            <div style="display: flex; width: 203%; gap: 1rem;">
                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.postGraduateDegree"
                                             :error="form.errors.hasOwnProperty('postGraduateDegree')"
                                             :error-message="form.errors?.postGraduateDegree?.toString()"
                                             :rules="[
                                                 val=>!!val || 'Post Graduate Degree is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Post Graduate Degree"
                                             outlined
                                             @blur="delete form.errors['postGraduateDegree']"
                                    />
                                </div>
                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.postGraduateStream"
                                             :error="form.errors.hasOwnProperty('postGraduateStream')"
                                             :error-message="form.errors?.postGraduateStream?.toString()"
                                             :rules="[
                                                 val=>!!val || 'Post Graduate Stream is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Post Graduate Stream"
                                             outlined
                                             @blur="delete form.errors['postGraduateStream']"
                                    />
                                </div>
                            </div>




                        </div>
                        <div class="col-xs-12 col-sm-6"></div>
                        <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Doctorate'">
                            <div style="display: flex; width: 203%; gap: 1rem;">

                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.doctorateDegree"
                                             :error="form.errors.hasOwnProperty('doctorateDegree')"
                                             :error-message="form.errors?.doctorateDegree?.toString()"
                                             :rules="[
                                                 val=>!!val || 'Doctorate Degree is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Doctorate Degree"
                                             outlined
                                             @blur="delete form.errors['doctorateDegree']"
                                    />
                                </div>
                                <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                                    <q-input v-model="form.doctorateStream"
                                             :error="form.errors.hasOwnProperty('doctorateStream')"
                                             :error-message="form.errors?.doctorateStream?.toString()"
                                             :rules="[
                                                 val=>!!val || 'Doctorate Stream is required'
                                               ]"
                                             class="my-input"
                                             dense
                                             item-aligned
                                             label="Doctorate Stream"
                                             outlined
                                             @blur="delete form.errors['parents_name']"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12"></div>
                        <div class="col-xs-12">
                            <q-separator/>
                        </div>
                        <!--Mizo Proficiency-->
                        <div class="col-xs-12">
                            Mizo Language Proficiency
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="flex justify-between items-center">
                                <div class="text-grey-6">Did you study MIZO language in HSLC or HIGHER</div>
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
                        <div class="col-xs-12">
                            <q-separator/>
                        </div>
                        <div class="col-xs-12">
                            Document
                        </div>
                        <div class="row q-col-gutter-sm">
                            <div class="col-xs-12 text-grey-5">
                                <div>
                                    <div> Please upload relevant documents (Upload ngai te)</div>
                                    <div class="text-red-5"> All Applicants are requested to upload true and authentic documents</div>
                                </div>
                                <br/>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6"></div>
                        <div v-if="!existingData">
                            <!--Passport photo-->
                            <div class="col-xs-12 col-sm-6">
                                <q-file
                                    v-model="form.passport_attachment"
                                    label="Passport Photo"
                                    filled
                                    :error="!!form.errors?.passport_attachment"
                                    :error-message="form.errors?.passport_attachment?.toString()"
                                    accept=".jpg, .jpeg, .png"
                                    class="col-xs-12"
                                    color="grey"
                                    hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 3:4"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                            </div>
                            <!--Signature-->
                            <div class="col-xs-12 col-sm-6">
                                <q-file
                                    v-model="form.signature_attachment"
                                    label="Signature"
                                    filled
                                    :error="!!form.errors?.signature_attachment"
                                    :error-message="form.errors?.signature_attachment?.toString()"
                                    accept=".jpg, .jpeg, .png"
                                    class="col-xs-12"
                                    color="grey"
                                    hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 16:9"
                                >
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                            </div>
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

                        <!--Submit-->
                        <div class="col-xs-12 flex justify-center q-mt-lg">
                            <q-btn  class="q-px-xl" color="primary" label="Save" rounded type="submit"/>
                        </div>
                    </q-form>
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

const  genders = [
    {value:'Male',label:'Male'},
    {value:'Female',label:'Female'},
]

const categories =  [
    {value:'Schedule Caste',label:'Schedule Caste'},
    {value:'Schedule Tribe',label:'Schedule Tribe'},
    {value:'General',label:'General'},
    {value:'OBC',label:'OBC'},
]

const religions =  [
    {value:'Hindu',label:'Hindu'},
    {value:'Muslim',label:'Muslim'},
    {value:'Sikh',label:'Sikh'},
    {value:'Christian',label:'Christian'},
    {value: 'Buddhist',label: 'Buddhist' },
    {value: 'Others', label: 'Others' },
]

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

<style scoped>

.primary-title {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: normal;
    color: $primary;
}
.my-input.q-field--float .q-field__label {
    transform: translateY(-120%) translateX(-5px) scale(0.75);
    background: #fff;
    right: inherit;
    padding: 0 5px;
    z-index: 10;
}
</style>
