<template>
    <q-page padding>
        <div class="full-print flex justify-center items-center">
            <div style="max-width: 480px" class="row zcard q-pa-md">
                <div class="col-xs-12">
                    <p class="ztext ztext-md">Payment Detail</p>
                </div>

                <div class="col-xs-12 col-sm-3 ztext">Status</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">
                    {{ localState.resultInfo?.resultStatus === 'TXN_SUCCESS' ? 'Success' : 'Failed' }}
                </div>
                <div class="col-xs-12 col-sm-3 ztext">Message</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.resultInfo?.resultMsg || '' }}</div>
                <div class="col-xs-12 col-sm-3 ztext">Transaction ID</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.txnId }}</div>
                <div class="col-xs-12 col-sm-3 ztext">Date</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState?.txnDate }}</div>
                <div class="col-xs-12 col-sm-3 ztext">Amount</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState?.txnAmount }}</div>

                <div class="col-xs-12">
                    <q-separator class="q-my-sm" />
                </div>

                <div class="col-xs-12">
                    <p class="ztext ztext-md">Application</p>
                </div>
                <div class="col-xs-12 col-sm-3 ztext">Regn No</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.reference?.application_id }}</div>
                <div class="col-xs-12 col-sm-3 ztext">Applicant</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.reference?.applicant?.user?.name }}</div>
                <div class="col-xs-12 col-sm-3 ztext">District</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.reference?.applicant?.user?.address?.permanent_district }}</div>
                <div class="col-xs-12 col-sm-3 ztext">Applied Jobs</div>
                <div class="col-xs-12 col-sm-9 text-weight-medium">{{ localState.reference?.job_detail?.post_name }} / {{localState.reference?.job_detail?.department.name}} </div>

                <div class="col-xs-12">
                    <q-separator class="q-my-sm" />
                </div>

                <div class="col-xs-12 print-hide">
                    <q-btn @click="print" style="min-width: 120px" color="primary" rounded label="Print" />
                    <q-btn
                        v-if="localState.resultInfo?.resultStatus !== 'TXN_SUCCESS'"
                        class="q-ml-sm"
                        @click="retry"
                        style="min-width: 120px"
                        color="primary"
                        outline
                        rounded
                        label="Retry"
                    />
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { reactive, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios';
// import { useRoute, useRouter } from 'vue-router';
import {router, usePage} from '@inertiajs/vue3'

const q = useQuasar();
const page = usePage(); // Access Inertia props
// const route = useRoute();
// const router = router();

defineOptions({
    layout:ApplicantLayout
})
const localState = reactive({
    resultInfo: {},
    txnId: '',
    txnAmount: '',
    txnDate: '',
    reference: {},
});


const openTransaction = async (order_id) => {
    q.loading.show();
    try {
        const { data } = await axios.get(route('transaction.checkStatus', { order_id }));
        const { body, reference } = data;

        Object.assign(localState.resultInfo, body.resultInfo);
        localState.txnId = body.txnId;
        localState.txnAmount = body.txnAmount;
        localState.txnDate = body.txnDate;
        localState.reference = reference;
    } catch (error) {
        q.notify({
            type: 'negative',
            message: error.response?.data?.message || error.message,
        });
    } finally {
        q.loading.hide();
    }
};

const retry = () => {
    if (localState.resultInfo?.resultStatus !== 'TXN_SUCCESS') {
        router.get(route('application.viewApplicationDraft', localState.reference.job_detail.id));
    }
};

// const print = () => window.print();
const print = () => {
    // Get the content of the specific div
    const contentToPrint = document.querySelector('.full-print').innerHTML;

    // Open a new window or tab for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.open();

    // Write the content for printing
    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
            <link rel="stylesheet" href="${document.querySelector('link[rel="stylesheet"]').href}" />
            <style>
                @media print {
                    .print-hide {
                        display: none; /* Hide elements with the "print-hide" class */
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .full-print {
                        width: 100%;
                        position: static;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column; /* Ensure correct layout */
                    }
                    .ztext {
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .text-weight-medium {
                        font-weight: 500;
                    }
                    .q-my-sm {
                        margin: 1em 0;
                    }
                }
            </style>
        </head>
        <body>${contentToPrint}</body>
        </html>
    `);

    printWindow.document.close();

    // Trigger the print dialog
    printWindow.print();
};


onMounted(() => {
    const order_id = page.props.order_id; // Retrieve order_id from Inertia props
    if (order_id) {
        openTransaction(order_id);
    } else {
        console.error('Order ID is missing.');
    }
});
</script>

<style>
@media print {
    .full-print {
        position: absolute;
        top: 10px;
        padding: 0;
        margin: 0;
        width: 100vw;
    }
    .print-container {
        position: absolute;
        top: 10px;
    }
}
</style>
