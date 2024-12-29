<template>
    <q-page padding>
        <p class=" page-title">Result</p>
        <q-btn
            class="q-ma-none q-pa-none"
            flat
            label="back"
            icon="arrow_left"
            @click="goBack"
        />

        <div class="zcard flex items-center q-pa-md">
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
            <p class="ztext q-ma-none q-ml-sm">Enter Application. no,then press Enter</p>
        </div>



        <div v-if="!!applicants" class="row q-col-gutter-md q-py-xs">

            <div class="col-xs-12 col-sm-6">
                <div class="row zcard q-pa-md">
                    <div class="col-xs-12 primary-title text-center">Applicant</div>


                    <div class="col-xs-12">
                        <q-img
                            class="q-my-lg"
                            ratio="1"
                            style="width: 120px"
                            :src="`/storage/${applicants.applicant?.passport_photo}`"
                        />
                    </div>

                    <div class="col-xs-6  ztext">Application No. : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants?.application_id}}</div>

                    <div class="col-xs-6  ztext">Candidate : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user?.name}}</div>

                    <div class="col-xs-6  ztext">Father/Mother : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant?.parents_name}}</div>

                    <div class="col-xs-6  ztext">Mobile : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user?.phone}}</div>

                    <div class="col-xs-6  ztext">Gender : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant?.sex}}</div>

                    <div class="col-xs-6  ztext">Category : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant?.community}}</div>

                    <div class="col-xs-6  ztext">Date of birth : </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant?.date_of_birth}}</div>

                    <div class="col-xs-12">
                        <q-separator class="q-my-md"/>
                    </div>

                    <div class="col-xs-6  ztext">Applied Job Details</div>
                    <div class="col-xs-6"></div>

                    <div class="col-xs-6  ztext">Post Name</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.post_name}}</div>

                    <div class="col-xs-6  ztext">Department</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.department_id}}</div>

                    <div class="col-xs-6  ztext">Category </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.category}}</div>

                    <div class="col-xs-6  ztext">Salary </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.salary}}</div>

                    <div class="col-xs-6  ztext">Description </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.description}}</div>




                    <div class="col-xs-6  ztext">Minimum Qualification</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.job_detail?.qualification}}</div>

                    <div class="col-xs-12">
                        <q-separator class="q-my-md"/>
                    </div>

                    <div class="col-xs-6  ztext">Permanent Address</div>
                    <div class="col-xs-6"></div>

                    <div class="col-xs-6  ztext">State</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user.address?.permanent_state}}</div>

                    <div class="col-xs-6  ztext">District </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user.address?.permanent_district}}</div>

                    <div class="col-xs-6  ztext">City/Town/Village </div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user.address?.permanent_city}}</div>

                    <div class="col-xs-6  ztext">Locality</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user.address?.permanent_locality}}</div>

                    <div class="col-xs-6  ztext">House no</div>
                    <div class="col-xs-6  text-weight-medium">{{applicants.applicant.user.address?.permanent_house_no}}</div>

                    <div class="col-xs-12">
                        <q-separator class="q-my-md"/>
                    </div>
