<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

defineOptions({
    layout:ApplicantLayout
})
const props = defineProps(['jobDetail', 'mandatoryDocuments']);

const form = useForm({
    documents: {},
});

const submitApplication = () => {
    form.post(route('application.apply', { jobDetail: props.jobDetail.id }), {
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <div>
        <h1>Apply for {{ jobDetail.post_name }}</h1>
        <form @submit.prevent="submitApplication">
            <div v-for="document in mandatoryDocuments" :key="document.id">
                <label :for="'document-' + document.id">
                    {{ document.document_name }}
                </label>
                <input
                    type="file"
                    :id="'document-' + document.id"
                    :name="'documents[' + document.id + ']'"
                    @change="(e) => form.documents[document.id] = e.target.files[0]"
                />
                <span v-if="form.errors[`documents.${document.id}`]">
                    {{ form.errors[`documents.${document.id}`] }}
                </span>
            </div>

            <button type="submit" :disabled="form.processing">Submit Application</button>
        </form>
    </div>
</template>
