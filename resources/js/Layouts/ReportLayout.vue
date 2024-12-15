<template>
    <q-toolbar class="card justify-center">
        <q-tabs>
            <q-tab
                replace
                @click="setTab('application')"
                label="Application"
                :active="currentTab === 'application'"
            />

            <q-tab
                replace
                @click="setTab('written-exam')"
                label="Written Exam"
                :active="currentTab === 'written-exam'"
            />

        </q-tabs>
    </q-toolbar>

    <q-page padding>
        <component :is="currentComponent" />
    </q-page>
</template>
<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import { ref } from "vue";

// Importing Components
import ApplicationContent from "@/Pages/Reports/SubmittedReport.vue";
import PhysicalTestContent from "@/Components/Tabs/PhysicalTestContent.vue";
import WrittenExamContent from "@/Pages/Reports/WrittenReport.vueWrittenExamContent.vue";
import InterviewContent from "@/Components/Tabs/InterviewContent.vue";

defineOptions({
    layout: AdminLayout,
});

// Define the current tab and its corresponding component
const currentTab = ref("application");
const currentComponent = ref(ApplicationContent);

// Method to set the tab and dynamically switch components
function setTab(tabName) {
    currentTab.value = tabName;
    switch (tabName) {
        case "application":
            currentComponent.value = ApplicationContent;
            break;
        case "physical-test":
            currentComponent.value = PhysicalTestContent;
            break;
        case "written-exam":
            currentComponent.value = WrittenExamContent;
            break;
        case "interview":
            currentComponent.value = InterviewContent;
            break;
    }
}
</script>




