<template>
    <Head title="Bio" />
    <q-page padding>
        <q-form class="row q-col-gutter-sm" @submit="submit">
            <div class="col-xs-12 primary-title">Applicant details</div>
            <div class="col-xs-12">Applicant Information</div>
            <!--  Name-->
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.name"
                         :error="form.errors.hasOwnProperty('name')"
                         :error-message="form.errors?.name?.toString()"
                         :rules="[
                                         val=>!!val?.trim() || 'Applicant name is required'
                                       ]"
                         class="my-input"
                         dense
                         disable
                         input-class="test"
                         item-aligned
                         label="Applicant's Name"
                         outlined
                         @blur="delete form.errors['name']"
                />
                <span class="text-caption px-5  q-mt-sm">As provided during Account creation. Goto Profile to Edit</span>
            </div>
            <!--Email-->
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.email"
                         :error="form.errors.hasOwnProperty('email')"
                         :error-message="form.errors?.email?.toString()"
                         :rules="[
                                         val=>!!val?.trim() || 'Email is required'
                                       ]"
                         disable
                         class="my-input"
                         dense
                         item-aligned
                         label="Email"
                         outlined
                         @blur="delete form.errors['email']"
                />
                <span class="text-caption px-5  q-mt-sm">As provided during Account creation. Goto Profile to Edit</span>
            </div>
            <!--phone-->
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.phone"
                         disable
                         :rules="[
                                         val=>!!val || 'Mobile No is required',
                                         val=>val.length===10 || 'Mobile No must be 10 digit No',
                                       ]"
                         class="my-input"
                         dense
                         item-aligned
                         label="Mobile No"
                         mask="##########"
                         outlined
                         :error="!!form.errors?.phone"
                         :error-message="form.errors?.phone?.toString()"
                />
                <span class="text-caption px-5  q-mt-sm">As provided during Account creation. Goto Profile to Edit</span>
            </div>
            <!--parent name-->
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.parents_name"
                         :error="form.errors.hasOwnProperty('parents_name')"
                         :error-message="form.errors?.parents_name?.toString()"
                         :rules="[
                                         val=>!!val || 'Father/Mother name is required'
                                       ]"
                         class="my-input"
                         dense
                         item-aligned
                         label="Father/Mother Name"
                         outlined
                         @blur="delete form.errors['parents_name']"
                />
            </div>
            <!--gender-->
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.sex"
                          :options="['Male', 'Female', 'Transgender']"
                          :rules="[
                                         val=>!!val || 'Gender is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Gender"
                          outlined
                          :error="!!form.errors?.phone"
                          :error-message="form.errors?.phone?.toString()"
                />
            </div>
            <!--DOB-->
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.date_of_birth"
                         :rules="[
                                     val=>!!val || 'DOB is required',
                                     ]"
                         class="my-input"
                         dense
                         item-aligned
                         label="Date of Birth"
                         outlined
                         stack-label
                         type="date"
                         :error="form.errors.hasOwnProperty('date_of_birth')"
                         :error-message="form.errors?.date_of_birth?.toString()"
                />
            </div>
            <!--Category-->
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.community"
                          :options="categories"
                          :rules="[
                                         val=>!!val || 'Category is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Category"
                          outlined
                />
            </div>
