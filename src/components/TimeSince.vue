<template>
    <span :title="formatted">{{since}}</span>
</template>

<script lang="ts" setup>
import moment from 'moment';

interface TimeSinceProps {
    date: Date;
}

const props = defineProps<TimeSinceProps>();

const { date } = props;

const value = moment(date);

const formatted = value.format("LLLL");
const since = value.fromNow();
</script>