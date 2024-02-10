<script>
  import { meta, router, Route } from "tinro";

  import ResumeNav from "../Components/Navigation/ResumeNav.svelte";
  import Contact from "../Components/ResumeSections/Contact.svelte";
  import Projects from "../Components/ResumeSections/Projects.svelte";
  import Experience from "../Components/ResumeSections/Experience.svelte";
  import Education from "../Components/ResumeSections/Education.svelte";
  import CourseWork from "../Components/ResumeSections/CourseWork.svelte";
  import Skills from "../Components/ResumeSections/Skills.svelte";
  import ProfileSummary from "../Components/ResumeSections/ProfileSummary.svelte";
  import ResumePreview from "../Components/ResumeSections/ResumePreview.svelte";
  import ResumeBuilderFooter from "../Components/Navigation/ResumeBuilderFooter.svelte";
  import ProfessionalExpertise from "../Components/ResumeSections/ProfessionalExpertise.svelte";
  import Popup from '../Components/TemplateSelectPopup.svelte';

  !$router.query.section && router.location.query.set("section", "contact");

  let showPopup = false;
  function togglePopup() {
    showPopup = !showPopup;
    console.log("togglePopup() -> showPopup:", showPopup);
  }
</script>

<div class="grid grid-cols-2 bg-white shadow-2xl border">
  <div class="flex flex-col justify-start-start h-screen h-screen-x-3">
    <div style="position: relative;">
        <ResumeNav />
        <button on:click={togglePopup} class="show-template-btn">Select Templates</button>
    </div>
    <ul class="overflow-auto flex-1 p-16 flex flex-col gap-14">
      <li class="border-b">
        <Contact />
      </li>

      <li>
        <hr />
      </li>

      <li>
        <ProfileSummary />
      </li>

      <li>
        <hr />
      </li>

      <li>
        <ProfessionalExpertise />
      </li>

      <li>
        <hr />
      </li>

      <li>
        <Experience />
      </li>

      <li>
        <hr />
      </li>

      <li>
        <Projects />
      </li>

      <li>
        <hr />
      </li>
      <li>
        <Education />
      </li>

      <li>
        <hr />
      </li>
      <li>
        <CourseWork />
      </li>

      <li>
        <hr />
      </li>
      <li>
        <Skills />
      </li>
    </ul>

    <div class="text-right">
      <ResumeBuilderFooter />
    </div>
  </div>

  <div class="p-16 bg-gray-100 sticky top-0">
    <ResumePreview />
  </div>

</div>


{#if showPopup}
    <Popup on:close={() => (showPopup = false)} />
{/if}
<style type="postcss">
  .h-screen-x-3 {
    height: 300vh;
  }

  .show-template-btn {
    position: absolute;
    right: 64px;
    top: 88px;
    border: 1px solid gray;
    padding: 5px 21px;
    font-size: 20px;
  }
  .show-template-btn:hover {
    background-color: rgb(235, 235, 235);
  }
</style>