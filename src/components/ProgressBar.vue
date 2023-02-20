<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{ data: [90, 20, 12, 80] }]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    display: true,
                    text: 'My Bar Chart'
                }
            }
        }
    }
}
</script>

<template>
    <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
</template>