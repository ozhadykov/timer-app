<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row timer-header">
      <div class="col row logo-wrapper justify-center q-py-lg">
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

    <!-- <q-btn icon="add" size="64px" class="add-timer-btn"></q-btn> -->

    <q-footer> Footer </q-footer>

    <q-page-container>
      <KeepAlive>
        <router-view />
      </KeepAlive>
      <q-btn
        icon="add"
        color="primary"
        round
        padding="lg"
        size="md"
        class="add-timer-btn"
      ></q-btn>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
</script>

<style scoped lang="scss">
.add-timer-btn {
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  z-index: 10;
}

// .timer-header::after {
//   content: "";
//   position: absolute;
//   height: 100px;
//   width: 100px;
//   background-color: aqua;
//   right: 0;
//   border-radius: 40px;
// }
</style>
