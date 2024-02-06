<script>
  import Button from "./Form/Button.svelte";

  export let buttonText = "";
  export let iconName = "note_alt";
  export let message = "This section is empty.";
</script>

<div class="flex items-center justify-center p-8 py-12 rounded-lg bg-gray-50">
  <div class="text-center flex flex-col gap-10">
    <div>
      {#if iconName}
        <div
          class="h-16 w-16 rounded-full m-auto flex items-center justify-center">
          <i class="material-symbols-rounded !text-4xl text-gray-600"
            >{iconName}</i>
        </div>
      {/if}

      <p class="text-gray-500 max-w-lg leading-relaxed">
        {message}
      </p>
    </div>

    {#if buttonText}
      <div>
        <Button on:click>{buttonText}</Button>
      </div>
    {/if}
  </div>
</div>
