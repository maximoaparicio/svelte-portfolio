<section class="flex flex-col gap-24 py-32" id="contact">
  <div class="flex flex-col gap-2 text-center">
    <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
      Get in <span class="text-[#3EB489] inter">Touch</span>
    </h3>
  </div>
  <div class="flex flex-col items-center justify-center gap-12 lg:gap-10">
    <form
      action="https://formspree.io/f/mdorjnrp"
      method="POST"
      class="flex flex-col w-full max-w-xl gap-2"
    >
      <div>
        <label
          for="nombre"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Who are you
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -500 -500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
            name="nombre"
            id="nombre"
            placeholder="Name"
          />
        </label>
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -500 -500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
          />
        </label>
      </div>
      <div>
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your message
          <textarea
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 -500 -500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-500 dark:-500"
            placeholder="Write your thoughts here..."
          />
        </label>
      </div>
      <button
        class="relative px-6 py-3 mx-auto overflow-hidden text-base rounded-full blueShadow sm:text-lg md:text-xl inter group bg-slate-200 text-slate-950"
        type="submit"
      >
        <div
          class="absolute top-0 z-0 w-full h-full duration-200 bg-green-500 right-full opacity-20 group-hover:translate-x-full"
        />
        <h4 class="relative z-9">Send &rarr;</h4>
      </button>
    </form>
  </div>
</section>
