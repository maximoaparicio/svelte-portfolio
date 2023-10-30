import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Contact", link: "#contact" }
  ];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid text-xl" + (y > 0 ? " py-4 dark:bg-slate-950 bg-slate-50 border-green-700" : " py-6 bg-transparent border-transparent"),
    0
  )}><i class="fa-sharp fa-solid fa-terminal"></i> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-green-500"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}</div>  <button data-svelte-h="svelte-14jykp5">Toggle</button></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-12 border-t border-solid border-green-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-1ylcxiz"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><div class="flex items-center gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl mx-auto"><a href="https://www.linkedin.com/in/maximodipaparicio/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://www.github.com/maximoaparicio" target="_blank"><i class="fa-brands fa-github"></i></a></div> <p class="mx-auto text-sm opacity-70">or</p> <p><b class="pr-2">Email</b> maximodipaparicio@gmail.com</p> <p>© 2023 Max Dev</p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="relative flex flex-col mx-auto w-full text-sm sm:text-base"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full p-4 bg-slate-900 text-green-500 hover:bg-slate-800 cursor-pointer" data-svelte-h="svelte-gky962"><i class="fa-solid fa-arrow-up grid place-items-center"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} <div class="max-w-8xl sm:px-4 mx-auto">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
