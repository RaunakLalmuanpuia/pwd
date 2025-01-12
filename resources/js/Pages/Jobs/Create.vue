<template>
    <Head title="Posts" />

    <AdminLayout>

        <q-page padding>
            <div class="flex flex-inline items-center">
                <p class='page-title'>New Job profile</p>
                <q-space/>
                <q-breadcrumbs align="right" gutter="xs">
                    <q-breadcrumbs-el :to="{name:'job-profile:read'}" label="Jobs profile"/>
                    <q-breadcrumbs-el label="New Job profile"/>
                </q-breadcrumbs>
            </div>

            <q-form class="zcard q-pa-md"  @reset="resetForm" @submit="handleSubmit">
                <div class="row q-col-gutter-sm">
                    <div class="col-xs-12 primary-title q-my-md">Job  profile</div>
                    <div class="col-xs-12">
                        <q-input v-model="form.code"
                                 class="my-input"
                                 dense
                                 label="Code"
                                 outlined
                                 :error="form.errors.hasOwnProperty('code')"
                                 :error-message="form.errors?.code?.toString()"
                                 @blur="delete form.errors['code']"
                                 :rules="[
                                 val=>!!val || 'Code is required'
                               ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.post_name"
                                 class="my-input"
                                 dense
                                 label="Name"
                                 outlined
                                 :error="form.errors.hasOwnProperty('post_name')"
                                 :error-message="form.errors?.post_name?.toString()"
                                 @blur="delete form.errors['post_name']"
                                 :rules="[
                 val=>!!val || 'Name is required'
               ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-select v-model="form.department"
                                  :error="!!form.errors?.department"
                                  :error-message="form.errors?.department?.toString()"
                                  :options="departments"
                                  bg-color="white"
                                  label="Department"
                                  outlined
                                  :rules="[
                                 val=>!!val || 'Department is required'
                               ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-select v-model="form.category"
                                  class="my-input"
                                  :options="['A','B', 'C', 'D']"
                                  dense
                                  label="Group"
                                  outlined
                                  :error="form.errors.hasOwnProperty('category')"
                                  :error-message="form.errors?.category?.toString()"
                                  @blur="delete form.errors['category']"
                                  :rules="[
                                 val=>!!val || 'Group is required'
                               ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.description"
                                 class="my-input"
                                 dense
                                 label="Description"
                                 outlined
                                 :error="form.errors.hasOwnProperty('description')"
                                 :error-message="form.errors?.description?.toString()"
                                 @blur="delete form.errors['description']"
                                 :rules="[
                                 val=>!!val || 'Description is required'
                               ]"
                        />
                    </div>


                    <div class="col-xs-12">
                        <q-input v-model="form.salary"
                                 class="my-input"
                                 dense
                                 label="Salary"
                                 outlined
                                 :error="form.errors.hasOwnProperty('salary')"
                                 :error-message="form.errors?.salary?.toString()"
                                 @blur="delete form.errors['salary']"
                                 :rules="[
                                 val=>!!val || 'Salary is required'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.no_of_post"
                                 class="my-input"
                                 dense
                                 label="POST"
                                 outlined
                                 :error="form.errors.hasOwnProperty('no_of_post')"
                                 :error-message="form.errors?.no_of_post?.toString()"
                                 @blur="delete form.errors['no_of_post']"
                                 :rules="[
                                 val=>Number(val) || 'Post must be number'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.application_deadline"
                                 class="my-input"
                                 dense
                                 type="date"
                                 label="Application Deadline"
                                 outlined
                                 :error="form.errors.hasOwnProperty('application_deadline')"
                                 :error-message="form.errors?.application_deadline?.toString()"
                                 @blur="delete form.errors['application_deadline']"
                                 :rules="[
                                 val=>!!val || 'Deadline is required'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.upper_age_limit"
                                 class="my-input"
                                 dense
                                 label="Upper Age Limit"
                                 outlined
                                 :error="form.errors.hasOwnProperty('upper_age_limit')"
                                 :error-message="form.errors?.upper_age_limit?.toString()"
                                 @blur="delete form.errors['upper_age_limit']"
                                 :rules="[
                                 val=>Number(val) || 'Age must be number'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.lower_age_limit"
                                 class="my-input"
                                 dense
                                 label="Lower Age Limit"
                                 outlined
                                 :error="form.errors.hasOwnProperty('lower_age_limit')"
                                 :error-message="form.errors?.lower_age_limit?.toString()"
                                 @blur="delete form.errors['lower_age_limit']"
                                 :rules="[
                                 val=>Number(val) || 'Age must be number'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.age_relaxation"
                                 class="my-input"
                                 dense
                                 label="Age Relaxation"
                                 outlined
                                 :error="form.errors.hasOwnProperty('age_relaxation')"
                                 :error-message="form.errors?.age_relaxation?.toString()"
                                 @blur="delete form.errors['age_relaxation']"
                                 :rules="[
                                 val=>Number(val) || 'Age must be number'
                               ]"
                        />
                    </div>

                    <div class="col-xs-12">
                        <q-input v-model="form.application_fee_other"
                                 class="my-input"
                                 dense
                                 label="Fee for SC/ST/OBC"
                                 outlined
                                 :error="form.errors.hasOwnProperty('application_fee_other')"
                                 :error-message="form.errors?.application_fee_other?.toString()"
                                 @blur="delete form.errors['application_fee_other']"
                                 :rules="[
                             val=>Number(val) || 'Fee must be number'
                           ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.application_fee_general"
                                 class="my-input"
                                 dense
                                 label="Fee for General"
                                 outlined
                                 :error="form.errors.hasOwnProperty('application_fee_general')"
                                 :error-message="form.errors?.application_fee_general?.toString()"
                                 @blur="delete form.errors['application_fee_general']"
                                 :rules="[
                             val=>Number(val) || 'Fee must be number'
                           ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-select v-model="form.qualification"
                                  class="my-input"
                                  :options="['Class 8','HSLC', 'HSSLC', 'Graduate', 'Post Graduate', 'PhD']"
                                  dense
                                  label="Minimum Qualification"
                                  outlined
                                  :error="form.errors.hasOwnProperty('qualification')"
                                  :error-message="form.errors?.qualification?.toString()"
                                  @blur="delete form.errors['qualification']"
                                  :rules="[
                                     val=>!!val || 'Please select Qualification'
                                   ]"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-select v-model="form.mizo_proficiency"
                                  class="my-input"
                                  :options="['Class VII','Class X']"
                                  dense
                                  label="Mizo Proficiency"
                                  outlined
                                  :error="form.errors.hasOwnProperty('mizo_proficiency')"
                                  :error-message="form.errors?.mizo_proficiency?.toString()"
                                  @blur="delete form.errors['mizo_proficiency']"
                                  :rules="[
                                     val=>!!val || 'Please select Mizo Proficiency'
                                   ]"
                        />
                    </div>




                    <div class=col-xs-12>
                        <q-separator class="q-my-md"/>
                    </div>

                    <div>
                        <h4 class="text-sm font-medium text-gray-700 mb-3">Required Documents</h4>
                        <div
                            v-for="(document, index) in form.documents"
                            :key="index"
                            class="flex space-x-4 items-center mb-3"
                        >

                            <input
                                type="text"
                                v-model="document.name"
                                placeholder="Document Name"
                                class="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
