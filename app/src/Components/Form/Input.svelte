<script>
  export let label = "";
  export let value = null;
  export let hint = "";
</script>

<div class="flex-1 w-full">
  {#if label}
    <div class="mb-2">
      <label for="{name}" class="text-sm block">{label}</label>
      <small class="text-gray-400">{hint}</small>
    </div>
  {/if}
  <input
    name="{name}"
    {...$$restProps}
    bind:value="{value}"
    on:input
    on:change
    class="p-4 py-3 md:text-sm text-base rounded-lg bg-white transition-all border border-gray-300 focus:border-orange-500 !outline-none block w-full flex-1" />
</div>
