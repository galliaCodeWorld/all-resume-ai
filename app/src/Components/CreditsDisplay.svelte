<script>
  import { user } from "../Store";
  import formatCredits from "../../utils/formatNumber";
</script>

<div class="px-8 text-right mt-2">
  <p
    class="m-0 leading-none text-sm font-medium {$user.credits > 0
      ? 'text-gray-800'
      : 'text-red-500'}">
    {#if $user.credits}
      {formatCredits($user.credits)}
      Available
    {:else}
      You're out of credits.
    {/if}
  </p>

  <a href="/billing" class="text-xs text-brand-primary underline"
    >Buy Credits →</a>
</div>

<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-brand-primary h-2 rounded-full" style="width: 45%"></div>
</div>
