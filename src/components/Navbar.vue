<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
})

const count = ref(0)
</script>

<template>
  <header class="flex h-12 w-full flex-row items-center justify-center p-1">
    <div
      class="flex h-full w-full flex-row justify-center gap-2 rounded-md bg-gray-200 px-2 shadow-md"
    >
      <div
        class="flex h-full w-full flex-row items-center justify-center gap-2 px-4 md:w-1/2 md:justify-start"
      >
        <p class="text-xl font-semibold">
          {{ name }}
        </p>
      </div>

      <div
        class="hidden h-full w-1/2 flex-row items-center justify-end gap-2 md:flex"
      >
        <button class="flex cursor-pointer flex-row rounded-sm px-2 text-lg">
          Projects
        </button>
        <button class="flex cursor-pointer flex-row rounded-sm px-2 text-lg">
          About
        </button>
        <button class="flex cursor-pointer flex-row rounded-sm px-2 text-lg">
          Contact
        </button>
      </div>
    </div>
  </header>
</template>
