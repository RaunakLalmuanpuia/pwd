<template>
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-semibold text-center mb-6">Assign/Edit Exam Centers for Exam: {{ exam.exam_name }}</h1>

        <form @submit.prevent="submit" class="space-y-6">
            <div v-for="applicant in applicants" :key="applicant.id" class="border p-4 rounded-lg shadow-sm">
<!--{{applicant}}-->
                <h2 class="text-lg font-semibold mb-2">{{ applicant.applicant.user.name }}</h2>

                <!-- Exam Center Selection -->
                <div>
                    <label for="exam-center-{{ applicant.applicant_id }}" class="block text-sm font-medium text-gray-700">Select Exam Center</label>
                    <select
                        v-model="assignments[applicant.applicant_id]"
                        :id="'exam-center-' + applicant.applicant_id"
                        class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        aria-describedby="exam-center-help-{{ applicant.applicant_id }}"
                    >
                        <option value="" disabled>Select Exam Center</option>
                        <option v-for="center in examCenters" :key="center.id" :value="center.id">
                            {{ center.center_name }} - {{ center.location }}
                        </option>
                    </select>

                    <!-- Error Message -->
                    <div
                        v-if="form.errors['assignments.' + applicant.applicant_id]"
                        class="text-red-500 text-sm mt-2"
                        id="exam-center-help-{{ applicant.applicant_id }}"
                        role="alert"
                    >
                        {{ form.errors['assignments.' + applicant.applicant_id] }}
                    </div>
                </div>

            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button
                    type="submit"
                    :disabled="form.processing"
                    class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto disabled:opacity-50"
                >
                    <span v-if="form.processing">Saving...</span>
                    <span v-else>Save Assignments</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>

import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})
const props = defineProps({
    exam: Object,
    applicants: Object,
    examCenters: Object,
});

const assignments = ref({});
props.applicants.forEach((applicant) => {
    // Initialize with existing exam center ID if present, or null otherwise
    assignments.value[applicant.applicant_id] = applicant.exam_center_id || null;
});

const form = useForm({
    assignments: [], // Empty initially
});

const submit = () => {
    // Prepare the assignments array
    form.assignments = Object.keys(assignments.value).map((applicantId) => ({
        applicant_id: applicantId,
        exam_center_id: assignments.value[applicantId],
    }));

    // Now post the data to the backend
    form.post(route('exams.storeCenters', props.exam.id), {
        onSuccess: () => {
            // Handle successful submission (optional)
            // alert("Exam centers assigned successfully.");
        },
        onError: (errors) => {
            // Handle error (optional)
            console.error(errors);
        }
    });
};

</script>
