<script lang="ts">
  import api from "../services/api";

  export let errorResponse: import("../services/api").ErrorResponse;
  const errors = api.errors.parseErrors(errorResponse) ?? [];
</script>

<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 text-sm">
  <p class="font-bold">{errorResponse.message}</p>
  <ul>
    {#each errors as error}
      <li>{error}</li>
    {/each}
  </ul>
</div>
