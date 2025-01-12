
<template>
    <q-layout view="hHh lpR fFf">
        <q-header bordered class="bg-gray-800 text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="flex items-center gap-2">
                    <q-avatar>
                        <img src="/images/pwd_logo.png" alt="PWD Logo" />
                    </q-avatar>
                    <div>
                        <h1 class="text-lg font-bold">
                            Public Works Department
                        </h1>
                        <p class="text-sm">Government Recruitment Portal</p>
                    </div>
                </q-toolbar-title>

            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <q-scroll-area class="fit">
                <q-list padding class="menu-list">

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='dashboard.citizen'"
                            @click="$inertia.get(route('dashboard'))">
                        <q-item-section avatar>
                            <q-icon name="dashboard" />
                        </q-item-section>
                        <q-item-section>
                            Dashboard
                        </q-item-section>
                    </q-item>


                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applicant.bio'"
                            @click="$inertia.get(route('applicant.bio'))">
                        <q-item-section avatar>
                            <q-icon name="account_circle" />
                        </q-item-section>

                        <q-item-section>
                            <q-item-section>
                                Bio
                            </q-item-section>

                        </q-item-section>
                    </q-item>


<!--                    <q-item clickable v-ripple active-class="active-menu"-->
<!--                            :active="route().current()==='applicant.address'"-->
<!--                            @click="$inertia.get(route('applicant.address'))">-->
<!--                        <q-item-section avatar>-->
<!--                            <q-icon name="location_on" />-->
<!--                        </q-item-section>-->
<!--                        <q-item-section>-->
<!--                            <q-item-label>Address</q-item-label>-->
<!--                        </q-item-section>-->
<!--                    </q-item>-->

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applications.draft'"
                            @click="$inertia.get(route('applications.draft'))">
                        <q-item-section avatar>
                            <q-icon name="drafts" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Drafts</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applications.index'"
                            @click="$inertia.get(route('applications.index'))">
                        <q-item-section avatar>
                            <q-icon name="send" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Submission</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applications.index_approved'"
                            @click="$inertia.get(route('applications.index_approved'))">
                        <q-item-section avatar>
                            <q-icon name="check_circle" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Approved</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applications.index_rejected'"
                            @click="$inertia.get(route('applications.index_rejected'))">
                        <q-item-section avatar>
                            <q-icon name="cancel" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Rejected</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='applications.admitCard'"
                            @click="$inertia.get(route('applications.admitCard'))">
                        <q-item-section avatar>
                            <q-icon name="badge" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Admit Card</q-item-label>
                        </q-item-section>
                    </q-item>


                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='profile.edit'"
                            @click="$inertia.get(route('profile.edit'))">
                        <q-item-section avatar>
                            <q-icon name="manage_accounts" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                    </q-item>


                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='logout'"
                            @click="$inertia.post(route('logout'))">
                        <q-item-section avatar>
                            <q-icon name="logout" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Logout</q-item-label>
                        </q-item-section>
                    </q-item>

                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <div v-if="flashSuccess" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
                {{ flashSuccess }}
            </div>
            <div v-if="flashError" class="mb-4 border rounded-md shadow-sm border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 p-2">
                {{ flashError }}
            </div>
            <slot />
        </q-page-container>

        <q-footer elevated class="bg-gray-800 text-white">
            <q-toolbar class="flex justify-between">
                <q-toolbar-title class="flex items-center gap-2">
                    <q-avatar>
                        <img src="/images/pwd_logo.png" alt="PWD Logo" />
                    </q-avatar>
                    <div>
                        <h2 class="text-lg font-bold">
                            Public Works Department
                        </h2>
                        <p class="text-sm">Government Recruitment Portal</p>
                    </div>
                </q-toolbar-title>
                <div class="text-sm">
                    &copy; 2024 Public Works Department, All Rights Reserved.
                </div>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script setup>
import { ref,computed } from 'vue'
import NavLink from "@/Components/NavLink.vue";
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage()
const flashSuccess = computed(
    () => page.props.flash.success,
)
const flashError = computed(
    () => page.props.flash.error,
)
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}




</script>
<style scoped>
/* Custom styles to match the bluish-gray theme */
.bg-gray-800 {
    background-color: #2e3b4e;
    /* Bluish-gray background color */
}

.text-white {
    color: #ffffff;
}

.q-drawer .flex.flex-col.items-start.p-4.text-lg a {
    color: white;
    padding: 10px 0;
    font-size: 1.125rem;
    font-weight: 500;
}

.q-drawer .flex.flex-col.items-start.p-4.text-lg a:hover {
    color: #b0bec5;
    /* Light gray-blue color on hover */
}

/* Header & footer text */
.q-header .q-toolbar-title,
.q-footer .q-toolbar-title {
    display: flex;
    align-items: center;
    font-weight: 700;
}

.q-toolbar-title h1,
.q-toolbar-title h2 {
    margin: 0;
}

.q-toolbar-title p {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
}
</style>
