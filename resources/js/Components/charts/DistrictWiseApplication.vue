<template>
    <Bar :data="data" :options="options" />
</template>

<script setup>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {computed, onMounted, reactive} from "vue";
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData=reactive({
    labels:[],
    maleCounts: [1,2],
    femaleCounts: [3,4],
    datasets: [
        {
            backgroundColor:"#0284c7",
            data: [1,2,3],
        },{
            backgroundColor:"#d946ef",
            data: [3,3,3],
        }
    ]
});

const data=computed(()=>{
    return ({
        labels:chartData.labels,
        datasets: [
            {
                label:"Male",
                backgroundColor:'#0284c7',
                data:chartData.maleCounts
            },
            {
                label:'Female',
                backgroundColor:'#d946ef',
                data:chartData.femaleCounts
            }
        ]
    })
})

const options = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true
        }
    }
};

onMounted(()=>{
    axios.get(route('statistics.districtWise'))
        .then(res=>{
            const {data} = res.data;
            chartData.labels=data.map(item=>item?.district|| '')
            const maleCount=data.map(item=>parseInt(item?.male_count));
            const femaleCount = data.map(item=>parseInt(item?.female_count));

            chartData.maleCounts = maleCount;
            chartData.femaleCounts = femaleCount;
        })
        .catch(err=>{
            console.log(err)
        })
})
</script>
