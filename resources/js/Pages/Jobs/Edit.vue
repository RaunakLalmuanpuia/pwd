<template>
    <div class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow sm:rounded-lg">

                <div class="p-6">
                    <h3 class="text-lg font-medium text-gray-900 mb-6">Edit Job Details</h3>

                    <form @submit.prevent="submit">

                        <div class="mb-3">
                            <label for="post_name" class="block text-sm font-medium text-gray-700">Post Name</label>
                            <input
                                type="text"
                                id="post_name"
                                v-model="form.post_name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': errors.post_name }"
                                required
                            />
                            <div v-if="form.errors.post_name" class="input-error">
                                {{ form.errors.post_name }}
                            </div>
                        </div>



                        <div class="mb-3">
                            <label for="no_of_post" class="block text-sm font-medium text-gray-700">Number of Posts</label>
                            <input
                                type="text"
                                id="no_of_post"
                                v-model="form.no_of_post"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': form.errors.no_of_post }"
                                required
                            />
                            <div v-if="form.errors.no_of_post" class="input-error">
                                {{ form.errors.no_of_post }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="salary" class="block text-sm font-medium text-gray-700">Salary</label>
                            <input
                                type="text"
                                id="salary"
                                v-model="form.salary"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': errors.salary }"
                                required
                            />
                            <div v-if="form.errors.salary" class="input-error">
                                {{ form.errors.salary }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="age_limit" class="block text-sm font-medium text-gray-700">Age Limit</label>
                            <input
                                type="text"
                                id="age_limit"
                                v-model="form.age_limit"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': errors.age_limit }"
                                required
                            />
                            <div v-if="form.errors.age_limit" class="input-error">
                                {{ form.errors.age_limit }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="qualification" class="block text-sm font-medium text-gray-700">Qualification</label>
                            <input
                                type="text"
                                id="qualification"
                                v-model="form.qualification"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': form.errors.qualification }"
                                required
                            />
                            <div v-if="form.errors.qualification" class="input-error">
                                {{ form.errors.qualification }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="application_deadline" class="block text-sm font-medium text-gray-700">Application Deadline</label>
                            <input
                                type="date"
                                id="application_deadline"
                                v-model="form.application_deadline"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': form.errors.application_deadline }"
                                required
                            />
                            <div v-if="form.errors.application_deadline" class="input-error">
                                {{ form.errors.application_deadline }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="application_fee" class="block text-sm font-medium text-gray-700">Application Fee</label>
                            <input
                                type="text"
                                id="application_fee"
                                v-model="form.application_fee"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': form.errors.application_fee }"
                                required
                            />
                            <div v-if="form.errors.application_fee" class="input-error">
                                {{ form.errors.application_fee }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                v-model="form.description"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                :class="{ 'is-invalid': errors.description }"
                            ></textarea>
                            <div v-if="form.errors.description" class="input-error">
                                {{ form.errors.description }}
                            </div>
                        </div>

                        <div>
                            <h4 class="text-sm font-medium text-gray-700 mb-3">Required Documents</h4>
                            <div
                                v-for="(document, index) in form.documents"
                                :key="index"
                                class="flex space-x-4 items-center mb-3"
                            >
                                <input
                                    type="hidden"
                                    v-model="document.id"
                                />
                                <input
                                    type="text"
                                    v-model="document.name"
                                    placeholder="Document Name"
                                    class="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                                <input
                                    type="text"
                                    v-model="document.description"
                                    placeholder="Document Description"
                                    class="flex-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                                <select
                                    v-model="document.is_mandatory"
                                    class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="1">Mandatory</option>
                                    <option value="0">Optional</option>
                                </select>
                                <button
                                    type="button"
                                    class="text-red-600 hover:text-red-800"
                                    @click="removeDocument(index)"
                                >
                                    Remove
                                </button>
                            </div>
                            <button
                                type="button"
                                class="text-indigo-600 hover:text-indigo-800"
                                @click="addDocument"
                            >
                                Add Document
                            </button>
                        </div>



                        <!--                        <button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">-->
                        <!--                            Create Job Posting-->
                        <!--                        </button>-->
                        <div class="col-xs-12">
                            <div class="flex q-gutter-sm">
                                <q-btn class="sized-btn" color="primary" label="Update" type="submit"/>
                                <q-btn class="sized-btn" color="negative" label="Cancel" outline
                                       @click="$inertia.replace(route('job.index'))"/>
                                <div>
                                    <q-btn @click="handleDelete" class="sized-btn" color="negative" outline label="Delete"/>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>


        </div>
    </div>






</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { router, useForm } from '@inertiajs/vue3';
import {reactive, ref} from 'vue';
import { useQuasar } from 'quasar';

defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    data: Object,
});

const state = reactive({
    submitting: false
});

const form = useForm({
    post_name: props.data?.post_name,
    department_id: props.data?.department_id,
    no_of_post: props.data?.no_of_post,
    salary: props.data?.salary,
    age_limit: props.data?.age_limit,
    qualification: props.data?.qualification,
    application_deadline: props.data?.application_deadline,
    application_fee: props.data?.application_fee,
    description: props.data?.description,
    documents: props.data?.documents.map(doc => ({
        id: doc.id,
        job_detail_id: doc.job_detail_id,
        name: doc.document_name, // Map to `name`
        description: doc.document_description, // Map to `description`
        is_mandatory: doc.is_mandatory,
    })) || [],
});

console.log(form.documents);

const errors = ref({});
const addDocument = () => {
    form.documents.push({
        name: '',
        description: '',
        is_mandatory: 1,
    });
};

const removeDocument = (index) => {
    form.documents.splice(index, 1);
};

const submit = () => {
    // form.put(route('job.update', props.data.id), {
    //     preserveState: false,
    //     onStart: () => state.submitting = true,
    //     onFinish: () => state.submitting = false,
    //     onError: (err) => {
    //         errors.value = err;
    //     },
    // });
    form.put(route('job.update', props.data.id), {
        onError: (err) => {
            errors.value = err;
        },
    });
};


const handleDelete = () => {
    router.delete(route('job.destroy',props.data.id),{
        preserveState:false,
        onStart: () => state.submitting = true,
        onFinish: () => state.submitting = false
    })
};
</script>
