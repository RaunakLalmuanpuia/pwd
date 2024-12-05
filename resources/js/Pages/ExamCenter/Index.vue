<template>
    <q-page  padding>
        <p class="page-title">Exam Center</p>
        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-btn @click="$inertia.get(route('exam_center.create'))" rounded label="New center" color="primary"/>
                <q-input v-model="search" placeholder="Search" @keyup="handleSearch"  outlined dense>
                    <template v-slot:append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
            </div>
            <div class="col-12 zcard q-pa-md">
                <q-list  separator>
                    <q-item v-for="item in examCenters" :key="item.id" >
                        <q-item-section>
                            <q-item-label class="ztext">{{item.center_name}} </q-item-label>
                            <q-item-label class="ztext" caption>Capacity : {{item?.capacity}}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div class="flex flex-inline items-center q-gutter-sm">
                                <q-chip class="text-white" :color="item?.available===1?'positive':'negative'" square :label="item?.available===1?'OPEN':'CLOSE'"/>
                                <q-separator vertical/>
                                <q-btn-dropdown class="q-ma-none q-pa-sm" flat rounded dropdown-icon="more_vert">
                                    <q-list separator>
                                        <q-item @click="$inertia.get(route('exam_center.edit', item))" clickable>
                                            <q-item-section><q-item-label class="ztext">Edit</q-item-label></q-item-section>
                                        </q-item>
                                        <q-item @click="$inertia.delete(route('exam_center.destroy', item?.id))" clickable>
                                            <q-item-section><q-item-label class="ztext">Delete</q-item-label></q-item-section>
                                        </q-item>
                                    </q-list>

                                </q-btn-dropdown>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>

            </div>

        </div>

    </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})

const props = defineProps(['examCenters']);

const search = '';
</script>

<style scoped>

</style>
