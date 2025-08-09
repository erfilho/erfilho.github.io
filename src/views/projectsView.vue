<template>
  <div class="flex h-10 w-full flex-col items-start justify-start py-1">
    <p class="text-lg font-semibold text-slate-400">My projects</p>
  </div>
  <div class="flex h-11/12 w-full flex-col items-center justify-center">
    <div class="flex h-full flex-row flex-wrap gap-1">
      <ProjectCard
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :imageUrl="project.imageUrl"
        :technologies="project.technologies"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'salesTracking',
    description: 'Sales and production tracking system for glass shops',
    technologies: ['react', 'nodejs', 'tailwindcss', 'firebase'],
  },
  {
    title: 'librasLive',
    description: 'Web app for sign language transcription using OpenAI API',
    technologies: ['react', 'tailwind', 'nodejs'],
  },
  {
    title: 'toDoList',
    description: 'Simple toDo list made with VueJs and Firestore',
    technologies: ['vuejs', 'tailwindcss', 'firebase'],
  },
]
</script>
