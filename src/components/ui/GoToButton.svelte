<script>
  export let title;
</script>

<div class="flex items-end flex-1 gap-4 justify-betweeen">
  <div
    class="ml-auto cursor-pointer dark:hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full dark:after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden
    hover:text-white after:bg-slate-950
    "
  >
    <p class="z-4">{title}</p>
  </div>
</div>
