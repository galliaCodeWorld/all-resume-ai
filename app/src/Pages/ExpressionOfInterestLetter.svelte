<script>
  import htmlToPDF from "html2pdf.js";
  import Button from "../Components/Form/Button.svelte";
  import Textarea from "../Components/Form/Textarea.svelte";
  import TextButton from "../Components/Form/TextButton.svelte";
  import { generateTextFromPrompt } from "../Firebase/functions";
  import Input from "../Components/Form/Input.svelte";

  let node;
  let isLoading = false;
  let prompt =
    "Write an extremely professional, presice yet succint expression of interest latter.";
  let expressionOfInterestLetter = null;

  const generateExpressionOfInterestLetter = async () => {
    isLoading = true;
    const response = await generateTextFromPrompt({
      prompt,
      temprature: 0.5,
      maxTokens: 600,
    });
    isLoading = false;

    return (expressionOfInterestLetter = response.data);
  };

  const downloadFile = () =>
    htmlToPDF()
      .set({
        filename: "my-eoi-letter.pdf",
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(node)
      .save();
</script>

{#if !expressionOfInterestLetter}
  <div class="p-16 text-center border-2 rounded-xl">
    <div>
      <p class="text-xl text-gray-700">
        Generate a stunning Expression of Interest letter with AI in seconds!
      </p>
    </div>

    <div class="mt-16 flex items-center gap-4 max-w-md m-auto">
      <div class="flex flex-col gap-4">
        <div class="flex-1 text-left flex gap-4">
          <Input label="Position / Role" placeholder="Lead Developer" />
          <Input label="Company " placeholder="Tesla" />
        </div>

        <div class="text-left">
          <Textarea
            label="Job Description"
            placeholder="Copy your job description here" />
        </div>
      </div>
    </div>

    <div class="mt-8">
      <Button
        on:click="{generateExpressionOfInterestLetter}"
        disabled="{isLoading}"
        >{isLoading ? "Generating..." : "Genreate Now"}</Button>
    </div>
  </div>
{/if}

{#if expressionOfInterestLetter}
  <div class="max-w-4xl p-4 pb-0 flex items-center justify-between mb-8">
    <p class="text-2xl text-gray-700">
      Your Expression Of Interest Letter is Ready!
    </p>
    <TextButton on:click="{downloadFile}">Download</TextButton>
  </div>
  <div class="border max-w-4xl m-auto">
    <div
      bind:this="{node}"
      class="max-w-4xl m-auto p-14 bg-white whitespace-pre-line">
      {expressionOfInterestLetter}
    </div>
  </div>
{/if}
