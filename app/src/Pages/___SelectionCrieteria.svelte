<script>
  import { writable } from "svelte/store";
  import Button from "../Components/Form/Button.svelte";
  import Input from "../Components/Form/Input.svelte";
  import Select from "../Components/Form/Select.svelte";
  import TextButton from "../Components/Form/TextButton.svelte";
  import Textarea from "../Components/Form/Textarea.svelte";

  let form = writable({});
</script>

<div class="max-w-5xl m-auto py-16">
  <section class="flex flex-col gap-8 w-full border p-16 rounded-xl mb-16">
    <div class="flex-1">
      <p class="text-lg font-medium">How To Answer Selection Criteria</p>
      <p class="text-gray-500 text-sm">
        Selection Criteria or 'work-related requirements' are a very important
        part of the application process. This is where you need to give more
        information than is in your resume, and clear examples. Clear and
        concise answers will significantly enhance your chances of being invited
        to an interview.
      </p>
      <p class="text-gray-500 text-sm">
        Selection Criteria responses need to demonstrate your:
      </p>
    </div>

    <div class="flex items-start flex-col gap-4 w-full">
      <p class="text-md font-medium">Skills and Abilities:</p>
      <p class="text-gray-500 text-sm">
        Candidates who can demonstrate how their skills and abilities will
        benefit the prospective employer will have a better chance of being
        invited to an interview, than those that just list their skills and
        abilities.
      </p>

      <p class="text-md font-medium">Underpinning Knowledge:</p>
      <p class="text-gray-500 text-sm">
        Degrees, coursework, and seminars that are relevant should be included.
        Relevant knowledge gained through experience should also be detailed.
      </p>

      <p class="text-md font-medium">Relevant Work Experience:</p>
      <p class="text-gray-500 text-sm">
        Include projects or special assignments that you were part of that
        relate to the position you are applying for, including that gained
        through hobbies or volunteering.
      </p>

      <p class="text-md font-medium">The CAR Method:</p>
      <p class="text-gray-500 text-sm">
        The next step is to provide an example. The most effective way to answer
        Selection Criteria is by using the CAR method:
      </p>
      <ul class="list-disc list-inside text-gray-500 text-sm">
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
  </section>

  <!-- Selection Criteria Section -->
  <section class="flex flex-col gap-8 w-full p-16 rounded-xl border">
    <div class="flex-1">
      <p class="text-lg font-medium">Selection Criteria</p>
      <p class="text-gray-500 text-sm">
        Copy it exactly as presented in the advertisement.
      </p>
    </div>

    <div class="flex items-start flex-col gap-4 w-full">
      <Input
        bind:value="{$form.selectionCriterion}"
        label="SELECTION CRITERION"
        placeholder="Enter the selection criterion exactly as presented in the advertisement." />

      <Textarea
        rows="{4}"
        bind:value="{$form.skillsAndAbilities}"
        label="Skills and Abilities/Underpinning Knowledge/Relevant Work Experience"
        placeholder="List any relevant skills and abilities you have that match the criterion." />

      <p class="text-md font-medium mt-4">
        Give an example using the STAR method. Only ONE clear example is
        required.
      </p>

      <Textarea
        rows="{4}"
        bind:value="{$form.context}"
        label="Context"
        placeholder="Describe the situation you or your employer was in: what happened, what needed to be done." />

      <Textarea
        rows="{4}"
        bind:value="{$form.action}"
        label="Action"
        placeholder="Describe the action you took. Focus on what you did." />

      <Textarea
        rows="{4}"
        bind:value="{$form.result}"
        label="Result"
        placeholder="Describe the outcome. What was accomplished? What did you learn? Any positive feedback?" />
    </div>
  </section>

  <!-- Submit Button -->
  <div class="mt-6 text-right">
    <Button>Submit Information</Button>
  </div>
</div>
