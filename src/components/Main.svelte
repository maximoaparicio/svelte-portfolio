<script>
  import Contact from "./Contact.svelte";
  import Projects from "./Projects.svelte";
  import OtherTabIcon from "./ui/svg/OtherTabIcon.svelte";

  let pdfUrl = "/lib/assets/MaximoDipAparicio.pdf";

  const handleClick = () => {
    window.open(pdfUrl, "_blank");
  };
</script>

<main class="flex flex-col justify-center max-w-3xl p-4 m-auto">
  <section
    id="introPage"
    class="grid grid-cols-1 sm:py-14 sm:min-h-[75vh] min-h-[65vh]"
  >
    <div
      class="flex flex-col justify-center gap-2 text-center lg:justify-center md:gap-4"
    >
      <h1 class="text-4xl font-semibold sm:text-5xl md:text-7xl">
        Hi! I'm <span class="text-green-600 dark:text-[#3EB489] inter"
          >Maximo</span
        >
        Dip
        <br />Fullstack
        <span class="text-green-600 dark:text-[#3EB489] inter">Developer</span>
      </h1>
      <h3 class="text-2xl sm:text-3xl">
        <span class="text-green-600 dark:text-[#3EB489]">University</span> Software
        Developer.
      </h3>
      <p class="text-light sm:text-lg md:text-xl">
        My <span class="text-green-600 dark:text-[#3EB489]">
          favorite tech</span
        >
        includes JavaScript (NEXT.JS, SvelteKit or Astro), TailwindCSS, React, Node.js
        + Express.js & SQL.
      </p>
      <div class="grid-cols-none">
        <button
          class="relative px-6 py-3 overflow-hidden text-base rounded-full cursor-pointer blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl inter group bg-slate-200 text-slate-950"
        >
          <div
            class="absolute top-0 z-0 w-full h-full duration-200 bg-green-600 dark:bg-green-500 right-full opacity-20 group-hover:translate-x-full"
          />
          <button class="flex gap-2" href={pdfUrl} on:click={handleClick}>
            <h4 class="relative z-9">Resume</h4>
            <OtherTabIcon />
          </button>
        </button>
        <button
          class="relative px-6 py-3 overflow-hidden text-base rounded-full cursor-pointer blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl inter group bg-slate-200 text-slate-950"
        >
          <div
            class="absolute top-0 z-0 w-full h-full duration-200 bg-green-600 dark:bg-green-500 right-full opacity-20 group-hover:translate-x-full"
          />
          <a
            class="flex gap-2"
            href="https://www.linkedin.com/in/maximodipaparicio/"
            target="_blank"
          >
            <h4 class="relative z-9">Linkedin</h4>
            <OtherTabIcon />
          </a>
        </button>
      </div>
    </div>
  </section>
  <Projects />
  <Contact />
</main>
