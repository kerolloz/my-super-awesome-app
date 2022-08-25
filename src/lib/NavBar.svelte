<script>
  import { Link } from "svelte-routing";
  import { removeToken, removeUser, tokenStore } from "../auth";
  import NavBarButton from "./NavBarButton.svelte";

  const logout = () => {
    removeToken();
    removeUser();
    window.location.href = "/";
  };
</script>

<header class="sticky top-0 z-50">
  <div
    class="flex justify-between items-center bg-blue-500 text-white shadow-md py-2 px-6"
  >
    <div class="flex items-center mr-2">
      <div class="text-xl font-semibold ">
        <Link to="/">
          <h1 class="hover:text-slate-200">My Super Awesome App</h1>
        </Link>
      </div>
    </div>
    <div class="flex text-center gap-5">
      {#if $tokenStore}
        <NavBarButton buttonName="New Article" buttonLink="/write" />
        <button
          on:click={logout}
          class="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
          >Logout</button
        >
      {:else}
        <NavBarButton buttonName="Signup" buttonLink="signup" />
        <NavBarButton buttonName="Login" buttonLink="login" />
      {/if}
    </div>
  </div>
</header>