<!--{{form.community}}-->
            <!--Category Document-->
            <div class="col-xs-12 col-sm-6" v-if="form.community && form.community.value && form.community.value !== 'General' && !existingBio?.community_attachment  " >

                <q-file
                    v-model="form.community_attachment"
                    label="Category Supporting Document"
                    filled
                    :error="!!form.errors?.community_attachment"
                    :error-message="form.errors?.community_attachment?.toString()"
                    class="my-input"
                    :rules="[
                          val=>!!val || 'Supporting Document is required'
                    ]"
                    dense
                    item-aligned
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>


            </div>



            <!--Religion-->
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.religion"
                          :options="religions"
                          :rules="[
                                         val=>!!val || 'Religion is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Religion"
                          outlined
                />
            </div>
            <!--Nationality-->
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.nationality"
                          :options="[
                                            { label: 'Indian', value: 'Indian' },
                                            { label: 'Others', value: 'Others' },

                                        ]"
                          :rules="[
                                         val=>!!val || 'Nationality is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Nationality"
                          outlined
                />
            </div>
            <!--Maritial Status-->
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.marital_status"
                          :options="['Single', 'Married', 'Divorced', 'Widowed']"
                          :rules="[
                                         val=>!!val || 'Marital Status is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Marital Status"
                          outlined
                />
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.experience"
                         :error="form.errors.hasOwnProperty('experience')"
                         :error-message="form.errors?.experience?.toString()"
                         class="my-input"
                         dense
                         item-aligned
                         label="Experience (If Any)"
                         outlined

                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input v-model="form.current_department"
                         :error="form.errors.hasOwnProperty('current_department')"
                         :error-message="form.errors?.current_department?.toString()"
                         class="my-input"
                         dense
                         item-aligned
                         label="Present Post held with Department (If Any)"
                         outlined

                />
            </div>

            <!--PWD-->
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.disability"
                    :options="[
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
    ]"
                    :rules="[val => val !== null || 'Please select an option']"
                    class="my-input"
                    dense
                    item-aligned
                    label="Person With Disability"
                    outlined
                    emit-value
                    map-options
                />
            </div>

            <!-- if pwd-->
            <div class="col-xs-12 col-sm-6" v-if="form.disability?.value === 1 || form.disability === 'Yes' || form.disability === 1 && !existingBio?.disability_attachment ">

                <q-file
                    v-model="form.disability_attachment"
                    label="Disability Supporting Document"
                    filled
                    :error="!!form.errors?.disability_attachment"
                    :error-message="form.errors?.disability_attachment?.toString()"
                    class="my-input"
                    :rules="[
                          val=>!!val || 'Disability Supporting Document is required'
                    ]"
                    dense
                    item-aligned
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>

            </div>

<!--            <div class="col-xs-12 col-sm-6 row items-center q-gutter-sm" v-if="existingBio.disability_attachment && form.disability === 1">-->

<!--                <q-btn-->
<!--                    :label="$q.screen.lt.sm ? 'OPEN' : 'OPEN'"-->
<!--                    color="primary"-->
<!--                    flat-->
<!--                    @click="handleOpen(existingBio.disability_attachment)"-->
<!--                />-->
<!--                <q-btn-->
<!--                    icon="edit"-->
<!--                    color="primary"-->
<!--                    class="mt-2"-->
<!--                    @click="showEditDisabilityAttachment = !showEditDisabilityAttachment"-->
<!--                />-->


<!--                <q-file-->
<!--                    v-if="showEditDisabilityAttachment"-->
<!--                    v-model="form.disability_attachment"-->
<!--                    label="Disability Supporting Document"-->
<!--                    filled-->
<!--                    :error="!!form.errors?.disability_attachment"-->
<!--                    :error-message="form.errors?.disability_attachment?.toString()"-->
<!--                    class="my-input"-->
<!--                    :rules="[-->
<!--          val => !!val || 'Disability Supporting Document is required'-->
<!--    ]"-->
<!--                    dense-->
<!--                    item-aligned-->
<!--                >-->
<!--                    <template v-slot:prepend>-->
<!--                        <q-icon name="attach_file" />-->
<!--                    </template>-->
<!--                </q-file>-->

