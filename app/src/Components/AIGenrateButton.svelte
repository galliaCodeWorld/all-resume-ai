<script>
  import Spinner from "./Spinner.svelte";
  import { generateTextFromPrompt } from "../Firebase/functions";

  export let prompt = "";
  export let output = "";
  export let isLoading = false;
  export let text = "Generate with AI";

  const generateText = async () => {
    isLoading = true;
    const response = await generateTextFromPrompt({
      prompt,
      temprature: 0.5,
      maxTokens: 100,
    });

    isLoading = false;

    return (output = response.data);
  };
</script>

<button
  on:click="{generateText}"
  type="button"
  class="text-xs p-0 pl-1 pr-2 rounded transition-all text-brand-primary hover:text-opacity-80 active:opacity-100 flex items-center gap-1">
  {#if isLoading}
    <Spinner class="!h-4 !w-4 border-2 mr-1" />
    <span>Generating...</span>
  {:else}
    <i class="material-symbols-rounded filled !text-sm">bolt</i>
    <span>{text}</span>
  {/if}
</button>
