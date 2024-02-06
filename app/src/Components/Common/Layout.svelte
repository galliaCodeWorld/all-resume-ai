<script>
  export let title = "";
  import Header from "../Header.svelte";
  import Sidebar from "../Navigation/Sidebar.svelte";
</script>

<div class="flex items-start">
  <Sidebar />
  <main
    class="flex-1 shadow-lg shadow-slate-200 relative min-h-[100vh] p-14 rounded-tl-2xl rounded-bl-2xl">
    <Header title="{title}" />
    <div class="py-8">
      <slot />
    </div>
  </main>
</div>