<!--            </div>-->
            <div class="col-xs-12 col-sm-6" v-if="existingBio?.community_attachment "/>

            <div class="col-xs-12 col-sm-6 row items-center q-gutter-sm px-10" v-if="existingBio?.community_attachment &&  form.community?.value !== 'General' ">

                <q-btn
                    :label="$q.screen.lt.sm ? 'Category Attachment' : 'Category Attachment'"
                    color="primary"
                    flat
                    @click="handleOpen(existingBio.community_attachment)"
                />
                <q-btn
                    icon="edit"
                    color="primary"
                    class="mt-2"
                    @click="showEditCommunityAttachment = !showEditCommunityAttachment"
                />


                <q-file
                    v-if="showEditCommunityAttachment"
                    v-model="form.community_attachment"
                    label="Category Supporting Document"
                    filled
                    :error="!!form.errors?.community_attachment"
                    :error-message="form.errors?.community_attachment?.toString()"
                    class="my-input col"

                    dense
                    item-aligned
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>
            </div>

            <div class="col-xs-12 col-sm-6 row items-center q-gutter-sm " v-if="existingBio?.disability_attachment && form.disability === 1 || form.disability?.value === 'Yes'">

                <!-- Button with right margin -->
                <q-btn
                    :label="$q.screen.lt.sm ? 'Disability Attachment' : 'Disability Attachment'"
                    color="primary"
                    flat
                    @click="handleOpen(existingBio.disability_attachment)"
                    outlined
                />

                <!-- Edit button with right margin -->
                <q-btn
                    icon="edit"
                    color="primary"
                    class="mt-2 q-mr-sm"
                    @click="showEditDisabilityAttachment = !showEditDisabilityAttachment"
                />

                <!-- q-file occupying remaining space -->
                <q-file
                    v-if="showEditDisabilityAttachment"
                    v-model="form.disability_attachment"
                    label="Disability Supporting Document"
                    filled
                    class="my-input col"
                    :rules="[
          val => !!val || 'Disability Supporting Document is required'
    ]"
                    dense
                    item-aligned

                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>

            </div>




            <div class="col-xs-12 col-sm-12"></div>
            <div class="col-xs-12">
                <q-separator/>
            </div>

            <!--Education Detail-->
            <div class="col-xs-12">
                Education Detail
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select v-model="form.qualification"
                          :options="['Class VIII', 'HSLC', 'HSSLC',  'Graduate', 'Post Graduate', 'Doctorate']"
                          :rules="[
                                         val=>!!val || 'Qualification is required'
                                       ]"
                          class="my-input"
                          dense
                          item-aligned
                          label="Qualification"
                          outlined
                />
            </div>
            <div class="col-xs-12 col-sm-6"></div>
            <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Graduate' || form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                <div style="display: flex; width: 203%; gap: 1rem;">
                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.graduateDegree"
                                 :error="form.errors.hasOwnProperty('graduateDegree')"
                                 :error-message="form.errors?.graduateDegree?.toString()"
                                 :rules="[
                                                 val => !!val || 'Graduate Degree is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Graduate Degree"
                                 outlined
                                 @blur="delete form.errors['graduateDegree']"
                        />
                    </div>
                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.graduateStream"
                                 :error="form.errors.hasOwnProperty('graduateStream')"
                                 :error-message="form.errors?.graduateStream?.toString()"
                                 :rules="[
                                                 val => !!val || 'Graduate Stream is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Graduate Stream"
                                 outlined
                                 @blur="delete form.errors['graduateStream']"
                        />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6"></div>
            <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Post Graduate' || form.qualification === 'Doctorate'">
                <div style="display: flex; width: 203%; gap: 1rem;">
                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.postGraduateDegree"
                                 :error="form.errors.hasOwnProperty('postGraduateDegree')"
                                 :error-message="form.errors?.postGraduateDegree?.toString()"
                                 :rules="[
                                                 val=>!!val || 'Post Graduate Degree is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Post Graduate Degree"
                                 outlined
                                 @blur="delete form.errors['postGraduateDegree']"
                        />
                    </div>
                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.postGraduateStream"
                                 :error="form.errors.hasOwnProperty('postGraduateStream')"
                                 :error-message="form.errors?.postGraduateStream?.toString()"
                                 :rules="[
                                                 val=>!!val || 'Post Graduate Stream is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Post Graduate Stream"
                                 outlined
                                 @blur="delete form.errors['postGraduateStream']"
                        />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6"></div>
            <div class="col-xs-12 col-sm-6" v-if="form.qualification === 'Doctorate'">
                <div style="display: flex; width: 203%; gap: 1rem;">

                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.doctorateDegree"
                                 :error="form.errors.hasOwnProperty('doctorateDegree')"
                                 :error-message="form.errors?.doctorateDegree?.toString()"
                                 :rules="[
                                                 val=>!!val || 'Doctorate Degree is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Doctorate Degree"
                                 outlined
                                 @blur="delete form.errors['doctorateDegree']"
                        />
                    </div>
                    <div style="flex: 1; max-width: calc(50% - 0.5rem);">
                        <q-input v-model="form.doctorateStream"
                                 :error="form.errors.hasOwnProperty('doctorateStream')"
                                 :error-message="form.errors?.doctorateStream?.toString()"
                                 :rules="[
                                                 val=>!!val || 'Doctorate Stream is required'
                                               ]"
                                 class="my-input"
                                 dense
                                 item-aligned
                                 label="Doctorate Stream"
                                 outlined
                                 @blur="delete form.errors['parents_name']"
                        />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12"></div>
            <div class="col-xs-12">
                <q-separator/>
            </div>
            <!--Address-->

            <div class="col-xs-12">
                Permanent Address
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_house_no"
                    outlined
                    label="House No"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_house_no"
                    :error-message="form.errors?.permanent_house_no?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_street"
                    outlined
                    class="my-input"
                    dense
                    item-aligned
                    label="Street"
                    :error="!!form.errors?.permanent_street"
                    :error-message="form.errors?.permanent_street?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_locality"
                    outlined
                    label="Locality"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_locality"
                    :error-message="form.errors?.permanent_locality?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_landmark"
                    outlined
                    label="Landmark"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_landmark"
                    :error-message="form.errors?.permanent_landmark?.toString()"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_city"
                    outlined
                    label="City"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_city"
                    :error-message="form.errors?.permanent_city?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.permanent_district"
                    outlined
                    label="District"
                    lazy-rules
                    class="my-input"
                    dense
                    :options="district"
                    item-aligned
                    :error="!!form.errors?.permanent_district"
                    :error-message="form.errors?.permanent_district?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.permanent_state"
                    outlined
                    :options="state"
                    label="State"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_state"
                    :error-message="form.errors?.permanent_state?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.permanent_pin_code"
                    outlined
                    label="Pin Code"
                    lazy-rules
                    type="number"
                    maxlength="6"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.permanent_pin_code"
                    :error-message="form.errors?.permanent_pin_code?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <!-- Checkbox for Copying Address -->

            <div class="col-xs-12 col-sm-6">
                <q-checkbox
                    class="my-input p-5"
                    dense

                    v-model="sameAsPermanent"
                    label="Same as Permanent Address"
                />
            </div>

            <div class="col-xs-12">
                <q-separator/>
            </div>

            <div class="col-xs-12">
                Communication Address
            </div>

            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_house_no"
                    outlined
                    label="House No"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_house_no"
                    :error-message="form.errors?.communication_house_no?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_street"
                    outlined
                    label="Street"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_street"
                    :error-message="form.errors?.communication_street?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_locality"
                    outlined
                    label="Locality"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_locality"
                    :error-message="form.errors?.communication_locality?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_landmark"
                    outlined
                    label="Landmark"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_landmark"
                    :error-message="form.errors?.communication_landmark?.toString()"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_city"
                    outlined
                    label="City"
                    lazy-rules
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_city"
                    :error-message="form.errors?.communication_city?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.communication_district"
                    outlined
                    label="District"
                    lazy-rules
                    class="my-input"
                    :options="district"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_district"
                    :error-message="form.errors?.communication_district?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />

            </div>
            <div class="col-xs-12 col-sm-6">
                <q-select
                    v-model="form.communication_state"
                    outlined
                    label="State"
                    lazy-rules
                    class="my-input"
                    dense
                    :options="state"
                    item-aligned
                    :error="!!form.errors?.communication_state"
                    :error-message="form.errors?.communication_state?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-input
                    v-model="form.communication_pin_code"
                    outlined
                    label="Pin Code"
                    lazy-rules
                    type="number"
                    maxlength="6"
                    class="my-input"
                    dense
                    item-aligned
                    :error="!!form.errors?.communication_pin_code"
                    :error-message="form.errors?.communication_pin_code?.toString()"
                    :rules="[val => !!val || 'This field is required']"
                />
            </div>



            <div class="col-xs-12">
                <q-separator/>
            </div>
            <div class="col-xs-12">
                Document
            </div>
            <div class="row q-col-gutter-sm">
                <div class="col-xs-12 text-grey-5">
                    <div>
                        <div> Please upload relevant documents (Upload ngai te)</div>
                        <div class="text-red-5"> All Applicants are requested to upload true and authentic documents</div>
                    </div>
                    <br/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6"></div>

            <!--Passport photo-->
            <div v-if="!existingBio" class="col-xs-12 col-sm-6">
                <q-file
                    v-model="form.passport_attachment"
                    label="Passport Photo"
                    filled
                    :error="!!form.errors?.passport_attachment"
                    :error-message="form.errors?.passport_attachment?.toString()"
                    accept=".jpg, .jpeg, .png"
                    class="col-xs-12"
                    hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 3:4"
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>
            </div>
            <!--Signature-->
            <div v-if="!existingBio" class="col-xs-12 col-sm-6">
                <q-file
                    v-model="form.signature_attachment"
                    label="Signature"
                    filled
                    :error="!!form.errors?.signature_attachment"
                    :error-message="form.errors?.signature_attachment?.toString()"
                    accept=".jpg, .jpeg, .png"
                    class="col-xs-12"
                    hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 16:9"
                >
                    <template v-slot:prepend>
                        <q-icon name="attach_file" />
                    </template>
                </q-file>
            </div>


            <!-- Uploaded Passport photo-->
            <div v-if="existingBio" class="col-xs-12 col-sm-6">
                <p>Passport Photo:</p>
                <q-img
                    :src="`/storage/${existingBio.passport_photo}`"
                    alt="Passport Photo"
                    width="300px"
                    height="400px"
                    fit="fill"
                    :ratio="3/4"
                    :error="!!form.errors?.passport_attachment"
                    :error-message="form.errors?.passport_attachment?.toString()"
                />
                <br>
                <q-btn
                    icon="edit"
                    color="primary"
                    class="mt-2"
                    @click="showEditPassport = !showEditPassport"
                />
                <!-- File Input for Editing Passport Photo -->
                <div v-if="showEditPassport" class="mt-4">
                    <p>Upload New Passport Photo:</p>

                    <q-file
                        v-model="form.passport_attachment"
                        label="Upload Passport Photo"
                        style="width: 300px"
                        filled
                        accept="image/*"
                        :error="!!form.errors?.passport_attachment"
                        :error-message="form.errors?.passport_attachment?.toString()"
                        @added="handleFileChange($event, 'passport_attachment')"
                        hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 3:4"

                    />

                </div>
            </div>

            <!-- Uploaded Signature-->
            <div v-if="existingBio" class="col-xs-12 col-sm-6 ">
                <p>Signature:</p>
                <q-img
                    :src="`/storage/${existingBio.signature_photo}`"
                    alt="Signature Photo"
                    style="display:inline-block; vertical-align: middle"
                    class="inline-block vertical-middle"
                    width="320px"
                    height="180px"
                    fit="fill"
                    :ratio="16/9"
                    :error="!!form.errors?.passport_attachment"
                    :error-message="form.errors?.passport_attachment?.toString()"
                />
                <br>
                <q-btn
                    icon="edit"
                    color="primary"
                    class="mt-2"
                    @click="showEditSignature = !showEditSignature"
                />
                <!-- File Input for Editing Signature Photo -->
                <div v-if="showEditSignature" class="mt-4">
                    <p>Upload New Signature Photo:</p>

                    <q-file
                        v-model="form.signature_attachment"
                        label="Upload Signature Photo"
                        filled
                        style="width: 320px"
                        accept="image/*"
                        :error="!!form.errors?.signature_attachment"
                        :error-message="form.errors?.signature_attachment?.toString()"
                        @added="handleFileChange($event, 'signature_attachment')"
                        class="q-mb-md"
                        hint="Max file size: 512KB / only .jpeg, .png, .jpg/ Aspect Ratio 16:9"
                    />
                </div>
            </div>

            <!--Submit-->
            <div class="col-xs-12 flex justify-center q-mt-lg">
                <q-btn  class="q-px-xl" color="primary" :label="submitButtonLabel" rounded type="submit"/>
            </div>
        </q-form>
    </q-page>
