// src/stores/theme.js

import { writable } from "svelte/store";

export const theme = writable("light");

export const toggleTheme = () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
  theme.update((value) => (value === "light" ? "dark" : "light"));
};
