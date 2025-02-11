<template>
    <Line :data="data" :options="optionConfig" />
</template>

<script setup>
// DataPage.vue
import {Line} from 'vue-chartjs'
import {computed, onMounted, reactive} from "vue";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
} from 'chart.js';
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

// const {getColors} = useUtils();
const chartData=reactive({
    districts: [],
    jobs: [],
    dataset: []
});

const data = computed(() => {
    return ({
        labels: chartData.districts,
        datasets: chartData.dataset
    })
})
const optionConfig = (() => {
    return ({
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    })
});

const getColors = (index) => {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
    return colors[index % colors.length]; // Cycle through colors
};

onMounted(() => {
    axios.get(route('statistics.districtJobWise'))
        .then(res => {
            const {data} = res.data;
            const districts = [...new Set(data.map(item => item.district))]; // X-axis (district names)
            const jobIds = [...new Set(data.map(item => item.job_id))];      // Lines (job IDs)

            chartData.districts = districts
// 2. Prepare datasets for each job_id
            chartData.dataset = jobIds.map(jobId => {
                const jobName = data.find(val => val.job_id === jobId)?.name;
                // For each job_id, get the job_count per district
                const jobData = data
                    .filter(item => item.job_id === jobId)
                    .map(item => ({
                        district: item.district,
                        job_count: item.job_count
                    }));

                const jobCounts = districts.map(district => {
                    const foundJob = jobData.find(job => job.district === district);
                    return foundJob ? foundJob.job_count : 0;  // Default to 0 if no job_count
                });

                // Return the dataset for Chart.js
                return {
                    label: jobName,
                    data: jobCounts,  // job_count values for each district
                    borderColor: getColors(jobId),  // Function to generate random colors
                    fill: false
                };
            });

        })
        .catch(err => {
            console.log(err)
        })
})
</script>
