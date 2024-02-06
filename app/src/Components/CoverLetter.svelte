<script>
  import { generateTextFromPrompt } from "../Firebase/functions";
  import Button from "./Form/Button.svelte";
  import TextButton from "./Form/TextButton.svelte";
  import htmlToPDF from "html2pdf.js";

  let node;
  let isLoading = false;
  let prompt =
    "Write an extremely professional, presice yet succint cover later sample.";
  let coverLetterText = null;

  const generateCoverLetter = async () => {
    isLoading = true;
    const response = await generateTextFromPrompt({
      prompt,
      temprature: 0.5,
      maxTokens: 600,
    });

    isLoading = false;

    return (coverLetterText = response.data);
  };

  const downloadFile = () =>
    htmlToPDF()
      .set({
        filename: "mycoverletter.pdf",
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(node)
      .save();
</script>

{#if !coverLetterText}
  <div class="p-16 text-center border-2 rounded-xl">
    <div>
      <p class="text-xl text-gray-700">
        Generate a stunning Cover latter with AI in seconds!
      </p>
    </div>

    <div class="mt-8">
      <Button on:click="{generateCoverLetter}" disabled="{isLoading}"
        >{isLoading ? "Generating..." : "Genreate Now"}</Button>
    </div>
  </div>
{/if}

{#if coverLetterText}
  <div class="max-w-4xl p-4 pb-0 flex items-center justify-between m-auto mb-8">
    <p class="text-2xl text-gray-700">Your Cover Letter is Ready!</p>
    <TextButton on:click="{downloadFile}">Download</TextButton>
  </div>
  <div class="border max-w-4xl m-auto">
    <div
      bind:this="{node}"
      class="max-w-4xl m-auto p-14 bg-white whitespace-pre-line">
      {coverLetterText}
    </div>
  </div>
{/if}