</template>

<script setup>
import ApplicantLayout from "@/Layouts/ApplicantLayout.vue";
import { useForm, usePage, Head } from "@inertiajs/vue3";
import { ref, computed, watch } from "vue";
import {useQuasar} from "quasar";

defineOptions({
    layout: ApplicantLayout,
});


const props = defineProps({
    existingBio: Object,
    existingAddress: Object,
});
const page = usePage();
const q = useQuasar();

const originalCommunicationAddress = ref({
    communication_house_no: props.existingAddress?.communication_house_no || "",
    communication_street: props.existingAddress?.communication_street || "",
    communication_locality: props.existingAddress?.communication_locality || "",
    communication_landmark: props.existingAddress?.communication_landmark || "",
    communication_city: props.existingAddress?.communication_city || "",
    communication_district: props.existingAddress?.communication_district || "",
    communication_state: props.existingAddress?.communication_state || "",
    communication_pin_code: props.existingAddress?.communication_pin_code || "",
});

const sameAsPermanent = ref(false);

const form = useForm({
    name: page.props.auth.user?.name || "",
    phone: page.props.auth.user?.phone || "",
    email: page.props.auth.user?.email || "",
    parents_name: props.existingBio?.parents_name || "",
    sex: props.existingBio?.sex || "",
    date_of_birth: props.existingBio?.date_of_birth || "",
    community: props.existingBio?.community ? { label: props.existingBio.community, value: props.existingBio.community } : null,
    religion: props.existingBio?.religion ? { label: props.existingBio.religion, value: props.existingBio.religion } : null,
    marital_status: props.existingBio?.marital_status || "",
    nationality: props.existingBio?.nationality ? { label: props.existingBio.nationality, value: props.existingBio.nationality } : null,
    qualification: props.existingBio?.qualification || "",
    graduateDegree: props.existingBio?.graduateDegree || "",
    graduateStream: props.existingBio?.graduateStream || "",
    postGraduateDegree: props.existingBio?.postGraduateDegree || "",
    postGraduateStream: props.existingBio?.postGraduateStream || "",
    doctorateDegree: props.existingBio?.doctorateDegree || "",
    doctorateStream: props.existingBio?.doctorateStream || "",

    disability: props.existingBio?.disability !== undefined && props.existingBio?.disability !== null
        ? props.existingBio.disability // Use 1 or 0 directly
        : null,

    // disability: props.existingBio?.disability ? 1 : 0 || "",

    // disability: props.existingBio?.disability !== undefined && props.existingBio?.disability !== null
    //     ? { label: props.existingBio.disability === 1 ? 'Yes' : 'No', value:props.existingBio.disability === 1 ? 'Yes' : 'No' }
    //     : null,

    // disability: props.existingBio?.disability ? { label: props.existingBio.disability === 1 ? 'Yes' : 'No', value: props.existingBio.disability } : null,
    disability_type: props.existingBio?.disability_type || "",
    experience: props.existingBio?.experience || "",
    current_department:props.existingBio?.current_department || "",
    community_attachment: null, // Files cannot be pre-filled
    passport_attachment: null,
    signature_attachment: null,
    disability_attachment: null,


    permanent_house_no: props.existingAddress?.permanent_house_no || "",
    permanent_street: props.existingAddress?.permanent_street || "",
    permanent_locality: props.existingAddress?.permanent_locality || "",
    permanent_landmark: props.existingAddress?.permanent_landmark || "",
    permanent_city: props.existingAddress?.permanent_city || "",
    permanent_district: props.existingAddress?.permanent_district ? { label: props.existingAddress.permanent_district, value: props.existingAddress.permanent_district } : null,
    // permanent_district: props.existingAddress?.permanent_district || "",
    permanent_state: props.existingAddress?.permanent_state ? { label: props.existingAddress.permanent_state, value: props.existingAddress.permanent_state } : null,
    // permanent_state: props.existingAddress?.permanent_state || "",
    permanent_pin_code: props.existingAddress?.permanent_pin_code || "",

    communication_house_no: originalCommunicationAddress.value.communication_house_no,
    communication_street: originalCommunicationAddress.value.communication_street,
    communication_locality: originalCommunicationAddress.value.communication_locality,
    communication_landmark: originalCommunicationAddress.value.communication_landmark,
    communication_city: originalCommunicationAddress.value.communication_city,
    communication_district: props.existingAddress?.communication_district ? { label: props.existingAddress.communication_district, value: props.existingAddress.communication_district } : null,
    // communication_district: originalCommunicationAddress.value.communication_district,
    communication_state: props.existingAddress?.communication_state ? { label: props.existingAddress.communication_state, value: props.existingAddress.communication_state } : null,
    // communication_state: originalCommunicationAddress.value.communication_state,
    communication_pin_code: originalCommunicationAddress.value.communication_pin_code,
    country: props.existingData?.country || "India",
});

