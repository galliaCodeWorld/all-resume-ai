<script>
  export let label = "";
  export let name = "";
  export let checked = false;
</script>

<div class="flex items-center mr-4">
  <input
    on:change
    type="checkbox"
    bind:checked="{checked}"
    id="{name}"
    class="w-4 h-4 border-gray-300 rounded" />

  <label
    for="{name}"
    class="ml-3 cursor-pointer select-none text-sm text-brand-black-500"
    >{label}</label>
</div>
