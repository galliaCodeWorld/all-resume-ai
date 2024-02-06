<script>
  export let label = "";
  export let value = "";
  export let hint = "";
</script>

<div class="flex-1 relative">
  {#if label}
    <div class="mb-2">
      <label for="{name}" class="text-sm block">{label}</label>
      <small class="text-gray-400">{hint}</small>
    </div>
  {/if}
  <select
    name="{name}"
    on:input
    on:change
    {...$$restProps}
    bind:value="{value}"
    class="p-4 py-3 rounded-lg md:text-sm pr-8 appearance-none bg-white transition-all border border-gray-300 !outline-none block w-full focus:bg-white focus:border-orange-500">
    <slot />
  </select>

  <i class="material-symbols-rounded absolute top-10 right-2">expand_more</i>
</div>