const showEditPassport = ref(false);
const showEditSignature =  ref(false);
const showEditDisabilityAttachment = ref(false);
const showEditCommunityAttachment = ref(false);
// Methods
const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
        form[field] = file;
    }
};

const submitButtonLabel = computed(() => {
    return props.existingBio ? "Update" : "Submit";
});

const  genders = [
    {value:'Male',label:'Male'},
    {value:'Female',label:'Female'},
]

const categories =  [
    {value:'Schedule Caste',label:'Schedule Caste'},
    {value:'Schedule Tribe',label:'Schedule Tribe'},
    {value:'General',label:'General'},
    {value:'OBC',label:'OBC'},
]

const religions =  [
    {value:'Hindu',label:'Hindu'},
    {value:'Muslim',label:'Muslim'},
    {value:'Sikh',label:'Sikh'},
    {value:'Christian',label:'Christian'},
    {value: 'Buddhist',label: 'Buddhist' },
    {value: 'Others', label: 'Others' },
]

const district = [
    {value:'Aizawl',label:'Aizawl'},
    {value:'Lunglei',label:'Lunglei'},
    {value:'Siaha',label:'Siaha'},
    {value:'Champhai',label:'Champhai'},
    {value: 'Kolasib',label: 'Kolasib' },
    {value: 'Serchhip', label: 'Serchhip' },
    {value:'Lawngtlai',label:'Lawngtlai'},
    {value:'Mamit',label:'Mamit'},
    {value:'Khawzawl',label:'Khawzawl'},
    {value:'Saitual',label:'Saitual'},
    {value: 'Hnahthial',label: 'Hnahthial' },
    {value: 'Other', label: 'Other' },
]

