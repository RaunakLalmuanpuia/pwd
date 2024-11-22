<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { ref } from 'vue';
const props = defineProps(['applications']);

defineOptions({
    layout:ApplicantLayout
})
</script>

<template>
    <div>
        <h1>Your Applications</h1>
        <table class="table-auto border-collapse border border-gray-300 w-full">
            <thead>
            <tr>
                <th class="border border-gray-300 px-4 py-2">Job Post</th>
                <th class="border border-gray-300 px-4 py-2">Status</th>
                <th class="border border-gray-300 px-4 py-2">Submitted At</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="application in applications" :key="application.id">
                <td class="border border-gray-300 px-4 py-2">
                    {{ application.job_detils?.post_name || 'N/A' }}
                </td>
                <td class="border border-gray-300 px-4 py-2">
                        <span>
                            {{ application.status || 'Pending' }}
                            <!-- Show application_id if status is approved -->
                            <template v-if="application.status === 'approved'">
                                (ID: {{ application.application_id || 'N/A' }})
                            </template>
                        </span>
                </td>
                <td class="border border-gray-300 px-4 py-2">
                    {{ new Date(application.created_at).toLocaleDateString() }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
