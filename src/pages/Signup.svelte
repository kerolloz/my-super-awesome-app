<script>
  import FormInput from "../lib/FormInput.svelte";
  import { Link } from "svelte-routing";
</script>

<div class="flex h-full">
  <div class="mx-auto my-auto">
    <form class="border-lg bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <FormInput
          id="name"
          placeholder="You super awesome name"
          type="text"
          label="Name"
        />
      </div>
      <div class="mb-4">
        <FormInput
          id="email"
          placeholder="super-awesome@mail.com"
          type="email"
          label="Email"
        />
      </div>
      <div class="mb-6">
        <FormInput
          id="password"
          placeholder="*************"
          type="password"
          label="Password"
        />
      </div>
      <div class="flex items-center justify-between my-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Signup
        </button>
      </div>

      <div class="flex flex-col">
        <span
          class="inline-block align-baseline font-bold text-center text-sm text-gray-700"
        >
          Already have an account?<br />
          <Link class="text-blue-500 hover:text-blue-700 " to="/login"
            >Login</Link
          >
        </span>
      </div>
    </form>
  </div>
</div>
