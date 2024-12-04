<template>
    <div class="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Edit Exam: {{ exam.exam_name }}</h1>

        <form @submit.prevent="submit">
            <!-- Exam Name -->
            <div class="mb-5">
                <label for="exam_name" class="block text-sm font-medium text-gray-700 mb-2">Exam Name</label>
                <input
                    v-model="form.exam_name"
                    id="exam_name"
                    type="text"
                    class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter exam name"
                />
                <div v-if="form.errors.exam_name" class="text-red-500 text-sm mt-1">{{ form.errors.exam_name }}</div>
            </div>

            <!-- Exam Date -->
            <div class="mb-5">
                <label for="exam_date" class="block text-sm font-medium text-gray-700 mb-2">Exam Date</label>
                <input
                    v-model="form.exam_date"
                    id="exam_date"
                    type="date"
                    class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div v-if="form.errors.exam_date" class="text-red-500 text-sm mt-1">{{ form.errors.exam_date }}</div>
            </div>

            <!-- Subjects Section -->
            <div class="mb-6">
                <h2 class="text-lg font-bold mb-4">Subjects</h2>
                <div v-for="(subject, index) in form.subjects" :key="index" class="border p-4 mb-4 bg-white rounded-lg">
                    <!-- Subject Name -->
                    <div class="mb-4">
                        <label for="subject_name" class="block text-sm font-medium text-gray-700 mb-2">Subject Name</label>
                        <input
                            v-model="subject.name"
                            type="text"
                            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter subject name"
                        />
                    </div>

                    <!-- Subject Date -->
                    <div class="mb-4">
                        <label for="subject_date" class="block text-sm font-medium text-gray-700 mb-2">Subject Exam Date</label>
                        <input
                            v-model="subject.date"
                            type="date"
                            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <!-- Subject Time -->
                    <div>
                        <label for="subject_time" class="block text-sm font-medium text-gray-700 mb-2">Subject Exam Time</label>
                        <input
                            v-model="subject.time"
                            type="time"
                            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />

                    </div>

                    <!-- Remove Subject Button -->
                    <button
                        type="button"
                        @click="removeSubject(index)"
                        class="mt-4 text-sm text-red-600 hover:text-red-800 transition"
                    >
                        Remove Subject
                    </button>
                </div>

                <!-- Add Subject Button -->
                <button
                    type="button"
                    @click="addSubject"
                    class="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition"
                >
                    Add Subject
                </button>
            </div>

            <!-- Submit Button -->
            <button
                type="submit"
                class="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
            >
                Update Exam
            </button>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/Admin.vue";

// Layout for the component
defineOptions({
    layout: AdminLayout,
});

// Props definition
const props = defineProps({
    exam: Object, // Exam object passed from the parent component
});

// Form setup using Inertia.js
const form = useForm({
    exam_name: props.exam.exam_name,
    exam_date: props.exam.exam_date,
    subjects: props.exam.subjects.map((subject) => ({
        id: subject.id,
        name: subject.subject_name,
        date: subject.exam_date,
        time: subject.exam_time,
    })),
});

// Methods
const addSubject = () => {
    form.subjects.push({ id: null, name: "", date: "", time: "" });
};

const removeSubject = (index) => {
    form.subjects.splice(index, 1);
};

const submit = () => {
    form.put(route("exams.update", props.exam.id));
};
</script>
