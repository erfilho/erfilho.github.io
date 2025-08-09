<template>
  <div
    class="flex h-32 w-full flex-col rounded-md bg-gray-200 dark:bg-slate-600"
  >
    <div class="flex h-full flex-row gap-2 p-1">
      <img :src="imageUrl" class="h-full rounded-md" alt="Project design" />

      <div class="flex h-full w-full flex-col gap-1">
        <div class="flex h-4/6 flex-col items-start justify-start">
          <h3 class="text-xl dark:text-slate-100">{{ title }}</h3>
          <p class="text-sm dark:text-slate-300">{{ description }}</p>
        </div>

        <div
          class="flex h-2/6 flex-row items-center justify-start rounded-md px-1 py-1"
        >
          <a href="https://skillicons.dev" class="h-full"
            ><img
              class="h-full"
              :src="`https://skillicons.dev/icons?i=${technologies.join(',')}&theme=dark&perline=15`"
              alt="My frontend Skills"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
})
</script>
