<template>

        <div class="flex justify-between items-center">
            <div>
                <div class="text-title">Edit Job Posting</div>
            </div>
            <div>
                <q-btn @click="handleDelete" class="sized-btn" color="negative" outline label="Delete"/>
            </div>
        </div>

<!--    {{form.documents}}-->
        <q-separator class="q-my-sm"/>
    <q-form class="row q-col-gutter-sm" style="max-width: 720px" @submit="submit">
        <div class="col-xs-12">
            <q-input v-model="form.post_name"
                     :error="!!form.errors?.post_name"
                     :error-message="form.errors?.post_name?.toString()"
                     :rules="[
                             val=>!!val || 'Post Name is required'
                         ]"
                     bg-color="white"
                     label="Post Name"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.no_of_post"
                     :error="!!form.errors?.no_of_post"
                     :error-message="form.errors?.no_of_post?.toString()"
                     :rules="[
                             val=>!!val || 'Number of Posts is required'
                         ]"
                     bg-color="white"
                     label="Number of Posts"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.salary"
                     :error="!!form.errors?.salary"
                     :error-message="form.errors?.salary?.toString()"
                     :rules="[
                             val=>!!val || 'Salary is required'
                         ]"
                     bg-color="white"
                     label="Salary"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.age_limit"
                     :error="!!form.errors?.age_limit"
                     :error-message="form.errors?.age_limit?.toString()"
                     :rules="[
                             val=>!!val || 'Age Limit is required'
                         ]"
                     bg-color="white"
                     label="Age Limit"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.qualification"
                     :error="!!form.errors?.qualification"
                     :error-message="form.errors?.qualification?.toString()"
                     :rules="[
                             val=>!!val || 'Qualification is required'
                         ]"
                     bg-color="white"
                     label="Qualification"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.application_deadline"
                     :error="!!form.errors?.application_deadline"
                     :error-message="form.errors?.application_deadline?.toString()"
                     :rules="[
                             val=>!!val || 'Application Deadline is required'
                         ]"
                     bg-color="white"
                     label="Application Deadline"
                     no-error-icon
                     outlined
                     type="date"
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.application_fee"
                     :error="!!form.errors?.application_fee"
                     :error-message="form.errors?.application_fee?.toString()"
                     :rules="[
                             val=>!!val || 'Application Fee is required'
                         ]"
                     bg-color="white"
                     label="Application Fee"
                     no-error-icon
                     outlined
            />
        </div>

        <div class="col-xs-12">
            <q-input v-model="form.description"
                     :error="!!form.errors?.description"
                     :error-message="form.errors?.description?.toString()"
                     :rules="[
                             val=>!!val || 'Description is required'
                         ]"
                     bg-color="white"
                     label="Description"
                     no-error-icon
                     outlined
                     type="textarea"
            />
        </div>
<!--        {{ form.documents }}-->
    </q-form>
    <q-form class="row q-col-gutter-sm" style="max-width: 720px" @submit="submit">

        <div v-for="(document, index) in form.documents" :key="index" class="col-xs-12">
            <q-separator/>
            <div class="flex justify-between items-center">
                <q-input v-model="document.document_name"
                         :error="!!form.errors?.documents?.[index]?.document_name"
                         :error-message="form.errors?.documents?.[index]?.document_name?.toString()"
                         bg-color="white"
                         label="Document Name"
                         outlined
                />
                <q-input v-model="document.document_description"
                         :error="!!form.errors?.documents?.[index]?.document_description"
                         :error-message="form.errors?.documents?.[index]?.document_description?.toString()"
                         bg-color="white"
                         label="Document Description"
                         outlined
                />
                <q-select
                    v-model="document.is_mandatory"
                    :error="!!form.errors?.documents?.[index]?.is_mandatory"
                    :error-message="form.errors?.documents?.[index]?.is_mandatory?.toString()"
                    :value="document.is_mandatory === 1 ? 'Mandatory' : 'Optional'"
                    :options="[
                                { label: 'Mandatory', value: 1 },
                                { label: 'Optional', value: 0 }
                            ]"
                    bg-color="white"
                    label="Mandatory"
                    outlined
                />

                <q-btn @click="removeDocument(index)" icon="delete" color="negative" flat/>
            </div>
        </div>

        <div class="col-xs-12">
            <q-btn @click="addDocument" label="Add Document" color="primary" class="full-width"/>
        </div>

        <div class="col-xs-12">
            <div class="flex q-gutter-sm">
                <q-btn :loading="state.submitting" class="sized-btn" color="primary" label="Update" type="submit"/>
                <q-btn class="sized-btn" color="negative" label="Cancel" outline
                       @click="$inertia.replace(route('job.index'))"/>
            </div>
        </div>
    </q-form>

</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { reactive } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps({
    data: Object,
});

const state = reactive({
    submitting: false
});

const form = useForm({
    post_name: props.data?.post_name,
    no_of_post: props.data?.no_of_post,
    salary: props.data?.salary,
    age_limit: props.data?.age_limit,
    qualification: props.data?.qualification,
    application_deadline: props.data?.application_deadline,
    application_fee: props.data?.application_fee,
    description: props.data?.description,
    documents: props.data?.documents || [],
});
console.log(props.data)
const addDocument = () => {
    form.documents.push({ name: '', description: '', is_mandatory: 1 });
};

const removeDocument = (index) => {
    form.documents.splice(index, 1);
};

const submit = () => {
    form.put(route('job.update', props.data.id), {
        preserveState: false,
        onStart: () => state.submitting = true,
        onFinish: () => state.submitting = false
    });
};

const handleDelete = () => {
    useQuasar().dialog({
        title: 'Confirmation',
        message: 'Do you want to delete this job posting?',
        ok: 'Yes',
        cancel: 'No',
    }).onOk(() => {
        $inertia.delete(route('job.destroy', props.data.id), {
            preserveState: false,
            onStart: () => state.submitting = true,
            onFinish: () => state.submitting = false
        });
    });
};
</script>
