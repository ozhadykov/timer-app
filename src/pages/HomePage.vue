<template>
  <q-page class="q-px-lg q-pb-lg q-pt-xs column timers-main-page">
    <div v-if="!store.trackers.length" class="no-timers">
      <div class="text-h6">You don't have any trackers yet</div>
    </div>
    <div v-else class="all-timers">
      <div class="recent-timers q-mb-lg">
        <div
          class="title-container text-left q-mb-lg row justify-between items-center"
        >
          <span class="text-h5 text-weight-medium" style="font-weight: 600">
            Most Recent
          </span>

          <q-btn
            icon="settings"
            aria-label="settings"
            color="primary"
            outline
            round
            padding="4px"
            size="12px"
            unelevated
            class="border-sm"
          ></q-btn>
        </div>

        <div class="content column q-gutter-lg">
          <tracker-component
            v-for="tracker in trackers"
            :key="tracker"
            :tracker-name="tracker.name"
          />
        </div>
      </div>

      <div class="not-actual-timers">
        <div class="title-container text-left q-mb-lg">
          <span class="text-h5 text-weight-medium" style="font-weight: 600">
            Not Actual
          </span>
        </div>
        <div class="content column q-gutter-lg"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import TrackerComponent from "components/TrackerComponent.vue";
import { useTrackerStore } from "src/stores/example-store";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

const store = useTrackerStore();

const { trackers } = storeToRefs(store);

watch(trackers, (newT, oldT) => {
  console.log(newT, oldT);
});
</script>

<style scoped lang="scss">
.timers-main-page {
  gap: $gap-xl;

  .home-title--settings-btn {
    border: 2px solid $primary;
  }
}
</style>
