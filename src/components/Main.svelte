<script>
  import Contact from "./Contact.svelte";
  import Projects from "./Projects.svelte";
</script>

<main class="flex flex-col justify-center flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 min-h-[75vh]"
  >
    <div
      class="flex flex-col justify-center gap-2 -mt-32 text-center lg:justify-center lg:text-left md:gap-8 lg:gap-4 sm:-mt-0"
    >
      <h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
        Hi! I'm <span class="text-green-500 inter">Maximo</span> Dip
        <br />Full Stack
        <span class="text-green-500 inter">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-green-500"> favorite tech</span> includes
        JavaScript (NEXT.JS, SvelteKit or Astro), TailwindCSS, React, Node.js +
        Express.js & SQL. <span class="text-green-500">University</span> Software
        Developer.
      </p>
      <a
        class="relative px-6 py-3 mx-auto overflow-hidden text-base rounded-full cursor-pointer blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl inter group bg-slate-200 text-slate-950"
        href="#contact"
      >
        <div
          class="absolute top-0 z-0 w-full h-full duration-200 bg-green-500 right-full opacity-20 group-hover:translate-x-full"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
  </section>
  <Projects />
  <Contact />
</main>
