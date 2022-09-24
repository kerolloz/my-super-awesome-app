<script lang="ts">
  import { createForm } from "svelte-forms-lib";
  import { Link } from "svelte-routing";
  import { tokenStore } from "../auth";
  import Error from "../lib/Error.svelte";
  import FormErrorResponse from "../lib/FormErrorResponse.svelte";
  import FormInput from "../lib/FormInput.svelte";
  import { userSignupSchema } from "../schemas/user.schema";
  import api from "../services/api";
  import { handlerProxy } from "../services/handlerProxy";

  let errorResponse = null;

  const { form, errors, handleChange, handleSubmit, isValid } = createForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: userSignupSchema,
    onSubmit: (values) => {
      // clear errors
      errorResponse = null;

      api.users
        .signup(values)
        .then(console.log)
        .catch((err) => {
          const response = err.response.data;
          if (api.errors.isErrorResponse(response)) {
            errorResponse = response;
          } else {
            errorResponse = response.message;
          }
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
    <form
      on:submit|preventDefault={handleSubmit}
      class="border-lg bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <FormInput
          id="name"
          placeholder="You super awesome name"
          type="text"
          label="Name"
          name="name"
          bind:value={$form.name}
          on:input={changeProxy}
        />
        {#if $errors.name}
          <Error>{$errors.name}</Error>
        {/if}
      </div>
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
          minLength="8"
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
          Signup
        </button>
      </div>
      {#if errorResponse}
        <FormErrorResponse {errorResponse} />
      {:else}
        <div class="flex flex-col">
          <span
            class="inline-block align-baseline font-bold text-center text-sm text-gray-700"
          >
            Already have an account?<br />
            <Link class="text-blue-500 hover:text-blue-700 " to="login"
              >Login</Link
            >
          </span>
        </div>
      {/if}
    </form>
  </div>
</div>
