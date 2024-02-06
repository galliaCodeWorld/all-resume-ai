<script>
  export let isOpen = true;
  import { fade, fly } from "svelte/transition";

  $: isOpen,
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
</script>

{#if isOpen}
  <div
    in:fade="{{ duration: 200 }}"
    out:fade="{{ duration: 200, delay: 100 }}"
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40 z-50 px-4">
    <div
      class="flex items-center justify-center h-full w-full"
      out:fly="{{ duration: 150, y: 12, delay: 0 }}"
      in:fly="{{ duration: 150, y: 12, delay: 100 }}">
      <slot />
    </div>
  </div>
{/if}
