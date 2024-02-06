<script>
  import { userInput } from "../../Store";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";

  import Textarea from "../Form/Textarea.svelte";

  import AiGenrateButton from "../AIGenrateButton.svelte";
  import TextButton from "../Form/TextButton.svelte";

  let summary = "";

  $: summary, console.log(summary);
</script>

<section class="flex flex-col gap-8 w-full">
  <div class="flex gap-4">
    <i class="material-symbols-rounded">hotel_class</i>
    <div class="flex-1">
      <p class="text-lg font-medium">Professional Expertise</p>
      <p class="text-gray-400 text-sm">
        List down your key professional expertise
      </p>
    </div>
  </div>

  <div>
    <ul class="flex flex-col gap-4 text-sm">
      <li>
        <strong>Industry Experience & Knowledge:</strong> Acquired and developed
        in-depth knowledge and extensive experience within WHS management, including
        WHS Management System & Auditing, WHS Risk Management, WHS Training, Management
        Reporting, and Analytical & Problem Solving.
      </li>
      <li>
        <strong>Communication, Liaison & Team Engagement:</strong> Developed first-rate
        interpersonal, written, and verbal communication skills; highly capable of
        building rapport with people from diverse cultural backgrounds and liaising
        effectively with decision makers at all levels to ensure smooth and safe
        operations of tasks.
      </li>
      <li>
        <strong> Analytical & Problem-Solving Skills:</strong> Recognised as an analytical
        and critical thinker; approaches all issues and concerns in a calm, friendly
        and positive manner. Adept in conflict resolution, leveraging communication
        and negotiation skills, along with creativity and outside-the-box thinking
        to innovate effective and sustainable strategies and approaches.
      </li>
      <li>
        Regulatory & Compliance Expertise: Maintained a solid track record of
        ensuring compliance with a range of organisational regulations,
        standards, and policies, including AS/NZS 4801.
      </li>
      <li>
        Safety Focused: Committed to establish a strong and resilient safety
        culture, instilling a positive safety culture within the organisation.
      </li>
      <li>
        Organisational & Time Management: Offering outstanding task management
        skills, with the ability to effectively manage multiple priorities and
        respond quickly to organisational needs in a timely manner.
      </li>
      <li>
        Continuous Professional Development: Strives for excellence; works with
        utmost pride and continuously looks for ways to improve and develop
        personal knowledge, as evident in my various certifications and
        licenses.
      </li>
      <li>
        Professionalism & Integrity: Genuine, approachable and professional;
        exhibited commitment to ensuring compliance with organisational policies
        and guidelines, and maintaining confidentiality.
      </li>
      <li>
        Aptitude for Systems & Processes: Computer savvy; proficient with a
        range of computer programs and systems, with the ability to quickly
        learn new technology at a swift and effective rate.
      </li>
    </ul>
  </div>

  <!--  -->
</section>
