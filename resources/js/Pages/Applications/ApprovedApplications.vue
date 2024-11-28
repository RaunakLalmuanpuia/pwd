<template>
    <q-page padding>
        <p class="page-title">QUALIFIED LIST</p>

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
                                @change="toggleSelectAll($event)"
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

// Dialog state
const marksDialogOpen = ref(false);
const selectedApplicant = ref(null);


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

// Handle "View Marks" button click
const viewMarks = (application) => {
    selectedApplicant.value = application.applicant;
    marksDialogOpen.value = true;
};


// Search input value
const searchTerm = ref('');
const filteredApplications = computed(() => {
    return props.jobDetails.applications.filter((application) => {
        const applicantName =
            application.applicant.user?.name.toLowerCase() || '';
        return applicantName.includes(searchTerm.value.toLowerCase());
    });
});


const approveSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'pending'; // Set the desired status

    approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
        onSuccess: () => {
            approveRejectForm.reset();
            selectedApplications.value = []; // Clear selection after success
        },
    });
};

const eligibleSelectedApplications = () => {
    if (selectedApplications.value.length === 0) {
        alert('Please select at least one applicant.');
        return;
    }

    approveRejectForm.application_ids = selectedApplications.value;
    approveRejectForm.status = 'eligible'; // Set the desired status

    approveRejectForm.put(route('admin.applications.bulkChangeStatus'), {
        onSuccess: () => {
            approveRejectForm.reset();
            selectedApplications.value = []; // Clear selection after success
        },
    });
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
