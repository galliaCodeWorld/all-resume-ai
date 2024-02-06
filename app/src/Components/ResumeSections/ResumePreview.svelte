<script>
  import htmlToPDF from "html2pdf.js";
  import { userInput } from "../../Store";
  import Input from "../Form/Input.svelte";
  import Button from "../Form/Button.svelte";
  import Select from "../Form/Select.svelte";
  import ResumeNav from "../Navigation/ResumeNav.svelte";
  import Textarea from "../Form/Textarea.svelte";
  import ResumeTemplate from "../ResumeTemplate.svelte";
  import TextButton from "../Form/TextButton.svelte";

  let node = null;

  const downloadFile = () =>
    htmlToPDF()
      .set({
        filename: "myresume.pdf",
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(node)
      .save();
</script>

<div>
  <!-- Download button -->
  <div bind:this="{node}">
    <ResumeTemplate />
  </div>
</div>
