<script>
  import AppLogo from '$lib/components/AppLogo.svelte';

  import { PUBLIC_APP_NAME } from '$env/static/public';
  const currentYear = new Date().getFullYear();
</script>

<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-auto">
  <div class="mx-auto max-w-screen-xl text-center">
    <div class="flex justify-center items-center">
      <AppLogo />
    </div>
    <p class="mt-6 text-gray-500 dark:text-gray-400">
      &copy; {currentYear}
      <a href="/" class="hover:underline" target="_blank">{PUBLIC_APP_NAME}</a>.
      All rights reserved.
    </p>
  </div>
</footer>
