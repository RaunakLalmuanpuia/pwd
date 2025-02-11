<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
// import AdminLayout from '@/Layouts/AdminLayout.vue';
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';

import DistrictWiseApplication from "@/Components/charts/DistrictWiseApplication.vue";
import JobWiseApplication from "@/Components/charts/JobWiseApplication.vue";
import JobWiseDistrictApplication from "@/Components/charts/JobWiseDistrictApplication.vue";

</script>

<template>
    <Head title="Admin Dashboard" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>
        </template>

        <q-page padding>

<!--        <div class="py-12">-->
<!--            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
<!--                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">-->
<!--                    <div class="p-6 text-gray-900">You're logged in!</div>-->
<!--                </div>-->

<!--                <div class="row q-col-gutter-md">-->
<!--                    <div class="col-xs-12 col-sm-8">-->
<!--                        <div class="zcard q-pa-md">-->
<!--                            <DistrictWiseApplication/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-xs-12 col-sm-4">-->
<!--                        <div class="zcard q-pa-md">-->
<!--                            <JobWiseApplication/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-xs-12">-->
<!--                        <div class="zcard q-pa-md">-->
<!--                            <JobWiseDistrictApplication/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <div class="row">
                <div class="col-xs-12 flex">
                    <q-img class="q-ma-sm"  src="/images/pwd_logo.png" width="120px"/>
                    <div class="column justify-center">
                        <div class="primary-title">WELCOME!</div>
                        <div class="ztext-lg text-accent text-weight-medium">PUBLIC WORKS DEPARTMENT, MIZORAM RECRUITMENT</div>
                        <div class="text-dark">{{ $page.props.auth.user?.name || '--' }}</div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-8">
                    <div class="zcard q-pa-md">
                        <DistrictWiseApplication/>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                    <div class="zcard q-pa-md">
                        <JobWiseApplication/>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="zcard q-pa-md">
                        <JobWiseDistrictApplication/>
                    </div>
                </div>
            </div>



        </div>
        </q-page>
    </AdminLayout>
</template>


<style scoped>

.primary-title {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: normal;
    color: $primary;
}

.ztext-lg{
    font-size: 21px;
}
</style>
