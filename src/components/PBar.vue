<script lang="ts">
import { Line } from 'vue-chartjs'
import Chart from 'chart.js/auto'
import { ChartOptions } from 'chart.js';

export default {
    name: 'ProgressBarChart',
    components: { ProgressBarChart: Line },
    data() {
        return {
            chartData: {
                datasets: []
            }
        }
    },
    methods: {
        updateChartData(progress: number) {
            this.chartData.datasets = [
                {
                    data: [progress],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ] as any;
            // this.$refs.chart.update();
        }
    },
    mounted(){
        this.chart = new Chart(this.$refs.chart as HTMLCanvasElement, {
            type: 'line',
            data: this.chartData,
            options:{
                responsive: true,
                maintainAspectRatio: false,
                scales:{
                    y:{
                        display:false,
                        min: 0,
                        max: 100
                    },
                    x:{
                        display: false,
                    },
                    plugins: {
                        legend: false
                    }
                }
            } as ChartOptions
        })
    }
}
</script>

<template>
  <div class="progress-bar">
    <canvas ref="chart" style="height: 50px; width: 100%"></canvas>
  </div>
</template>