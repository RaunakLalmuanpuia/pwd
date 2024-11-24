<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-semibold text-center mb-6">Create Exam for Job: {{ job.post_name }}</h1>

        <form @submit.prevent="submit" class="space-y-6">

            <!-- Exam Name Input -->
            <div class="mb-4">
                <label for="exam_name" class="block text-sm font-medium text-gray-700">Exam Name</label>
                <input
                    v-model="form.exam_name"
                    id="exam_name"
                    type="text"
                    class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter exam name"
                    aria-describedby="exam_name_help"
                />
                <div v-if="form.errors.exam_name" class="text-red-500 text-sm mt-1" id="exam_name_help">
                    {{ form.errors.exam_name }}
                </div>
            </div>

            <!-- Exam Date Input -->
            <div class="mb-4">
                <label for="exam_date" class="block text-sm font-medium text-gray-700">Exam Date</label>
                <input
                    v-model="form.exam_date"
                    id="exam_date"
                    type="date"
                    class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div v-if="form.errors.exam_date" class="text-red-500 text-sm mt-1">
                    {{ form.errors.exam_date }}
                </div>
            </div>

            <!-- Subjects Section -->
            <div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">Subjects</h2>
                <div v-for="(subject, index) in form.subjects" :key="index" class="border p-4 mb-4 rounded-lg shadow-sm">

                    <!-- Subject Name -->
                    <div class="mb-3">
                        <label for="subject_name_{{ index }}" class="block text-sm font-medium text-gray-700">Subject Name</label>
                        <input
                            v-model="subject.name"
                            type="text"
                            :id="'subject_name_' + index"
                            class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter subject name"
                        />
                        <div v-if="form.errors['subjects.' + index + '.name']" class="text-red-500 text-sm mt-1">
                            {{ form.errors['subjects.' + index + '.name'] }}
                        </div>
                    </div>

                    <!-- Subject Date -->
                    <div class="mb-3">
                        <label for="subject_date_{{ index }}" class="block text-sm font-medium text-gray-700">Exam Date</label>
                        <input
                            v-model="subject.date"
                            :id="'subject_date_' + index"
                            type="date"
                            class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div v-if="form.errors['subjects.' + index + '.date']" class="text-red-500 text-sm mt-1">
                            {{ form.errors['subjects.' + index + '.date'] }}
                        </div>
                    </div>

                    <!-- Subject Time -->
                    <div class="mb-3">
                        <label for="subject_time_{{ index }}" class="block text-sm font-medium text-gray-700">Exam Time</label>
                        <input
                            v-model="subject.time"
                            :id="'subject_time_' + index"
                            type="time"
                            class="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div v-if="form.errors['subjects.' + index + '.time']" class="text-red-500 text-sm mt-1">
                            {{ form.errors['subjects.' + index + '.time'] }}
                        </div>
                    </div>

                    <!-- Remove Subject Button -->
                    <button
                        type="button"
                        @click="removeSubject(index)"
                        class="text-red-500 text-sm"
                    >
                        Remove Subject
                    </button>
                </div>

                <!-- Add Subject Button -->
                <button
                    type="button"
                    @click="addSubject"
                    class="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add Subject
                </button>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button
                    type="submit"
                    :disabled="form.processing"
                    class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto disabled:opacity-50"
                >
                    <span v-if="form.processing">Creating Exam...</span>
                    <span v-else>Create Exam</span>
                </button>
            </div>
        </form>
    </div>
</template>


<script setup>
import { router, useForm } from '@inertiajs/vue3';
import { ref } from "vue";
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    job: Object,
});

const form = useForm({
    exam_name: "",
    exam_date: "",
    subjects: [],
});

const addSubject = () => {
    form.subjects.push({ name: "", date: "", time: "" });
};

const removeSubject = (index) => {
    form.subjects.splice(index, 1);
};

const submit = () => {
    form.post(route("exams.store", props.job.id));
};
</script>
