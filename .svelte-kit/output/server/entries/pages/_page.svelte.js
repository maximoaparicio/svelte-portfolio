import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-green-700 text-center cursor-pointer group hover:border-green-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-12fzquf"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Stock System",
      icon: "fa-solid fa-store",
      description: "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling."
    },
    {
      name: "Utlimate Todos",
      icon: "fa-solid fa-list-check",
      description: "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model."
    },
    {
      name: "Pokédex",
      icon: "fa-solid fa-diagram-project",
      description: "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon)."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4 justify-center"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 min-h-[75vh]" data-svelte-h="svelte-vuyahs"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-2 md:gap-8 lg:gap-4 justify-center -mt-32 sm:-mt-0"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="inter text-green-500">Maximo</span> Dip
        <br>Full Stack
        <span class="inter text-green-500">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-green-500">favorite tech</span> includes
        JavaScript (NEXT.JS, SvelteKit or Astro), TailwindCSS, React, Node.js +
        Express.js &amp; SQL. <span class="text-green-500">University</span> Software
        Developer.</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl inter relative overflow-hidden px-6 py-3 group rounded-full bg-slate-200 text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-green-500 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></button></div></section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-if7zh5"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="inter text-green-500">see</span> my work?</h3></div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-green-700 duration-200" data-svelte-h="svelte-122x4k0"><i class="fa-regular fa-circle-play"></i> <p>Watch the video</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-6uud8m">Smoljames Store is a a merchanising store created with <strong class="text-green-500">Next.js, Commerce.js, Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction handling.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-asplhl">Ultimate Todos is a Full Stack <strong class="text-green-500">Next.js</strong>,
          <strong class="text-green-500">Node.js + Express.js</strong>
          &amp; <strong class="text-green-500">Firebase</strong> CRUD application that
          allows a user to login, manage a tidy and efficacious todo list, and persist
          this information across devices.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ldo3wr">The Pokédex is a <strong class="text-green-500">SvelteKit &amp; TailwindCSS</strong>
          web application, hosted on
          <strong class="text-green-500">Netlify</strong>, that consumes and
          caches the
          <strong class="text-green-500">Pokémon API</strong>
          to display all Pokémon information. Gotta catch them all!</p>`;
    }
  })}</div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
