
<template>
    <q-page padding>
        <div class="flex justify-between items-center">
            <p class="page-title">Transaction Details</p>
            <div>
                <q-btn @click="syncTransaction" v-if="canSync" label="Sync Transaction"/>
            </div>
        </div>


        <div class="row zcard q-pa-md full-print">

            <div class="col-xs-12">
                <p class="ztext ztext-md">Payment</p>
            </div>

            <div class="col-xs-12 col-sm-3 ztext">Status</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.transaction?.status || '' }}</div>
            <div class="col-xs-12 col-sm-3 ztext">Order ID</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.transaction?.order_id || '' }}</div>

            <div class="col-xs-12 col-sm-3 ztext">Transaction ID</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.transaction?.transaction_id }}</div>
            <div class="col-xs-12 col-sm-3 ztext">Date</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.transaction?.created_at }}</div>
            <div class="col-xs-12 col-sm-3 ztext">Amount</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.transaction?.amount }}</div>

            <div class="col-xs-12">
                <q-separator class="q-my-sm"/>
            </div>
            <div class="col-xs-12">
                <p class="ztext ztext-md">Application</p>
            </div>
<!--            {{localState.application}}-->
            <div class="col-xs-12 col-sm-3 ztext">Regn No</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.application?.application_id }}</div>

            <div class="col-xs-12 col-sm-3 ztext">Applicant</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.application.applicant.user?.name}}</div>

            <div class="col-xs-12 col-sm-3 ztext">District</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.application.applicant.user.address?.permanent_district }}</div>

            <div class="col-xs-12 col-sm-3 ztext">Applied Jobs</div>
            <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.application.job_detail?.post_name }} {{localState.application.job_detail?.description}}</div>

            <div class="col-xs-12">
                <q-separator class="q-my-sm"/>
            </div>

            <div class="col-xs-12 print-hide ">
                <q-btn color="primary" label="Print" rounded style="min-width: 120px" @click="print"/>
            </div>

        </div>

    </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {ref, computed} from "vue";
import {useQuasar} from "quasar";

const $q = useQuasar();

defineOptions({
    layout:AdminLayout
})

const data = defineProps(['transactions']);

const localState = ref({
    transaction: data.transactions,
    application: data.transactions.reference,
});

const canSync=computed(()=>{
    if (data.transactions?.status === 'TXN_FAILURE') {
        return false;
    }
    if (data.transactions?.status === 'TXN_SUCCESS') {
        return false;
    }
    return true;

})

const syncTransaction = () => {
    const order_id = data.transactions.order_id;

    $q.loading.show();

    axios
        .get(`/transaction/${order_id}/sync`)
        .then((response) => {
            const { transaction, application } = response.data;
            localState.value.transaction = transaction;
            localState.value.application = application;
            $q.notify({
                type: 'positive',
                message: 'Transaction synced successfully!',
            });
        })
        .catch((error) => {
            $q.notify({
                type: 'negative',
                message: error.response?.data?.message || error.toString(),
            });
        })
        .finally(() => {
            $q.loading.hide();
        });
};

</script>


<style scoped>

</style>
