<script>
  import Article from "./Article.svelte";
  import api from "../services/api";

  const articles = api.articles.getAll();
</script>

<div class="flex flex-col justify-center">
  <div class="md:mx-auto md:max-w-lg mx-2">
    {#await articles}
      <div>Loading...</div>
    {:then articles}
      {#each articles as article}
        <Article {article} />
      {/each}
      {#if articles.length === 0}
        <div>No articles yet</div>
      {/if}
    {:catch error}
      <p class="text-red-600 text-xl text-center">
        Something went wrong.
        <br /> Couldn't fetch articles!<br />
        <span class="text-gray-500 text-sm">{error.message}</span>
      </p>
    {/await}
  </div>
</div>
