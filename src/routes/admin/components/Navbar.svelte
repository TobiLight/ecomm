<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import AppLogo from '$lib/components/AppLogo.svelte';
  import { page } from '$app/stores';
  export let isLoggedIn: boolean;
</script>

<nav
  class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
>
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <!-- TODO: Make button work -->
        <button
          data-drawer-target="Sidebar"
          data-drawer-toggle="Sidebar"
          aria-controls="Sidebar"
          type="button"
          class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <div class="ml-2 flex md:mr-24">
          <AppLogo />
        </div>
      </div>

        <ul
          class="hidden md:flex font-medium rounded-lg space-x-8 bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <li>
            <a
              href="/"
              class="block text-primary-700 dark:text-white"
              class:active={$page.url.pathname === '/'}
              aria-current="page">Home</a
            >
          </li>
          <li>
            <a
              href="/cart"
              class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
              class:active={$page.url.pathname === '/cart'}>Cart</a
            >
          </li>
          {#if isLoggedIn}
            <li>
              <a
                href="/admin/auth/dashboard"
                class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                class:active={$page.url.pathname.includes('/admin/auth/')}
                >Dashboard</a
              >
            </li>

            <form action="/admin/auth/logout" method="post">
              <button
                class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
              >
                Logout
              </button>
            </form>
          {:else}
            <li>
              <a
                href="/admin/guest/login"
                class="block text-gray-900 hover:text-primary-700 dark:hover:text-primary-500 dark:text-white"
                class:active={$page.url.pathname === '/admin/guest/login/'}
                >Login</a
              >
            </li>
          {/if}
        </ul>

      <div class="flex items-center">
        <div class="mr-3 flex items-center">
          <DarkMode />
        </div>
      </div>
    </div>
  </div>
</nav>

<style type="postcss">
  a.active {
    color: #f97316;
  }
</style>
