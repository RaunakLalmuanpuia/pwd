<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import AdminLayout from '@/Layouts/Admin.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import {computed} from "vue";
import { usePage } from '@inertiajs/vue3';

// Fetch the user's role (assuming it's passed from the backend)
// Access user roles from the prop
const page = usePage();
const user = page.props.auth.user;

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
// Determine layout based on user roles
const layout = computed(() => {
    if (!user || !user.roles) return AuthenticatedLayout; // Default layout
    const roles = user.roles.map(role => role.name);

    if (roles.includes("Admin")) {
        return AdminLayout;
    } else if (roles.includes("Applicant")) {
        return ApplicantLayout;
    }
    return AuthenticatedLayout; // Fallback layout
});
</script>

<template>
    <Head title="Profile" />
    <component :is="layout">
<!--    <AuthenticatedLayout>-->
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
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>

<!--    </AuthenticatedLayout>-->
    </component>
</template>
