<template>
    <q-page>
        <h1>Bio</h1>
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



            <div class="q-pa-md">
                <label>Knowledge Of Mizo Language</label>
                <q-radio
                    v-model="form.proficiency_test"
                    :val="true"
                    label="Yes"
                />
                <q-radio
                    v-model="form.proficiency_test"
                    :val="false"
                    label="No"
                />
            </div>
            <div class="q-pa-md">
                <label>Person With Disability</label>
                <q-radio v-model="form.disability" :val="true" label="Yes" />
                <q-radio v-model="form.disability" :val="false" label="No" />
            </div>

            <div v-if="form.disability" class="q-pa-md">
                <q-file
                    v-model="form.disability_attachment"
                    label="Disability Proof"
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
import { useForm } from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";

defineOptions({
    layout: ApplicantLayout,
});

const third = ref(false);
const files = ref(null);

function counterLabelFn({ totalSize, filesNumber, maxFiles }) {
    return `${filesNumber} files of ${maxFiles} | ${totalSize}`;
}

const form = useForm({
    name: "",
    phone: "",
    email: "",
    parents_name: "",
    sex: "",
    date_of_birth: "",
    community: null,
    religion: "",
    marital_status: "",
    nationality: "",
    qualification: "",
    proficiency_test: false,
    disability: false,
    community_attachment: null,
    disability_attachment: null,
    passport_attachment: "",
    signature_attachment: "",
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
