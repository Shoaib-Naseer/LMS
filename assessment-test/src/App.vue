<template>
  <section class="container mt-4 max-w-[min(90%,768px)] mx-auto">
    <!-- header section of login -->
    <div class="flex flex-col gap-2 text-center">
      <img src="/logo.webp" alt="Takmil Foundation" class="mx-auto max-w-[min(90%,150px)]" />
      <h1 class="text-[2rem] font-semibold">TAKMIl Dashboard</h1>
      <h3 class="text-gray-600 font-semibold text-lg">Sign in to continue</h3>
    </div>

    <!-- form container -->
    <form @submit.prevent="" class="max-w-[min(90%,500px)] mx-auto mt-10 flex flex-col gap-8">
      <!-- username -->
      <div class="flex flex-col gap-2">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="w-full px-3 py-2 border border-gray-400 shadow rounded-md"
        />
      </div>

      <!-- password -->

      <div class="flex flex-col gap-2">
        <label for="password" class="">Password</label>
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            class="w-full px-3 py-2 border border-gray-400 shadow rounded-md"
            v-model="password"
          />
          <button
            @click="togglePasswordVisibility"
            aria-label="Toggle password visibility"
            class="absolute top-1/2 -translate-y-1/2 right-0 flex items-center px-3 bg-transparent focus:outline-none"
          >
            <VIcon :name="showPassword ? 'bi-eye-slash' : 'bi-eye'" />
          </button>
        </div>
      </div>

      <!-- Remember me section -->

      <div class="flex justify-between -mt-3">
        <!-- checkbox container -->
        <div class="flex gap-2 items-center">
          <input type="checkbox" name="remember-me" id="remember-me" class="h-4 w-4 rounded-lg shadow cursor-pointer" />
          <label for="remember-me" class="cursor-pointer">Remember me</label>
        </div>

        <p class="text-green-600 font-semibold">Forgot password ?</p>
      </div>

      <span class="min-h-4 text-xs text-red-600">{{ state.errorMessage }}</span>
      <!-- Action Button -->
      <button
        :disabled="state.isLoading"
        :class="['text-white', 'py-3', 'text-xl', 'rounded-lg', state.isLoading ? 'bg-green-300' : 'bg-green-500']"
      >
        <p v-if="!state.isLoading">Sign In</p>
        <Loader v-else />
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Loader from "./components/icons/Loader.vue";

//=============== Variables =================
const username = ref("");
const password = ref("");
const showPassword = ref(false);

const state = ref({
  errorMessage: "",
  isLoading: false,
});

//=============== Methods =================

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = () => {
  state.value.isLoading = true;
  // api call here
};
</script>
