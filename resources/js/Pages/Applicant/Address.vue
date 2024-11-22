<template>
    <q-page>
        <div class="q-pa-md">
            <h3 class="text-h5 text-primary">Address</h3>
            <q-form @submit.prevent="submit" class="q-gutter-md">
                <!-- Permanent Address Section -->
                <div class="q-mb-lg">
                    <h4 class="text-subtitle1 text-accent">Permanent Address</h4>
                    <q-input
                        v-model="form.permanent_house_no"
                        outlined
                        label="House No"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_street"
                        outlined
                        label="Street"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_locality"
                        outlined
                        label="Locality"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_landmark"
                        outlined
                        label="Landmark"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_city"
                        outlined
                        label="City"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_district"
                        outlined
                        label="District"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_state"
                        outlined
                        label="State"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.permanent_pin_code"
                        outlined
                        label="Pin Code"
                        lazy-rules
                        type="number"
                        maxlength="6"
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                </div>

                <!-- Checkbox for Copying Address -->
                <div class="q-mb-lg">
                    <q-checkbox
                        v-model="sameAsPermanent"
                        label="Same as Permanent Address"
                        class="q-mt-md"
                    />
                </div>

                <!-- Communication Address Section -->
                <div class="q-mb-lg">
                    <h4 class="text-subtitle1 text-accent">Communication Address</h4>
                    <q-input
                        v-model="form.communication_house_no"
                        outlined
                        label="House No"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_street"
                        outlined
                        label="Street"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_locality"
                        outlined
                        label="Locality"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_landmark"
                        outlined
                        label="Landmark"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_city"
                        outlined
                        label="City"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_district"
                        outlined
                        label="District"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_state"
                        outlined
                        label="State"
                        lazy-rules
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                    <q-input
                        v-model="form.communication_pin_code"
                        outlined
                        label="Pin Code"
                        lazy-rules
                        type="number"
                        maxlength="6"
                        :rules="[val => !!val || 'This field is required']"
                        class="q-mb-md"
                    />
                </div>

                <!-- Submit Button -->
                <div class="q-mt-lg">
                    <q-btn
                        class="q-mt-lg"
                        color="primary"
                        :label="submitButtonLabel"
                        @click="submit"
                    />
                </div>
            </q-form>
        </div>
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

    form.post(route(routeName, props.existingData?.id), {
        onSuccess: () => {
            alert(
                props.existingData
                    ? "Address updated successfully!"
                    : "Address saved successfully!"
            );
        },
        onError: (err) => {
            console.error(err);
        },
    });
};
</script>
