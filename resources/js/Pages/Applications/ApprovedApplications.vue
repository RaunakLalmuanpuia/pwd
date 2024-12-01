<template>
    <q-page padding>
        <p class="page-title">QUALIFIED LIST</p>

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
                <q-btn @click="assignExamCenter" color="primary"  :disabled="selectedApplications.length === 0"  label="Assign Exam Center"/>
                <q-btn @click="approveSelectedApplications" color="primary"  :disabled="selectedApplications.length === 0"  label="Mark as Disqualified"/>
                <q-btn @click="eligibleSelectedApplications" color="primary"  :disabled="selectedApplications.length === 0"  label="Mark as Eligible"/>
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
                        <th class="px-4 py-2 text-left text-gray-600">Parent Name</th>
                        <th class="px-4 py-2 text-left text-gray-600">Community</th>
                        <th class="px-4 py-2 text-left text-gray-600">Exam Center</th>
                        <th class="px-4 py-2 text-left text-gray-600">Status</th>
                        <th class="px-4 py-2 text-left text-gray-600">Actions</th>
                        <th class="px-4 py-2 text-left text-gray-600">Marks</th>
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
                        <td class="px-4 py-2">{{ application.applicant?.parents_name || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.applicant?.community || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.exam_center?.center_name|| 'N/A' }}</td>
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
                        <td class="px-4 py-2">
                            <button
                                @click="viewMarks(application)"
                                class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2 transition duration-150"
                            >
                                View Marks
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
        <q-dialog v-model="marksDialogOpen" persistent>
            <q-card style="min-width: 450px;">
                <q-card-section>
                    <div class="text-h6 q-mb-md">Exam Details: {{ selectedApplicant.user.name }}</div>

                    <!-- Check if the selected applicant has any exams -->
                    <div v-if="selectedApplicant.exams.length === 0">
                        <q-banner class="bg-warning text-black q-mb-md">
                            <div>No exams found for this applicant.</div>
                        </q-banner>
                    </div>

                    <!-- Check if there are no marks assigned -->
                    <div v-if="selectedApplicant.exam_marks.length === 0">
                        <q-banner class="bg-warning text-black q-mb-md">
                            <div>No marks assigned for the selected exams.</div>
                        </q-banner>
                    </div>

                    <div v-if="selectedApplicant.exam_marks.length !== 0">
                        <div v-for="(exam, index) in selectedApplicant.exams" :key="exam.id" class="q-mt-md">
                            <div class="q-pa-sm">
                                <q-banner class="bg-primary text-white q-mb-md">
                                    <div>
                                        <strong>Exam Name:</strong> {{ exam.exam_name }}
                                        <br />
                                        <strong>Exam Date:</strong> {{ exam.exam_date }}
                                    </div>
                                </q-banner>

                                <q-card bordered class="q-pa-none">
                                    <q-card-section>
                                        <div><strong>Subjects:</strong></div>
                                        <q-list class="q-mt-sm">
                                            <q-item v-for="(examMark, index) in selectedApplicant.exam_marks.filter(mark => mark.subject.exam_id === exam.id)" :key="examMark.id" class="q-mb-xs">
                                                <q-item-section>
                                                    <div><strong>{{ examMark.subject.subject_name }}</strong></div>
                                                    <div class="text-caption">Exam Date: {{ examMark.subject.exam_date }}</div>
                                                </q-item-section>
                                                <q-item-section side>
                                                    <div class="text-h6">{{ examMark.marks }} Marks</div>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>

                </q-card-section>

                <q-card-actions>
                    <q-btn flat label="Close" @click="marksDialogOpen = false" color="primary" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="assignExamCenterDialogOpen" persistent>
            <q-card style="min-width: 450px;">
                <q-card-section>
                    <div class="text-h6 q-mb-md">Assign Exam Center to Selected Applicants</div>
                    <q-select
                        v-model="examCenterForm.exam_center_id"
                        :options="examCenters"
                        label="Select Exam Center"
                        dense
                        outlined
                        option-label="center_name"
                    option-value="id"
                    />
                </q-card-section>

                <q-card-actions>
                    <q-btn flat label="Cancel" @click="assignExamCenterDialogOpen = false" color="primary" />
                    <q-btn flat :disable="!!!examCenterForm.exam_center_id" label="Assign" @click="assignExamCenterToApplicants" color="primary" />
                </q-card-actions>
            </q-card>
        </q-dialog>

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

const props = defineProps(['jobDetails','examCenters', 'applications']);

const approveRejectForm = useForm({
    application_ids: [],
    status: '',
});
// Inertia form
const examCenterForm = useForm({
    exam_center_id: [], // Holds selected exam center ID
    application_ids: []       // Holds the assignments
});

// Dialog state
const marksDialogOpen = ref(false);
const assignExamCenterDialogOpen = ref(false);

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

const fetchApplications = () => {
    loading.value = true;

    const params = {
        page: pagination.value.page,
        per_page: pagination.value.rowsPerPage,
        search: searchTerm.value,
    };

    router.get(route('admin.applications.show_approved', { jobDetails: props.jobDetails.id }), params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: ({ props }) => {
            applications.value = props.applications;
            loading.value = false;

        },
    });
};

// Pagination Controls
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



const selectedApplicant = ref(null);

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
// Handle "View Marks" button click
const viewMarks = (application) => {
    selectedApplicant.value = application.applicant;
    marksDialogOpen.value = true;
};



// Assign Exam Center Dialog
const assignExamCenter = () => {
    assignExamCenterDialogOpen.value = true;
};


// Function to assign exam center
const assignExamCenterToApplicants = () => {
    if (!examCenterForm.exam_center_id) {
        alert('Please select an exam center.');
        return;
    }

    examCenterForm.application_ids = selectedApplications.value;

    // Submit the assignment to the server
    examCenterForm.post(route('exams.allotCenters'), {
        onSuccess: () => {
            const message = 'Exam Center assigned for ' + selectedApplications.value?.length + ' applications'
            q.notify({type:'positive',message})
            assignExamCenterDialogOpen.value = false;
            examCenterForm.reset(); // Clear the form
            fetchApplications();
        },
        onError: (err) => {
            console.error(err);
            alert('An error occurred while assigning exam centers.');
        }
    });
};

const approveSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'pending'; // Set the desired status


    q.dialog({
        title:'Confirmation',
        message:'Do you want to proceed with ' +selectedApplications.value?.length + ' Applications',
        ok:'Yes',
        cancel:'No'
    }).onOk(()=>{
        approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
            onSuccess: () => {
                const message = selectedApplications.value?.length + ' Applications marked as disqualified'
                q.notify({type:'positive',message})
                approveRejectForm.reset();
                selectedApplications.value = []; // Clear selection after success
                fetchApplications();
            },
        });
    })


};

const eligibleSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'eligible'; // Set the desired status



    q.dialog({
        title:'Confirmation',
        message:'Do you want to proceed with ' +selectedApplications.value?.length + ' Applications',
        ok:'Yes',
        cancel:'No'
    }).onOk(()=>{
        approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
            onSuccess: () => {
                const message = selectedApplications.value?.length + ' Applications marked as eligible'
                q.notify({type:'positive',message})
                approveRejectForm.reset();
                selectedApplications.value = []; // Clear selection after success
                fetchApplications();
            },
        });
    })
};






</script>
<style scoped>
/* Enhance button hover effects */
button:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
}

.page-title {
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: normal;
    color: #333333;
}
</style>
