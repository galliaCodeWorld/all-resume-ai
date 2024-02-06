<script>
  import { router } from "tinro";
  import { user } from "../Store";
  import Layout from "../Components/Common/Layout.svelte";
  import formatNumber from "../../utils/formatNumber";
  import Button from "../Components/Form/Button.svelte";

  import PaypalButtons from "../Components/PaypalButtons.svelte";

  let credits = 0;
  let creditBundle = 0;

  $: cost = credits / 100 + creditBundle / 100;

  const onBundleChange = () => (credits = 0);
  const onCreditsChange = () => (creditBundle = 0);
</script>

<Layout title="Billing">
  <section class="max-w-lg m-auto">
    <div class="rounded-lg mb-4 text-center">
      <p class="text-lg text-gray-700 font-normal">
        Your have <span class="font-semibold text-gray-700"
          >{formatNumber($user.credits)}</span> credits left.
      </p>
    </div>
    <div class="border rounded-xl p-10 pb-6 bg-white shadow-xl">
      <div>
        <h2 class="text-lg font-semibold mb-2">Buy More Credits</h2>
        <p class="text-sm text-gray-500">
          Every use of the app cost credits. Please buy credits to use the app.
        </p>
      </div>

      <div class="py-8 pb-0">
        <div>
          <label for="credits" class="text-sm font-medium"
            >Select from credit bundles</label>
          <select
            on:change="{onBundleChange}"
            bind:value="{creditBundle}"
            name="credits"
            class="text-sm border block w-full mt-2 p-4 py-3 rounded-lg border-gray-300">
            <option value="500">500 Credits ($5)</option>
            <option value="1500">1500 Credits ($15)</option>
            <option value="2500">2500 Credits ($25)</option>
            <option value="3500">3500 Credits ($35)</option>
            <option value="5500">5500 Credits ($55)</option>
          </select>
        </div>

        <div class="text-sm flex items-center justify-center my-0 -mb-1">
          <hr class="flex-1" />
          <p class="p-4">OR</p>
          <hr class="flex-1" />
        </div>

        <div>
          <label for="credits" class="text-sm font-medium"
            >Get custom credits</label>
          <input
            type="number"
            name="credits"
            step="100"
            on:input="{onCreditsChange}"
            bind:value="{credits}"
            placeholder="5312"
            class="text-sm border block py-3 border-gray-300 w-full mt-2 p-4 rounded-lg" />
        </div>

        <div class="flex items-center justify-between py-4 mt-8">
          <p class="text-xl">Total</p>
          <p class="text-xl">${cost}.00</p>
        </div>

        <div class="mt-8">
          <div class="{!cost ? ' opacity-40 pointer-events-none' : ''}">
            <PaypalButtons cartTotal="{cost}" />
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
