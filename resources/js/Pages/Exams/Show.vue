<template>
    <div class="py-12 bg-gray-50"><div class="bg-gray-50">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow sm:rounded-lg">
                <div class="container mx-auto p-4">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold mb-6">Exams and Subjects</h1>

                        <button
                            class="px-4 py-2 text-sm font-medium bg-blue-500 rounded hover:bg-blue-600 transition"
                            @click="$inertia.get(route('exams.create', data.id ))"
                        >
                            Create Exam
                        </button>
                    </div>

                    <div v-for="exam in data.exams" :key="exam.id" class="mb-6 p-4 border rounded-lg shadow-md bg-white">
                        <div class="flex justify-between items-center">
                            <h2 class="text-xl font-semibold">{{ exam.exam_name }}</h2>

<!--                            <q-btn-->
<!--                                class="bg-yellow-500  hover:bg-yellow-600"-->
<!--                                @click="$inertia.get(route('exams.assignMarks', exam.id))"-->
<!--                            >-->
<!--                                Assign Marks-->
<!--                            </q-btn>-->
<!--                            <q-btn-->
<!--                                class="bg-yellow-500  hover:bg-yellow-600"-->
<!--                                @click="$inertia.get(route('exams.assignCenters', exam.id))"-->
<!--                            >-->
<!--                                Assign Exam Center-->
<!--                            </q-btn>-->
                            <q-btn
                                class="bg-yellow-500  hover:bg-yellow-600"
                                @click="$inertia.get(route('exams.edit', exam.id))"
                            >
                                Edit
                            </q-btn>
                            <q-btn @click="deleteExam(exam.id)" class="sized-btn" color="negative" outline label="Delete"/>
                        </div>
                        <p class="text-gray-600 mt-2">Exam Date: {{ formatDate(exam.exam_date) }}</p>
                        <div class="mt-4">
                            <h3 class="text-lg font-semibold">Subjects</h3>
                            <ul class="mt-2 space-y-2">
                                <li
                                    v-for="subject in exam.subjects"
                                    :key="subject.id"
                                    class="p-3 border rounded-lg bg-gray-50"
                                >
                                    <div class="flex justify-between">
                                        <span>{{ subject.subject_name }}</span>
                                        <span class="text-gray-500 text-sm">
                                            {{ formatDate(subject.exam_date) }} - {{ formatTime(subject.exam_time) }}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div></div>

</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { router, useForm, Link } from '@inertiajs/vue3';
import {reactive, ref} from 'vue';
import { useQuasar } from 'quasar';

defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    data: Object,
});

const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
};


function formatTime(time) {
    const [hours, minutes, seconds] = time.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString([], options);
}
// Edit button handler
const editExam = (id) => {
    console.log(`Edit exam with ID: ${id}`);
    // Trigger any edit logic or emit an event
};

const deleteExam=(id)=>{
    router.delete(route('exam.destroy',id),{

    })
}
</script>



<style scoped>

</style>
