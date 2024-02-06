<script>
  export let href = "";
  export let { name, createdAt } = {
    name: "My Resume",
    createdAt: new Date(),
  };
</script>

<a
  href="{href}"
  class=" transition-all bg-white rounded-lg overflow-hidden border-dashed border-2 border-gray-400 hover:ring-1 ring-gray-500 hover:shadow-xl group">
  <div class="h-64 flex gap-2 items-center justify-center p-4 relative">
    <div class="text-center">
      <i
        class="material-symbols-rounded thin !text-7xl text-gray-500 p-8 rounded-lg"
        >upload</i>
    </div>
  </div>

  <div class="p-4 flex items-start justify-between relative text-center">
    <p class="text-sm font-semibold text-center w-full">
      Upload your Existing Resume
    </p>
  </div>
</a>
