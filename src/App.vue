<template>
  <div class="section">
    <!-- <div class="container">
      <Timeline />
    </div> -->
    <div class="container">
      <LineChart />
    </div>
    <!-- <div class="container">
      <BarChart />
    </div> -->
    <!-- <div class="container">
      <compo/>
    </div> -->
  </div>
</template>


<script setup lang="ts">
import Timeline from './components/Timeline.vue';
import LineChart from './components/LineChart.vue';

// export default {
//   name: 'App',
//   components: { LineChart }
// }
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
