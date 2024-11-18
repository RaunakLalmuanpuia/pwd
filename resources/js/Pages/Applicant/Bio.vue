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
                maxlength="15"
                lazy-rules
                :rules="[(val) => (val && val.length <= 15) || 'Phone number is required']"
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
                :rules="[(val) => (val !== null && val !== '') || 'Please Select your community']"
                :options="['Scheduled Tribe', 'Scheduled Caste', 'Other Backward Class', 'General']"
            />
            <q-input
                filled
                v-model="form.religion"
                label="Religion"
                lazy-rules
                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Religion']"
            />
            <q-input
                filled
                v-model="form.nationality"
                label="Nationality"
                lazy-rules
                :rules="[(val) => (val !== null && val !== '') || 'Please Enter your Nationality']"
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
                <div class="q-px-sm">
                    Your selection is: <strong>{{ form.proficiency_test ? "Yes" : "No" }}</strong>
                </div>
            </div>
            <div class="q-pa-md">
                <label>Person With Disability</label>
                <q-radio v-model="form.disability" :val="true" label="Yes" />
                <q-radio v-model="form.disability" :val="false" label="No" />
                <div class="q-px-sm">
                    Your selection is: <strong>{{ form.disability ? "Yes" : "No" }}</strong>
                </div>
                <q-file
                    v-model="form.attachment"
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
            <q-toggle
                v-model="third"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
                label="I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge and belief and nothing has been concealed therein. I understand that if the information given by me is proved false/not true, I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn."
            />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
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
import { ref } from "vue";

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
    community: "",
    religion: "",
    marital_status: "",
    nationality: "",
    qualification: "",
    proficiency_test: false,
    disability: false,
    attachment: "",
});

const submit = () => {
    form.proficiency_test = !!form.proficiency_test; // Ensure boolean
    form.disability = !!form.disability; // Ensure boolean

    form.post(route("applicant.details"), {
        onSuccess: () => {
            alert("Applicant created successfully!");
        },
    });
};
</script>
