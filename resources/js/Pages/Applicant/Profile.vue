<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import AdminLayout from '@/Layouts/Admin.vue';
import DeleteUserForm from '.@/Partials/DeleteUserForm.vue';
import UpdatePasswordForm from '.@/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '.@/Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';

// Fetch the user's role (assuming it's passed from the backend)
// Access user roles from the prop
const { user } = usePage().props;
// console.log(user)
// Define the role based on the prop
const isApplicant = user?.roles?.some(role => role.name === 'Applicant');
const isAdmin = user?.roles?.some(role => role.name === 'Admin');  // You can check for other roles here


defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    user: {
        type: Object,
        required: true,
    },
});

const isApplicant = computed(() => {
    return user?.roles?.some(role => role.name === 'Applicant');
});

const isAdmin = computed(() => {
    return user?.roles?.some(role => role.name === 'Admin');
});

defineOptions({
    layout: isAdmin.value ? AdminLayout : (isApplicant.value ? AuthenticatedLayout : null),
});
</script>

<template>
    <Head title="Profile" />


        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                    {{user}}
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>

</template>
