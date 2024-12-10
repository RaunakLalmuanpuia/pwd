<template>
    <q-page padding>
        <p class="page-title">Transactions</p>

        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">

                <q-tabs
                    stretch
                    shrink
                    v-model="state.tab"
                    align="start"
                    @update:model-value="handleNavigation"
                >
                    <q-space/>
                    <q-input v-model="state.search"
                             autofocus
                             outlined
                             dense
                             @keyup.enter="handleSearch"
                             bg-color="white"
                             placeholder="Search"
                    >
                        <template #append>
                            <q-icon name="search"/>
                        </template>
                    </q-input>
                </q-tabs>

            </div>

            <div class="col-12 zcard q-pa-md">
                <q-list  separator>
                    <q-item
                        v-for="item in transactions.data"
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
                    <div class="flex q-gutter-sm">
                        <q-btn :disable="!!!transactions.prev_page_url" @click="$inertia.get(transactions.prev_page_url)" flat round icon="chevron_left"/>
                        <q-btn :disable="!!!transactions.next_page_url" @click="$inertia.get(transactions.next_page_url)" flat round icon="chevron_right"/>
                    </div>
                </div>
            </div>

        </div>

    </q-page>
</template>
<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {ref, reactive} from "vue";
import {router} from "@inertiajs/vue3";

defineOptions({
    layout:AdminLayout
})


// const props = defineProps('transactions');

const props = defineProps(['transactions', 'search']);

const options=[
    {value:'Credit',label:'Credit'},
    {value:'Debit',label:'Debit'},
    {value:null,label:'Both'},
]

const search = ref('');

const state=reactive({
    search:props?.search,
    tab: route().current(),
})

const handleSearch=e=>{
    router.get(route('transaction.index'), {
        search: state.search
    });
}

const handleNavigation=(value)=>{
    router.get(route(value))
}

</script>
