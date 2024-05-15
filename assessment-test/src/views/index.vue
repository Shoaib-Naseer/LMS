<template>
  <main class="min-h-screen flex flex-col gap-2 bg-gray-50 pt-10">
    <!-- top section -->
    <section class="flex gap-6 mx-8 min-w-1/2 min-h-[50vh]">
      <div class="md:w-1/2 rounded-lg bg-white p-6 flex flex-col gap-4">
        <h1 class="text-lg font-semibold">Date</h1>
        <VueDatePicker v-model="date" :format="format" />
      </div>
      <div class="w-1/2 rounded-lg bg-gray-200 hidden md:block"></div>
    </section>

    <h2 class="mx-8 text-md my-6">Schools</h2>

    <!-- bottom section -->
    <section class="flex flex-col md:flex-row gap-4 mx-8 max-w-full relative">
      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Total</h3>
          <h3>{{ totalSchools }}</h3>
        </div>
        <div class="bg-blue-200 w-fit p-1 rounded-lg">
          <VIcon name="bi-cart3" class="text-blue-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Open</h3>
          <h3>{{ openedSchools }}</h3>
        </div>
        <div class="bg-orange-200 w-fit p-1 rounded-lg">
          <VIcon name="oi-location" class="text-orange-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Closed</h3>
          <h3>{{ closedSchools }}</h3>
        </div>
        <div class="bg-purple-200 w-fit p-1 rounded-lg">
          <VIcon name="co-envelope-letter" class="text-purple-600 h-5 w-5" />
        </div>
      </div>

      <div class="bg-white px-6 rounded-lg cursor-pointer flex items-start justify-between flex-1 pt-6 pb-12">
        <div class="flex flex-col gap-2 font-semibold">
          <h3>Not Reported</h3>
          <h3>{{ unReportedSchools }}</h3>
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
  <Loader v-if="state.isLoading" />
</template>
<script setup lang="ts">
import { SchoolType } from "@/types/school";
import { getSchools, querySchools } from "../services/dashboard.services";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Loader from "../components/base/Loader.vue";

import { onMounted, ref, watch } from "vue";
import { State } from "../types/state";

// ===============Variables==============

const state = ref<State>({
  errorMessage: "",
  isLoading: false,
});

const schools = ref<SchoolType[]>();

const totalSchools = ref<number>();
const openedSchools = ref<number>();
const closedSchools = ref<number>();
const unReportedSchools = ref<number>();

const date = ref();

// ================= Methods ==================

const setData = () => {
  totalSchools.value =
    schools.value && schools.value.filter((school: SchoolType) => school.status === "Functional").length;
  openedSchools.value = schools.value && schools.value.filter((school: SchoolType) => school.status === "On").length;
  closedSchools.value = schools.value && schools.value.filter((school: SchoolType) => school.status === "Off").length;
  if (totalSchools.value && openedSchools.value && closedSchools.value) {
    unReportedSchools.value = totalSchools.value - (openedSchools.value + closedSchools.value);
  }
};

const format = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `Selected date is ${day}/${month}/${year}`;
};

// ==========Api calls===============

const setSchools = async () => {
  state.value.isLoading = true;
  state.value.errorMessage = "";
  const { data, success } = await getSchools();
  if (!success) {
    state.value.errorMessage = data || "something went wrong";
    state.value.isLoading = false;
    return;
  }
  schools.value = data;
  setData();
  state.value.isLoading = false;
};

const querySchoolsData = async (date: string) => {
  state.value.isLoading = true;
  state.value.errorMessage = "";
  const { data, success } = await querySchools(date);
  if (!success) {
    state.value.errorMessage = data || "something went wrong";
    state.value.isLoading = false;
    return;
  }
  // Requirements Not Clear
  state.value.isLoading = false;
};

// =============Lifecycle events============

onMounted(async () => {
  await setSchools();
});

watch(date, async (newValue) => {
  const date = newValue.toISOString().slice(0, 10);
  await querySchoolsData(date);
});
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
  margin-left: 20px;
}
</style>
