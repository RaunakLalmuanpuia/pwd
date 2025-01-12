<script setup>
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text-gray-900">Delete Account</h2>

            <p class="mt-1 text-sm text-gray-600">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </p>
        </header>

        <q-btn  class="q-px-xl" @click="confirmUserDeletion" :disabled="form.processing" color="secondary" label="Delete Account" rounded type="submit"/>
<!--        <DangerButton @click="confirmUserDeletion">Delete Account</DangerButton>-->

<!--        <Modal :show="confirmingUserDeletion" @close="closeModal">-->
<!--            <div class="p-6">-->
<!--                <h2 class="text-lg font-medium text-gray-900">-->
<!--                    Are you sure you want to delete your account?-->
<!--                </h2>-->

<!--                <p class="mt-1 text-sm text-gray-600">-->
<!--                    Once your account is deleted, all of its resources and data will be permanently deleted. Please-->
<!--                    enter your password to confirm you would like to permanently delete your account.-->
<!--                </p>-->

<!--                <div class="mt-6">-->
<!--                    <InputLabel for="password" value="Password" class="sr-only" />-->

<!--                    <TextInput-->
<!--                        id="password"-->
<!--                        ref="passwordInput"-->
<!--                        v-model="form.password"-->
<!--                        type="password"-->
<!--                        class="mt-1 block w-3/4"-->
<!--                        placeholder="Password"-->
<!--                        @keyup.enter="deleteUser"-->
<!--                    />-->

<!--                    <InputError :message="form.errors.password" class="mt-2" />-->
<!--                </div>-->

<!--                <div class="mt-6 flex justify-end">-->
<!--                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>-->

<!--                    <DangerButton-->
<!--                        class="ms-3"-->
<!--                        :class="{ 'opacity-25': form.processing }"-->
<!--                        :disabled="form.processing"-->
<!--                        @click="deleteUser"-->
<!--                    >-->
<!--                        Delete Account-->
<!--                    </DangerButton>-->
<!--                </div>-->
<!--            </div>-->
<!--        </Modal>-->
        <q-dialog v-model="confirmingUserDeletion">
            <q-card>
                <q-card-section>
                    <div class="text-h6">
                        Are you sure you want to delete your account?
                    </div>
                    <div class="q-mt-md">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.
                    </div>
                </q-card-section>

                <q-card-section>
                    <q-input
                        v-model="form.password"
                        label="Password"
                        type="password"
                        class="q-mb-md"
                        :rules="[val => val && val.length > 0 || 'Password is required']"
                        ref="passwordInput"
                        @keyup.enter="deleteUser"
                    />
                    <q-banner v-if="form.errors.password" color="negative">
                        {{ form.errors.password }}
                    </q-banner>
                </q-card-section>

                <q-card-actions>
                    <q-btn flat label="Cancel" color="secondary" @click="closeModal" />
                    <q-btn
                        flat
                        label="Delete Account"
                        color="negative"
                        :loading="form.processing"
                        :disabled="form.processing"
                        @click="deleteUser"
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </section>
</template>
