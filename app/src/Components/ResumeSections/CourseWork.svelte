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
  import Select from "../Form/Select.svelte";

  import EmptyBlock from "../EmptyBlock.svelte";
  import Checkbox from "../Form/Checkbox.svelte";
  import Textarea from "../Form/Textarea.svelte";
  import TextButton from "../Form/TextButton.svelte";
  import AIGenrateButton from "../AIGenrateButton.svelte";

  import CourseWorkRecordList from "../CourseWorkRecordList.svelte";
  import EducationRecordList from "../EducationRecordList.svelte";
  import ProfessionalRecordList from "../ProfessionalRecordList.svelte";

  let detachListener;
  let formData = {};
  let CourseWork = [];
  let isLoading = false;

  const addItem = async () => {
    isLoading = true;

    isEditing
      ? await updateDocument("Course Work", formData)
      : await addDocument("Course Work", formData);

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
    await deleteDocument("Course Work", id);
    isLoading = false;
  };

  onMount(
    () => (
      (isLoading = true),
      (detachListener = onCollectionSnapshot(
        "Course Work",
        pipe(
          sortWith([descend(prop("endDate"))]),
          sortWith([descend(prop("isPresent"))]),
          (response) => ((CourseWork = response), (isLoading = false))
        )
      ))
    )
  );

  onDestroy(async () => (await detachListener)());

  const datesList = [
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
    1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
    1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023,
  ];
</script>

<form on:submit|preventDefault="{addItem}" class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded mt-1">golf_course</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Course Work</p>
      <p class="text-gray-400 text-sm">Add your Course Work details.</p>
    </div>
  </div>

  <div class="flex items-start gap-4 w-full">
    <Input
      required
      label="Course Name"
      bind:value="{formData.name}"
      placeholder="Introduction to Computer Systems" />

    <Input
      required
      bind:value="{formData.institution}"
      label="Institution"
      placeholder="New York University" />
  </div>

  <div class="flex items-center gap-4 w-full">
    <div class="flex-1">
      <Select label="Completion Year" bind:value="{formData.completionYear}">
        <option selected value="" disabled>Select completion date</option>

        {#each datesList as year}
          <option value="{year}">{year}</option>
        {/each}
      </Select>
    </div>

    <div class="flex-1">
      <Input
        bind:value="{formData.skill}"
        label="Skill"
        placeholder="TeamWork" />
    </div>
  </div>

  {#if formData.skill}
    <div class="flex-1">
      <Input
        bind:value="{formData.skillApplication}"
        label="How did you use your {formData.skill} skill?"
        placeholder="Coordinating on code with a small group of people." />
    </div>
  {/if}
</form>
