<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row timer-header">
      <div class="col">
        <q-toolbar>
          <q-btn
            round
            icon="person"
            aria-laben="Profile"
            color="primary"
          ></q-btn>
        </q-toolbar>
      </div>
      <div class="col row logo-wrapper justify-center q-py-md">
        <div
          class="self-center text-h5 text-weight-bold"
          style="font-style: italic"
        >
          LifeTimer
        </div>
        <div class="timer-icon text-center">
          <q-icon name="img:icons/timer-icon.png" size="48px"></q-icon>
        </div>
      </div>
    </q-header>

    <q-footer class="bg-white footer">
      <q-tabs v-model="tab" inline-label no-caps class="text-dark nav-tabs">
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
        <div class="main-page-container--content q-pt-md">
          <router-view />
        </div>
      </KeepAlive>
      <q-btn
        icon="add"
        color="primary"
        round
        padding="md"
        size="md"
        class="add-timer-btn"
      ></q-btn>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const tab = ref();
</script>

<style scoped lang="scss">
.main-page-container {
  background-color: $primary;
  padding-bottom: 0 !important;

  .main-page-container--content {
    background-color: $secondary;
    border-radius: 40px 0 0 0;
    // border: 1px solid $secondary;
  }
}

.add-timer-btn {
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  z-index: 10;
}

.footer {
  // border-top: 2px solid $dark;
  // border-right: 2px solid $dark;
  // border-left: 2px solid $dark;
  // border-radius: 8px 8px 0 0;

  .nav-tab {
    background: $positive;
    border: 2px solid $primary;
    outline: 2px solid $primary;
    clip-path: polygon(0% 100%, 17.5% 0%, 82.5% 0%, 100% 100%);
    box-shadow: 0 0 0 200px $primary;
  }
}
</style>
