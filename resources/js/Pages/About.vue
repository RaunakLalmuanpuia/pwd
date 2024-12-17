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
        <Head title="About Us" />

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
                            :href="route('about')"
                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            <PrimaryButton
                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"
                            >
                                About Us
                            </PrimaryButton>
                        </Link>
<!--                        <Link-->
<!--                            v-if="canRegister"-->
<!--                            :href="route('register')"-->
<!--                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"-->
<!--                        >-->
<!--                            <PrimaryButton-->
<!--                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"-->
<!--                            >-->
<!--                                Services-->
<!--                            </PrimaryButton>-->
<!--                        </Link>-->
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
<!--                        <Link-->
<!--                            v-if="canRegister"-->
<!--                            :href="route('register')"-->
<!--                            class="rounded-md px-3 py-2 ring-1 ring-transparent transition duration-300 hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"-->
<!--                        >-->
<!--                            <PrimaryButton-->
<!--                                class="bg-primary hover:bg-primaryDark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-opacity"-->
<!--                            >-->
<!--                                Contact-->
<!--                            </PrimaryButton>-->
<!--                        </Link>-->

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
                <h1 class="text-xl font-bold mb-4">ABOUT US</h1>

                <p class="text-lg text-gray-700">
                    Welcome to our Job Recruitment Portal! Our platform is designed to help job seekers apply for various government positions across different departments. We ensure a smooth and transparent application process for all applicants.
                </p>
                <p class="text-lg text-gray-700 mt-4">
                    <strong>Our Mission:</strong> To connect talented individuals with meaningful job opportunities and ensure a fair examination and selection process. We strive to provide the best experience for both applicants and hiring departments.
                </p>


                <p class="text-lg text-gray-700 mt-4">
                    <strong>Our Process:</strong>
                    <ul class="list-disc list-inside">
                        <li>Applicants can view available jobs and apply directly.</li>
                        <li>Each job includes specific qualifications, salary details, and application deadlines.</li>
                        <li>After applying, candidates are assigned to exams for further evaluation.</li>
                        <li>Exams include various subjects, and applicants are evaluated based on their performance.</li>
                        <li>After the exams, marks are assigned, and applicants are selected based on their performance and other criteria.</li>
                    </ul>
                </p>

                <h2 class="text-2xl font-semibold mt-6 mb-4">Departments</h2>
                <p class="text-lg text-gray-700">
                    Our system is integrated with various departments offering job opportunities. Each department lists available positions with detailed job requirements, salary, and other important information.
                </p>






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
