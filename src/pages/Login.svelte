<script>
  import { createForm } from "svelte-forms-lib";
  import { Link } from "svelte-routing";
  import { tokenStore, saveToken, saveUser } from "../auth";
  import Error from "../lib/Error.svelte";
  import FormInput from "../lib/FormInput.svelte";
  import { userLoginSchema } from "../schemas/user.schema";
  import api from "../services/api";
  import { handlerProxy } from "../services/handlerProxy";
  import { navigate } from "svelte-routing";
  import FormError from "../lib/FormError.svelte";

  let responseError = "";

  const { form, errors, handleChange, handleSubmit, isValid } = createForm({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: (values) => {
      api.users
        .login(values)
        .then((response) => {
          const { token, user } = response.data;
          if (response.status === 200) {
            console.log("OK response", response.data, response.status);
            saveToken(token);
            saveUser(user);
            navigate("/"); // go to home page
          } else {
            responseError = response.data.message;
          }
        })
        .catch((error) => {
          responseError = error.response.data.message;
        });
    },
  });
  const changeProxy = handlerProxy(handleChange);

  $: if ($tokenStore) {
    // if user is logged in move to home page
    window.location.href = "/";
  }
</script>

<div class="flex h-full">
  <div class="mx-auto my-auto">
    <!-- login form   -->
    <form
      on:submit|preventDefault={handleSubmit}
      class="border-lg bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <FormInput
          id="email"
          placeholder="super-awesome@mail.com"
          type="email"
          name="email"
          label="Email"
          bind:value={$form.email}
          on:input={changeProxy}
        />
        {#if $errors.email}
          <Error>{$errors.email}</Error>
        {/if}
      </div>
      <div class="mb-6">
        <FormInput
          id="password"
          placeholder="*************"
          type="password"
          name="password"
          label="Password"
          bind:value={$form.password}
          on:input={changeProxy}
        />
        {#if $errors.password}
          <Error>{$errors.password}</Error>
        {/if}
      </div>
      <div class="flex items-center justify-between my-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={!$isValid}
        >
          Login
        </button>
      </div>
      <!-- error red rectangle -->
      {#if responseError.length}
        <FormError {responseError} />
      {:else}
        <div class="flex flex-col">
          <span
            class="inline-block align-baseline font-bold text-center text-sm text-gray-700"
          >
            Don't have an account?<br />
            <Link class="text-blue-500 hover:text-blue-700 " to="signup"
              >Signup</Link
            >
          </span>
        </div>
      {/if}
    </form>
  </div>
</div>
