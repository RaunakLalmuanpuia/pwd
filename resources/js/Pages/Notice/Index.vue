<template>
    <Head title="Posts" />

    <AdminLayout>
        <q-page class="container-lg" padding>
            <p class="page-title">Notices</p>

            <div class="q-pa-md">
                <div class="row q-col-gutter-md">
                    <div
                        class="flex zcard justify-between flex-inline col-12 q-pa-md"
                    >
                        <q-btn
                            @click="$inertia.get(route('notice.create'))"
                            rounded
                            label="New Notice"
                            color="primary"
                        />
                        <q-input
                            v-model="as"
                            placeholder="Search"
                            outlined
                            dense
                        >
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </div>

                    <div class="col-12"></div>
                    <div class="col-12 zcard q-pa-md">
                        <q-list separator>
                            <q-item v-for="item in notices" :key="item.id">
                                <!--                                {{item}}-->
                                <q-item-section>
                                    <q-item-label class="ztext" caption
                                    >Date :
                                        {{ formatDate(item?.published_at) }}</q-item-label
                                    >
                                    <q-item-label class="ztext"
                                    >{{ item?.title }}
                                    </q-item-label>

                                    <div class="text-weight-medium ztext">
                                        {{ item?.content }}
                                    </div>
                                    <!-- <div class="text-weight-medium ztext"> {{item?.content}}</div> -->
                                </q-item-section>
                                <q-item-section side>
                                    <div
                                        class="flex items-center flex-inline q-gutter-sm"
                                    >
                                        <div class="q-gutter-md">
                                            <q-btn
                                                @click="publish(item)"
                                                v-if="!item.published"
                                                color="primary"
                                                rounded
                                                label="Publish"
                                            />
                                            <q-btn
                                                @click="unpublish(item)"
                                                v-if="item.published"
                                                color="accent"
                                                rounded
                                                label="Unpublish"
                                            />
                                        </div>
                                        <q-separator vertical />
                                        <q-btn-dropdown
                                            color="q-ma-none q-pa-xs"
                                            flat
                                            rounded
                                            dropdown-icon="more_vert"
                                        >
                                            <q-list separator>
                                                <q-item
                                                    @click="
                                                        $inertia.get(
                                                            route(
                                                                'notice.edit',
                                                                item?.id
                                                            )
                                                        )
                                                    "
                                                    clickable
                                                >
                                                    <q-item-section
                                                    ><q-item-label
                                                        class="ztext"
                                                    >Edit</q-item-label
                                                    ></q-item-section
                                                    >
                                                </q-item>
                                                <q-item
                                                    @click="handleDelete(item)"
                                                    clickable
                                                >
                                                    <q-item-section
                                                    ><q-item-label
                                                        class="ztext"
                                                    >Delete</q-item-label
                                                    ></q-item-section
                                                    >
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
import AdminLayout from "@/Layouts/Admin.vue";
import { Head } from "@inertiajs/vue3";
// import {api} from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

const q = useQuasar();
const props = defineProps({
    notices: Object, // Define jobs prop as an array
});

const notices = ref(props.notices);
// const notices = reactive(props.notices);

console.log(props.jobs);
const publish = (item) => {
    q.loading.show();
    axios
        .put(`/notice/${item.id}/publish`)
        .then((res) => {
            const { message } = res.data;
            q.notify({ type: "positive", message });

            // Update the item's published state
            item.published = true;
        })
        .catch((err) => {
            console.error(err.response || err);
            q.notify({
                type: "negative",
                message: err.response?.data?.message || "Failed to publish",
            });
        })
        .finally(() => q.loading.hide());
};
const unpublish = (item) => {
    q.loading.show();
    axios
        .put(`/notice/${item.id}/unpublish`)
        .then((res) => {
            const { message } = res.data;
            q.notify({ type: "positive", message });

            // Update the item's published state
            item.published = false;
        })
        .catch((err) => {
            console.error(err.response || err);
            q.notify({
                type: "negative",
                message: err.response?.data?.message || "Failed to unpublish",
            });
        })
        .finally(() => q.loading.hide());
};
const deleteData = async (id) => {
    try {
        const res = await api.delete(`notice/${id}`);
        const { message, list } = res.data;
        updatePaginatedData(list); // Update UI with new data
        q.notify({ type: 'positive', message });
    } catch (err) {
        let message = err?.response?.data?.message || err.toString();
        q.notify({ type: 'negative', message });
    }
};

const handleDelete = (item) => {
    q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this notice?',
        cancel: true,
        persistent: true,
    })
        .onOk(() => {
            deleteData(item.id); // Call delete function on confirmation
        })
        .onCancel(() => {
            // User canceled the action
        })
        .onDismiss(() => {
            // Handles both OK and Cancel actions
        });
};

const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString(); // Format the date to a readable string
};
</script>
