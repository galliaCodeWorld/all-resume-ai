<script>
  import { userInput } from "../../Store";
  import { onDestroy, onMount } from "svelte";
  import { pipe, descend, prop, sortBy, sortWith } from "ramda";
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
  import TextButton from "../Form/TextButton.svelte";
  import AIGenrateButton from "../AIGenrateButton.svelte";
  import ProfessionalRecordList from "../ProfessionalRecordList.svelte";

  let detachListener;

  let isLoading = false;
  let isEditing = false;
  let isModelOpen = false;

  let formData = {};
  let projects = [];

  //
  const open = () => (isModelOpen = true);
  const close = () => (isModelOpen = false);
  const toggle = () => (isModelOpen = !isModelOpen);
  //

  // @Thoughts, can this be all functions instead of state  mutations? Controlled Mutation?
  const addItem = async () => {
    isLoading = true;

    isEditing
      ? await updateDocument("projects", formData)
      : await addDocument("projects", formData);

    isLoading = false;
    formData = {};
    return close();
  };

  const editItem = async ({ detail }) => {
    isModelOpen = true;
    isEditing = true;
    formData = detail;
  };

  const deleteItem = async ({ detail: { id } }) => {
    isLoading = true;
    await deleteDocument("projects", id);
    isLoading = false;
  };

  onMount(
    () => (
      (isLoading = true),
      (detachListener = onCollectionSnapshot(
        "projects",
        pipe(
          sortWith([descend(prop("endDate"))]),
          sortWith([descend(prop("isPresent"))]),
          (response) => ((projects = response), (isLoading = false))
        )
      ))
    )
  );

  onDestroy(async () => (await detachListener)());
</script>

<form on:submit|preventDefault="{addItem}" class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded mt-1">business_center</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Project</p>
      <p class="text-gray-400 text-sm">Add your project information.</p>
    </div>
  </div>

  <div class="flex items-start gap-4 w-full">
    <Input
      required
      bind:value="{formData.title}"
      label="Title"
      placeholder="Enter your Title here" />

    <Input
      required
      bind:value="{formData.company}"
      label="Company"
      placeholder="What was your role at the {formData.company ||
        'company'}?" />
  </div>

  <div class="flex items-start gap-4 w-full">
    <Input
      required
      bind:value="{formData.location}"
      label="Location"
      placeholder="Please enter company's location here" />
  </div>

  <div class="flex items-center gap-4 w-full">
    <div class="flex-1">
      <Input
        required
        type="month"
        bind:value="{formData.startDate}"
        label="Start Date"
        placeholder="Please enter start date" />
    </div>

    <div class="flex-1">
      <Input
        required
        type="month"
        disabled="{formData.isPresent}"
        bind:value="{formData.endDate}"
        label="End Date"
        placeholder="Please enter end date" />
    </div>
  </div>

  <div class="flex items-start gap-4 w-full relative">
    <Textarea
      rows="{8}"
      bind:value="{formData.description}"
      label="Responsiblities"
      placeholder="Please share what did you do at the {formData.company ||
        'company'}. A bulet point list works well." />

    <div class="absolute right-0 -top-0">
      <AIGenrateButton
        bind:output="{formData.description}"
        prompt="Generate 4 points for a duties for {formData.title} at the company named {formData.company}. Use {formData.isPresent
          ? 'present tenses'
          : 'past tense'}. Each point should have 2 line spaces below it and should be formatted nicely." />
    </div>
  </div>

  <div class="flex items-center justify-end gap-8">
    <TextButton
      type="button"
      on:click="{close}"
      class="!text-gray-500 hover:!text-gray-700">Cancel</TextButton>
    <Button>Save Project</Button>
  </div>
</form>
