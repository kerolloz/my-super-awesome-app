<script>
  import { createEventDispatcher } from "svelte";

  export let id, placeholder, type, label, value;

  const dispatch = createEventDispatcher();
  const handleChange = (e) => {
    const { target } = e;
    dispatch("input", { target });
  };
</script>

<div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for={id}>
    {label}
  </label>
  <input
    {id}
    {type}
    {placeholder}
    {value}
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    {...$$restProps}
    on:input={handleChange}
  />
</div>
