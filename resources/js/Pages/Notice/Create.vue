<template>
    <Head title="Posts" />

    <AdminLayout>

        <q-page padding>
            <p class="page-title">Notice</p>

            <q-form @reset="clear" @submit="handleSubmit" class="row zcard q-col-gutter-md q-pa-md">
                <div class="col-xs-12">
                    <q-input v-model="form.title" outlined  label="Title"
                             :rules="[
          val=>!!val || 'Title is required'
        ]"/>
                </div>
                <div class="col-xs-12">
                    <q-input label="Published Date" outlined v-model="form.published_at" mask="date" :rules="['date']">
                        <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="form.published_at">

                            </q-date>
                        </q-popup-proxy>
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">

                            </q-icon>
                        </template>
                    </q-input>
                </div>


                <div class="col-xs-12">
                    <q-file filled bottom-slots v-model="form.attachment" label="Attachment" max-file-size="4194304">
                        <template v-slot:hint>
                            Attachment must be less than 4mb
                        </template>

                        <template v-slot:append>
                            <q-btn round dense flat icon="add" @click.stop />
                        </template>
                    </q-file>
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
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
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
              'code'
            ]
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
              'size-7'
            ]
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
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
                        :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
                    />
                </div>

                <div class="col-xs-12">
                    <q-checkbox v-model="form.published" label="Published"/>
                </div>

                <div class="col-12">
                    <q-separator class="q-my-md"/>
                </div>
                <div class="col-12">
                    <q-btn type="reset"  flat label="Reset"/>
                    <q-btn :disable="form.content===''" type="submit" flat color="primary" label="Save"/>
                </div>
            </q-form>
        </q-page>

    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

// const departments = defineProps(["departments"]);

const form = useForm({
    title: '',
    content: '',
    published_at: '',
    published: true,
    attachment: null
});


const errors = ref({});

const addDocument = () => {
    form.documents.push({ name: "", is_mandatory: 1 });
};

const removeDocument = (index) => {
    form.documents.splice(index, 1);
};

const handleSubmit = () => {
    form.post(route('notice.store'), {
        onError: (err) => {
            errors.value = err;
        },
    });
};

</script>
