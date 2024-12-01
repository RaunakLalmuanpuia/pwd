<template>
    <q-page padding>
        <p class="page-title">SUBMITTED APPLICATIONS</p>
        <div class="flex justify-between items-center zcard q-pa-md">
            <q-input v-model="searchTerm"
                     dense
                     outlined
                     placeholder="Search"
                     style="width: 240px"
                     @input="fetchApplications">
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
                                @change="toggleSelectAll($event.target.checked)"
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
                        v-for="application in applications.data"
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
                <div class="flex justify-between items-center mt-4">
                    <q-select
                        v-model="pagination.rowsPerPage"
                        :options="rowsPerPageOptions"
                        label="Rows per page"
                        dense
                        outlined
                        style="width: 120px"
                        @update:model-value="updateRowsPerPage"
                    />
                    <div>
                        <button
                            @click="prevPage"
                            :disabled="pagination.page === 1"
                            class="bg-gray-200 text-black py-1 px-4 rounded"
                        >
                            Previous
                        </button>
                        <span>Page {{ pagination.page }} of {{ applications.last_page }}</span>
                        <button
                            @click="nextPage"
                            :disabled="pagination.page === applications.last_page"
                            class="bg-gray-200 text-black py-1 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>


                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import { ref, computed, watch } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import {useQuasar} from "quasar";
defineOptions({
    layout:AdminLayout
})


const q = useQuasar();
const props = defineProps(['jobDetails', 'applications']);


const searchTerm = ref('');
const applications = ref({ data: [], last_page: 1 }); // Replace with actual API data
const pagination = ref({ page: 1, rowsPerPage: 10 });
const loading = ref(false);

const rowsPerPageOptions = [1, 10, 20, 50, 100]; // Define available options for rows per page
pagination.value.rowsPerPage = rowsPerPageOptions[0]; // Set the default rows per page

const updateRowsPerPage = () => {
    pagination.value.page = 1; // Reset to the first page
    fetchApplications(); // Fetch data with the updated rows per page
};

const approveRejectForm = useForm({
    application_ids: [],
    status: '',
});

const fetchApplications = () => {
    loading.value = true;

    const params = {
        page: pagination.value.page,
        per_page: pagination.value.rowsPerPage,
        search: searchTerm.value,
    };

    router.get(route('admin.applications.show_submission', { jobDetails: props.jobDetails.id }), params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: ({ props }) => {
            applications.value = props.applications;
            loading.value = false;

        },
    });
};

const nextPage = () => {
    if (pagination.value.page < applications.value.last_page) {
        pagination.value.page++;
        fetchApplications(); // Ensure this is called after incrementing the page
    }
};

const prevPage = () => {
    if (pagination.value.page > 1) {
        pagination.value.page--;
        fetchApplications();
    }
};

watch([pagination, searchTerm], fetchApplications, { immediate: true });



const dialogVisible = ref(false); // Controls dialog visibility

// Open dialog and set selected application
const selectedApplications = ref([]);

const allSelected = computed({
    get: () => applications.value.data.length > 0 && selectedApplications.value.length === applications.value.data.length,
    set: (value) => toggleSelectAll(value),
});


function toggleSelectAll(checked) {
    selectedApplications.value = checked
        ? applications.value.data.map((application) => application.id)
        : [];
}

watch(
    () => applications.value.data,
    () => {
        selectedApplications.value = [];
    }
);




const approveSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'approved'; // Set the desired status

    q.dialog({
        title:'Confirmation',
        message:'Do you want to proceed with ' +selectedApplications.value?.length + ' Applications',
        ok:'Yes',
        cancel:'No'
    }).onOk(()=>{
        approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
            onSuccess: () => {
                const message = selectedApplications.value?.length + ' Applications marked as Qualified'
                q.notify({type:'positive',message})
                approveRejectForm.reset();
                selectedApplications.value = []; // Clear selection after success
                fetchApplications();
            },

        });
    })

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
