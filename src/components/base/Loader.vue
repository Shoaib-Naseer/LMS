<template>
  <Teleport to="#loader">
    <div
      class="justify-center-200 fixed inset-0 flex h-full cursor-not-allowed flex-col items-center justify-center bg-[rgba(255,255,255,0.3)]"
    >
      <div
        class="h-20 w-20 animate-spin rounded-full border-4 border-solid border-green-600 border-t-transparent"
      ></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts"></script>
