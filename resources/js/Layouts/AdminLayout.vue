<template>
    <q-layout view="hHh lpR fFf">
        <!-- Header -->
        <q-header bordered class="bg-gray-800 text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="flex items-center gap-2">
                    <q-avatar>
                        <img src="/images/pwd-logo.svg" alt="PWD Logo" />
                    </q-avatar>
                    <div>
                        <h1 class="text-lg font-bold">
                            Public Works Department
                        </h1>
                        <p class="text-sm">Government Recruitment Portal</p>
                    </div>
                </q-toolbar-title>

                <q-btn
                    dense
                    flat
                    round
                    icon="account_circle"
                    @click="toggleRightDrawer"
                />
            </q-toolbar>
        </q-header>

        <!-- Left Drawer: Navigation Links -->
        <q-drawer
            show-if-above
            v-model="leftDrawerOpen"
            side="left"
            bordered
            class="bg-gray-800 text-white"
        >
            <div class="flex flex-col items-start p-4 text-lg">
                <NavLink
                    :href="route('dashboard')"
                    :active="route().current('dashboard')"
                >
                    Dashboard
                </NavLink>

                <q-btn-dropdown  color="primary" label="Dropdown Button">
                    <q-list>
                        <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar
                                    icon="folder"
                                    color="primary"
                                    text-color="white"
                                />
                            </q-item-section>
                            <q-item-section>
<!--                                <NavLink-->
<!--                                    :href="route('applicant.bio')"-->
<!--                                    :active="route().current('applicant.bio')"-->
<!--                                >Basic Details</NavLink-->
<!--                                >-->
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section avatar>
                                <q-avatar
                                    icon="assignment"
                                    color="secondary"
                                    text-color="white"
                                />
                            </q-item-section>
                            <q-item-section>
<!--                                <NavLink-->
<!--                                    :href="route('applicant.address')"-->
<!--                                    :active="-->
<!--                                        route().current('applicant.address')-->
<!--                                    "-->
<!--                                >Address</NavLink-->
<!--                                >-->
                            </q-item-section>
                            <q-item-section side>
                                <q-icon name="info" color="amber" />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>



                <NavLink> </NavLink>
<!--                <NavLink-->
<!--                    :href="route('post.index')"-->
<!--                    :active="route().current('post.index')"-->
<!--                >-->
<!--                    Application-->
<!--                </NavLink>-->
<!--                <NavLink-->
<!--                    :href="route('doc.index')"-->
<!--                    :active="route().current('doc.index')"-->
<!--                >-->
<!--                    Document-->
<!--                </NavLink>-->
            </div>
        </q-drawer>

        <!-- Right Drawer: Profile and Settings -->
        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
            <div class="flex flex-col p-4 space-y-2 text-base">
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <button
                            class="flex items-center bg-gray-800 text-white rounded-lg p-2"
                        >
                            <span>{{ $page.props.auth.user.name }}</span>
                            <q-icon name="expand_more" />
                        </button>
                    </template>

                    <template #content>
                        <DropdownLink :href="route('profile.edit')">
                            Profile
                        </DropdownLink>
                        <DropdownLink
                            :href="route('logout')"
                            method="post"
                            as="button"
                        >
                            Log Out
                        </DropdownLink>
                    </template>
                </Dropdown>
            </div>
        </q-drawer>

        <!-- Page Content -->
        <q-page-container>
            <div class="q-pa-md">
                <slot />
            </div>
        </q-page-container>

        <!-- Footer -->
        <q-footer elevated class="bg-gray-800 text-white">
            <q-toolbar class="flex justify-between">
                <q-toolbar-title class="flex items-center gap-2">
                    <q-avatar>
                        <img src="/images/pwd-logo.svg" alt="PWD Logo" />
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
import NavLink from "@/Components/NavLink.vue";
import { ref } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
};
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
