<script>
  import api from "../services/api";
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const verification = api.users.verify({ code });
</script>

<div class="flex flex-col justify-center">
  <div class="md:mx-auto md:max-w-lg mx-2">
    {#await verification}
      <span>Loading...</span>
    {:then verification}
      <p class="text-green-600 text-xl text-center">Congrats! 🎉</p>
      <p class="text-green-500 text-l text-center">
        {verification.data.message}
      </p>
    {:catch error}
      <p class="text-red-600 text-xl text-center">
        Couldn't fulfill your request!<br />
        <span class="text-gray-500 text-sm">{error.message}</span>
        <br />
        <span class="text-red-500 text-sm">{error.response.data.message}</span>
      </p>
    {/await}
  </div>
</div>
