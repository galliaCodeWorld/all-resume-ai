<script>
  import Modal from "./Modal.svelte";
  import TextButton from "./Form/TextButton.svelte";
  import { createEventDispatcher } from "svelte";

  export let list = [];
  export let isExpanded = false;

  const dispatch = createEventDispatcher();
  const toggleExpansion = () => (isExpanded = !isExpanded);
</script>

<div>
  <div class="mb-4 flex justify-between">
    <p class="text-sm font-medium">
      History ({list.length})
    </p>
  </div>

  <ul class="flex flex-col gap-4">
    {#each list as { id, title, company, startDate, endDate, isPresent, description, location }}
      <li class="p-4 group rounded-lg flex gap-3 bg-gray-100">
        <div class="flex-1 flex items-center gap-2">
          <div class="flex items-center gap-1">
            <p class="text-sm font-semibold">{title}</p>
            <p class="text-sm">at</p>
            <p class="text-sm text-gray-500">{company}</p>
          </div>

          <p class="h-1 w-1 rounded-full bg-gray-500"></p>

          <div class="flex gap-1 items-center">
            <p class="text-xs">{startDate}</p>
            <p>-</p>
            <p class="text-xs">{isPresent ? "Present" : endDate}</p>
          </div>
        </div>

        <button
          on:click="{(e) =>
            dispatch('edit', {
              id,
              title,
              company,
              startDate,
              endDate,
              isPresent,
              description,
              location,
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
