
<template>
    <Head title="Posts" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>
        </template>

        <div class="py-12 bg-gray-100">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white shadow sm:rounded-lg p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-semibold text-gray-900">Job Postings</h3>
                        <q-btn
                            class="bg-blue-500  hover:bg-blue-600"
                            @click="$inertia.get(route('job.create'))"
                        >
                            Create New
                        </q-btn>
                    </div>

                    <!-- Job Postings Table -->
                    <div class="overflow-auto">
                        <table class="w-full table-auto border-collapse border border-gray-300">
                            <thead class="bg-gray-200 text-left">
                            <tr>
                                <th class="border border-gray-300 px-4 py-2">Post Name</th>
                                <th class="border border-gray-300 px-4 py-2">No. of Posts</th>
                                <th class="border border-gray-300 px-4 py-2">Salary</th>
                                <th class="border border-gray-300 px-4 py-2">Age Limit</th>
                                <th class="border border-gray-300 px-4 py-2">Qualification</th>
                                <th class="border border-gray-300 px-4 py-2">Application Deadline</th>
                                <th class="border border-gray-300 px-4 py-2">Application Fee</th>
                                <th class="border border-gray-300 px-4 py-2">Description</th>
                                <th class="border border-gray-300 px-4 py-2">Status</th>
                                <th class="border border-gray-300 px-4 py-2">Marks</th>
                                <th class="border border-gray-300 px-4 py-2">Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(job, index) in jobs"
                                :key="index"
                                class="hover:bg-gray-100"
                            >
                                <td class="border border-gray-300 px-4 py-2">{{ job.post_name }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ job.no_of_post }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ job.salary }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ job.age_limit }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ job.qualification }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ formatDate(job.application_deadline) }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ job.application_fee }}</td>
                                <td class="border border-gray-300 px-4 py-2">
                                    {{ job.description || 'No Description' }}
                                </td>
                                <td class="border border-gray-300 px-4 py-2">
                                        <span
                                            class="px-2 py-1 text-sm rounded-full"
                                            :class="job.active === 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                        >
                                            {{ job.active === 1 ? 'Active' : 'Inactive' }}
                                        </span>
                                </td>
                                <td class="border border-gray-300 px-4 py-2">
                                    <q-btn
                                        class="bg-yellow-500  hover:bg-yellow-600"
                                        @click="$inertia.get(route('job.showMarks', job.id))"
                                    >
                                        Marks
                                    </q-btn>
                                </td>
                                <td class="border border-gray-300 px-4 py-2">
                                    <q-btn
                                        class="bg-yellow-500  hover:bg-yellow-600"
                                        @click="$inertia.get(route('job.edit', job.id))"
                                    >
                                        Edit
                                    </q-btn>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>


<script setup>
import AdminLayout from '@/Layouts/Admin.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    jobs: Object // Define jobs prop as an array
});
console.log(props.jobs);
const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString(); // Format the date to a readable string
};
</script>
