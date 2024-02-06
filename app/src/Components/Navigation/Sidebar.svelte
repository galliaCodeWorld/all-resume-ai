<script>
  import { active } from "tinro";
  import { signout } from "../../Firebase/auth";
  import { user } from "../../Store";

  const links = [
    { label: "Dashboard", href: "/", icon: "dashboard" },
    { label: "Billing", href: "/billing", icon: "wallet" },
    { label: "Support", href: "/support", icon: "support" },
  ];
</script>

<aside
  class="flex-[0_0_21rem] bg-[#fdfcff] pr-4 sticky top-0 h-screen flex flex-col items-start">
  <div class="pb-4 mb-8 p-6 h-20 w-full">
    <a href="/" class="flex items-center gap-4">
      <img alt="logo-icon" src="logo-icon.svg" class="h-9" />
      <div>
        <img alt="logo-icon" src="logo-text.svg" class="h-6" />
      </div>
    </a>
  </div>
  <nav class="flex flex-col flex-1 w-full">
    <div class="px-4 flex flex-col gap-3">
      {#each links as { label, icon, href }}
        <a
          exact
          use:active
          href="{href}"
          class="flex items-center gap-4 p-6 py-3 border border-transparent hover:border-gray-200 rounded-full">
          <i class="material-symbols-rounded nav-icon text-gray-600">{icon}</i>
          <p class="text-sm">{label}</p>
        </a>
      {/each}
    </div>

    <div class="flex-1"></div>

    <div class="p-6">
      <div class="mb-8 -mx-2">
        <a
          exact
          use:active
          href="/consulation"
          class="flex items-center gap-2 px-4 py-2 border border-yellow-200 bg-yellow-50 bg-opacity-70 rounded-xl">
          <i class="material-symbols-rounded filled text-yellow-500">star</i>
          <p class="text-sm text-yellow-600 mt-1 flex-1">Consult an Expert</p>
          <i class="material-symbols-rounded !text-xl text-yellow-500"
            >arrow_forward</i>
        </a>
      </div>
      <div class="mb-4 flex justify-between">
        <p class="m-0 leading-none text-sm text-left">
          {#if true}
            <span class="font-medium">10,000</span>
            <span class="text-gray-500">credits left</span>
          {:else}
            You're out of credits
          {/if}
        </p>
        <a
          href="/billing"
          class="text-xs text-brand-primary font-semibold underline"
          >Buy Credits →</a>
      </div>

      <div class="w-full bg-gray-100 rounded-full h-2.5">
        <div class="bg-brand-primary h-2 rounded-full" style="width: 50%"></div>
      </div>
    </div>

    <div class="flex gap-4 p-6 items-center justify-between">
      <div>
        <img
          src="https://i.pravatar.cc/150?img=53"
          alt="profile avatar"
          class="h-10 w-10 rounded-full border-4" />
      </div>

      <div class="flex-1">
        <p class="font-medium text-sm">Rehan Haider</p>
        <p class="text-xs text-gray-500">email@example.com</p>
      </div>

      <button class="hover:text-red-500 transition-all" on:click="{signout}">
        <i class="material-symbols-rounded !text-xl"> logout </i>
      </button>
    </div>
  </nav>
</aside>

<style type="postcss" global scoped>
  a.active {
    @apply bg-brand-primary  text-white !border-brand-primary !border-opacity-30;
    @apply font-medium;
  }
  a.active .nav-icon {
    @apply text-white;
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }
</style>
