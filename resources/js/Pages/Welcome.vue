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
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
}
</script>

<template>
    <div class="bg-gray-100 text-gray-800 font-sans">
        <!-- Header Section -->
        <Head title="Home" />

        <header class="bg-primary text-white p-6 shadow-md">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-3xl font-bold text-white">
                    Recruitment Portal
                </h1>
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

        <!-- Hero Section -->
        <section
            class="bg-cover bg-center py-24"
            style="background-image: url('/images/hero-bg.jpg')"
        >
            <div class="container mx-auto text-center text-white">
                <!-- <h2 class="text-4xl md:text-5xl font-bold">
                    Join Us in Serving the Nation
                </h2> -->
                <p class="mt-4 text-lg md:text-xl text-black">
                    Explore government job opportunities and make a difference.
                </p>
                <button
                    class="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-md"
                >
                    Apply Now
                </button>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-16 px-4 md:px-0">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">About the Portal</h2>
                <p class="text-lg max-w-2xl mx-auto">
                    Our recruitment portal is dedicated to connecting qualified
                    candidates with government job openings, ensuring a
                    transparent and efficient hiring process.
                </p>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="bg-gray-200 py-16 px-4 md:px-0">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Our Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold mb-2">Job Listings</h3>
                        <p>
                            Access to various government job opportunities
                            updated regularly.
                        </p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold mb-2">
                            Online Application
                        </h3>
                        <p>
                            Apply online and track your application status
                            easily.
                        </p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-semibold mb-2">
                            Support & Guidance
                        </h3>
                        <p>
                            Get support through our helpdesk for any
                            application-related queries.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Application Section -->
        <section id="apply" class="py-16 px-4 md:px-0 bg-blue-600 text-white">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6 text-white">Ready to Apply?</h2>
                <p class="text-lg mb-6">
                    Take the first step towards a rewarding career in the
                    government sector.
                </p>
                <button
                    class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-md"
                >
                    Start Application
                </button>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16 px-4 md:px-0">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
                <p class="text-lg max-w-2xl mx-auto">
                    If you have any questions, feel free to reach out through
                    our support center.
                </p>
                <div class="mt-8">
                    <a
                        href="mailto:support@gov-recruitment.gov"
                        class="text-blue-500 hover:underline"
                    >support@gov-recruitment.gov</a
                    >
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-gray-200 py-6 text-center">
            <p>
                &copy; 2024 Government Recruitment Portal. All Rights Reserved.
            </p>
        </footer>
    </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
