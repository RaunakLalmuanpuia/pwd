<template>
    <q-page padding>
        <p class="page-title">Users</p>

        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-btn @click="$inertia.get(route('user.create'))" rounded label="New user" color="primary"/>
                <q-input  v-model="search" placeholder="Search" @keyup="handleSearch"  outlined dense>
                    <template v-slot:append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
            </div>

            <div class="col-12 zcard q-pa-md">
                <q-list  separator>
                    <q-item v-for="item in users" :key="item.id" >
                        <q-item-section>
                            <q-item-label class="ztext">{{item?.name ?? '--'}} </q-item-label>
                            <q-item-label class="ztext" caption>{{item?.email ?? '--' }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="flex flex-inline items-center q-gutter-sm">
                                <q-chip v-for="role in item.roles"  :key="name" :label="role.name" />
                                <q-separator size="sm" vertical/>
                                <q-btn-dropdown class="q-ma-none q-pa-sm" flat rounded dropdown-icon="more_vert">
                                    <q-list separator>
                                        <q-item @click="$inertia.get(route('user.edit', item))" clickable>
                                            <q-item-section><q-item-label class="ztext">Edit</q-item-label></q-item-section>
                                        </q-item>
                                        <q-item @click="handleDelete(item)" clickable>
                                            <q-item-section><q-item-label class="ztext">Delete</q-item-label></q-item-section>
                                        </q-item>
                                    </q-list>

                                </q-btn-dropdown>
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
import {ref, watch} from 'vue';
import {router} from '@inertiajs/vue3'
import {useQuasar} from "quasar";

const q = useQuasar();
defineOptions({
    layout:AdminLayout
})

const search = ref('');
const props = defineProps(['users']);


const handleDelete=(item)=>{
    q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        q.loading.show(); // Show loading indicator
        router.delete(route('user.destroy', item), {
            onSuccess: () => {
                q.notify({
                    type: 'positive',
                    message: 'User deleted successfully',
                });
            },
            onError: (errors) => {
                q.notify({
                    type: 'negative',
                    message: errors?.message || 'Failed to delete user.',
                });
            },
            onFinish: () => {
                q.loading.hide(); // Hide loading indicator
            },
        });
    }).onCancel(() => {
        // console.log('>>>> Cancel')
    }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
    })
}
</script>

<style scoped>

</style>
