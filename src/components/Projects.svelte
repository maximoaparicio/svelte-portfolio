<script>
  const projects = [
    {
      Title: "FluidSys",
      Subtitle: "Sistema de stock para negocio",
      Description:
        "Login. Rutas protegidas (middleware). Roles cliente-admin. Control stock. Lógica de negocio.",
      Icon: "Store",
      LivePreview: "",
    },
    {
      Title: "Dog360",
      Subtitle: "Aplicacion para veterinaria",
      Description:
        "Login. Protected routes. Roles. Shifts. Pet creation. Adoption. Print shift. Consultations.",
      Icon: "PawPrint",
      Image: "/lib/assets/home.png",
      LivePreview: "https://github.com/maximoaparicio",
    },
    {
      Title: "FaceLock AI",
      Subtitle: "Sistema de seguridad con reconocimiento facial",
      Description:
        "Registro de persona usando reconocimiento facial para verificar autenticidad.",
      Icon: "ScanFace",
      LivePreview: "",
    },
  ];

  import LucideIcon from "./ui/LucideIcon.svelte";
  import OtherTabIcon from "./ui/svg/OtherTabIcon.svelte";
</script>

<section id="projects" class="flex flex-col justify-center mt-24">
  <header class="text-center">
    <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
      Curious to see my
      <span class="text-[#3EB489]">work</span>?
    </h3>
    <p class="text-xl font-light">Take a look</p>
  </header>
  {#each projects as project}
    <div class="flex flex-col justify-between card">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <h3 class="text-2xl font-semibold">
            {project.Title}
          </h3>
          <LucideIcon name={project.Icon} />
        </div>
        <div>
          <span class="flex items-center gap-2 cursor-pointer">
            <a target="_blank" href={project.LivePreview}>live demo</a>
            <OtherTabIcon />
          </span>
        </div>
      </div>
      <div class="py-2">
        <img
          src={project.Image}
          alt=""
          class="object-cover rounded max-sm:aspect-square"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h6 class="text-lg">{project.Subtitle}</h6>
        <p class="text-sm max-sm:hidden">
          {project.Description}
        </p>
        <button
          class="relative px-6 py-2 overflow-hidden text-base rounded-full cursor-pointer blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl inter group bg-slate-200 text-slate-950"
        >
          <div
            class="absolute top-0 z-0 w-full h-full duration-200 bg-green-600 dark:bg-green-500 right-full opacity-20 group-hover:translate-x-full"
          />
          <a class="flex gap-2" target="_blank" href={project.LivePreview}>
            <p class="relative z-9">details</p>
          </a>
        </button>
      </div>
    </div>
  {/each}
</section>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 8px;
    margin: 16px;
    text-align: left;
    min-height: 412px;
  }
</style>
