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

  !$router.query.section && router.location.query.set("section", "contact");
</script>

<div class="grid grid-cols-2 bg-white shadow-2xl border">
  <div class="flex flex-col justify-start-start h-screen">
    <div>
      <ResumeNav />
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
