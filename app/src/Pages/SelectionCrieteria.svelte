<script>
  import Button from "../Components/Form/Button.svelte";
  import Textarea from "../Components/Form/Textarea.svelte";

  let sections = [
    {
      skills: "",
      context: "",
      action: "",
      results: "",
    },
  ];

  function addSection() {
    sections = [
      ...sections,
      { skills: "", context: "", action: "", results: "" },
    ];
  }

  function removeSection(indexToRemove) {
    sections = sections.filter((_, index) => index !== indexToRemove);
  }
</script>

<div class="mt-16">
  <h2 class="text-2xl font-medium mb-12">
    How you’ll be assessed questionnaire
  </h2>
  <section class="flex flex-row gap-32 w-full items-start">
    <div class="flex-1 flex flex-col gap-14">
      {#each sections as section, index (index)}
        <div class="flex flex-col gap-8 rounded-xl relative">
          <div class="flex items-center my-8-4 justify-between">
            <p class="text-lg font-medium">
              Selection Criterion {index + 1}
            </p>

            <button
              class="hover:bg-red-200 hover:text-red-500 border rounded-full w-6 h-6 flex items-center justify-center"
              on:click="{() => removeSection(index)}">
              <i class="material-symbols-rounded !text-lg">close</i>
            </button>
          </div>
          <Textarea
            bind:value="{section.skills}"
            label="Skills and Abilities/Underpinning knowledge/Relevant work experience"
            placeholder="Describe your skills, knowledge, and experience." />
          <Textarea
            bind:value="{section.context}"
            label="Context"
            placeholder="Describe the situation." />
          <Textarea
            bind:value="{section.action}"
            label="Action"
            placeholder="Explain your actions. What were your actions? What did you do?" />
          <Textarea
            bind:value="{section.results}"
            label="Results"
            placeholder="Detail the result of the actions which you took." />
        </div>
      {/each}

      <div class="-mt-8">
        <div class="text-right">
          <button
            class="hover:bg-blue-100 rounded-full text-brand-primary px-4 py-2 text-sm"
            on:click="{addSection}">
            Add Another +
          </button>
        </div>

        <div class="mt-14 text-right">
          <Button>Submit Questionnaire</Button>
        </div>
      </div>
    </div>

    <div class="flex-1 flex flex-col gap-8 w-full rounded-xl sticky top-0">
      <div class="flex-1">
        <p class="text-lg font-medium mb-2">How To Answer Selection Criteria</p>
        <p class="text-gray-500 text-sm">
          Selection Criteria or 'work-related requirements' are a very important
          part of the application process. This is where you need to give more
          information than is in your resume, and clear examples. Clear and
          concise answers will significantly enhance your chances of being
          invited to an interview.
        </p>
        <p class="text-gray-500 text-sm">
          Selection Criteria responses need to demonstrate your:
        </p>
      </div>

      <div class="flex items-start flex-col gap-8 w-full">
        <div>
          <p class="text-md font-medium mb-2">Skills and Abilities:</p>
          <p class="text-gray-500 text-sm">
            Candidates who can demonstrate how their skills and abilities will
            benefit the prospective employer will have a better chance of being
            invited to an interview, than those that just list their skills and
            abilities.
          </p>
        </div>

        <div>
          <p class="text-md font-medium mb-2">Underpinning Knowledge:</p>
          <p class="text-gray-500 text-sm">
            Degrees, coursework, and seminars that are relevant should be
            included. Relevant knowledge gained through experience should also
            be detailed.
          </p>
        </div>

        <div>
          <p class="text-md font-medium mb-2">Relevant Work Experience:</p>
          <p class="text-gray-500 text-sm">
            Include projects or special assignments that you were part of that
            relate to the position you are applying for, including that gained
            through hobbies or volunteering.
          </p>
        </div>

        <div>
          <p class="text-md font-medium mb-2">The CAR Method:</p>
          <p class="text-gray-500 text-sm">
            The next step is to provide an example. The most effective way to
            answer Selection Criteria is by using the CAR method:
          </p>
        </div>

        <ul class="list-disc list-inside text-gray-500 text-sm pl-8">
          <li><strong>Context</strong> - Describe the situation.</li>
          <li>
            <strong>Action</strong> - Explain your actions. What were your actions?
            What did you do?
          </li>
          <li>
            <strong>Results</strong> - Detail the result of the actions you took.
          </li>
        </ul>

        <p class="text-gray-500 text-sm">
          This method is effective because it transforms your response from an
          arbitrary claim into a positive example of your experience. The CAR
          method provides a framework to show your abilities.
        </p>
      </div>
    </div>
  </section>
</div>
