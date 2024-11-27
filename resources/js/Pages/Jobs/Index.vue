
<template>
    <Head title="Posts" />

    <AdminLayout>
        <q-page class="container-lg" padding>
            <p class="page-title">Job profiles</p>

            <div class=" q-pa-md">
                <div class="row q-col-gutter-md">
                    <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                        <q-btn @click="$inertia.get(route('job.create'))"  rounded label="New Job profile" color="primary"/>
                        <q-input v-model=" as" placeholder="Search"  outlined dense>
                            <template v-slot:append>
                                <q-icon name="search"/>
                            </template>
                        </q-input>
                    </div>

                    <div class="col-12">
                    </div>
                    <div class="col-12 zcard q-pa-md">
                        <q-list  separator>
                            <q-item v-for="item in jobs" :key="item.id" >
<!--                                {{item}}-->
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
<!--                            <q-pagination-->
<!--                                @update:model-value="updatePagination"-->
<!--                                v-model="localData.listData.current_page"-->
<!--                                :max="pageCount"-->
<!--                                input-->
<!--                            />-->
                        </div>
                    </div>

                </div>

            </div>
            <!--    <q-dialog @hide="localData.openCreate=false" v-model="localData.openCreate">-->
            <!--      <Create @onStaffCreated="onStaffCreated"/>-->
            <!--    </q-dialog>-->
            <!--    <q-dialog @hide="localData.openEdit=false" v-model="localData.openEdit">-->
            <!--      <Edit v-if="!!localData.selectedStaff" @onStaffUpdated="onStaffUpdated" :id="localData.selectedStaff?.id"/>-->
            <!--    </q-dialog>-->
        </q-page>
    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    jobs: Object // Define jobs prop as an array
});
console.log(props.jobs);
const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString(); // Format the date to a readable string
};
</script>
