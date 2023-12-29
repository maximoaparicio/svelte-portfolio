<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { setTheme } from "../lib/theme";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView();
  }

  onMount(setTheme);
</script>

<div
  class="relative flex flex-col mx-auto text-sm bg-white sm:text-base max-w-screen-2xl dark:bg-black transition-bg"
>
  <div
    class={"fixed bottom-0 right-0 duration-200 flex p-10 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class="p-4 text-[#3EB489] cursor-pointer rounded-xl dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-300 bg-slate-200 duration-200"
    >
      <i class="grid fa-solid fa-arrow-up place-items-center" />
    </button>
  </div>
  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
