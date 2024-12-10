
<template>
    <Head title="Posts" />

    <AdminLayout>
        <q-page class="container-lg" padding>
            <p class="page-title">Job profiles</p>

            <div class=" q-pa-md">
                <div class="row q-col-gutter-md">
                    <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                        <q-btn @click="$inertia.get(route('job.create'))"  rounded label="New Job profile" color="primary"/>
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
                                <template v-slot:append>
                                    <q-icon name="search"/>
                                </template>
                            </q-input>
                        </q-tabs>
                    </div>

                    <div class="col-12">
                    </div>
                    <div class="col-12 zcard q-pa-md">
                        <q-list  separator>
                            <q-item v-for="item in jobs.data" :key="item.id" >
                                <q-item-section>
                                    <q-item-label class="ztext">{{item?.post_name}} </q-item-label>
                                    <q-item-label class="ztext" caption>Fee : {{ item?.application_fee}}</q-item-label>
                                    <div class="text-weight-medium ztext">POST : {{item?.no_of_post}}</div>

                                </q-item-section>
                                <q-item-section side>
                                    <div class="flex items-center flex-inline q-gutter-sm">
                                        <q-chip class="text-white" :color="item?.active === 1?'positive':'negative'" square :label="item?.active === 1 ? 'Active' : 'Inactive'"/>
                                        <q-separator vertical/>
                                        <q-btn-dropdown color="q-ma-none q-pa-xs"  flat rounded dropdown-icon="more_vert">
                                            <q-list separator>
                                                <q-item @click="$inertia.get(route('job.edit', item?.id))" clickable>
                                                    <q-item-section><q-item-label class="ztext">Edit</q-item-label></q-item-section>
                                                </q-item>
                                                <q-item @click="$inertia.delete(route('job.destroy', item?.id))" clickable>
                                                    <q-item-section><q-item-label class="ztext">Delete</q-item-label></q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-btn-dropdown>
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <div class="col-12">
                            <div class="flex q-gutter-sm">
                                <q-btn :disable="!!!jobs.prev_page_url" @click="$inertia.get(jobs.prev_page_url)" flat round icon="chevron_left"/>
                                <q-btn :disable="!!!jobs.next_page_url" @click="$inertia.get(jobs.next_page_url)" flat round icon="chevron_right"/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </q-page>
    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';
import {ref, reactive} from "vue";
import {router} from "@inertiajs/vue3";

const props = defineProps(['jobs','search']);

const search = ref('');

const state=reactive({
    search:props?.search,
    tab: route().current(),
})

const handleSearch=e=>{
    router.get(route('job.index'), {
        search: state.search
    });

}

const handleNavigation=(value)=>{
    router.get(route(value))
}

</script>
