<template>
  <div
    class="flex h-10/12 grow flex-col items-center justify-center gap-2 px-2 py-1"
  >
    <div
      class="flex h-2/5 w-full flex-col items-center justify-center rounded-md bg-slate-700 shadow-md md:w-1/2 lg:w-2/5 xl:w-2/6 2xl:w-1/5"
    >
      <img
        class="h-3/4 rounded-full border-4 border-slate-600"
        src="../assets/profile.png"
      />
    </div>
    <div
      class="flex h-3/5 w-full flex-col items-center justify-start gap-2 md:w-1/2 lg:w-2/5 xl:w-2/6 2xl:w-1/5"
    >
      <div
        class="flex h-1/5 w-full flex-row items-center justify-center rounded-md bg-slate-700 p-4 shadow-md"
      >
        <div class="flex md:w-full w-1/2 h-full flex-col items-center justify-center">
          <p class="text-2xl md:text-3xl font-semibold text-slate-100">Erineldo Filho</p>
          <p class="text-xl md:text-2xl font-medium text-slate-400">Fullstack Developer</p>
        </div>
        <div class="md:hidden w-1/2 text-xl font-semibold h-full text-slate-400 flex flex-row items-center justify-around">
          <RouterLink to="/"> Skills </RouterLink>
          <RouterLink to="/projects"> Projects </RouterLink>
          <RouterLink to="/about"> About </RouterLink>
        </div>
      </div>
      <div
        class="flex h-4/5 w-full flex-col items-start justify-start overflow-y-auto rounded-md bg-slate-700 px-4 py-4 shadow-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
