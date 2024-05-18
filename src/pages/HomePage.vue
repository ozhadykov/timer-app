<template>
  <q-page class="q-px-lg q-pb-lg q-pt-xs column timers-main-page">
    <div class="recent-timers">
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
        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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

        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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

        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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
      </div>
    </div>

    <div class="not-actual-timers">
      <div class="title-container text-left q-mb-lg">
        <span class="text-h5 text-weight-medium" style="font-weight: 600">
          Not Actual
        </span>
      </div>
      <div class="content column q-gutter-lg">
        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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

        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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

        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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

        <div class="card q-pa-md q-py-lg timer-card row justify-between">
          <div class="timer-name row justify-between q-gutter-sm items-center">
            <q-icon name="drag_indicator" size="18px"></q-icon>
            <span class="text-weight-bold text-body1">Work</span>
          </div>
          <div
            class="timer-actions row justify-between q-gutter-md items-center"
          >
            <div class="timer-time text-weight-bold text-body1">51:02</div>
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
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped lang="scss">
.timers-main-page {
  gap: $gap-xl;

  .home-title--settings-btn {
    border: 2px solid $primary;
  }
}
</style>
