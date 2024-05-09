<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row timer-header">
      <div class="col row logo-wrapper justify-center q-py-sm">
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

    <q-footer class="bg-white footer" elevated>
      <q-tabs v-model="tab" inline-label no-caps class="text-dark nav-tabs">
        <q-tab name="timers" icon="timer" label="Timers" class="nav-tab" />
        <q-tab
          name="statistics"
          icon="signal_cellular_alt"
          label="Statistics"
          class="nav-tab"
        />
        <q-tab name="profiles" icon="account_circle" label="Profile" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <KeepAlive>
        <router-view />
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
.timer-header {
  border-radius: 0 0 8px 8px;
}
.add-timer-btn {
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  z-index: 10;
}

.footer {
  border-top: 2px solid $dark;
  border-right: 2px solid $dark;
  border-left: 2px solid $dark;
  border-radius: 8px 8px 0 0;
}

.nav-tab {
  border-right: 2px solid $dark;
}
</style>
