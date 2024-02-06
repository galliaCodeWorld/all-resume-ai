<script>
  import { userInput } from "../../Store";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";

  import Textarea from "../Form/Textarea.svelte";
  import AiGenrateButton from "../AIGenrateButton.svelte";
  import TextButton from "../Form/TextButton.svelte";
  import { resume } from "../../Store";

</script>

<section class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded mt-1">notes</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Profile</p>
      <p class="text-gray-400 text-sm">Write a few word about yourself</p>
    </div>
  </div>

  <div class="flex items-start gap-4 w-full relative">
    <Textarea
      rows="{8}"
      bind:value="{$resume.summary}"
      label="Your Professional Summary"
      placeholder="Experienced global early-stage executive with economics and mathematics degree from the University of Wisconsin. Passion for building inspiring companies people love through industry-leading design, development, branding, and making big bets." />

    <div class="absolute right-0 -top-0">
      <AiGenrateButton
        bind:output="{$resume.summary}"
        prompt="Generate a Professional 200 chars summary for Lead Developer." />
    </div>
  </div>
</section>