<!--                    {{applicants.applicant}}-->
                    <div class="col-xs-6  ztext">Education</div>
                    <div class="col-xs-6"></div>

                    <div class="col-xs-6 ztext">Qualification</div>
                    <div class="col-xs-6 text-weight-medium">{{applicants.applicant.qualification}}</div>

                    <!-- If qualification is Graduate -->
                    <template v-if="applicants.applicant.qualification === 'Graduate'">
                        <div class="col-xs-6 ztext">Graduate Degree</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant.graduateDegree}}</div>
                        <div class="col-xs-6 ztext">Graduate Stream</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant.graduateStream}}</div>
                    </template>

                    <!-- If qualification is Post Graduate -->
                    <template v-if="applicants.applicant.qualification === 'Post Graduate'">
                        <div class="col-xs-6 ztext">Post Graduate Degree</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant.postGraduateDegree}}</div>
                        <div class="col-xs-6 ztext">Post Graduate Stream</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant.postGraduateStream}}</div>

                        <!-- Also show Graduate details if applicable -->
                        <template v-if="applicants.applicant.graduateDegree">
                            <div class="col-xs-6 ztext">Graduate Degree</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant.graduateDegree}}</div>
                        </template>
                        <template v-if="applicants.applicant.graduateStream">
                            <div class="col-xs-6 ztext">Graduate Stream</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant.graduateStream}}</div>
                        </template>
                    </template>

                    <!-- If qualification is Doctorate -->
                    <template v-if="applicants.applicant.qualification === 'Doctorate'">

                        <div class="col-xs-6 ztext">Doctorate Degree</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.doctorateDegree}}</div>
                        <div class="col-xs-6 ztext">Doctorate Stream</div>
                        <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.doctorateStream}}</div>

                        <!-- Also show Graduate and Post Graduate details if applicable -->

                        <template v-if="applicants.applicant.postGraduateDegree">
                            <div class="col-xs-6 ztext">Post Graduate Degree</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.postGraduateDegree}}</div>
                        </template>

                        <template v-if="applicants.applicant.postGraduateStream">
                            <div class="col-xs-6 ztext">Post Graduate Stream</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.postGraduateStream}}</div>
                        </template>


                        <template v-if="applicants.applicant.graduateDegree">
                            <div class="col-xs-6 ztext">Graduate Degree</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.graduateDegree}}</div>
                        </template>
                        <template v-if="applicants.applicant.graduateStream">
                            <div class="col-xs-6 ztext">Graduate Stream</div>
                            <div class="col-xs-6 text-weight-medium">{{applicants.applicant?.graduateStream}}</div>
                        </template>

                    </template>


                </div>
            </div>

            <div class="col-xs-12 col-sm-6 ">

                <q-form  @submit="submitForm" class="row zcard  q-pa-md">

                    <div class="col-xs-12 primary-title text-center">Enter Exam Result for {{applicants.job_detail?.post_name}}</div>
                    <div v-for="(examGroup, examName) in form.subjects" :key="examName">
                        <p class="primary-title">{{examName}}:</p>
                        <div class="col-sm-12 row q-col-gutter-md" v-for="(item,i) in examGroup" :key="i">

                            <div class="col-xs-12 ztext q-mt-md text-weight-medium">
                                {{item.subject_name}}
                            </div>
                            <div class="col-6 ">
                                <q-input outlined
                                         v-model="item.existing_marks"
                                         dense
                                         label="Score"
                                         class="my-input"
                                         :rules="[
                                         val=>!isNaN(val) || 'Score is required'
                                     ]"
                                />
                            </div>
                            <div class="col-6">
                                <q-input outlined
                                         v-model="item.full_mark"
                                         dense
                                         stack-label
                                         disable
                                         label="Full mark"
                                         class="my-input"/>
                            </div>

                            <div class="col-xs-12 ">
                                <q-input outlined
                                         type="textarea"
                                         v-model="item.remark"
                                         dense
                                         label="Remark"
                                         class="my-input"/>
                            </div>

                            <div class="col-xs-12 ">
                                <q-checkbox v-model="item.passed" label="Passed this exam"/>
                            </div>
                            <div class="col-xs-12">
                                <q-separator/>
                            </div>

                        </div>

                    </div>


                    <div class="col-xs-12 flex justify-center q-pa-md">
                        <q-btn @click="$router.back()" flat label="Cancel"/>
                        <q-btn type="submit" color="primary" rounded class="q-px-lg" label="Assign Marks"/>
                    </div>
                </q-form>

            </div>

        </div>

    </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {reactive, ref, computed} from 'vue';
import {router, useForm} from "@inertiajs/vue3";



defineOptions({
    layout:AdminLayout
})

const props = defineProps(['applicants','subjects', 'search']);

const form = useForm({
    application_id: props.applicants ? props.applicants.id : null,  // Fallback to null if applicants is null
    subjects: reactive(props.subjects || []),  // Use an empty array if subjects is null or undefined
});


const state=reactive({
    search:props?.search,
    tab: route().current(),
})

const search = ref('');


const handleSearch=e=>{
    router.get(route('exams.marks_assign'), {
        search: state.search
    });
}


function goBack() {
    window.history.back(); // Use browser's native back functionality
}
const handleNavigation=(value)=> {
    router.get(route(value))
}

const submitForm = () => {
    form.post(route('exams.storeExamMarks'), {
        onSuccess: () => {
            this.$q.notify({
                type: 'positive',
                message: 'Marks assigned successfully!',
            });
        },
        onError: (errors) => {
            this.$q.notify({
                type: 'negative',
                message: 'Validation errors occurred. Please fix them.',
            });
        },
    });
};

</script>
<style scoped>

</style>
