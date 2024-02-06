<script>
  import { userInput } from "../../Store";
  import { onDestroy, onMount } from "svelte";
  import { pipe, descend, prop, sortBy, sortWith, uniq } from "ramda";
  import {
    addDocument,
    deleteDocument,
    updateDocument,
    onCollectionSnapshot,
  } from "../../Firebase/firestore";

  import Spinner from "../Spinner.svelte";
  import Modal from "../Modal.svelte";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";

  import EmptyBlock from "../EmptyBlock.svelte";
  import Checkbox from "../Form/Checkbox.svelte";
  import Textarea from "../Form/Textarea.svelte";
  import SkillsChips from "../SkillsChips.svelte";
  import TextButton from "../Form/TextButton.svelte";
  import AIGenrateButton from "../AIGenrateButton.svelte";

  import ProfessionalRecordList from "../ProfessionalRecordList.svelte";
  import AiGenrateButton from "../AIGenrateButton.svelte";

  let detachListener;
  let isLoading = false;

  let skill = null;
  let skills = { id: null, values: [] };

  const add = async () => {
    isLoading = true;

    skills.id
      ? await updateDocument("skills", {
          ...skills,
          values: uniq([...skills.values, skill]),
        })
      : await addDocument("skills", {
          values: uniq([...skills.values, skill]),
        });

    isLoading = false;
    return (skill = null);
  };

  const deleteItem = async ({ detail: { idx } }) => {
    isLoading = true;

    console.log(idx);
    const updatedValues = (skills.values = skills.values.filter(
      (value, _idx) => value && idx !== _idx
    ));

    await updateDocument("skills", {
      ...skills,
      values: updatedValues,
    });
    isLoading = false;
  };

  onMount(
    () => (
      (isLoading = true),
      (detachListener = onCollectionSnapshot(
        "skills",
        (response) => (
          (skills = response[0] || { values: [] }), (isLoading = false)
        )
      ))
    )
  );

  onDestroy(async () => (await detachListener)());
</script>

<section class="gap-8 w-full pb-8">
  <div class="flex gap-4">
    <i class="material-symbols-rounded mt-1">business_center</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Skills</p>
      <p class="text-gray-400 text-sm">Add your project information.</p>
    </div>
  </div>

  <div class="flex justify-end">
    <p class="text-sm text-gray-500">
      Generate Skills with AI using informatiom from your resume.
    </p>
    <div class=" pointer-events-none opacity-50">
      <AiGenrateButton />
    </div>
  </div>
  <SkillsChips
    bind:isLoading="{isLoading}"
    on:submit="{add}"
    on:delete="{deleteItem}"
    bind:value="{skill}"
    bind:values="{skills.values}" />

  <div class="text-right">
    {#if isLoading}
      <Spinner class="h-4 w-4 ml-auto mr-2 mt-4 " />
    {/if}
  </div>
</section>
