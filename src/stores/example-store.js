import { defineStore } from "pinia";

export const useTrackerStore = defineStore("trackerState", {
  state: () => ({
    trackers: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    addTracker(tracker) {
      this.trackers.push(tracker);
    },
  },
});
