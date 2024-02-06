<script>
  import { writable } from "svelte/store";
  import Input from "../Components/Form/Input.svelte";
  import Textarea from "../Components/Form/Textarea.svelte";
  import Button from "../Components/Form/Button.svelte";
  import TextButton from "../Components/Form/TextButton.svelte";
  import Select from "../Components/Form/Select.svelte";

  let form = writable({
    company1: {},
  });
</script>

<!-- Profile & Contact Information Section -->
<section class="flex flex-col gap-8 w-full mb-16">
  <div class="flex gap-4">
    <div class="flex-1">
      <p class="text-xl font-medium">Profile & Contact Information</p>
      <p class="text-gray-400 text-sm">
        We don’t recommend adding your address to your public profile.
      </p>
    </div>
  </div>

  <div class="flex items-start flex-col gap-4 w-full">
    <div class="flex flex-col gap-4 w-full">
      <Input bind:value="{$form.name}" label="Name" />
      <Input bind:value="{$form.industry}" label="Industry" />
    </div>

    <div class="flex flex-row gap-4 w-full">
      <Input bind:value="{$form.email}" label="Email" type="email" />
      <Input bind:value="{$form.phone}" label="Phone" type="phone" />
    </div>
    <div class="flex flex-row gap-4 w-full">
      <Input bind:value="{$form.country}" label="Country" />
      <Input bind:value="{$form.postCode}" label="Post Code" />
    </div>

    <div class="grid grid-cols-2 flex-row gap-4 w-full flex-wrap">
      <Input bind:value="{$form.im}" label="IM" />
      <Input bind:value="{$form.twitter}" label="Twitter" />
      <Input bind:value="{$form.weChat}" label="WeChat" />

      <Input bind:value="{$form.website}" label="Website" />
    </div>
  </div>
</section>

<!-- Goal & Strategies Section -->
<section class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <div class="flex-1">
      <p class="text-lg font-medium">Goal & Strategies</p>
      <p class="text-gray-400 text-sm">
        Please answer the following questions so we can tailor your profile
        based on your preference or objectives.
      </p>
    </div>
  </div>

  <div class="flex flex-col gap-8 w-full">
    <Textarea
      rows="{5}"
      bind:value="{form.specificJob}"
      label="WHAT SPECIFIC JOB OR FIELD, IF KNOWN, ARE YOU SEEKING?" />

    <Textarea
      rows="{5}"
      bind:value="{form.jobAdvertisements}"
      label="WHAT JOB ADVERTISEMENTS ARE YOU INTERESTED IN?"
      placeholder="This is the most important part for the preparation of your LinkedIn Profile. Copy and paste the links or web addresses to the sites, jobs or positions you’re applying for." />

    <Textarea
      rows="{5}"
      bind:value="{form.strongSkills}"
      label="WHAT ARE YOUR STRONGEST WORK-RELATED SKILLS?"
      placeholder="Expertise, strengths and specialisations, list what your current employer or teacher would say you are best at. When you’re working with a group, what portion of a project do you typically complete? What are your skillsets, specialties, or core strengths? What software programs do you use? What is your industry? Choose 10 to 20 of the most relevant skills that apply to your industry and the types of roles you are pursuing. For example, if you’re working in media, include the skills that’ll help you grow your career, like writing, editing, blogging, etc." />
  </div>
</section>

<hr />
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

<!-- Education, Training & Qualifications Section -->
<section class="flex flex-col gap-8 w-full mt-16">
  <div class="flex-1">
    <p class="text-xl font-medium mb-2">Education, Training & Qualifications</p>
    <p class="text-gray-400 text-sm">
      Fill in your Educational Background. Be sure to list schools in the
      following order: University, Trade or Technical School, High School, etc.
    </p>
  </div>

  <!-- Repeat this block for each school/institution -->
  <div class="flex items-start flex-col gap-4 w-full">
    <p class="text-lg font-medium">School/Institution:</p>
    <div class="flex flex-row gap-4 w-full">
      <Input label="School/Institution Name" />
      <Input label="City and State" />
    </div>
    <Input label="Year Graduated" />
    <Input label="Degree Earned" />
    <Input label="Major or Area of Specialisation" />
  </div>
  <!-- End of block -->
