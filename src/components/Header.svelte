<script>
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  import { onMount } from "svelte";

  // Function to set theme based on system preference
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

  // Call setTheme when the component mounts
  onMount(setTheme);

  // Toggle theme
  function toggleTheme() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
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
    <button on:click={toggleTheme}> Toggle Mode </button>
  </div>
</header>
