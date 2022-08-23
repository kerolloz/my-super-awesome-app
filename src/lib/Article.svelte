<script>
  export let article;
  let { title, content } = article;
</script>

<div class="flex flex-col">
  <div class="m-3 p-3 border border-emerald-400 rounded-lg">
    <h2 class="text-lg">{title}</h2>
    <p>{content}</p>
  </div>
</div>
