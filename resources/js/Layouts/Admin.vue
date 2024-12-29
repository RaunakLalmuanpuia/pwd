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
                <q-list padding class="menu-list text-grey-9 text-weight-medium">

                    <q-item clickable v-ripple active-class="active-menu"
                            :active="route().current()==='dashboard.admin'"
                            @click="$inertia.get(route('dashboard'))">
                        <q-item-section avatar>
                            <q-icon name="dashboard" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Dashboard</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-expansion-item  default-opened label="Applications" group="menu" icon="article">

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='admin.applications.index_submission'"
                                @click="$inertia.get(route('admin.applications.index_submission'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Submission</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='admin.applications.index_approved'"
                                @click="$inertia.get(route('admin.applications.index_approved'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Qualified</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='admin.applications.index_eligible'"
                                @click="$inertia.get(route('admin.applications.index_eligible'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Eligible</q-item-label>
                            </q-item-section>
                        </q-item>


                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='admin.applications.index_rejected'"
                                @click="$inertia.get(route('admin.applications.index_rejected'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Rejected</q-item-label>
                            </q-item-section>
                        </q-item>

                    </q-expansion-item>

                    <q-expansion-item label="Job Management" group="menu" icon="business_center">
                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='job.index'"
                                @click="$inertia.get(route('job.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 6px"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Jobs</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='exams.index'"
                                @click="$inertia.get(route('exams.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 6px"/>
                            </q-item-section>
                            <q-item-section>
                                Exams
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='settings.index'"
                                @click="$inertia.get(route('settings.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 6px"/>
                            </q-item-section>
                            <q-item-section>
                                Job Settings
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='exams.marks.index'"
                                @click="$inertia.get(route('exams.marks.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 6px"/>
                            </q-item-section>
                            <q-item-section>
                                Marks
                            </q-item-section>
                        </q-item>

<!--                        <q-item clickable v-ripple>-->
<!--                            <q-item-section avatar>-->
<!--                                <q-icon name="circle" />-->
<!--                            </q-item-section>-->
<!--                            <q-item-section>-->
<!--                                Exam Center-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->

                    </q-expansion-item>

                    <q-expansion-item label="Administration" group="menu" icon="admin_panel_settings">
                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='exam_center.index'"
                                @click="$inertia.get(route('exam_center.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" size="sm" style="font-size: 8px; padding-left: 8px" class="my-custom-icon" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Exam Center</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='user.index'"
                                @click="$inertia.get(route('user.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px" />
                            </q-item-section>
                            <q-item-section>
                                Users
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="route().current()==='transaction.index'"
                                @click="$inertia.get(route('transaction.index'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px" />
                            </q-item-section>
                            <q-item-section>
                                Payments
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-ripple active-class="active-menu"
                                :active="['report.submitted', 'report.writtenExam', 'report.exam_center'].includes(route().current())"
                                @click="$inertia.get(route('report.submitted'))">
                            <q-item-section avatar>
                                <q-icon name="circle" style="font-size: 8px; padding-left: 8px" />
                            </q-item-section>
                            <q-item-section>
                               Report
                            </q-item-section>
                        </q-item>

                    </q-expansion-item>
                    <q-separator></q-separator>

                    <q-item clickable v-ripple @click="$inertia.get(route('profile.edit'))">
                        <q-item-section avatar>
                            <q-icon name="manage_accounts" />
                        </q-item-section>

                        <q-item-section>
                            Profile
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple @click="$inertia.post(route('logout'))">
                        <q-item-section avatar>
                            <q-icon name="logout" />
                        </q-item-section>
                        <q-item-section>
                            Logout
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <div v-if="flashSuccess" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
                {{ flashSuccess }}
            </div>
            <div v-if="flashError" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
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
import { ref, computed } from 'vue'
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

.my-custom-icon {
    font-size: 6px; /* Set your desired size */
}
</style>
