<script lang="ts">
  import { page } from '$app/stores';
</script>

<div
  class="error dark:text-white my-16 rounded-lg bg-white p-8 shadow-lg dark:bg-red-800"
>
  <div class="w-3/4 mx-auto flex flex-col items-center">
    <h3 class="font-bold text-xl text-center">Error Status: {$page.status}</h3>
    <h1 class="text-center">
      {$page.error ? $page.error.message : 'Something has happened :('}
    </h1>
    <a href="/admin/auth/category/list" class="text-center font-bold mt-5 p-3 bg-black block rounded shadow-xl">Go back</a>
  </div>
</div>
