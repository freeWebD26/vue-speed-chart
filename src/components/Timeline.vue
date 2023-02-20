<script setup lang="ts">
import { ref } from 'vue';
import { Post, today, thisMonth, thisWeek, TimelinePost } from '../posts';
import { DateTime } from 'luxon';
import { computed } from '@vue/reactivity';
import { Bar } from 'vue-chartjs'
import TimelineItem from "./TimelineItem.vue"
const periods = ["Today", "This Week", "This Month"]

type Period = typeof periods[number];

const selectedPeriod = ref<Period>("Today")
function selectPeriod(period: Period) {
    selectedPeriod.value = period;
}

const posts = computed<TimelinePost[]>(() => {
    return [today, thisWeek, thisMonth]
        .map((post) => {
            return {
                ...post,
                created: DateTime.fromISO(post.created)
            }
        })
        .filter(post => {
            if (selectedPeriod.value === "Today") {
                return post.created >= DateTime.now().minus({ day: 1 });
            } else if (selectedPeriod.value === "This Week") {
                return post.created >= DateTime.now().minus({ week: 1 });
            }
            return post;
        });
}) 
</script>

<template>
    <nav class="is-primary panel">
        <p>The selected period is {{ selectedPeriod }}</p>
        <span class="panel-tabs">
            <a v-for="period of periods" :key="period" :class="{ 'is-active': period === selectedPeriod }"
                @click="selectPeriod(period)">
                {{ period }}
            </a>
        </span>
    </nav>
    <TimelineItem v-for="post of posts" :key=post.id :post="post" />
</template>