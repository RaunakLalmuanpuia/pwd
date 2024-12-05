
<template>
    <q-page padding>
        <div class="flex flex-inline items-center">
            <p class='page-title'>Edit Center</p>
            <q-space/>
            <q-breadcrumbs align="right" gutter="xs">
                <q-breadcrumbs-el :to="{name:'exam-center:read'}" label="Test center"/>
                <q-breadcrumbs-el label="Edit center"/>
            </q-breadcrumbs>
        </div>

        <q-form class="zcard q-pa-md" @reset="resetForm" @submit="handleSubmit">
            <div class="row q-col-gutter-sm">
                <div class="col-xs-12 primary-title">Test center detail</div>
                <div class="col-xs-12">
                    <q-input v-model="form.center_name"
                             class="my-input"
                             dense
                             label="Center Name"
                             outlined
                             :error="form.errors.hasOwnProperty('center_name')"
                             :error-message="form.errors?.center_name?.toString()"
                             @blur="delete form.errors['center_name']"
                             :rules="[
                             val=>!!val || 'Center name is required'
                           ]"
                    />
                </div>


                <div class="col-xs-12">
                    <q-input v-model="form.location"
                             class="my-input"
                             dense
                             label="Center Location"
                             outlined
                             :error="form.errors.hasOwnProperty('location')"
                             :error-message="form.errors?.location?.toString()"
                             @blur="delete form.errors['location']"
                             :rules="[
                 val=>!!val || 'Center Location is required'
               ]"
                    />
                </div>

                <div class="col-xs-12">
                    <q-input v-model="form.capacity"
                             mask="#####"
                             dense
                             class="my-input"
                             label="Capacity"
                             outlined
                             :error="form.errors.hasOwnProperty('capacity')"
                             :error-message="form.errors?.capacity?.toString()"
                             @blur="delete form.errors['capacity']"
                             :rules="[
                 val=>Number(val) || 'Capacity is required'
               ]"
                    />
                </div>
                <div class="col-xs-12">
                    <q-checkbox v-model="form.available" label="Availability"/>

                </div>
            </div>
            <div class=col-xs-12>
                <q-separator class="q-my-md"/>
            </div>
            <q-card-actions class="q-mt-md">
                <q-btn color="primary" flat type="submit" label="Save"/>
                <q-btn color="negative" flat type="reset" label="Reset"/>
            </q-card-actions>
        </q-form>
    </q-page>
</template>
<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { router, useForm, Link } from '@inertiajs/vue3';
defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    examCenters: Object,
});

const form = useForm({
    center_name: props.examCenters?.center_name,
    location: props.examCenters?.location,
    capacity: props.examCenters?.capacity,
    available: Boolean(props.examCenters?.available),

});


const handleSubmit = () => {
    form.put(route('exam_center.update', props.examCenters.id), {

    });
};

</script>

<style scoped>

</style>
