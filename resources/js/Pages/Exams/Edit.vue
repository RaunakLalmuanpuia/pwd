<template>
    <q-page padding>
    <p class="page-title">Edit Examinations</p>
    <q-form @submit="submit" @reset="reset" class="row q-col-gutter-sm zcard q-pa-md">
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

<!--        <div class="col-xs-12 col-sm-12 q-mb-md ">-->
<!--            <q-input v-model="form.description"-->
<!--                     type="textarea"-->
<!--                     dense-->
<!--                     outlined-->
<!--                     class="my-input"-->
<!--                     label="Name of examination"-->
<!--            />-->
<!--        </div>-->

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
                     label="Full mark"
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
                    <q-th align="left" style="width: 20%;">Subject</q-th>
                    <q-th align="center" style="width: 20%;">Date</q-th>
                    <q-th align="center" style="width: 15%;">Pass Mark</q-th>
                    <q-th align="center" style="width: 15%;">Start</q-th>
                    <q-th align="center" style="width: 20%;">End</q-th>
                    <q-th align="center" style="width: 10%;">Action</q-th>
                </q-tr>
                <q-tr v-for="(item, index) in form.subjects" :key="index">
                    <q-td align="left">{{ item?.subject_name }}</q-td>
                    <q-td align="center">{{ formatDate(item?.exam_date) }}</q-td>
                    <q-td align="center">{{ item?.full_mark }}</q-td>
                    <q-td align="center">{{ formatTimeToAmPm(item?.start_time) }}</q-td>
                    <q-td align="center">{{ formatTimeToAmPm(item?.end_time) }}</q-td>
                    <q-td align="center">
                        <q-btn flat icon="edit" @click="editSubject(index)" />
                        <q-btn flat icon="cancel" @click="removeSubject(index)" />
                    </q-td>
                </q-tr>
            </q-markup-table>
        </div>

        <div class="col-xs-12 col-sm-6">
            <q-checkbox v-model="form.active" label="Active"/>
        </div>

        <div class="col-xs-12 ">
            <q-separator/>
        </div>

        <div class="col-xs-12 flex justify-center items-center q-gutter-sm">
            <q-btn type="reset" label="Cancel" flat/>
            <q-btn class="q-px-lg" type="submit" label="Save" rounded color="primary"/>
        </div>




    </q-form>
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

                <q-input v-model="subjectForm.full_mark"
                         outlined
                         dense
                         class="my-input"
                         label="Full Mark"
                         :rules="[
                           val=>!isNaN(val)  || 'Invalid format'
                         ]"
                />

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


        <!-- Edit Subject Dialog -->
        <q-dialog v-model="showEditSubjectDialog">
            <q-card class="q-pa-md">
                <div class="flex justify-between items-center">
                    <div class="ztext-lg">Edit Subject</div>
                    <q-icon name="cancel" v-close-popup class="cursor-pointer"/>
                </div>
                <br/>
                <q-input v-model="editSubjectForm.subject_name"
                         outlined
                         class="my-input"
                         :rules="[
                               val=>!!val || 'Name is required'
                             ]"
                         label="Paper Name"/>

                <q-input v-model="editSubjectForm.exam_date"
                         outlined
                         class="my-input"
                         :rules="[
                                   val=>!!val || 'Exam Date is required'
                                 ]"
                         type="date"
                         label="Date of Exam"/>

                <q-input v-model="editSubjectForm.full_mark"
                         outlined
                         dense
                         class="my-input"
                         label="Full Mark"
                         :rules="[
                           val=>!isNaN(val)  || 'Invalid format'
                         ]"
                />

                <q-input v-model="editSubjectForm.start_time"
                         outlined
                         type="time"
                         class="my-input"
                         :rules="[
                                   val=>!!val || 'Start time is required'
                                 ]"
                         label="Start At"/>

                <q-input v-model="editSubjectForm.end_time"
                         outlined
                         type="time"
                         class="my-input"
                         :rules="[
                                   val=>!!val || 'End time is required'
                                 ]"
                         label="End At"/>

                <div class="flex q-gutter-sm">
                    <q-btn type="submit" style="min-width: 90px" rounded color="primary" @click="updateSubject" label="Save Changes"/>
                    <q-btn rounded color="negative" outline label="Cancel" v-close-popup @click="resetEditSubjectForm"/>
                </div>
            </q-card>
        </q-dialog>
    </q-page>


</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/Admin.vue";
import {ref} from "vue";

// Layout for the component
defineOptions({
    layout: AdminLayout,
});

// Props definition
const props = defineProps({
    exam: Object, // Exam object passed from the parent component
});

// Form setup using Inertia.js
const form = useForm({
    exam_name: props.exam.exam_name,
    exam_date: props.exam.exam_date,
    description: props.exam.description,
    pass_mark: props.exam.pass_mark,
    full_mark: props.exam.full_mark,
    start_at: props.exam.start_at,
    end_at: props.exam.end_at,
    active: Boolean(props.exam.active) ,
    subjects: props.exam.subjects.map((subject) => ({
        id: subject.id,
        subject_name: subject.subject_name,
        exam_date: subject.exam_date,
        full_mark: subject.full_mark,
        start_time: subject.start_time,
        end_time: subject.end_time,
    })),
});

const showSubjectDialog = ref(false);
const showEditSubjectDialog = ref(false);
const subjectForm = ref({
    id:'',
    subject_name: '',
    exam_date: '',
    full_mark: '',
    start_time: '',
    end_time: ''
});

const editSubjectForm = ref({
    id: '',
    subject_name: '',
    exam_date: '',
    full_mark: '',
    start_time: '',
    end_time: ''
});

function resetSubjectForm() {
    subjectForm.value = {
        subject_name: '',
        exam_date: '',
        full_mark: '',
        start_time: '',
        end_time: ''
    };
}

function addSubject() {
    const newSubject = {
        id: null, // Unique ID for the new subject
        subject_name: subjectForm.value.subject_name,
        exam_date: subjectForm.value.exam_date,
        full_mark: subjectForm.value.full_mark,
        start_time: subjectForm.value.start_time,
        end_time: subjectForm.value.end_time,
    };

    form.subjects.push(newSubject);
    resetSubjectForm();
    showSubjectDialog.value = false;
}
function editSubject(index) {
    const subject = form.subjects[index];
    editSubjectForm.value = { ...subject };
    showEditSubjectDialog.value = true;
}

function updateSubject() {
    const index = form.subjects.findIndex(subject => subject.id === editSubjectForm.value.id);
    if (index !== -1) {
        form.subjects[index] = { ...editSubjectForm.value };
        showEditSubjectDialog.value = false;
    }
}

function removeSubject(index) {
    form.subjects.splice(index, 1);
}
const submit = () => {
    form.put(route("exams.update", props.exam.id));
};

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
</script>
