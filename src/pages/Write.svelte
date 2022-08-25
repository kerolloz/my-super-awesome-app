<script>
  import { tokenStore } from "../auth";
  import FormInput from "../lib/FormInput.svelte";
  import { createForm } from "svelte-forms-lib";
  import articleSchema from "../schemas/article.schema";
  import api from "../services/api";
  import { handlerProxy } from "../services/handlerProxy";

  const { form, errors, handleChange, handleSubmit, isValid } = createForm({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: articleSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const changeProxy = handlerProxy(handleChange);

  $: if (!$tokenStore) {
    // if user is NOT logged in move to login page
    window.location.href = "/login";
  }
</script>

<div class="flex h-full mt-3">
  <div class="mx-auto my-auto">
    <!-- login form   -->
    <form
      on:submit|preventDefault={handleSubmit}
      class="border-lg bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <FormInput
          id="title"
          type="text"
          label="Title"
          placeholder="Title"
          bind:value={$form.title}
          on:input={changeProxy}
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
          Content
        </label>
        <textarea
          id="content"
          placeholder="Write your article content here..."
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          cols="30"
          rows="10"
          bind:value={$form.content}
          on:input={changeProxy}
        />
      </div>
      <div class="mt-3">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image"
          >Image (optional)
        </label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
        />
      </div>

      <div class="flex items-center justify-between mt-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">Publish</button
        >
      </div>
    </form>
  </div>
</div>
