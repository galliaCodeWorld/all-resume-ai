<script>
  import { resume } from "../../Store";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";
</script>

<section class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded mt-0.5">badge</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Basic Information</p>
      <p class="text-gray-400 text-sm">Add your work experience.</p>
    </div>
  </div>

  <div class="flex items-start flex-col gap-4 w-full">
    <Input bind:value="{$resume.contact.fullName}" label="Full Name" />
    <Input bind:value="{$resume.title}" label="Title" />
  </div>

  <div class="flex items-start gap-4 w-full">
    <Input bind:value="{$resume.phone}" label="Phone Number" type="phone" />
    <Input bind:value="{$resume.email}" label="Email Address" type="email" />
  </div>

  <div>
    <Input bind:value="{$resume.address}" label="Address" type="address" />
  </div>

  <div class="flex items-start gap-4 w-full">
    <Input
      bind:value="{$resume.linkedInUrl}"
      label="LinkedIn URL"
      placeholder="Enter your LinkedIn profile URL" />

    <Input
      bind:value="{$resume.websiteLink}"
      label="Personal Website"
      placeholder="Enter your Website link" />
  </div>
</section>
