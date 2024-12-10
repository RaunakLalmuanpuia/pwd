<template>
    <q-page  padding>
        <p class="page-title">Exam Center</p>
        <div class="row q-gutter-md">
            <div class="flex zcard justify-between flex-inline col-12 q-pa-md">
                <q-btn @click="$inertia.get(route('exam_center.create'))" rounded label="New center" color="primary"/>
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
            <div class="col-12 zcard q-pa-md">
                <q-list  separator>
                    <q-item v-for="item in examCenters.data" :key="item.id" >
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
                <div class="col-12">

                    <div class="flex q-gutter-sm">
                        <q-btn :disable="!!!examCenters.prev_page_url" @click="$inertia.get(examCenters.prev_page_url)" flat round icon="chevron_left"/>
                        <q-btn :disable="!!!examCenters.next_page_url" @click="$inertia.get(examCenters.next_page_url)" flat round icon="chevron_right"/>
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

const props = defineProps(['examCenters','search']);
const search = ref('');

const state=reactive({
    search:props?.search,
    tab: route().current(),
})

const handleSearch=e=>{
    router.get(route('exam_center.index'), {
        search: state.search
    });

}

const handleNavigation=(value)=>{
    router.get(route(value))
}

</script>

<style scoped>

</style>
