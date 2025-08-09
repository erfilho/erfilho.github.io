<script setup>
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div
    class="flex h-[100vh] w-full flex-col justify-between gap-0.5 bg-slate-900"
  >
    <Navbar name="@erfilho" />
    <Hero />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
