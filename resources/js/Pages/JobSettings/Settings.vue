<template>
    <q-page padding>
        <div class="row q-col-gutter-md">
            <p class="page-title">Job Settings for : {{ data?.post_name }}</p>
            <div class="col-xs-12">
<!--                {{data}}-->
                <q-separator class="q-my-sm"/>
            </div>
            <div class="col-xs-12 ztext">Availability to download Admit card</div>
            <div class="col-xs-12 col-sm-5">
                <q-input label="From"
                         v-model="form.from_admit_card"
                         class="my-input"
                         type="date"
                         outlined
                         dense
                         placeholder="From"
                         stack-label
                         :rules="[
                   val=>!!val || 'This field is required'
                 ]"

                />
            </div>
            <div class="col-xs-12 col-sm-5">
                <q-input label="To"
                         v-model="form.to_admit_card"
                         class="my-input"
                         type="date"
                         outlined
                         dense
                         placeholder="From"
                         stack-label
                         :rules="[
                   val=>!!val || 'This field is required'
                 ]"

                />
            </div>



            <div class="col-xs-12">
                <q-separator class="q-my-sm"/>
            </div>

            <div class="col-xs-12 col-sm-1">
                <q-btn color="primary"
                       @click="submit"
                       label="Apply"/>
            </div>



        </div>
    </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {useForm} from "@inertiajs/vue3";

defineOptions({
    layout:AdminLayout
})

const props =defineProps(['data', 'jobSetting'])



// const form = useForm({
//     from_admit_card: "",
//     to_admit_card: "",
//
// });

const form = useForm({
    from_admit_card: props.jobSetting?.from_admit_card || "",
    to_admit_card: props.jobSetting?.to_admit_card || "",
});


const submit = () => {
    form.post(route("settings.save", props.data.id));
};

</script>

<style scoped>

</style>
