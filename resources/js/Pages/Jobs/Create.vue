<template>
    <Head title="Posts" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">Posts</div>


<!--                    <div class="mb-4">-->
<!--                        <label for="job-title" class="block text-sm font-medium">Job Title</label>-->
<!--                        <input-->
<!--                            type="text"-->
<!--                            id="job-title"-->
<!--                            name="job-title"-->
<!--                            placeholder="Enter job title"-->
<!--                            class="w-full mt-1 p-2 border border-input rounded-md focus:outline-none focus:ring focus:ring-primary"-->
<!--                            required-->
<!--                        />-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        <label for="job-description" class="block text-sm font-medium">Job Description</label>-->
<!--                        <textarea-->
<!--                            id="job-description"-->
<!--                            name="job-description"-->
<!--                            placeholder="Enter job description"-->
<!--                            class="w-full mt-1 p-2 border border-input rounded-md focus:outline-none focus:ring focus:ring-primary"-->
<!--                            rows="4"-->
<!--                            required-->
<!--                        ></textarea>-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        <label for="job-type" class="block text-sm font-medium">Job Type</label>-->
<!--                        <select id="job-type" name="job-type" class="w-full mt-1 p-2 border border-input rounded-md focus:outline-none focus:ring focus:ring-primary" required>-->
<!--                            <option value="" disabled selected>Select job type</option>-->
<!--                            <option value="full-time">Full Time</option>-->
<!--                            <option value="part-time">Part Time</option>-->
<!--                            <option value="contract">Contract</option>-->
<!--                        </select>-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        <label for="job-location" class="block text-sm font-medium">Job Location</label>-->
<!--                        <input-->
<!--                            type="text"-->
<!--                            id="job-location"-->
<!--                            name="job-location"-->
<!--                            placeholder="Enter job location"-->
<!--                            class="w-full mt-1 p-2 border border-input rounded-md focus:outline-none focus:ring focus:ring-primary"-->
<!--                            required-->
<!--                        />-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        <label for="job-deadline" class="block text-sm font-medium">Application Deadline</label>-->
<!--                        <input type="date" id="job-deadline" name="job-deadline" class="w-full mt-1 p-2 border border-input rounded-md focus:outline-none focus:ring focus:ring-primary" required />-->
<!--                    </div>-->
<!--                    <div class="flex justify-end">-->
<!--                        <button type="submit" class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary">Post Job</button>-->
<!--                    </div>-->

                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="post_name" class="form-label">Post Name</label>
                            <input
                                type="text"
                                id="post_name"
                                v-model="form.post_name"
                                class="form-control"
                                :class="{ 'is-invalid': errors.post_name }"
                                required
                            />
                            <div v-if="errors.post_name" class="invalid-feedback">
                                {{ errors.post_name }}
                            </div>
                        </div>

<!--                        <div class="mb-3">-->
<!--                            <label for="department_id" class="form-label">Department</label>-->
<!--                            <select-->
<!--                                id="department_id"-->
<!--                                v-model="form.department_id"-->
<!--                                class="form-select"-->
<!--                                :class="{ 'is-invalid': errors.department_id }"-->
<!--                                required-->
<!--                            >-->
<!--                                <option v-for="department in departments" :key="department.id" :value="department.id">-->
<!--                                    {{ department.name }}-->
<!--                                </option>-->
<!--                            </select>-->
<!--                            <div v-if="errors.department_id" class="invalid-feedback">-->
<!--                                {{ errors.department_id }}-->
<!--                            </div>-->
<!--                        </div>-->

                        <div class="mb-3">
                            <label for="no_of_post" class="form-label">Number of Posts</label>
                            <input
                                type="text"
                                id="no_of_post"
                                v-model="form.no_of_post"
                                class="form-control"
                                :class="{ 'is-invalid': errors.no_of_post }"
                                required
                            />
                            <div v-if="errors.no_of_post" class="invalid-feedback">
                                {{ errors.no_of_post }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="salary" class="form-label">Salary</label>
                            <input
                                type="text"
                                id="salary"
                                v-model="form.salary"
                                class="form-control"
                                :class="{ 'is-invalid': errors.salary }"
                                required
                            />
                            <div v-if="errors.salary" class="invalid-feedback">
                                {{ errors.salary }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="age_limit" class="form-label">Age Limit</label>
                            <input
                                type="text"
                                id="age_limit"
                                v-model="form.age_limit"
                                class="form-control"
                                :class="{ 'is-invalid': errors.age_limit }"
                                required
                            />
                            <div v-if="errors.age_limit" class="invalid-feedback">
                                {{ errors.age_limit }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="qualification" class="form-label">Qualification</label>
                            <input
                                type="text"
                                id="qualification"
                                v-model="form.qualification"
                                class="form-control"
                                :class="{ 'is-invalid': errors.qualification }"
                                required
                            />
                            <div v-if="errors.qualification" class="invalid-feedback">
                                {{ errors.qualification }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="application_deadline" class="form-label">Application Deadline</label>
                            <input
                                type="date"
                                id="application_deadline"
                                v-model="form.application_deadline"
                                class="form-control"
                                :class="{ 'is-invalid': errors.application_deadline }"
                                required
                            />
                            <div v-if="errors.application_deadline" class="invalid-feedback">
                                {{ errors.application_deadline }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="application_fee" class="form-label">Application Fee</label>
                            <input
                                type="text"
                                id="application_fee"
                                v-model="form.application_fee"
                                class="form-control"
                                :class="{ 'is-invalid': errors.application_fee }"
                                required
                            />
                            <div v-if="errors.application_fee" class="invalid-feedback">
                                {{ errors.application_fee }}
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea
                                id="description"
                                v-model="form.description"
                                class="form-control"
                                :class="{ 'is-invalid': errors.description }"
                            ></textarea>
                            <div v-if="errors.description" class="invalid-feedback">
                                {{ errors.description }}
                            </div>
                        </div>

                        <div>
                            <h4>Required Documents</h4>
                            <div
                                v-for="(document, index) in form.documents"
                                :key="index"
                                class="document-item mb-3"
                            >
                                <div class="d-flex align-items-center">
                                    <input
                                        type="text"
                                        v-model="document.name"
                                        placeholder="Document Name"
                                        class="form-control me-2"
                                        required
                                    />
                                    <input
                                        type="text"
                                        v-model="document.description"
                                        placeholder="Document Description"
                                        class="form-control me-2"
                                        required
                                    />
                                    <select v-model="document.is_mandatory" class="form-select me-2">
                                        <option value="1">Mandatory</option>
                                        <option value="0">Optional</option>
                                    </select>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        @click="removeDocument(index)"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                class="btn btn-primary mt-2"
                                @click="addDocument"
                            >
                                Add Document
                            </button>
                        </div>

                        <button type="submit" class="btn btn-success mt-3">
                            Create Job Posting
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

// const departments = defineProps(["departments"]);

const form = useForm({
    post_name: "",
    department_id: 1,
    no_of_post: "",
    salary: "",
    age_limit: "",
    qualification: "",
    application_deadline: "",
    application_fee: "",
    description: "",
    documents: [],
});

const errors = ref({});

const addDocument = () => {
    form.documents.push({ name: "", is_mandatory: 1 });
};

const removeDocument = (index) => {
    form.documents.splice(index, 1);
};

const submitForm = () => {
    form.post(route('job.store'), {
        onError: (err) => {
            errors.value = err;
        },
    });
};

</script>
