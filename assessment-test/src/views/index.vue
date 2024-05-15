<template>
  <main class="min-h-screen flex flex-col gap-2 bg-gray-50 pt-10">
    <!-- top section -->
    <section class="flex gap-6 mx-8 min-w-1/2 min-h-[50vh]">
      <div class="md:w-1/2 rounded-lg bg-white p-6 flex flex-col gap-4">
        <h1 class="text-lg font-semibold">Date</h1>
        <VueDatePicker v-model="date" />
      </div>
      <div class="w-1/2 rounded-lg bg-gray-200 hidden md:block"></div>
    </section>

    <h2 class="mx-8 text-md my-6">Schools</h2>

    <!-- bottom section -->
    <section class="flex flex-col md:flex-row gap-4 mx-8 max-w-full relative">
      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Total</h3>
          <h3>159</h3>
        </div>
        <div class="bg-blue-200 w-fit p-1 rounded-lg">
          <VIcon name="bi-cart3" class="text-blue-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Open</h3>
          <h3>1</h3>
        </div>
        <div class="bg-orange-200 w-fit p-1 rounded-lg">
          <VIcon name="oi-location" class="text-orange-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Closed</h3>
          <h3>1</h3>
        </div>
        <div class="bg-purple-200 w-fit p-1 rounded-lg">
          <VIcon name="co-envelope-letter" class="text-purple-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Not Reported</h3>
          <h3>158</h3>
        </div>
        <div class="bg-purple-200 w-fit p-1 rounded-lg">
          <VIcon name="bi-chat" class="text-purple-600 h-5 w-5" />
        </div>
      </div>

      <div class="absolute -top-6 -right-6 bg-green-600 p-1 rounded-lg">
        <VIcon name="io-settings-outline" class="w-8 h-8 text-white" />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

// ===============Variables==============
const date = ref();
</script>

<style>
.dp__input_icon {
  background: #01b001b8;
  min-height: 26px;
  border-radius: 4px;
  fill: white;
}

.dp__pointer {
  font-weight: 500;
}
</style>
