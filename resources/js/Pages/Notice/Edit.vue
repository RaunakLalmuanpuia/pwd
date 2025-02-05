<template>
    <q-page padding>
        <div class="flex flex-inline items-center">
            <p class="page-title">Edit Notice</p>
            <q-space />
            <q-breadcrumbs align="right" gutter="xs">
                <q-breadcrumbs-el
                    :to="{ name: 'job-profile:read' }"
                    label="Jobs"
                />
                <q-breadcrumbs-el label="Edit " />
            </q-breadcrumbs>
        </div>
        <q-form class="zcard q-pa-md" @reset="resetForm" @submit.prevent="submit">
            <div class="col-xs-12">
                <q-input
                    v-model="form.title"
                    outlined
                    label="Title"
                    :rules="[(val) => !!val || 'Title is required']"
                />
            </div>
            <div class="col-xs-12">
                <q-input
                    label="Published Date"
                    outlined
                    v-model="form.published_at"
                    mask="date"
                    :rules="['date']"
                >
                    <q-popup-proxy
                        ref="qDateProxy"
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                    >
                        <q-date v-model="form.published_at"> </q-date>
                    </q-popup-proxy>
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer"> </q-icon>
                    </template>
                </q-input>
            </div>



            <div class="col-12">
                <q-editor
                    v-model="form.content"
                    :dense="$q.screen.lt.md"
                    :toolbar="[
                        [
                            {
                                label: $q.lang.editor.align,
                                icon: $q.iconSet.editor.align,
                                fixedLabel: true,
                                list: 'only-icons',
                                options: ['left', 'center', 'right', 'justify'],
                            },
                            {
                                label: $q.lang.editor.align,
                                icon: $q.iconSet.editor.align,
                                fixedLabel: true,
                                options: ['left', 'center', 'right', 'justify'],
                            },
                        ],
                        [
                            'bold',
                            'italic',
                            'strike',
                            'underline',
                            'subscript',
                            'superscript',
                        ],
                        ['token', 'hr', 'link', 'custom_btn'],
                        ['print', 'fullscreen'],
                        [
                            {
                                label: $q.lang.editor.formatting,
                                icon: $q.iconSet.editor.formatting,
                                list: 'no-icons',
                                options: [
                                    'p',
                                    'h1',
                                    'h2',
                                    'h3',
                                    'h4',
                                    'h5',
                                    'h6',
                                    'code',
                                ],
                            },
                            {
                                label: $q.lang.editor.fontSize,
                                icon: $q.iconSet.editor.fontSize,
                                fixedLabel: true,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                    'size-1',
                                    'size-2',
                                    'size-3',
                                    'size-4',
                                    'size-5',
                                    'size-6',
                                    'size-7',
                                ],
                            },
                            {
                                label: $q.lang.editor.defaultFont,
                                icon: $q.iconSet.editor.font,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                    'default_font',
                                    'arial',
                                    'arial_black',
                                    'comic_sans',
                                    'courier_new',
                                    'impact',
                                    'lucida_grande',
                                    'times_new_roman',
                                    'verdana',
                                ],
                            },
                            'removeFormat',
                        ],
                        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                        ['undo', 'redo'],
                        ['viewsource'],
                    ]"
                    :fonts="{
                        arial: 'Arial',
                        arial_black: 'Arial Black',
                        comic_sans: 'Comic Sans MS',
                        courier_new: 'Courier New',
                        impact: 'Impact',
                        lucida_grande: 'Lucida Grande',
                        times_new_roman: 'Times New Roman',
                        verdana: 'Verdana',
                    }"
                />
            </div>

            <div class="col-xs-12">
                <q-checkbox v-model="form.published" label="Published" />
            </div>

            <div class="col-12">
                <q-separator class="q-my-md" />
            </div>
            <div class="col-12">
                <q-btn type="reset" flat label="Reset" />
                <q-btn
                    :disable="form.content === ''"
                    type="submit"
                    flat
                    color="primary"
                    label="Update"
                />
            </div>
        </q-form>
    </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { router, useForm, Link } from "@inertiajs/vue3";
import { reactive, ref } from "vue";
import { useQuasar } from "quasar";

defineOptions({
    layout: AdminLayout,
});
const q = useQuasar();
const props = defineProps({
    data: Object,
});

const state = reactive({
    submitting: false,
});

const form = useForm({
    title: props.data?.title,
    content: props.data?.content,
    published_at: props.data?.published_at,
    published: Boolean(props.data?.published)
});

console.log(form.documents);

const errors = ref({});

const submit = () => {
    axios
        .put(route("notice.update", props.data.id), form)
        .then((response) => {
            console.log(response.data);
            if (response.data.redirect) {
                window.location.href = response.data.redirect;
                q.notify({
                    message:
                        response.data.message || "Nptice updated successfully",
                    type: "positive",
                });
            } else {
                q.notify({
                    message:
                        response.data.message || "Notice updated successfully",
                    type: "positive",
                });
            }
        })
        .catch((error) => {
            q.notify({
                message: error.response?.data?.error || "An error occurred",
                type: "negative",
            });
        });
};


const handleDelete = () => {
    router.delete(route("notice.destroy", props.data.id), {
        preserveState: false,
        onStart: () => (state.submitting = true),
        onFinish: () => (state.submitting = false),
    });
};
// Function to format date
const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
};

function formatTime(time) {
    const [hours, minutes, seconds] = time.split(":");
    const date = new Date();
    date.setHours(hours, minutes, seconds);

    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString([], options);
}
// Edit button handler
const editExam = (id) => {
    console.log(`Edit exam with ID: ${id}`);
    // Trigger any edit logic or emit an event
};

const deleteExam = (id) => {
    router.delete(route("exam.destroy", id), {
        preserveState: false,
        onStart: (params) => (state.submitting = true),
        onFinish: (params) => (state.submitting = false),
    });
};
</script>
