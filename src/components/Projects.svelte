<script>
  import Step from "./ui/Step.svelte";
  import { steps } from "$lib/stores/steps";
</script>

<section class="flex flex-col gap-24 py-20 lg:py-32" id="projects">
  <div class="flex flex-col gap-2 text-center">
    <h6 class="text-large sm:text-xl md:text-2xl">
      A few of my creative endeavors.
    </h6>
    <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
      Curious to <span class="text-green-500 inter">see</span> my work?
    </h3>
  </div>
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
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
