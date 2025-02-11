<template>
    <Pie style="max-width: 250px" :data="data" :options="options" />
</template>

<script setup>
// DataPage.vue
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {computed, onMounted, reactive} from "vue";
import axios from "axios";

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);


const chartData=reactive({
    labels:[],
    data:[],
    colors:[]
});

const data=computed(()=>{
    return ({
        labels:chartData.labels,
        datasets:[
            {
                data:chartData.data,
                backgroundColor:chartData.colors
            }
        ]
    })
})

const options = {
    responsive: true,

};
const predefinedColors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
    '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
];
onMounted(()=>{
    axios.get(route('statistics.jobWise'))
        .then(res=>{
            const {data} = res.data;
            chartData.labels=data.map(item=>item?.name|| '')
            chartData.data=data.map(item=>item?.job_count|| 0)
            chartData.colors = data.map((_, index) => predefinedColors[index % predefinedColors.length]);
        })
        .catch(err=>{
            console.log(err)
        })
})
</script>
