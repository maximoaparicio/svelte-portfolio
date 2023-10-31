<script>
  import { Sun, Moon } from "lucide-svelte";
  import { theme } from "$lib/stores/theme";
  import { tabs } from "$lib/stores/tabs";
  import { setContext } from "svelte";

  export let y;

  setContext("theme", theme);

  // Toggle theme
  function toggleTheme() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    theme.update((value) => (value === "light" ? "dark" : "light"));
  }
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid text-xl" +
    (y > 0
      ? " py-4 dark:bg-slate-950 bg-slate-50 border-green-700"
      : " py-6 bg-transparent border-transparent")}
>
  <i class="fa-sharp fa-solid fa-terminal" />
  <div class="sm:flex items-center gap-4">
    {#each tabs as tab, index}
      <a
        href={tab.link}
        class="duration-200 hover:text-green-500 hidden sm:flex"
        target={index === 2 ? "_blank" : ""}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <button on:click={toggleTheme}>
      {#if $theme === "light"}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
  </div>
</header>
