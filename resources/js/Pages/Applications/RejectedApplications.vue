<template>
    <q-page padding>
        <p class="page-title">REJECTED APPLICATIONS</p>
        <div class="flex justify-between items-center zcard q-pa-md">
            <q-tabs
                stretch
                shrink
                v-model="state.tab"
                align="start"
                @update:model-value="handleNavigation"
            >
                <q-space/>
                <q-input v-model="state.search"
                         autofocus
                         outlined
                         dense
                         @keyup.enter="handleSearch"
                         bg-color="white"
                         placeholder="Search"
                >
                    <template v-slot:append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
            </q-tabs>
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
            <p class="page-title">APPLICATIONS: {{ jobDetails?.post_name}} </p>
            <div class="col-xs-12">
                <table class="border-collapse border border-gray-300 rounded-lg w-full mt-4">
                    <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 text-left text-gray-600"><input type="checkbox" @change="toggleSelectAll($event.target.checked)" :checked="allSelected" /></th>
                        <th class="px-4 py-2 text-left text-gray-600">Applicant Name</th>
                        <th class="px-4 py-2 text-left text-gray-600">Application No.</th>
                        <th class="px-4 py-2 text-left text-gray-600">Parent Name</th>
                        <th class="px-4 py-2 text-left text-gray-600">Community</th>
                        <th class="px-4 py-2 text-left text-gray-600">Status</th>
                        <th class="px-4 py-2 text-left text-gray-600">Reason</th>
                        <th class="px-4 py-2 text-left text-gray-600">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="application in applications.data"
                        :key="application.id"
                        class="hover:bg-gray-50"
                    >
                        <td class="px-4 py-2"><input type="checkbox" v-model="selectedApplications" :value="application.id" /></td>
                        <td class="px-4 py-2">{{ application.applicant.user?.name || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.application_id || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.applicant?.parents_name || 'N/A' }}</td>
                        <td class="px-4 py-2">{{ application.applicant?.community || 'N/A' }}</td>

                        <td class="px-4 py-2">
                            <span :class="statusClass(application.status)">
                              {{ application.status || 'Pending' }}
                            </span>
                        </td>
                        <td class="px-4 py-2">{{ application.rejection_note || 'N/A' }}</td>
                        <td class="px-4 py-2">
                            <button @click="$inertia.get(route('admin.application.show_applicant_detail', { jobDetails: jobDetails.id, application: application.id }))"
                                    class="bg-blue-500 text-white py-1 px-4 rounded">
                                Preview
                            </button>
                        </td>

                    </tr>
                    </tbody>
                </table>

                <div class="flex justify-between items-center mt-4">
                    <!--                    {{applications.data}}-->
                    <q-select
                        v-model="state.perPage"
                        dense
                        outlined
                        :options="[5, 10, 20, 25]"
                        label="Results per page"
                        @update:model-value="handleSearch"
                        style="width: 150px;"
                    />


                    <div class="flex items-center q-gutter-sm">
                        <!-- First Page Button -->
                        <q-btn
                            :disable="applications.current_page === 1"
                            @click="navigateToPage(applications.first_page_url)"
                            flat round icon="first_page"
                        />

                        <!-- Previous Page Button -->
                        <q-btn
                            :disable="!!!applications.prev_page_url"
                            @click="navigateToPage(applications.prev_page_url)"
                            flat round icon="chevron_left"
                        />

                        <!-- Page Information -->
                        <span class="text-gray-600">
                            Page {{ applications.current_page }} of {{ applications.last_page }}
                        </span>

                        <!-- Next Page Button -->
                        <q-btn
                            :disable="!!!applications.next_page_url"
                            @click="navigateToPage(applications.next_page_url)"
                            flat round icon="chevron_right"
                        />

                        <!-- Last Page Button -->
                        <q-btn
                            :disable="applications.current_page === applications.last_page"
                            @click="navigateToPage(applications.last_page_url)"
                            flat round icon="last_page"

                        />
                    </div>

                </div>


            </div>
        </div>


    </q-page>
</template>

<script setup>

import AdminLayout from "@/Layouts/Admin.vue";
import { ref, computed, reactive } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import {useQuasar} from "quasar";


defineOptions({
    layout:AdminLayout
})

const q = useQuasar();
const props = defineProps(['jobDetails', 'applications','search', 'perPage']);

const loading = ref(false);

const approveRejectForm = useForm({
    application_ids: [],
    status: '',
});


const state=reactive({
    search:props?.search,
    tab: route().current(),
    perPage: props?.perPage || 3, // Default perPage
})

const search = ref('');


const handleSearch=e=>{
    router.get(route('admin.applications.show_rejected', props.jobDetails.id), {
        search: state.search,
        perPage: state.perPage,
    });

}

const handleNavigation=(value)=> {
    router.get(route(value))
}

const navigateToPage = (url) => {
    // Append the perPage parameter to pagination URLs
    if (url) {
        router.get(url, {
            search: state.search,
            perPage: state.perPage,
        });
    }
};


const statusClass = (status) => {
    return {
        "bg-green-100 text-green-800": status === "approved",
        "bg-red-100 text-red-800": status === "rejected",
        "bg-yellow-100 text-yellow-800": status === "pending",
    };
};

const selectedApplicant = ref(null);


// Open dialog and set selected application
const selectedApplications = ref([]);

const allSelected = computed({
    get: () => props.applications.data.length > 0 && selectedApplications.value.length === props.applications.data.length,
    set: (value) => toggleSelectAll(value),
});

function toggleSelectAll(checked) {
    selectedApplications.value = checked
        ? props.applications.data.map((application) => application.id)
        : [];
}






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
                const message = selectedApplications.value?.length + ' Applications marked as not eligible'
                q.notify({type:'positive',message})
                approveRejectForm.reset();
                selectedApplications.value = []; // Clear selection after success
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

.page-title {
    font-family: 'Poppins';
    font-size: 21px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: normal;
    color: #333333;

}
</style>
