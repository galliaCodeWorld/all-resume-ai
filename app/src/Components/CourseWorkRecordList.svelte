<script>
  import Modal from "./Modal.svelte";
  import TextButton from "./Form/TextButton.svelte";
  import { createEventDispatcher } from "svelte";

  export let list = [];
  export let iconName = "golf_course";
  export let isExpanded = false;

  const dispatch = createEventDispatcher();
  const toggleExpansion = () => (isExpanded = !isExpanded);
</script>

<div>
  <div class="mb-4 flex justify-between">
    <p>
      History ({list.length})
    </p>
  </div>

  <ul class="flex flex-col gap-4">
    {#each list as { id, name, institution, completionYear, skill, skillApplication }}
      <li class="p-4 group rounded-lg border flex gap-3 bg-white">
        <i class="material-symbols-rounded">{iconName}</i>
        <div class="flex-1">
          <div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">
                  {name}
                </span>

                <div class="h-1 w-1 rounded-full bg-gray-400"></div>
                <span class="text-sm">{completionYear}</span>
              </div>
            </div>
            <p class="text-sm text-gray-500">{institution}</p>
          </div>

          <div class="flex gap-2 mt-2 items-center">
            <p class="text-sm">
              <span class="font-medium">{skill}</span> - {skillApplication}
            </p>
          </div>
        </div>

        <button
          on:click="{(e) =>
            dispatch('edit', {
              id,
              name,
              skill,
              institution,
              completionYear,
              skillApplication,
            })}"
          class="text-sm hover:text-brand-primary self-start opacity-0 group-hover:opacity-100">
          <i class="material-symbols-rounded">edit_note</i>
        </button>

        <button
          on:click="{(e) => dispatch('delete', { id: id })}"
          class="text-sm hover:text-red-500 self-start opacity-0 group-hover:opacity-100">
          <i class="material-symbols-rounded">delete_sweep</i>
        </button>
      </li>
    {/each}
  </ul>
</div>
