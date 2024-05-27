<template>
  <q-dialog v-model="showModal" backdrop-filter="blur(4px) brightness(60%)">
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
        <q-form class="col" id="new-tracker-form" @submit="handleCreateTracker">
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
                  v-model="enableNotification"
                  class="new-tracker-setting--toggle"
                ></q-toggle>
              </div>
              <div class="new-tracker-setting-body q-px-xl">
                <div class="row justify-between">
                  <div class="col-5">
                    <q-input type="number" placeholder="5" dense=""></q-input>
                  </div>
                  <div class="col-5">
                    <q-select
                      v-model="notificationTimeType"
                      :options="options"
                      dense
                      behavior="menu"
                    />
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
          type="submit"
          no-caps
          padding="xs xl"
          v-close-popup
          form="new-tracker-form"
          class="text-weight-light btn-primary text-body1"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
const props = defineProps(["handleCreateTracker", "options"]);

const trackerName = defineModel("trackerName");
const showModal = defineModel("showModal");
const enableNotification = defineModel("enableNotification");
const notificationTimeType = defineModel("notificationTimeType");
</script>

<style lang="scss" scoped></style>