const state = [
    { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Ladakh', label: 'Ladakh' },
    { value: 'Lakshadweep', label: 'Lakshadweep' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Puducherry', label: 'Puducherry' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' }
];

watch(sameAsPermanent, (newValue) => {
    if (newValue) {
        // Copy permanent address to communication address
        form.communication_house_no = form.permanent_house_no;
        form.communication_street = form.permanent_street;
        form.communication_locality = form.permanent_locality;
        form.communication_landmark = form.permanent_landmark;
        form.communication_city = form.permanent_city;
        form.communication_district = form.permanent_district;
        form.communication_state = form.permanent_state;
        form.communication_pin_code = form.permanent_pin_code;
    } else {
        // Restore original communication address
        form.communication_house_no = "";
        form.communication_street = "";
        form.communication_locality = "";
        form.communication_landmark = "";
        form.communication_city = "";
        form.communication_district = "";
        form.communication_state = "";
        form.communication_pin_code = "";
    }
});

const handleOpen = (item) => {
    let a = document.createElement("a");
    a.target = "_blank";
    // a.href = item?.document_path;
    a.href = `/storage/${item}`;
    a.click();
};

const submit = () => {
    form.mizo_proficiency = !!form.mizo_proficiency; // Ensure boolean

    // const disabilityBoolean = form.disability.value === 'Yes'; // Convert to boolean
    const disabilityBoolean = form.disability?.value === 'Yes' ? 1 : 0;

    console.log('Disability (boolean):', disabilityBoolean);

    console.log(form.disability.value)

    const routeName = props.existingData
        ? 'applicant.bio_update' // Update route
        : 'applicant.bio_store'; // Create route

    q.dialog({
        title: 'Confirm Submission',
        message: 'Are you sure you want to submit this form?',
        ok: {
            label: 'Yes',
            color: 'positive',
        },
        cancel: {
            label: 'No',
            color: 'negative',
        },
    }).onOk(() => {
        // Proceed with form submission if confirmed
        form.post(route('applicant.bio_address_store'), {
            data: {
                ...form,
                disability: disabilityBoolean, // Send only the boolean value
            },
            onSuccess: (response) => {
                q.notify({
                    type: 'positive',
                    message: response?.props?.flash?.success || 'Successfully submitted!',
                });
            },
            onError: (errors) => {
                q.notify({
                    type: 'negative',
                    message: errors?.message || 'An error occurred!',
                });
            },
            onFinish: () => {
                q.loading.hide();
            },
        });
    }).onCancel(() => {
        q.notify({
            type: 'info',
            message: 'Submission cancelled.',
        });
    });
};

</script>
<style scoped>

.primary-title {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: normal;
    color: $primary;
}
.my-input.q-field--float .q-field__label {
    transform: translateY(-120%) translateX(-5px) scale(0.75);
    background: #fff;
    right: inherit;
    padding: 0 5px;
    z-index: 10;
}
.center-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //height: 100vh; /* Full viewport height */
    //margin: 0 auto; /* Ensure horizontal centering */
}
</style>
