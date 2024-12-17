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
        <Head title="Terms" />

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
                <h1 class="text-xl font-bold mb-4">Terms and Conditions</h1>
                <ol class="list-decimal list-inside space-y-4 text-gray-700">
                    <li>
                        The Mizoram Government recruitment online portal has been developed and hosted by the Mizoram State
                        e-Governance Society (MSeGS) to allow aspirants to apply online for vacant posts in Mizoram
                        Government departments. The documents and information displayed on this website are for reference purposes only
                        and do not purport to be a legal document.
                    </li>
                    <li>
                        We do not warrant the accuracy or completeness of the information, text, graphics, links, or
                        other items contained within the website. As a result of updates and corrections, the web
                        contents are subject to change without any notice.
                    </li>
                    <li>
                        Under no circumstances will Mizoram State e-Governance Society (MSeGS) be liable for any expense, loss, or damage, including
                        without limitation, indirect or consequential loss or damage, or any expense, loss, or damage
                        whatsoever arising from the use, or loss of use, of data, arising out of or in connection with
                        the use of this website.
                    </li>
                    <li>
                        These terms and conditions shall be governed by and construed in accordance with Indian laws.
                        Any dispute arising under these terms and conditions shall be subject to the jurisdiction of
                        the courts of India.
                    </li>
                    <li>
                        Certain links on the website lead to resources located on other websites maintained by third
                        parties over whom we have no control or connection. These websites are external to this
                        website, and by visiting them, you are outside our website and its channels. We neither endorse
                        nor offer any judgment or warranty and accept no responsibility or liability for the authenticity,
                        availability of any goods or services, or for any damage, loss, or harm, direct or consequential,
                        or any violation of local or international laws that may occur by visiting and transacting on
                        these websites.
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
