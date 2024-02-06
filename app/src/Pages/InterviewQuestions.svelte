<script>
  import htmlToPDF from "html2pdf.js";
  import Button from "../Components/Form/Button.svelte";
  import Textarea from "../Components/Form/Textarea.svelte";
  import TextButton from "../Components/Form/TextButton.svelte";
  import { generateTextFromPrompt } from "../Firebase/functions";
  import Input from "../Components/Form/Input.svelte";

  let node;
  let isLoading = false;
  let position = null;
  let interviewQuestions = null;
  let inverviewQuestionsList = [];

  const generateQuestion = async () => {
    isLoading = true;
    let prompt = `${inverviewQuestionsList
      .map(({ question }) => question)
      .join(
        "\n"
      )}\nGenerate only one important inteview question for ${position} position. Do note use any lables like question:<question>. Just plain text.`;

    console.log(prompt);

    const response = await generateTextFromPrompt({
      prompt,
      temprature: 0.5,
      maxTokens: 200,
    });
    isLoading = false;

    return (inverviewQuestionsList = [
      ...inverviewQuestionsList,
      { question: response.data, answer: null },
    ]);
  };

  const deleteQuestion = (idx) => () =>
    (inverviewQuestionsList = inverviewQuestionsList.filter(
      (_, _idx) => idx !== _idx
    ));
</script>

{#if !interviewQuestions}
  <div class="p-16 rounded-xl max-w-4xl text-center border m-auto mt-16">
    <div class="px-16">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">
        Generate Interview Questions.
      </h2>

      <p class="text-gray-600">
        Please enter details to start generating curated and high value
        questions for your next job interview.
      </p>
    </div>
    <div class="mt-16 flex items-center gap-4 max-w-md m-auto">
      <div class="flex-1 text-left">
        <Input
          label="Position / Role"
          bind:value="{position}"
          placeholder="Lead Developer" />
      </div>

      <div class="mt-6">
        <Button on:click="{generateQuestion}" disabled="{isLoading}"
          >{isLoading ? "Please wait..." : "Get Started"}</Button>
      </div>
    </div>

    <!-- LIST -->

    {#if inverviewQuestionsList.length}
      <hr class="my-16" />

      <div class="text-left">
        <div bind:this="{node}" class="bg-white whitespace-pre-line">
          <h1 class="text-lg font-semibold mb-6">
            Interview Questions for {position}
          </h1>

          <ul class="flex flex-col gap-8">
            {#each inverviewQuestionsList as { question, answer }, idx}
              <li>
                <div class="relative">
                  <Textarea
                    label="{question}"
                    placeholder="Please enter your answer here..." />

                  <button
                    on:click="{deleteQuestion(idx)}"
                    class="text-xs font-medium absolute -top-2 right-0"
                    ><i
                      class="material-symbols-rounded text-red-500 !text-base bg-red-100 px-1 rounded-full"
                      >close</i
                    ></button>
                </div>

                <div class="text-right mt-1">
                  <button class="text-xs font-medium text-blue-600"
                    >Answer with AI</button>
                </div>
              </li>
            {/each}
          </ul>

          <div class="text-right mt-16">
            <Button on:click="{generateQuestion}">
              {isLoading ? "Please wait..." : "Get a new question"}
            </Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style type="postcss">
  .interview-list-node ul {
    @apply flex flex-col gap-8 list-disc pl-12;
  }
</style>
