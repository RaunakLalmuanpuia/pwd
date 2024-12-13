<template>
    <div class="row container q-ma-md q-col-gutter-md">
        <div class="col-xs-12 flex justify-around">
            <q-btn flat :to="{name:'privacy'}" label="Privacy policy"/>
            <q-btn flat :to="{name:'term'}" label="Terms and Conditions"/>
            <q-btn flat :to="{name:'about'}" label="About Mizoram Police"/>
            <q-btn flat :to="{name:'faq'}" label="Police Recruitment FAQ"/>
        </div>
        <div class="col-xs-12 flex justify-between">

            <div class="flex">
                <q-img class="q-ma-md" style="width: 40px" src="~assets/msegs_logo_grey.png"/>
                <div class="float-right column justify-center">
                    <p class="text-bold q-ma-none">Designed & Developed By</p>
                    <p class="q-ma-none">Mizoram State e-Governance Society</p>
                </div>
            </div>

            <div class="flex">
                <q-img class="q-ma-md" style="width: 40px" src="~assets/police_logo_black.png"/>
                <div class="float-right column justify-center">
                    <p class="text-bold q-ma-none">Mizoram Police Department</p>
                    <p class="q-ma-none">Government of Mizoram</p>
                </div>
            </div>

        </div>
    </div>

</template>
<script setup>

</script>
