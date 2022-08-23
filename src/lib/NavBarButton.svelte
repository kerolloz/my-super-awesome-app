<script>
  import { Link } from "svelte-routing";

  export let buttonName, buttonLink;
</script>

<Link to={buttonLink}>
  <div class="flex bg-blue-600 p-2 rounded-md hover:bg-blue-400">
    {buttonName}
  </div>
</Link>
