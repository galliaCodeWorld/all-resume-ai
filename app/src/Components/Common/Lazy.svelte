<script>
  import { user } from "../../Store";

  export let component = Promise.resolve({ default: null });
</script>

{#await component}
  <p class="p-4 text-center">Loading...</p>
{:then { default: defaultComponent }}
  <svelte:component this="{defaultComponent}" />
{/await}