<!--                            <input-->
<!--                                type="text"-->
<!--                                v-model="document.description"-->
<!--                                placeholder="Document Description"-->
<!--                                class="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"-->
<!--                                required-->
<!--                            />-->
                            <select v-model="document.is_mandatory"  class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option value="1">Mandatory</option>
                                <option value="0">Optional</option>
                            </select>

                            <q-btn round color="red" style="font-size: 12px;" @click="removeDocument(index)" icon="delete" />

                        </div>
                    </div>


                    <div class="col-xs-12">
                        <q-btn outline color="primary" @click="addDocument">
                            Add Document
                        </q-btn>
                    </div>
                    <div class=col-xs-12>
                        <q-separator class="q-my-md"/>
                    </div>

                    <div class="col-xs-12">
                        <q-radio v-model="form.active" val="true" label="Open" />
                        <q-radio v-model="form.active" val="false" label="Closed" />
                    </div>
                </div>
                <div class=col-xs-12>
                    <q-separator class="q-my-md"/>
                </div>

                <q-card-actions class="q-mt-md">
                    <q-btn color="primary" flat type="submit" label="Save"/>
                    <q-btn color="negative" flat type="reset" label="Reset"/>
                </q-card-actions>
            </q-form>
        </q-page>

    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';
import { ref, reactive } from "vue";
import { useForm } from "@inertiajs/vue3";


// const props = defineProps(['roles','offices'])
const props = defineProps(["departments"]);

const form = useForm({
    code: "",
    post_name: "",
    department:null,
    no_of_post: "",
    category:'',
    salary: "",
    upper_age_limit:"",
    lower_age_limit:"",
    age_relaxation: "",
    qualification: "",
    application_deadline: "",
    application_fee_other: "",
    application_fee_general: "",
    description: "",
    mizo_proficiency:"",
    active: false,
    documents: [],
});

const state = reactive({
    submitting: false,
    toggle:'password'
})


const errors = ref({});

const addDocument = () => {
    form.documents.push({ name: "", is_mandatory: 1 });
};

const removeDocument = (index) => {
    form.documents.splice(index, 1);
};

// const handleSubmit = () => {
//     form.post(route('job.store'), {
//         onError: (err) => {
//             errors.value = err;
//         },
//     });
// };

const handleSubmit = e => {
    form.transform(data => ({department_id: data?.department?.value, ...data}))
        .post(route('job.store'), {
            onStart: params => state.submitting = true,
            onFinish: params => state.submitting = false
        })
}
</script>
