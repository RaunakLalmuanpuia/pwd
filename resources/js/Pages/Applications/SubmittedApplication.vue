<template>
    <q-page padding>
        <p class="page-title">SUBMITTED APPLICATIONS</p>
        <div class="flex justify-between items-center zcard q-pa-md">
            <q-input v-model="searchTerm"
                     dense
                     outlined
                     placeholder="Search"
                     style="width: 240px"
                     @change="handleSearch">
                <template v-slot:append>
                    <q-icon name="search"/>
                </template>
            </q-input>
            <div class="flex items-center q-gutter-md">
                <q-btn @click="approveSelectedApplications" color="primary"  :disabled="selectedApplications.length === 0"  label="Mark as Qualified"/>
                <q-separator vertical/>
                <q-btn-dropdown class="q-ma-xs q-pa-xs" color="primary" flat dropdown-icon="sort">
                    <q-card class="q-pa-sm" style="min-width: 280px">
                        <q-card-section>
                            <p class="q-ma-none ztext-lg">Filter</p>
                        </q-card-section>
                        <q-card-section>
                            <q-select
                                v-model="filterData.job"
                                :options="jobs"
                                class="my-input"
                                dense
                                label="Job"
                                outlined/>

                        </q-card-section>

                        <q-card-section>
                            <q-select
                                v-model="filterData.district"
                                :options="districts"
                                class="my-input"
                                dense
                                label="District"
                                outlined/>

                        </q-card-section>


                        <q-card-actions>
                            <q-btn flat label="Reset" @click="resetFilter"/>
                            <q-btn color="primary" label="Filter" rounded style="min-width: 100px" @click="doFilter"/>
                        </q-card-actions>

                    </q-card>
                </q-btn-dropdown>
            </div>
        </div>
        <div class="row q-mt-sm">
            <p class="page-title">{{ jobDetails?.post_name}} : APPLICATIONS</p>
            <div class="col-xs-12">
                <table class="table-auto border-collapse border border-gray-300 w-full mt-6 text-sm">
                    <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 text-left text-gray-600">
                            <input
                                type="checkbox"
                                @change="toggleSelectAll($event)"
                                :checked="allSelected"
                            />
                        </th>
                        <th class="px-4 py-2 text-left text-gray-600">Applicant Name</th>
                        <th class="px-4 py-2 text-left text-gray-600">Roll No</th>
                        <th class="px-4 py-2 text-left text-gray-600">Community</th>
                        <th class="px-4 py-2 text-left text-gray-600">Disability</th>
                        <th class="px-4 py-2 text-left text-gray-600">Status</th>
                        <th class="px-4 py-2 text-left text-gray-600">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="application in filteredApplications"
                        :key="application.id"
                        class="hover:bg-gray-50 transition duration-150"
                    >
                        <td class="px-4 py-2">
                            <input
                                type="checkbox"
                                v-model="selectedApplications"
                                :value="application.id"
                            />
                        </td>
                        <td class="px-4 py-2">{{ application.applicant.user?.name || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.application_id || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.applicant?.community || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.applicant?.disability ? 'Yes' : 'No' }}</td>
                        <td class="px-4 py-2">
                <span
                    :class="[
                        'px-2 py-1 rounded-full text-xs font-semibold',
                        application.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : application.status === 'rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800',
                    ]"
                >
                    {{ application.status || 'Pending' }}
                </span>
                        </td>
                        <td class="px-4 py-2">
                            <button
                                @click="$inertia.get(route('admin.application.show_applicant_detail', { jobDetails: jobDetails.id, application: application.id }))"
                                class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"
                            >
                                OPEN
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </q-page>
</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import { ref, computed } from 'vue';

defineOptions({
    layout:AdminLayout
})

import { useForm } from '@inertiajs/vue3';

const props = defineProps(['jobDetails']);

const approveRejectForm = useForm({
    application_ids: [],
    status: '',
});

const dialogVisible = ref(false); // Controls dialog visibility

// Open dialog and set selected application
const selectedApplications = ref([]);

const allSelected = computed(() =>
    filteredApplications.value.length > 0 &&
    filteredApplications.value.every(app => selectedApplications.value.includes(app.id))
);

const toggleSelectAll = (event) => {
    if (event.target.checked) {
        selectedApplications.value = filteredApplications.value.map(app => app.id);
    } else {
        selectedApplications.value = [];
    }
};
// Search input value
const searchTerm = ref('');

// // Filtered applications based on the search term
// const filteredApplications = computed(() => {
//     return props.jobDetails.applications.filter(application => {
//         const applicantName = application.applicant.user?.name.toLowerCase() || '';
//         return applicantName.includes(searchTerm.value.toLowerCase());
//     });
// });

const filteredApplications = computed(() => {
    return props.jobDetails.applications.filter((application) => {
        const applicantName =
            application.applicant.user?.name.toLowerCase() || '';
        return applicantName.includes(searchTerm.value.toLowerCase());
    });
});

const previewApplication = (application) => {
    selectedApplication.value = application;
    dialogVisible.value = true;
};
const approveSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'approved'; // Set the desired status

    approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
        onSuccess: () => {
            approveRejectForm.reset();
            selectedApplications.value = []; // Clear selection after success
        },
    });
};



// const updateStatus = (applicationId, status) => {
//     approveRejectForm.status = status; // Update the form's status
//     approveRejectForm.put(route('admin.applications.changeStatus', { application: applicationId }), {
//         onSuccess: () => {
//             approveRejectForm.reset(); // Reset the form after a successful update
//         },
//     });
// };
const updateStatus = (applicationId, status) => {
    approveRejectForm.status = status;
    approveRejectForm.put(
        route('admin.applications.changeStatus', { application: applicationId }),
        {
            onSuccess: () => {
                approveRejectForm.reset();
                // Optionally remove from selected after approval
                selectedApplications.value = selectedApplications.value.filter(
                    (id) => id !== applicationId
                );
            },
        }
    );
};
// Format date utility
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

</script>
<style scoped>
/* Enhance button hover effects */
button:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
}

/* Modal animation */
.transition-all {
    transition: all 0.3s ease-in-out;
}

/* Optional custom styling */
.bg-gray-800 {
    background-color: rgba(0, 0, 0, 0.6);
}

/* Tailwind customization */
.list-disc {
    list-style-type: disc;
    padding-left: 1.25rem;
}
.page-title {
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: normal;
    color: #333333;

}
.ztext {
    font-size: 0.875rem;
}
</style>
