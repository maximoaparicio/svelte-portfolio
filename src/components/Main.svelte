<script>
  import Step from "./Step.svelte";
  import { steps } from "$lib/stores/steps";
</script>

<main class="flex flex-col flex-1 p-4 justify-center">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 min-h-[75vh]"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-2 md:gap-8 lg:gap-4 justify-center -mt-32 sm:-mt-0"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="inter text-green-500">Maximo</span> Dip
        <br />Full Stack
        <span class="inter text-green-500">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-green-500"> favorite tech</span> includes
        JavaScript (NEXT.JS, SvelteKit or Astro), TailwindCSS, React, Node.js +
        Express.js & SQL. <span class="text-green-500">University</span> Software
        Developer.
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl inter relative overflow-hidden px-6 py-3 group rounded-full bg-slate-200 text-slate-950 cursor-pointer"
        href="#contact"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-green-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="inter text-green-500">see</span> my work?
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
            class="text-green-500"
            >Next.js, Commerce.js, Stripe & Node.js + Express.js!</strong
          > Commerce.js is a product CMS and Stripe is used for all transaction handling.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Ultimate Todos is a Full Stack <strong class="text-green-500"
            >Next.js</strong
          >,
          <strong class="text-green-500">Node.js + Express.js</strong>
          & <strong class="text-green-500">Firebase</strong> CRUD application that
          allows a user to login, manage a tidy and efficacious todo list, and persist
          this information across devices.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The Pokédex is a <strong class="text-green-500"
            >SvelteKit & TailwindCSS</strong
          >
          web application, hosted on
          <strong class="text-green-500">Netlify</strong>, that consumes and
          caches the
          <strong class="text-green-500">Pokémon API</strong>
          to display all Pokémon information. Gotta catch them all!
        </p>
      </Step>
    </div>
  </section>
  <section class="py-32 flex flex-col gap-24" id="contact">
    <div class="flex flex-col gap-2 text-center">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Get in <span class="inter text-green-500">Touch</span>
      </h3>
    </div>
    <div class="flex flex-col justify-center items-center gap-12 lg:gap-10">
      <form
        action="https://formspree.io/f/mdorjnrp"
        method="POST"
        class="flex flex-col w-full max-w-xl gap-2"
      >
        <div>
          <label
            for="nombre"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Who are you
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -500 -500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
              name="nombre"
              id="nombre"
              placeholder="Name"
            />
          </label>
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -500 -500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
            />
          </label>
        </div>

        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your message
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 -500 -500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
              placeholder="Write your thoughts here..."
            />
          </label>
        </div>
        <button
          class="blueShadow mx-auto text-base sm:text-lg md:text-xl inter relative overflow-hidden px-6 py-3 group rounded-full bg-slate-200 text-slate-950"
          type="submit"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-green-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">Send &rarr;</h4>
        </button>
      </form>
    </div>
  </section>
</main>
