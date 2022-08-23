<script>
  export let id, placeholder, type, label;
</script>

<main>
  <label class="block text-gray-700 text-sm font-bold mb-2" for={id}>
    {label}
  </label>
  <input
    {id}
    {type}
    {placeholder}
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    required
  />
</main>
