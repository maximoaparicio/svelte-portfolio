<script>
  import { Sun, Moon, MessagesSquare } from "lucide-svelte";
  import { theme, toggleTheme } from "$lib/theme";
  import { tabs } from "$lib/stores/tabs";
  import { setContext } from "svelte";

  export let y;

  setContext("theme", theme);
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid text-xl" +
    (y > 0
      ? " py-4 dark:bg-slate-950 bg-slate-50 border-[#3EB489]"
      : " py-6 bg-transparent border-transparent")}
>
  <i class="fa-sharp fa-solid fa-terminal hover:text-[#3EB489] duration-200" />
  <nav class="flex items-center gap-4">
    {#each tabs as tab, index}
      <a
        href={tab.link}
        class="duration-200 hover:text-[#3EB489] flex"
        target={index === 2 ? "_blank" : ""}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <div class="flex items-center gap-4">
      <button on:click={toggleTheme} class="hover:text-[#3EB489] duration-200">
        {#if $theme === "light"}
          <Sun />
        {:else}
          <Moon />
        {/if}
      </button>
      <a
        href="https://api.whatsapp.com/send/?phone=543814057449&text&type=phone_number&app_absent=0"
        target="_blank"
        class="hover:text-[#3EB489] duration-200"
      >
        <MessagesSquare />
      </a>
    </div>
  </nav>
</header>
