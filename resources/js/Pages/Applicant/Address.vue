<template>
    <Head title="Address"/>
    <q-page padding>
        <q-form @submit.prevent="submit"  class="row q-col-gutter-sm">
            <div class="col-xs-12 primary-title">Applicant Address</div>
            <div class="col-xs-12">
                Permanent Address
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_house_no"
                    outlined
                    label="House No"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned

                    :error="!!form.errors?.permanent_house_no"
                    :error-message="form.errors?.permanent_house_no?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_street"
                    outlined
                    class="my-input"
                    dense
                    item-aligned
                    label="Street"
                    :error="!!form.errors?.permanent_street"
                    :error-message="form.errors?.permanent_street?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_locality"
                    outlined
                    label="Locality"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_locality"
                    :error-message="form.errors?.permanent_locality?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_landmark"
                    outlined
                    label="Landmark"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_landmark"
                    :error-message="form.errors?.permanent_landmark?.toString()"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_city"
                    outlined
                    label="City"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_city"
                    :error-message="form.errors?.permanent_city?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_district"
                    outlined
                    label="District"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_district"
                    :error-message="form.errors?.permanent_district?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_state"
                    outlined
                    label="State"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_state"
                    :error-message="form.errors?.permanent_state?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_pin_code"
                    outlined
                    label="Pin Code"
                    lazy-rules
                    type="number"
                    maxlength="6"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_pin_code"
                    :error-message="form.errors?.permanent_pin_code?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <!-- Checkbox for Copying Address -->

            <div class="col-xs-12 col-sm-6">
                <q-checkbox
                    class="my-input p-5"
                    dense

                    v-model="sameAsPermanent"
                    label="Same as Permanent Address"
                />
            </div>

            <div class="col-xs-12">
                <q-separator/>
            </div>

            <div class="col-xs-12">
                Communication Address
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_house_no"
                    outlined
                    label="House No"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_house_no"
                    :error-message="form.errors?.communication_house_no?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_street"
                    outlined
                    label="Street"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_street"
                    :error-message="form.errors?.communication_street?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_locality"
                    outlined
                    label="Locality"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_locality"
                    :error-message="form.errors?.communication_locality?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_landmark"
                    outlined
                    label="Landmark"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_landmark"
                    :error-message="form.errors?.communication_landmark?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_city"
                    outlined
                    label="City"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_city"
                    :error-message="form.errors?.communication_city?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_district"
                    outlined
                    label="District"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_district"
                    :error-message="form.errors?.communication_district?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_state"
                    outlined
                    label="State"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_state"
                    :error-message="form.errors?.communication_state?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_pin_code"
                    outlined
                    label="Pin Code"
                    lazy-rules
                    type="number"
                    maxlength="6"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_pin_code"
                    :error-message="form.errors?.communication_pin_code?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>



            <div class="col-xs-12 flex justify-center q-mt-lg">
                <q-btn  class="q-px-xl" color="primary" :label="submitButtonLabel" rounded @click="submit" type="submit"/>
            </div>



        </q-form>
    </q-page>


</template>
<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import {Head, useForm, usePage} from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";
import {useQuasar} from "quasar";


defineOptions({
    layout: ApplicantLayout,
});

const props = defineProps({
    existingData: Object,
});
const q = useQuasar();
const sameAsPermanent = ref(false);

// Temporary storage for original communication address
const originalCommunicationAddress = ref({
    communication_house_no: props.existingData?.communication_house_no || "",
    communication_street: props.existingData?.communication_street || "",
    communication_locality: props.existingData?.communication_locality || "",
    communication_landmark: props.existingData?.communication_landmark || "",
    communication_city: props.existingData?.communication_city || "",
    communication_district: props.existingData?.communication_district || "",
    communication_state: props.existingData?.communication_state || "",
    communication_pin_code: props.existingData?.communication_pin_code || "",
});

const form = useForm({
    permanent_house_no: props.existingData?.permanent_house_no || "",
    permanent_street: props.existingData?.permanent_street || "",
    permanent_locality: props.existingData?.permanent_locality || "",
    permanent_landmark: props.existingData?.permanent_landmark || "",
    permanent_city: props.existingData?.permanent_city || "",
    permanent_district: props.existingData?.permanent_district || "",
    permanent_state: props.existingData?.permanent_state || "",
    permanent_pin_code: props.existingData?.permanent_pin_code || "",
    communication_house_no: originalCommunicationAddress.value.communication_house_no,
    communication_street: originalCommunicationAddress.value.communication_street,
    communication_locality: originalCommunicationAddress.value.communication_locality,
    communication_landmark: originalCommunicationAddress.value.communication_landmark,
    communication_city: originalCommunicationAddress.value.communication_city,
    communication_district: originalCommunicationAddress.value.communication_district,
    communication_state: originalCommunicationAddress.value.communication_state,
    communication_pin_code: originalCommunicationAddress.value.communication_pin_code,
    country: props.existingData?.country || "India",
});

// Watch for changes to `sameAsPermanent`
watch(sameAsPermanent, (newValue) => {
    if (newValue) {
        // Copy permanent address to communication address
        form.communication_house_no = form.permanent_house_no;
        form.communication_street = form.permanent_street;
        form.communication_locality = form.permanent_locality;
        form.communication_landmark = form.permanent_landmark;
        form.communication_city = form.permanent_city;
        form.communication_district = form.permanent_district;
        form.communication_state = form.permanent_state;
        form.communication_pin_code = form.permanent_pin_code;
    } else {
        // Restore original communication address
        form.communication_house_no = "";
        form.communication_street = "";
        form.communication_locality = "";
        form.communication_landmark = "";
        form.communication_city = "";
        form.communication_district = "";
        form.communication_state = "";
        form.communication_pin_code = "";
    }
});

const submitButtonLabel = computed(() => {
    return props.existingData ? "Update Address" : "Submit Address";
});


const submit = () => {

    const routeName = props.existingData
        ? "applicant.address_update" // Update route
        : "applicant.address_store"; // Create route
    q.loading.show();
    form.post(route(routeName, props.existingData?.id), {
        onSuccess: (response) => {
            q.notify({
                type: 'positive',
                message: response?.props?.flash?.success || 'Successfully submitted!',
            });
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
.my-input .q-field--float .q-field__label {
    transform: translateY(-120%) translateX(-5px) scale(0.75);
    background: #fff;
    right: inherit;
    padding: 0 5px;
    z-index: 10;
}

</style>
