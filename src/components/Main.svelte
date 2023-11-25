<script>
  import Contact from "./Contact.svelte";
  import Projects from "./Projects.svelte";

  let pdfUrl = "/lib/assets/_CV.pdf";

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
        <br />Full Stack
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
          <button
            class="flex gap-2"
            href="$lib/assets/_CV.pdf"
            on:click={handleClick}
          >
            <h4 class="relative z-9">Resume</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </button>
      </div>
    </div>
  </section>
  <Projects />
  <Contact />
</main>