</section>

<!-- Certifications Section -->
<section class="flex flex-col gap-8 w-full mt-12">
  <div class="flex-1">
    <p class="text-lg font-medium">Certifications</p>
    <p class="text-gray-400 text-sm">
      List any official accreditation such as Food Handler Certification,
      Realtor, Electrician, Journeyman, Commercial Driver’s License, Certified
      Rescuer, State Bar Admittance, any licences etc.
    </p>
  </div>

  <!-- Repeat this block for each certification -->
  <div class="flex items-start flex-col gap-4 w-full">
    <Input label="Name" />
    <Input label="Authority" />
  </div>
  <!-- End of block -->
</section>

<section class="flex flex-col gap-8 w-full mt-14">
  <div class="flex-1">
    <p class="text-lg font-medium">Experience</p>
    <p class="text-gray-400 text-sm">
      Start with your current or most recent employment and go backwards.
      Respond to each question for every position that you’ve held. If you have
      worked at more than 6 companies, please download this questionnaire then
      save it with a different name. Fill out only the EXPERIENCE SECTION and
      save it with a different file name. Please include numbers and figures
      that describe your experience to strengthen your LinkedIn Profile.
    </p>
  </div>

  <!-- Repeat this block for each company -->
  <div class="flex items-start flex-col gap-4 w-full">
    <p class="text-lg font-medium">Company:</p>
    <Input bind:value="{$form.company1.name}" label="Company Name" />
    <Input
      bind:value="{$form.company1.location}"
      label="Location (City & State Only)" />
    <Input bind:value="{$form.company1.jobTitle}" label="Job Title(s)" />
    <div class="flex items-start gap-4 w-full">
      <Input
        type="date"
        bind:value="{$form.company1.startDate}"
        label="Start Date" />
      <Input
        type="date"
        bind:value="{$form.company1.endDate}"
        label="End Date" />
    </div>
    <div class="mt-4 flex flex-col gap-4 w-full">
      <Textarea
        rows="{8}"
        bind:value="{$form.company1.keyResponsibilities}"
        label="Key Responsibility Facts"
        placeholder="Describe what you did in your job on a daily basis, please use bullet points." />

      <Textarea
        rows="{8}"
        bind:value="{$form.company1.accomplishments}"
        label="What accomplishments or achievements are you most proud of?"
        placeholder="Do not mention promotions, raises or bonuses received. Focus on how you helped the company." />
    </div>
  </div>

  <div class="text-right">
    <div class="text-brand-primary">Add Another +</div>
  </div>
  <!-- End of block -->
</section>

<section class="flex flex-col gap-8 w-full mt-16">
  <div class="flex-1">
    <p class="text-lg font-medium">Interests/Hobbies</p>
    <p class="text-gray-400 text-sm">
      We recommend only including interests that are somewhat related to the
      industry or job you are seeking.
    </p>
  </div>

  <div class="flex items-start flex-col gap-4 w-full">
    <Textarea
      rows="{8}"
      bind:value="{$form.interests}"
      label="Interests/Hobbies"
      placeholder="Enter your interests/hobbies related to the industry or job you are seeking." />
  </div>
</section>

<!-- Thank You Section -->
<div
  class="flex items-start flex-col gap-4 w-full mt-16 p-14 text-center border bg-slate-100 rounded-lg">
  <p class="text-lg block text-center uppercase w-full font-semibold">
    Thank You!
  </p>
  <p class="text-gray-400 text-sm">
    Thank you for taking the time to complete this questionnaire, it will be of
    great help in creating your profile.
  </p>
</div>

<!-- Submit Button -->
<div class="mt-14 text-right">
  <Button>Submit Information</Button>
</div>
