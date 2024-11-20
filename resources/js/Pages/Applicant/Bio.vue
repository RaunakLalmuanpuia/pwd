<template>
    <q-page>
        <h3>Bio</h3>
        <q-form @submit="submit" @reset="onReset" class="q-gutter-md">
            <q-input
                filled
                v-model.trim="form.name"
                label="Your Name *"
                lazy-rules
                :rules="[(val) => !!val || 'Name is required']"
            />
            <q-input
                filled
                v-model.trim="form.phone"
                label="Phone Number *"
                type="tel"
                maxlength="10"
                lazy-rules
                :rules="[(val) => (val && val.length <= 10) || 'Phone number is required']"
            />
            <q-input
                filled
                v-model="form.email"
                label="Email *"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Email is required']"
            />
            <q-input
                filled
                v-model="form.parents_name"
                label="Parents Name *"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Parents Name is required']"
            />
            <q-select
                filled
                v-model="form.sex"
                label="Sex *"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Sex is required']"
                :options="['Male', 'Female', 'Others']"
            />
            <q-select
                filled
                v-model="form.marital_status"
                label="Marital Status *"
                :rules="[(val) => (val && val.length > 0) || 'Marital Status is required']"
                :options="['Single', 'Married', 'Divorced', 'Widowed']"
            />
            <q-input
                label="Date Of Birth"
                filled
                v-model="form.date_of_birth"
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
                :rules="[(val) => (val !== null && val !== '') || 'Please select your community']"
                :options="[
                    { label: 'Scheduled Tribe', value: 'Scheduled Tribe' },
                    { label: 'Scheduled Caste', value: 'Scheduled Caste' },
                    { label: 'Other Backward Class', value: 'Other Backward Class' },
                    { label: 'General', value: 'General' }
                ]"
            />

            <div v-if="shouldShowFileField" class="q-pa-md">
                <q-file
                    v-model="form.community_attachment"
                    label="Community Attachment"
                    filled
                    counter
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


            <q-select
                filled
                v-model="form.religion"
                label="Religion"
                lazy-rules
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
                :rules="[(val) => (val !== null && val !== '') || 'Please Select your qualification']"
                :options="['Non Graduate', 'Graduate', 'Post Graduate', 'Doctorate']"
            />

            <div v-if="form.qualification === 'Graduate' || form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                <q-input
                    filled
                    v-model="form.graduateDegree"
                    label="Graduate Degree"
                    lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your graduate degree']"
                />
                <q-input
                    filled
                    v-model="form.graduateStream"
                    label="Graduate Stream"
                    lazy-rules
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
                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your post graduate degree']"
                />
                <q-input
                    filled
                    v-model="form.postGraduateStream"
                    label="Post Graduate Stream"
                    lazy-rules
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
                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your doctorate degree']"
                />
                <q-input
                    filled
                    v-model="form.doctorateStream"
                    label="Doctorate Stream"
                    lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Please enter your doctorate stream']"
                />
            </div>

            <div class="q-pa-md">


                <q-select
                    filled
                    v-model="form.proficiency_test"
                    label="Knowledge Of Mizo Language"
                    lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Nationality']"
                    :options="[
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' },

                ]"
                />


            </div>
            <div class="q-pa-md">

                <q-select
                    filled
                    v-model="form.disability"
                    label="Person With Disability"
                    lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Nationality']"
                    :options="[
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' }
                  ]"
                />
            </div>
<!--    {{form.disability}}-->
            <div v-if="form.disability.value === '1'" class="q-pa-md">
                <q-select
                    filled
                    v-model="form.disability_type"
                    label="Disability Type"
                    lazy-rules
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

            <div class="q-pa-md">
                <q-file
                    v-model="form.passport_attachment"
                    label="Passport Photo"
                    filled
                    counter
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

            <div class="q-pa-md">
                <q-file
                    v-model="form.signature_attachment"
                    label="Signature"
                    filled
                    counter
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
            <!-- Display Signature Photo if exists -->


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
                <q-btn @click="submit" label="Submit" type="submit" color="primary" />
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
const files = ref(null);

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
    proficiency_test: props.existingData?.mizo_proficiency || "",
    disability: props.existingData?.disability || "",
    disability_type: props.existingData?.disability_type || "",
    community_attachment: null, // Files cannot be pre-filled
    passport_attachment: null,
    signature_attachment: null,
});

// Show file field only if community is selected and not 'General'
const shouldShowFileField = computed(() => {
    return form.community?.value && form.community.value !== 'General';
});


const submit = () => {
    form.proficiency_test = !!form.proficiency_test; // Ensure boolean
    form.disability = !!form.disability; // Ensure boolean

    form.post(route('applicant.bio_store'), {
        onSuccess: () => {
            alert("Applicant created successfully!");
        },
        onError: (err) => {
            err.value = err;
        },
    });
};
</script>
