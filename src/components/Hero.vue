<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-2 px-2 py-1 md:flex-row"
  >
    <div
      class="flex h-2/5 w-full flex-col items-center justify-center rounded-md bg-gray-100 shadow-md md:w-1/3"
    >
      <img
        class="h-3/4 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
      />
    </div>
    <div
      class="flex h-1/5 w-full flex-col items-center justify-center rounded-md bg-gray-100 p-4 shadow-md md:h-full md:w-2/3 md:items-start md:justify-start"
    >
      <p class="text-3xl font-semibold">Erineldo Filho</p>
      <p class="text-2xl font-medium">Fullstack Developer</p>
      <span> Projects | Skills </span>
    </div>
    <div
      class="flex h-2/5 w-full flex-col items-start justify-start gap-2 rounded-md bg-gray-100 px-4 py-2 shadow-md"
    >
      <div class="flex h-12 w-full flex-col items-start justify-start py-2">
        <p class="text-lg font-semibold">My skills</p>
      </div>
      <ul
        class="flex w-full list-none flex-col items-center justify-center gap-1"
      >
        <li>
          <a href="https://skillicons.dev"
            ><img
              height="36"
              src="https://skillicons.dev/icons?i=typescript,javascript,java,python,php&theme=dark&perline=15"
              alt="My language Skills"
          /></a>
        </li>
        <li>
          <a href="https://skillicons.dev"
            ><img
              height="36"
              src="https://skillicons.dev/icons?i=react,vuejs,tailwindcss,vite,html&theme=dark&perline=15"
              alt="My frontend Skills"
          /></a>
        </li>
        <li>
          <a href="https://skillicons.dev"
            ><img
              height="36"
              src="https://skillicons.dev/icons?i=mysql,postgresql,firebase,sqlite,linux&theme=dark&perline=15"
              alt="My db Skills"
          /></a>
        </li>
        <li>
          <a href="https://skillicons.dev"
            ><img
              height="36"
              src="https://skillicons.dev/icons?i=github,git,postman,docker,figma&theme=dark&perline=15"
              alt="My ci/cd Skills"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
