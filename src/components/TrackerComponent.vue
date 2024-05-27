<template>
  <div class="card q-pa-md q-py-lg timer-card row justify-between">
    <div class="timer-name row justify-between q-gutter-sm items-center">
      <q-icon name="drag_indicator" size="18px"></q-icon>
      <span class="text-weight-bold text-body1">{{ trackerName }}</span>
    </div>
    <div class="timer-actions row justify-between q-gutter-md items-center">
      <div class="timer-time text-weight-bold text-body1">
        <span v-if="!trackerTime">00:00</span
        ><span v-else>{{ trackerTime }}</span>
      </div>
      <div class="timer-control">
        <q-btn
          round
          unelevated
          padding="none"
          size="lg"
          icon="play_circle_outline"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["trackerTime", "trackerName"]);
</script>

<style lang="scss" scoped></style>
