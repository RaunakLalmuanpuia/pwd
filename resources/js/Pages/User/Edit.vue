
<template>
    <q-page padding>
        <div class="flex flex-inline items-center">
            <p class='page-title'>Edit User</p>
            <q-space/>
            <q-breadcrumbs align="right" gutter="xs">
                <q-breadcrumbs-el :to="{name:'user:read'}" label="Users"/>
                <q-breadcrumbs-el label="Edit User"/>
            </q-breadcrumbs>
        </div>

        <q-form class="zcard q-pa-md" @reset="resetForm" @submit="handleSubmit">
            <div class="row q-col-gutter-sm">
                <div class="col-xs-12 col-sm-6">
                    <q-input v-model="form.name"
                             class="my-input"
                             dense
                             label="Name"
                             outlined
                             :error="form.errors.hasOwnProperty('name')"
                             :error-message="form.errors?.name?.toString()"
                             @blur="delete form.errors['name']"
                             :rules="[
                 val=>!!val || 'Username is required'
               ]"
                    />
                </div>

                <div class="col-xs-12 col-sm-6">
                    <q-input v-model="form.phone"
                             class="my-input"
                             mask="##########"
                             dense
                             label="Mobile"
                             outlined
                             :error="form.errors.hasOwnProperty('phone')"
                             :error-message="form.errors?.phone?.toString()"
                             @blur="delete form.errors['phone']"
                             :rules="[
                             val=>val.length===10 || 'Mobile is required'
                           ]"
                    />
                </div>

                <div class="col-xs-12 col-sm-6">
                    <q-input v-model="form.email"
                             class="my-input"
                             dense
                             label="Email"
                             outlined
                             :error="form.errors.hasOwnProperty('email')"
                             :error-message="form.errors?.email?.toString()"
                             @blur="delete form.errors['email']"
                             :rules="[
                             val=>emailRegex.test(val) || 'Invalid email'
                           ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-select v-model="form.roles"
                              multiple
                              use-chips
                              :options="roleOptions"
                              dense
                              class="my-input"
                              label="Roles"
                              outlined
                              :option-value="'id'"
                              :option-label="'name'"
                              :error="form.errors.hasOwnProperty('roles')"
                              :error-message="form.errors?.roles?.toString()"
                              @blur="delete form.errors['roles']"
                              :rules="[
                                val=>val.length>0 || 'roles is required'
                       ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input v-model="form.password"
                             type="password"
                             class="my-input"
                             dense
                             label="Password"
                             outlined
                             :error="form.errors.hasOwnProperty('password')"
                             :error-message="form.errors?.password?.toString()"
                             @blur="delete form.errors['password']"
                             :rules="[
                             val=>val?.length>=6 || 'Password must be at least 6 digit character'
                           ]"
                    />
                </div>
                <div class="col-xs-12 col-sm-6">
                    <q-input v-model="form.password_confirmation"
                             type="password"
                             class="my-input"
                             dense
                             label="Confirm Password"
                             outlined
                             :error="form.errors.hasOwnProperty('password_confirmation')"
                             :error-message="form.errors?.password_confirmation?.toString()"
                             @blur="delete form.errors['password_confirmation']"
                             :rules="[
                             val=>val===form.password || 'Confirm password doesn\'t match Password'
                           ]"
                    />
                </div>


            </div>
            <div class=col-xs-12>
                <q-separator class="q-my-md"/>
            </div>
            <q-card-actions class="q-mt-md">
                <q-btn color="primary" flat type="submit" label="Save"/>
                <q-btn color="negative" flat type="reset" label="Reset"/>
            </q-card-actions>
        </q-form>
    </q-page>
</template>
<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {ref, computed} from 'vue';
import {useForm} from "@inertiajs/vue3";
import {useQuasar} from "quasar";

const q = useQuasar();
defineOptions({
    layout:AdminLayout
})

const props = defineProps({
    data:Object,
    roles: Object
})

const form = useForm({
    name: props.data?.name,
    phone: props.data?.phone,
    email: props.data?.email,
    roles: props.data?.roles.map(item => item.name) || [],
    password: '',
    password_confirmation: '',
})

// Computed property to map roles for q-select options
const roleOptions = computed(() => {
    return props.roles.map(role => ({
        id: role.id,
        name: role.name
    }));
});
console.log(roleOptions.value)

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const resetForm = e => clear();
const clear = () => {
    form.name = '';
    form.mobile = '';
    form.email = '';
    form.password = '';
    form.roles = [];
    form.password_confirmation = '';
}
const handleSubmit = () => {

    // Send PUT request using Inertia's form submission
    form.put(route('user.update', props.data.id), {
        onStart: () => {
            // Show loading indicator
            q.loading.show();
        },
        onSuccess: () => {
            // Notify success
            q.notify({
                type: 'positive',
                message: 'User updated successfully!',
            });
            form.reset(); // Clear the form
        },
        onError: () => {
            // Notify error
            q.notify({
                type: 'negative',
                message: 'There was an error updating the user.',
            });
        },
        onFinish: () => {
            // Hide loading indicator
            q.loading.hide();
        },
    });
};


// const handleSubmit = () => {
//
//     form.put(route('user.update', props.data.id), {});
// };

</script>

<style scoped>

</style>
