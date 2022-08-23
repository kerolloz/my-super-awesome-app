<script>
  import { Link } from "svelte-routing";
  import NavBarButton from "./NavBarButton.svelte";
</script>

<header class="sticky top-0 z-50">
  <div
    class="flex justify-between items-center bg-blue-500 text-white shadow-md py-2 px-6"
  >
    <div class="flex items-center">
      <div class="text-xl font-semibold ">
        <Link to="/">
          <h1 class="hover:text-slate-200">My Super Awesome App</h1>
        </Link>
      </div>
    </div>
    <div class="flex gap-5">
      <NavBarButton buttonName="Signup" buttonLink="/signup" />
      <NavBarButton buttonName="Login" buttonLink="/login" />
    </div>
  </div>
</header>
