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
        "Login. Rutas protegidas. Roles. Turnos. Creación de mascota. Adopción. Imprimir turno. Consultas.",
      Icon: "PawPrint",
      LivePreview: "",
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
          <span class="items-center hidden gap-2 cursor-pointer sm:flex"
            >live preview
            <OtherTabIcon />
          </span>
        </div>
      </div>
      <div>
        <span class="flex items-center gap-2 cursor-pointer sm:hidden"
          >live preview
          <OtherTabIcon />
        </span>
        <h6 class="text-lg">{project.Subtitle}</h6>
        <p class="text-sm">
          {project.Description}
        </p>
      </div>
    </div>
  {/each}
</section>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    margin: 16px;
    text-align: left;
    min-height: 412px;
  }
</style>
