<template>
    <q-page padding>
        <p class="page-title">Transactions</p>

        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-input  v-model="searchTerm" placeholder="Search" @keyup="handleSearch"  outlined dense>
                    <template v-slot:append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
<!--                <q-option-group-->
<!--                    :options="options"-->
<!--                    @update:model-value="filterTransaction"-->
<!--                    color="primary"-->
<!--                    inline-->
<!--                    v-model="localData.transactionType"-->
<!--                />-->

            </div>
<!--{{transactions}}-->
            <div class="col-12 zcard q-pa-md">
                <q-list  separator>
                    <q-item
                        v-for="item in transactions"
                        :key="item.id" >
                        <q-item-section>
                            <q-item-label class="ztext">{{item?.order_id ?? '--'}} </q-item-label>
                            <q-item-label class="ztext" caption>{{item?.voucher_date ?? '--' }} ( {{item?.transaction_id ?? ''}} )</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="flex flex-inline items-center justify-center q-gutter-sm">
                                <q-chip class="text-white" square :color="item.status==='TXN_SUCCESS'?'positive':'negative'" :label="item.status"/>
                                <q-separator vertical/>
                                <q-btn @click="$inertia.get(route('transaction.detail', { order_id: item.order_id}))" color="primary" flat label="Open"/>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="col-12">
<!--                    <q-pagination-->
<!--                        @update:model-value="updatePagination"-->
<!--                        v-model="localData.listData.current_page"-->
<!--                        :max="pageCount"-->
<!--                        input-->
<!--                    />-->
                </div>
            </div>

        </div>

    </q-page>
</template>
<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {ref} from "vue";

defineOptions({
    layout:AdminLayout
})


// const props = defineProps('transactions');

const props = defineProps(['transactions']);
const options=[
    {value:'Credit',label:'Credit'},
    {value:'Debit',label:'Debit'},
    {value:null,label:'Both'},
]

const searchTerm = ref('');

const pagination = ref({ page: 1, rowsPerPage: 10 });

</script>
