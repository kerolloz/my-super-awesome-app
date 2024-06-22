<script lang="ts">
  import { createForm } from "svelte-forms-lib";
  import { Link } from "svelte-routing";
  import { tokenStore } from "../auth";
  import Error from "../lib/Error.svelte";
  import FormErrorResponse from "../lib/FormErrorResponse.svelte";
  import FormInput from "../lib/FormInput.svelte";
  import { userSignupSchema } from "../schemas/user.schema";
  import api, { type ErrorResponse } from "../services/api";
  import { handlerProxy } from "../services/handlerProxy";
  import FormButton from "../lib/FormButton.svelte";
  import { AxiosError } from "axios";

  let errorResponse: ErrorResponse | null = null;

  const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } =
    createForm({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: userSignupSchema,
      onSubmit: (values) => {
        // clear errors
        errorResponse = null;
        return api.users
          .signup(values)
          .then(({ data }) => alert(data.message))
          .catch((err) => {
            if (err instanceof AxiosError) {
              errorResponse = err.response?.data ?? {
                message: "An error occurred",
              };
            } else {
              console.log(err);
              errorResponse = { message: "Something went wrong" };
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
          bind:value={$form.password}
          on:input={changeProxy}
        />
        {#if $errors.password}
          <Error>{$errors.password}</Error>
        {/if}
      </div>
      <div class="flex items-center justify-between my-3">
        <FormButton
          type="submit"
          disabled={!$isValid || $isSubmitting}
          loading={$isSubmitting}
        >
          Signup
        </FormButton>
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
