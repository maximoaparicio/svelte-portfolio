<script>
  import Step from './Step.svelte'

  let steps = [
    {
      name: 'Stock System',
      icon: 'fa-solid fa-store',
      description:
        'Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.',
    },
    {
      name: 'Utlimate Todos',
      icon: 'fa-solid fa-list-check',
      description:
        'Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.',
    },
    {
      name: 'Pokédex',
      icon: 'fa-solid fa-diagram-project',
      description:
        'Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).',
    },
  ]
</script>

<main class="flex flex-col flex-1 p-4 justify-center">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 min-h-[75vh]"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-2 md:gap-8 lg:gap-2 justify-center -mt-32 sm:-mt-0"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="inter text-green-400">Maximo</span> Dip
        <br />Full Stack
        <span class="inter text-green-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-green-400"> favorite tech</span> includes
        JavaScript (NEXT.JS, SvelteKit or Astro), TailwindCSS, React, Node.js +
        Express.js & SQL. <span class="text-green-400">University</span> Software
        Developer.
      </p>
      <button
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl inter relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 hidden sm:block"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-green-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </button>
    </div>
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="inter text-green-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-green-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Smoljames Store is a a merchanising store created with <strong
            class="text-green-400"
            >Next.js, Commerce.js, Stripe & Node.js + Express.js!</strong
          > Commerce.js is a product CMS and Stripe is used for all transaction handling.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Ultimate Todos is a Full Stack <strong class="text-green-400"
            >Next.js</strong
          >,
          <strong class="text-green-400">Node.js + Express.js</strong>
          & <strong class="text-green-400">Firebase</strong> CRUD application that
          allows a user to login, manage a tidy and efficacious todo list, and persist
          this information across devices.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The Pokédex is a <strong class="text-green-400"
            >SvelteKit & TailwindCSS</strong
          >
          web application, hosted on
          <strong class="text-green-400">Netlify</strong>, that consumes and
          caches the
          <strong class="text-green-400">Pokémon API</strong>
          to display all Pokémon information. Gotta catch them all!
        </p>
      </Step>
    </div>
  </section>
</main>
