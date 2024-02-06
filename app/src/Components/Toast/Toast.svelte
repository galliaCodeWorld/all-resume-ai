<script>
  import { config } from "./store";
  import { hideToast } from "./utils";
  import { fly } from "svelte/transition";

  export let type = $config.type;

  const typeMap = {
    info: "bg-stone-800 text-white",
    error: "bg-red-500 text-white",
    warn: "bg-orange-500 text-white",
  };

  const _type = typeMap[type] || typeMap["info"];
</script>

{#if $config.message}
  <div
    transition:fly="{{ y: 80, duration: 200 }}"
    class="{_type} max-w-sm p-4 py-3 rounded-md pl-4 shadow-lg fixed bottom-8 left-8">
    <div class="flex items-center gap-1.5">
      <p class="text-sm flex-1">
        {$config.message}
      </p>
      <div class="border-l opacity-40 w-1 h-full py-2 ml-2"></div>
      <button
        on:click="{hideToast}"
        class="rounded-full -mr-1 -mb-[1px] flex items-center justify-center {_type}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="white"
          ><path
            d="M0 0h24v24H0z"
            fill="none"></path
          ><path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path
          ></svg>
      </button>
    </div>
  </div>
{/if}
