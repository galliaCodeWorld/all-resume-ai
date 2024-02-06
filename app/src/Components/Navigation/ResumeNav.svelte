<script>
  export let sectionName = "";
  import { active } from "tinro";
  import { meta, router, Route } from "tinro";
</script>

<nav class="w-full p-4 sticky top-0 border-b bg-white z-[1]">
  <ul class="flex justify-between">
    <li>
      <a
        class:active="{sectionName.match('contact')}"
        href="?section=contact"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Contact
      </a>
    </li>
    <li>
      <a
        class:active="{sectionName.match('experience')}"
        href="?section=experience"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Experience
      </a>
    </li>

    <li>
      <a
        class:active="{sectionName.match('projects')}"
        href="?section=projects"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Projects
      </a>
    </li>

    <li>
      <a
        class:active="{sectionName.match('education')}"
        href="?section=education"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Education
      </a>
    </li>

    <li>
      <a
        class:active="{sectionName.match('course-work')}"
        href="?section=course-work"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Course Work
      </a>
    </li>

    <li>
      <a
        class:active="{sectionName.match('skills')}"
        href="?section=skills"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Skills
      </a>
    </li>

    <li>
      <a
        class:active="{sectionName.match('summary')}"
        href="?section=summary"
        class="resume-nav uppercase text-xs block font-semibold p-2 px-4 rounded-full">
        Summary
      </a>
    </li>
  </ul>
</nav>

<style type="postcss">
  .resume-nav.active {
    @apply text-blue-600;
  }
</style>
