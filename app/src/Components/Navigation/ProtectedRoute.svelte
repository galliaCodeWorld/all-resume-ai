<script>
  import { router, meta } from "tinro";
  import { user } from "../../Store";

  const route = meta();

  $: if (!$user) {
    router.goto("/login", true);
    for (const key in route.query) {
      router.location.query.set(key, String(route.query[key]));
    }
  }
</script>

{#if $user}
  <slot />
{/if}
