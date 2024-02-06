<script>
  import { createEventDispatcher } from "svelte";

  export let values = [];
  export let value = null;
  export let isLoading = false;

  const dispatch = createEventDispatcher();
  const remove = (idx) => () => dispatch("delete", { idx });
</script>

<div>
  <div
    class="border rounded-lg w-full flex items-center flex-wrap gap-1 px-4 py-4 mt-4 bg-white {isLoading
      ? 'opacity-50'
      : 'opacity-100'}">
    {#each values as value, idx}
      <div
        class=" p-1 pr-3 px-4 rounded-full bg-brand-primary text-white flex items-center gap-2">
        <p class="text-sm font-medium capitalize">{value}</p>
        <button
          disabled="{isLoading}"
          on:click="{remove(idx)}"
          class="rounded-full font-semibold text-brand-primary hover:bg-red-100 hover:text-red-500 text-center bg-indigo-200 h-4 w-4 flex items-center justify-center ph ph-x text-xs">
          <i class="material-symbols-rounded !text-sm">close</i>
        </button>
      </div>
    {/each}

    <form class="flex-1" on:submit|preventDefault>
      <input
        disabled="{isLoading}"
        bind:value="{value}"
        placeholder="Skill here. Press enter to save."
        class=" w-full flex-1 text-sm px-2 py-4 h-full bg-transparent outline-none ring-transparent" />
    </form>
  </div>
</div>
