<script>
  import { loginWithGoogle } from "../../Firebase/auth";
</script>

<div class="flex items-center justify-center h-full">
  <div
    class="text-center bg-white p-16 rounded-xl bg-opacity-50 backdrop-blur-sm">
    <img class="h-32 mb-8 mx-auto text-center" alt="logo" src="logo.svg" />

    <p class="text-gray-500 text-center">
      Please login to continue to the app.
    </p>

    <button
      class="p-4 mt-12 rounded-full bg-brand-primary px-8 text-white inline-block max-w-xs shadow-lg transition-all active:shadow-none"
      type="button"
      on:click="{loginWithGoogle}">
      Continue with Google ->
    </button>
  </div>
</div>
