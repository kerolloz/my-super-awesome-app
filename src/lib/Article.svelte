<script lang="ts">
  export let article: import("src/services/api").IArticle;
  let { title, content, user, createdAt } = article;
</script>

<div class="flex flex-col">
  <div
    class="m-3 p-3 border border-blue-400 hover:border-blue-600 shadow-sm hover:shadow-lg rounded-lg"
  >
    <h2 class="text-lg mb-2">{title}</h2>
    <p>{content}</p>
    <div class="my-2 flex justify-between">
      <span class="capitalize text-sm text-gray-600">{user.name}</span>
      <span class="text-sm text-gray-500">{createdAt}</span>
    </div>
  </div>
</div>
