<script>
  import { fly } from "svelte/transition";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";

  import Header from "../Components/Header.svelte";
  import Layout from "../Components/Common/Layout.svelte";
  import ResumeCard from "../Components/ResumeCard.svelte";
  import CoverLetter from "../Components/CoverLetter.svelte";
  import PageTitle from "../Components/Common/PageTitle.svelte";
  import ResignationLetter from "../Components/ResignationLetter.svelte";
  import LinkedInQuestionnair from "./LinkedInQuestionnair.svelte";
  import SelectionCrieteria from "./SelectionCrieteria.svelte";
  import ExpressionOfInterestLetter from "./ExpressionOfInterestLetter.svelte";
  import InterviewQuestions from "./InterviewQuestions.svelte";

</script>

<PageTitle value="Home" />
<Layout title="Dashboard">
  <section class="max-w-7xl m-auto">
    <Tabs>
      <TabList>
        <Tab>Resume</Tab>
        <Tab>Cover Letters</Tab>
        <Tab>Resignation Letters</Tab>
        <Tab>Expression of Interest Letter</Tab>
        <Tab>Selection Criteria</Tab>
        <Tab>LinkedIn Profile Builder</Tab>
        <Tab>Interview Questions</Tab>
      </TabList>
      <TabPanel>
        <section in:fly="{{ duration: 100, x: 24 }}">
          <div class="grid grid-cols-4 gap-4">
            <ResumeCard />
            <a
              href="/resume/new"
              class="border 0 rounded-lg p-4 group transition-all hover:shadow-xl flex items-center justify-center text-center hover:ring-2 ring-brand-primary">
              <div>
                <i
                  class="material-symbols-rounded thin !text-6xl group-hover:rotate-90 transition-transform"
                  >add</i>
                <p class="font-semibold mb-1">Create a new Resume</p>
                <p class="text-gray-500 text-sm">
                  Create a highly customize Resume with the help of AI
                </p>
              </div>
            </a>
          </div>
        </section>
      </TabPanel>
      <TabPanel>
        <CoverLetter />
      </TabPanel>
      <TabPanel>
        <ResignationLetter />
      </TabPanel>
      <TabPanel>
        <ExpressionOfInterestLetter />
      </TabPanel>

      <TabPanel>
        <SelectionCrieteria />
      </TabPanel>
      <TabPanel>
        <div class="max-w-5xl m-auto p-14 border rounded-xl">
          <LinkedInQuestionnair />
        </div>
      </TabPanel>

      <TabPanel>
        <InterviewQuestions />
      </TabPanel>
    </Tabs>
  </section>
</Layout>

<style type="postcss">
  :global(.svelte-tabs) {
    @apply border-b-transparent;
  }
  :global(.svelte-tabs__tab-list) {
    @apply !border-none;
    @apply block;
    @apply inline-flex gap-4 !py-4;
  }
  :global(.svelte-tabs li.svelte-tabs__tab) {
    @apply py-4 block !outline-none;
    @apply font-medium text-sm text-gray-600 transition-all rounded p-1 px-2 capitalize;
    @apply !border-none;
  }
  :global(.svelte-tabs li.svelte-tabs__selected) {
    @apply bg-brand-primary text-white;
  }
  :global(.svelte-tabs div.svelte-tabs__tab-panel) {
    @apply mt-8;
  }
</style>
