<template>
    <q-page padding>
        <q-form @submit="submit" @reset="reset" class="row q-col-gutter-sm zcard q-pa-md">

            <!--      <div class="col-xs-12 flex items-center">-->

            <!--      </div>-->

            <div class="col-xs-12 col-sm-12  ">
                <q-input v-model="form.exam_name"
                         outlined
                         dense
                         class="my-input"
                         label="Name of examination"
                         :rules="[
                   val=>!!val || 'Name is required'
                 ]"
                />
            </div>

            <div class="col-xs-12 col-sm-12 q-mb-md ">
                <q-input v-model="form.description"
                         type="textarea"
                         dense
                         outlined
                         class="my-input"
                         label="Description"
                />
            </div>
            <div class="col-xs-12 col-sm-6  ">
                <q-input v-model="form.pass_mark"
                         outlined
                         dense
                         class="my-input"
                         label="Pass mark"
                         :rules="[
                   val=>!isNaN(val) || 'Invalid format'
                 ]"
                />
            </div>
            <div class="col-xs-12 col-sm-6  ">
                <q-input v-model="form.full_mark"
                         outlined
                         dense
                         class="my-input"
                         label="Full mark mark"
                         :rules="[
                   val=>!isNaN(val)  || 'Invalid format'
                 ]"
                />
            </div>

            <div class="col-xs-12 col-sm-6  ">
                <q-input v-model="form.start_at"
                         type="datetime-local"
                         outlined
                         dense
                         stack-label
                         class="my-input"
                         label="Start"
                         :rules="[
                   val=>!!val || 'Invalid Date time'
                 ]"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.end_at"
                         type="datetime-local"
                         stack-label
                         outlined
                         dense
                         class="my-input"
                         label="End"
                         :rules="[
                   val=>!!val || 'Invalid Date time'
                 ]"
                />
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-checkbox v-model="form.active" label="Active"/>
            </div>

            <div class="col-xs-12 ">
                <q-separator/>
            </div>
            <div class="col-xs-12 flex justify-between items-center">
                <div class="text-grey-7">Click Add button to add paper</div>
                <q-btn @click="showSubjectDialog = true" rounded color="primary" outline label="Add"/>
            </div>
            <div class="col-xs-12">
                <q-markup-table flat>
                    <q-tr>
                        <q-th align="left" style="width: 30%;">Subject</q-th>
                        <q-th align="center" style="width: 20%;">Date</q-th>
                        <q-th align="center" style="width: 20%;">Start</q-th>
                        <q-th align="center" style="width: 20%;">End</q-th>
                        <q-th align="center" style="width: 10%;">Action</q-th>
                    </q-tr>
                    <q-tr v-for="(item, index) in form.subjects" :key="index">
                        <q-td align="left">{{ item?.subject_name }}</q-td>
                        <q-td align="center">{{ formatDate(item?.exam_date) }}</q-td>
                        <q-td align="center">{{ formatTimeToAmPm(item?.start_time) }}</q-td>
                        <q-td align="center">{{ formatTimeToAmPm(item?.end_time) }}</q-td>
                        <q-td align="center">
                            <q-btn flat icon="cancel" @click="removeSubject(index)" />
                        </q-td>
                    </q-tr>
                </q-markup-table>
            </div>


            <div class="col-xs-12 flex justify-center items-center q-gutter-sm">
                <q-btn type="reset" label="Cancel" flat/>
                <q-btn class="q-px-lg" type="submit" label="Save" rounded color="primary"/>
            </div>
            <q-dialog v-model="showSubjectDialog">
                <q-card class="q-pa-md">
                    <div class="flex justify-between items-center">
                        <div class="ztext-lg">New Subject</div>
                        <q-icon name="cancel" v-close-popup class="cursor-pointer"/>
                    </div>
                    <br/>
                        <q-input v-model="subjectForm.subject_name"
                                 outlined
                                 class="my-input"
                                 :rules="[
                               val=>!!val || 'Name is required'
                             ]"
                                 label="Paper Name"/>

                        <q-input v-model="subjectForm.exam_date"
                                 outlined
                                 class="my-input"
                                 :rules="[
                                   val=>!!val || 'Exam Date is required'
                                 ]"
                                 type="date"
                                 label="Date of Exam"/>

                        <q-input v-model="subjectForm.start_time"
                                 outlined
                                 type="time"
                                 class="my-input"
                                 :rules="[
                                   val=>!!val || 'Start time is required'
                                 ]"
                                 label="Start At"/>

                        <q-input v-model="subjectForm.end_time"
                                 outlined
                                 type="time"
                                 class="my-input"
                                 :rules="[
                                   val=>!!val || 'End tim is required'
                                 ]"
                                 label="End At"/>

                        <div class="flex q-gutter-sm">
                            <q-btn type="submit" style="min-width: 90px" rounded color="primary" @click="addSubject"  label="Add"/>
                            <q-btn rounded color="negative" outline label="Reset" v-close-popup @click="resetSubjectForm"/>
                        </div>
                </q-card>

            </q-dialog>
        </q-form>

    </q-page>


</template>


<script setup>
import { router, useForm } from '@inertiajs/vue3';
import { ref } from "vue";
import AdminLayout from "@/Layouts/Admin.vue";

defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    job: Object,
});

const form = useForm({
    exam_name: "",
    exam_date: "",
    description: "",
    start_at: "",
    end_at: "",
    pass_mark: "",
    full_mark: "",
    active: false,
    subjects: [],
});

const showSubjectDialog = ref(false);

const subjectForm = ref({
    subject_name: '',
    exam_date: '',
    start_time: '',
    end_time: ''
});

const resetSubjectForm = () => {
    subjectForm.value = { name: '', exam_date: '', start_at: '', end_at: '' };
    showSubjectDialog.value = false;
};


// const addSubject = () => {
//     form.subjects.push({ name: "", date: "", time: "" });
// };

function formatTimeToAmPm(time) {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    const hourNum = parseInt(hours, 10);
    const isPM = hourNum >= 12;
    const formattedHours = hourNum % 12 || 12; // Convert to 12-hour format
    const period = isPM ? 'PM' : 'AM';
    return `${formattedHours}:${minutes} ${period}`;
}
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}
const addSubject = () => {
    form.subjects.push({ ...subjectForm.value });
    resetSubjectForm();
};

const removeSubject = (index) => {
    form.subjects.splice(index, 1);
};

const submit = () => {
    form.post(route("exams.store", props.job.id));
};
</script>
