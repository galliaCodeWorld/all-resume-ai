<script>
  let className = "";
  export let type = "";
  export { className as class };
</script>

<button
  on:click
  type="{type}"
  class="text-sm inline-block font-medium transition-all text-brand-primary active:text-blue-600 {className}">
  <slot />
</button>
