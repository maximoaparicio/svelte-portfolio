<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView();
  }

  function setTheme() {
    const darkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }

  onMount(setTheme);
</script>

<div
  class="relative flex flex-col mx-auto text-sm sm:text-base max-w-screen-2xl"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class="ml-auto rounded-full p-4 dark:bg-slate-900 text-green-500 dark:hover:bg-slate-800 cursor-pointer hover:bg-slate-300 bg-slate-200"
    >
      <i class="fa-solid fa-arrow-up grid place-items-center" />
    </button>
  </div>
  <Header {y} />
  <div class="sm:px-4">
    <slot />
  </div>
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
