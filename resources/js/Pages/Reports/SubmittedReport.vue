

<template>

    <q-toolbar class="card justify-center">
        <q-tabs>
                <q-item clickable v-ripple
                        :active="route().current()==='report.submitted'"
                        :class="{ 'q-item--active': route().current() === 'report.submitted' }"
                        @click="$inertia.get(route('report.submitted'))">
                    <q-item-section>
                        APPLICATIONS
                    </q-item-section>
                </q-item>


                <q-item clickable v-ripple
                        :class="{ 'q-item--active': route().current() === 'report.writtenExam' }"
                        :active="route().current()==='report.writtenExam'"
                        @click="$inertia.get(route('report.writtenExam'))">
                    <q-item-section>
                        WRITTEN EXAM
                    </q-item-section>
                </q-item>

            <q-route-tab
                replace
                :to="{name:'report:interview'}"
                label="Interview"
            />
        </q-tabs>
    </q-toolbar>
    <q-page padding>


        <p class="q-ma-none page-title py-3"> Applications</p>
        <br/>
        <q-form @submit="onFilter" class="row  q-col-gutter-md q-pa-md">
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.posts"
                    outlined
                    class="my-input"
                    dense
                    :options="posts"
                    clearable
                    label="Post"
                />
            </div>

            <div class="col-xs-12 col-sm-6 ">
                <q-select
                    v-model="form.status"
                    outlined
                    class="my-input"
                    dense
                    label="Application Status"
                    :options="statuses"
                    :rules="[
                      val=>!!val || 'Status is required'
                    ]"
                />
            </div>
            <div class="col-xs-12 col-sm-6"/>
            <div class="col-xs-12">
                <p class="ztext q-ma-none">optional</p>
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.state"
                    @update:model-value="onStateChange"
                    outlined
                    class="my-input"
                    dense
                    :options="states"
                    clearable
                    label="State"
                />
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.district"
                    outlined
                    class="my-input"
                    dense
                    :options="districts"
                    clearable
                    label="District"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.gender"
                    outlined
                    class="my-input"
                    dense
                    :options="genders"
                    clearable
                    label="Gender"
                />
            </div>

            <div class="col-xs-12">
                <q-separator/>
            </div>
            <div class="col-xs-12">
                <q-btn type="submit" color="primary" rounded label="Generate"/>
            </div>
        </q-form>
    </q-page>

</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { ref } from 'vue';

// Declare the reactive `tab` variable
const tab = ref('mails');

defineOptions({
    layout:AdminLayout
})

import {useForm, usePage} from "@inertiajs/vue3";

const page = usePage();
const form = useForm({
    status:'',
    state:'',
    district:'',
    gender:'',
    posts:'',

})


const statuses=[
    {value:['VERIFIED'],label:'Verified'},
    {value:['REJECTED'],label:'Rejected'},
    {value:['SUBMITTED'],label:'Submitted'},
    {value:['VERIFIED','REJECTED','SUBMITTED'],label:'All'},
]
const genders=[
    {value:'Male',label:'Male'},
    {value:'Female',label:'Female'},

]

const posts=[
    {value:'LDC',label:'LDC'},
    {value:'UDC',label:'UDC'},

]
</script>


<style scoped>

.card {
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #dedede;
    background-color: #fff;
}
.underline-active {
    text-decoration: underline;
}
.q-item--active {
    border-bottom: 2px solid #027be3; /* Blue color for active state, adjust as needed */
    font-weight: bold; /* Optional: to make active item stand out more */
}
</style>
