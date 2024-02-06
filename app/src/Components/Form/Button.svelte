<script>
  let className = "";
  export { className as class };
  export let disabled = false;
</script>

<button
  on:click
  disabled="{disabled}"
  class="active:button-shadow text-sm p-4 py-3 self px-6 active:!shadow-none self-end font-normal transition-all bg-brand-primary hover:bg-opacity-90 active:bg-blue-600 rounded-full text-white {className}">
  <slot />
</button>

<style type="postcss">
  .button-shadow {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
</style>
