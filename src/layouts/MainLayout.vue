<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="column timer-header">
      <div class="row w-100">
        <div class="col-3 row justify-center">
          <q-toolbar class="q-px-lg">
            <q-btn
              icon="person"
              aria-laben="Profile"
              color="primary"
              padding="8px"
              class="header--btn"
            ></q-btn>
          </q-toolbar>
        </div>
        <div class="col row logo-wrapper justify-center q-py-lg">
          <div
            class="self-center text-h5 text-weight-bold"
            style="font-style: italic"
          >
            LifeTracker
          </div>
          <div class="timer-icon text-center">
            <q-icon name="img:icons/timer-icon.png" size="48px"></q-icon>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="main-content--header-fixed q-py-md"></div>
    </q-header>

    <q-footer class="bg-white footer q-px-md">
      <q-tabs
        v-model="tab"
        inline-label
        no-caps
        class="text-dark nav-tabs"
        active-bg-color="primary"
        active-color="secondary"
      >
        <q-tab name="timers" icon="timer" label="Timers" class="nav-tab" />
        <q-tab
          name="statistics"
          icon="signal_cellular_alt"
          label="Statistics"
          class="nav-tab"
        />
      </q-tabs>
    </q-footer>

    <q-page-container class="main-page-container">
      <KeepAlive>
        <div class="main-page-container--content">
          <router-view />
        </div>
      </KeepAlive>
      <q-btn
        icon="add"
        color="primary"
        round
        padding="lg"
        size="16px"
        class="add-timer-btn"
        @click="addTimer = true"
      ></q-btn>
    </q-page-container>

    <ModalWindow
      v-model:showModal="addTimer"
      v-model:trackerName="newTracker.name"
      v-model:enableNotification="newTracker.notify.enabled"
      v-model:notificationTimeType="newTracker.notify.type"
      :handle-create-tracker="handleAddTracker"
      :options="options"
    />
  </q-layout>
</template>

<script setup>
import { ref, reactive } from "vue";
import ModalWindow from "src/components/ModalWindow.vue";
import { useTrackerStore } from "src/stores/example-store";

const store = useTrackerStore();

const tab = ref("timers");
const addTimer = ref(false);

const newTracker = ref({
  name: "",
  notify: {
    enabled: true,
    value: 5,
    type: "",
  },
});

const options = reactive(["Hour", "Min.", "Sec."]);

const handleAddTracker = () => {
  store.addTracker(newTracker.value);

  newTracker.value = {
    name: "",
    notify: {
      enabled: true,
      value: 5,
      type: "",
    },
  };

  // console.log(store.trackers);
};
</script>

<style scoped lang="scss">
.timer-header {
  .header--btn {
    border-radius: 0.9rem;
    border: 2px solid $secondary;
  }

  .main-content--header-fixed {
    background-color: $secondary;
    border-radius: 40px 0 0 0;
  }
}

.main-page-container {
  .main-page-container--content {
    background-color: $secondary;
  }
}

.add-timer-btn {
  position: fixed;
  bottom: 4.5rem;
  right: 1rem;
  z-index: 10;
}

.footer {
  .nav-tab {
    border: 2px solid $primary;
    border-radius: 14px 14px 0 0;
    padding: 0.6rem 0 0.6rem 0;
  }
}
</style>
