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

    <q-dialog v-model="addTimer" backdrop-filter="blur(4px) brightness(60%)">
      <q-card class="dialog-card border-sm">
        <q-card-section class="row items-center q-pb-none">
          <div class="col-1"></div>

          <div class="col text-h6 text-center text-weight-600">
            Add New Tracker
          </div>

          <div class="col-1">
            <q-btn
              icon="cancel"
              color="primary"
              round
              padding="0px"
              size="16px"
              v-close-popup
            ></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="row">
          <div class="col-1"></div>
          <q-form class="col" @submit="handleCreateTimer">
            <q-input
              v-model="trackerName"
              input-class="text-weight-bold text-center text-body1"
              placeholder="✍️ Name"
              class="q-px-xl q-mb-lg row"
            ></q-input>
            <div class="column">
              <div class="setting-container column">
                <div
                  class="new-tracker-setting--header row justify-between flex-center"
                >
                  <label
                    for="new-tracker-setting--toggle"
                    class="text-weight-600 text-body1"
                    >Notificate Every</label
                  >
                  <q-toggle
                    v-model="newTracker.notify.enabled"
                    class="new-tracker-setting--toggle"
                  ></q-toggle>
                </div>
                <div class="new-tracker-setting-body q-px-xl">
                  <div class="row justify-between">
                    <div class="col-5">
                      <q-input type="number" placeholder="5" dense=""></q-input>
                    </div>
                    <div class="col-5">
                      <q-select v-model="model" :options="options" dense />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-form>
          <div class="col-1"></div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            label="Add Timer"
            color="primary"
            no-caps
            v-close-popup
            padding="xs xl"
            class="text-weight-light btn-primary text-body1"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const tab = ref();
const addTimer = ref(false);
const trackerName = ref();

const newTracker = ref({
  name: "",
  notify: {
    enabled: true,
    value: 5,
    type: "",
  },
});
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
    // border-radius: 40px 40px 0 0;
    // border: 1px solid $secondary;
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
