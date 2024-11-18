
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

                </div>
                <q-btn @click="$inertia.get(route('job.create'))">Create New</q-btn>
            </div>

                <div class="container">
                    <h2>Job Postings</h2>
                    <table class="table table-bordered mt-4">
                        <thead>
                        <tr>
                            <th>Post Name</th>
<!--                            <th>Department ID</th>-->
                            <th>No. of Posts</th>
                            <th>Salary</th>
                            <th>Age Limit</th>
                            <th>Qualification</th>
                            <th>Application Deadline</th>
                            <th>Application Fee</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
<!--                        <q-item v-for="(item,index) in list?.data" :key="index">-->
                        <tr v-for="(job,index) in jobs" :key="index">
                            <td>{{ job.post_name }}</td>
<!--                            <td>{{ job.department_id }}</td>-->
                            <td>{{ job.no_of_post }}</td>
                            <td>{{ job.salary }}</td>
                            <td>{{ job.age_limit }}</td>
                            <td>{{ job.qualification }}</td>
                            <td>{{ formatDate(job.application_deadline) }}</td>
                            <td>{{ job.application_fee }}</td>
                            <td>{{ job.description || 'No Description' }}</td>
                            <td>{{ job.active === 1 ? 'Active' : 'Inactive' }}</td>
                            <td> <q-btn @click="$inertia.get(route('job.edit',job?.id))">Edit</q-btn></td>

                        </tr>
                        </tbody>
                    </table>
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
