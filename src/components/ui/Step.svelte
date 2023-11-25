<script>
  import GoToButton from "./GoToButton.svelte";

  export let step;
</script>

<a
  href={step.href}
  target="_blank"
  class="relative flex flex-col gap-4 p-4 text-center duration-200 border border-green-700 border-solid rounded-lg cursor-pointer sm:p-6 md:p-8 group hover:border-green-400"
>
  <div
    class="grid px-4 mx-auto -mt-10 text-5xl duration-200 dark:bg-slate-950 bg-slate-50 place-items-center md:text-6xl sm:-mt-12 md:-mt-14 lg:-mt-16"
  >
    <i class={step.icon} />
  </div>
  <h3 class="text-xl font-medium sm:text-2xl md:text-3xl">
    {step.name}
  </h3>
  <!-- <img src="/hero-desktop.png" alt="hero-desk-example" class="rounded" /> -->
  <div class="relative inset-0 flex items-center justify-end">
    <slot />
  </div>
  <GoToButton title="Go to &rarr;" />
</a>
