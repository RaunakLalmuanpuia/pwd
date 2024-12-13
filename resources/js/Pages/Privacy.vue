<script setup>
import { Head, Link } from "@inertiajs/vue3";
import PrimaryButton
    from "../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/PrimaryButton.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },

});

</script>

<template>
    <div class="flex flex-col min-h-screen bg-gray-100 text-gray-800 font-sans">
        <!-- Header Section -->
        <Head title="Privacy Policy" />

        <header class="bg-primary text-white p-6 shadow-md">
            <div class="container mx-auto flex justify-between items-center">
                <Link @click="$inertia.get(route('welcome'))">
                    <h1 class="text-3xl font-bold text-white">
                        Recruitment Portal
                    </h1>
                </Link>

                <nav
                    v-if="canLogin"
                    class="-mx-3 flex flex-1 justify-end text-white"
                >
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>

                    <template v-else>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"
                            >
                                About Us
                            </PrimaryButton>
                        </Link>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"
                            >
                                Services
                            </PrimaryButton>
                        </Link>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"
                            >
                                Apply
                            </PrimaryButton>
                        </Link>
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition duration-300 hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"
                            >
                                Contact
                            </PrimaryButton>
                        </Link>

                        <Link
                            :href="route('login')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition duration-300 hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-secondary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-opacity"
                            >
                                Log In
                            </PrimaryButton>
                        </Link>

                        <!-- Register Button (only if canRegister is true) -->
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition duration-300 hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-accent hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-opacity"
                            >
                                Register
                            </PrimaryButton>
                        </Link>
                    </template>
                </nav>
            </div>
        </header>

        <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h1 class="text-xl font-bold mb-4">Privacy Policy</h1>
                <ol class="list-decimal list-inside space-y-4 text-gray-700">
                    <li>
                        This website does not automatically capture any specific personal information from you
                        (like name, phone number, or e-mail address) that allows us to identify you individually.
                    </li>
                    <li>
                        If the website requests you to provide personal information, you will be informed of the
                        particular purposes for which the information is gathered, and adequate security measures
                        will be taken to protect your personal information.
                    </li>
                    <li>
                        We collect personal information (like name, address, phone number, qualification, and
                        signature) in connection with your application and recruitment process.
                    </li>
                    <li>
                        The personal information collected will be used solely for recruitment purposes, and we
                        will not use it for any other purpose unless you have given your explicit consent.
                    </li>
                    <li>
                        You have the option to ask for deletion of your data. However, we may need to retain
                        some of your personal information for accounting purposes.
                    </li>
                    <li>
                        Application fees once paid cannot be refunded. In cases where the fee amount is deducted
                        more than once, applicants may seek a refund from Mizoram State e-Governance Society (MSeGS),
                        Aizawl upon providing the said transaction record.
                    </li>
                    <li>
                        We do not sell or share any personally identifiable information volunteered on the website
                        to any third party (public/private). Any information provided to this website will be
                        protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
                    </li>
                    <li>
                        We may gather certain information about your visit to the site, such as IP address, domain
                        name, browser type, operating system, date and time of the visit, and pages visited. We do
                        not attempt to link these details to the identity of any individual unless an attempt to
                        damage the site is detected.
                    </li>
                </ol>
            </div>
        </main>


        <!-- Footer -->
        <footer class="bg-gray-800 text-gray-200 py-4 text-center">
            <div class="container flex justify-between items-center">
                <div class="flex space-x-2">
                    <img src="/assets/images/footer-logo.png"/>
                    <div>
                        <div>Crafted with care by</div>
                        <div>Mizoram State e-Governance Society</div>
                    </div>
                </div>
                <div class="column items-center">
                    <div class="nav-link">Help Desk</div>
                    <div class="nav-link">support-msegs@mizoram.gov.in/9233942951</div>
                </div>
                <div class="column items-end">
                    <div>© 2024 Government Recruitment Portal. All Rights Reserved.</div>
                    <div class="flex space-x-3">
                        <Link
                            :href="route('privacy')"
                        >
                            <p class="footer-link" >Privacy Policy</p>
                        </Link>

                        <Link
                            :href="route('terms')"
                        >
                            <p class="footer-link" >Terms and condition</p>
                        </Link>



                    </div>
                </div>
            </div>

        </footer>
    </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
