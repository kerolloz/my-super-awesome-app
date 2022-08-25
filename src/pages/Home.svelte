<script>
  import ArticlesViewer from "../lib/ArticlesViewer.svelte";
  import { userStore } from "../auth";
</script>

<div class="flex flex-col items-center h-full">
  <div class="w-lg my-3">
    <div>
      <h1 class="text-lg text-center text-gray-900">
        {#if $userStore}
          Logged in as the super awesome "{$userStore.name}".
        {:else}
          Enjoy reading our super awesome articles.
        {/if}
      </h1>
    </div>
  </div>

  <div class="mx-auto my-auto">
    <ArticlesViewer />
  </div>
</div>
