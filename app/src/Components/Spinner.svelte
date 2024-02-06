<script>
  import { fly } from "svelte/transition";

  let className;

  export let text = "Please wait...";
  export { className as class };
  export let isFullScreenLoader = false;
</script>

{#if isFullScreenLoader}
  <div
    class="flex items-center justify-center h-full w-full fixed z-10 bg-white bg-opacity-40">
    <div class="text-center">
      <div
        class="rounded-full m-auto h-10 w-10 border-[3px] border-brand-primary border-t-transparent border-r-transparent spinner {className}">
      </div>
      {#if text}
        <p in:fly="{{ delay: 400, duration: 3000 }}" class="text-base mt-4">
          {text}
        </p>
      {/if}
    </div>
  </div>
{:else}
  <div
    class="rounded-full h-10 w-10 border-[3px] border-brand-primary border-t-transparent border-r-transparent spinner {className}">
  </div>
{/if}

<style>
  .spinner {
    will-change: transform;
    animation: rotate 0.25s infinite linear;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
