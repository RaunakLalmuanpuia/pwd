

<template>
  <q-page padding>
    <p class="page-title print-hide">DOWNLOAD ADMIT CARD</p>
    <q-btn
        class="q-ma-none q-pa-none"
        flat
        label="back"
        icon="arrow_left"
        @click="goBack"
    />
    <div class="flex items-center print-hide zcard   q-pa-md">
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
      <p class="ztext q-ma-none q-ml-sm">Enter Regn No and then press Enter</p>
    </div>
    <div class="row ">
      <br/>

      <div v-if="state.url" class="col-xs-12 zcard q-mt-md q-pa-md">
        <div class="q-pa-md q-gutter-sm" style="height: 900px;">

            <object :data="state.url"
                    type='application/pdf'
                    width='100%'
                    height='100%'
                    />

<!--            <q-pdfviewer-->
<!--              type="html5"-->
<!--              :src="state.url"-->
<!--          />-->
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import AdminLayout from "@/Layouts/Admin.vue";
import {reactive, ref} from 'vue';

import axios from "axios";
import {useQuasar} from "quasar";
import {router, useForm} from "@inertiajs/vue3";

const q = useQuasar();
defineOptions({
  layout:AdminLayout
})

const props = defineProps(['applicants','subjects', 'search','url']);

const form = useForm({
  application_id: props.applicants ? props.applicants.id : null,  // Fallback to null if applicants is null
});



const state=reactive({
  search:props?.search,
  tab: route().current(),
  url:props?.url,

})

const url = ref('');
const openAdmitCard = e => {
  console.log();
  const url = route('admit-card-job',{  search: state.search });
  axios.get(url, { responseType: 'blob' })
      .then((res) => {
        const blob = new Blob([res.data], { type: "application/pdf" });
        state.url = window.URL.createObjectURL(blob);
      })
      .catch((err) => {
        q.notify({ type: "negative", message: "Cannot Download Admit Card" });
      });
};


const search = ref('');



const handleSearch = (e) => {
  // Check if Enter key (keyCode 13) is pressed
  if (e.keyCode === 13 && state.search.trim() !== '') {
    const url = route('admin.applications.download_admit_card', { search: state.search });
    axios.get(url, { responseType: 'blob' })
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });
          state.url = window.URL.createObjectURL(blob);
          // Optionally, open the PDF in a new tab
          // let a = document.createElement("a");
          // a.href = state.url;
          // a.target = "_blank";
          // a.click();
        })
        .catch((err) => {
          q.notify({ type: "negative", message: "Cannot Download Admit Card" });
        });
  }
};

const handleNavigation=(value)=> {
  router.get(route(value))
}
function goBack() {
  window.history.back(); // Use browser's native back functionality
}
</script>

<style scoped>

</style>
