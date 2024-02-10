<script>
  import { userInput, resume } from "../../Store";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";
  import Textarea from "../Form/Textarea.svelte";

  import AiGenrateButton from "../AIGenrateButton.svelte";
  import TextButton from "../Form/TextButton.svelte";
  import RichTextEditor from '../RichTextEditor.svelte'

  import "@friendofsvelte/tipex/styles/Tipex.css";
  import "@friendofsvelte/tipex/styles/ProseMirror.css";
  import "@friendofsvelte/tipex/styles/Controls.css";
  import "@friendofsvelte/tipex/styles/EditLink.css";
  import "@friendofsvelte/tipex/styles/CodeBlock.css";

</script>

<section class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded">hotel_class</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Professional Expertise</p>
      <p class="text-gray-400 text-sm">
        List down your key professional expertise
      </p>
    </div>
    <AiGenrateButton
      bind:output="{$resume.expertise}"
      prompt="Generate a Professional 200 chars summary for Lead Developer." />
  </div>
  <div>
    <ul class="flex flex-col gap-4 text-sm">
      <li>
        {#if $resume.expertise}
        <RichTextEditor htmlContent={$resume.expertise} 
          id={`expertise`} />
        {:else}
        <RichTextEditor 
          id={`expertise`} />
        {/if}
      </li>
    </ul>
  </div>
  <!--  -->
</section>
