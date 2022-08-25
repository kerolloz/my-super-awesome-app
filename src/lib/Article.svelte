<script lang="ts">
  export let article: import("src/services/api").IArticle;
  let { title, content, user, createdAt, image } = article;
  const date = new Date(createdAt).toUTCString();
</script>

<div class="flex flex-col">
  <div
    class="m-3 p-3 border border-blue-400 hover:border-blue-600 shadow-sm hover:shadow-lg rounded-lg"
  >
    <h2 class="text-lg">{title}</h2>
    {#if image}
      <div class="w-full my-2">
        <img src={image} alt={title} class="md:max-w-sm max-w-screen mx-auto" />
      </div>
    {/if}

    <p>{content}</p>
    <div class="my-2 flex justify-between">
      <span class="capitalize text-sm text-gray-600">- {user.name}</span>
      <span class="mt-1 text-xs text-gray-500">{date}</span>
    </div>
  </div>
</div>
