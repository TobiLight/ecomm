<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import AppLogo from '$lib/components/AppLogo.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte'; // Assuming you're using Svelte
  import Icon, { loadIcons } from '@iconify/svelte';
  import type Link from '../../admin/auth/components/Link.svelte';
  import type { LinkItem } from '../../admin/auth/components/Link.svelte';
  import type { User } from '@prisma/client';

  export let isLoggedIn: boolean;
  export let user: Pick<
    User,
    'id' | 'name' | 'email' | 'role' | 'createdAt'
  > | null;

  onMount(() => {
    const buttonEl = document.querySelector(
      '[data-drawer-target="Sidebar"]',
    ) as HTMLButtonElement;
    const sidebarEl = document.getElementById('Sidebar') as HTMLElement;

    buttonEl.addEventListener('click', () => {
      // sidebarEl.classList.toggle("-translate-x-full")
      sidebarEl.classList.toggle('hidden');
    });
  });

  export  let openSideBar: () => void

  const links: LinkItem[] = [
    {
      name: 'Dashboard',
      href: '/admin/auth/dashboard',
      icon: 'mdi:view-dashboard-variant',
    },
    {
      name: 'Admins',
      active: '/admin/auth/admin',
      href: '/admin/auth/admin/list',
      icon: 'mdi:account-multiple',
    },
    {
      name: 'Categories',
      active: '/admin/auth/category',
      href: '/admin/auth/category/list',
      icon: 'mdi:layers-triple',
    },
    {
      name: 'Products',
      active: '/admin/auth/product',
      href: '/admin/auth/product/list',
      icon: 'mdi:shopping',
    },
    {
      name: 'Orders',
      active: '/admin/auth/order',
      href: '/admin/auth/order/list',
      icon: 'mdi:cart',
    },
    {
      name: 'Logout',
      href: '/admin/auth/guest/logout',
      icon: 'mdi:logout',
    },
  ];

  const userLinks: LinkItem[] = [
    {
      name: 'Dashboard',
      href: '/admin/auth/dashboard',
      icon: 'mdi:view-dashboard-variant',
    },
    {
      name: 'My Orders',
      active: '/admin/auth/order',
      href: '/admin/auth/order/list',
      icon: 'mdi:cart',
    },
    {
      name: 'Logout',
      href: '/admin/auth/guest/logout',
      icon: 'mdi:logout',
    },
  ];

  loadIcons(links.map(({ icon }) => icon));
</script>

<nav
  class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
>
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <!-- TODO: Make button work -->
        <button
        on:click={openSideBar}
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

<!-- <aside
  class:isSideBarOpen
  class="hidden fixed left-0 top-0 z-40 mt-16 h-screen w-64 border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 md:hidden py-6"
  aria-label="Sidebar"
  id="Sidebar"
>
  <div class="h-full overflow-y-auto bg-white px-3 dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      {#if user && user.role === 'ADMIN'}
        {#each links as link}
          <li
            class:active={$page.url.pathname.startsWith(
              '/admin/auth/guest/logout',
            )}
          >
            {#if link.href.includes('/logout')}
              <form action="/admin/auth/logout" method="post">
                <button
                  class="cursor-pointer group flex items-center rounded-lg p-2 {$page.url.pathname.startsWith(
                    '/admin/auth/guest/logout',
                  )
                    ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
                    : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
                >
                  <Icon
                    icon={link.icon}
                    class="flex-shrink-0 text-2xl transition duration-75 {$page.url.pathname.startsWith(
                      link?.active || '/admin/auth/dashboard',
                    )
                      ? 'text-white'
                      : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
                  />
                  <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
                </button>
              </form>
            {:else}
              <a
                href={link.href}
                class="group flex items-center rounded-lg p-2 {$page.url.pathname.startsWith(
                  '/admin/auth/guest/logout',
                )
                  ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
              >
                <Icon
                  icon={link.icon}
                  class="flex-shrink-0 text-2xl transition duration-75 {$page.url.pathname.startsWith(
                    '/admin/auth/guest/logout',
                  )
                    ? 'text-white'
                    : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
                />
                <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
              </a>
            {/if}
          </li>
        {/each}
      {:else}
        {#each userLinks as link}
          <li
            class:active={$page.url.pathname.startsWith(
              '/admin/auth/guest/logout',
            )}
          >
            {#if link.href.includes('/logout')}
              <form action="/admin/auth/logout" method="post">
                <button
                  class="cursor-pointer group flex items-center rounded-lg p-2 {$page.url.pathname.startsWith(
                    '/admin/auth/guest/logout',
                  )
                    ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
                    : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
                >
                  <Icon
                    icon={link.icon}
                    class="flex-shrink-0 text-2xl transition duration-75 {$page.url.pathname.startsWith(
                      '/admin/auth/guest/logout',
                    )
                      ? 'text-white'
                      : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
                  />
                  <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
                </button>
              </form>
            {:else}
              <a
                href={link.href}
                on:click={() => {}}
                class="aside-item group flex items-center rounded-lg p-2 {$page.url.pathname.startsWith(
                  '/admin/auth/guest/logout',
                )
                  ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
              >
                <Icon
                  icon={link.icon}
                  class="flex-shrink-0 text-2xl transition duration-75 {$page.url.pathname.startsWith(
                    '/admin/auth/guest/logout',
                  )
                    ? 'text-white'
                    : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
                />
                <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
              </a>
            {/if}
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</aside> -->

<style type="postcss">
  a.active {
    color: #f97316;
  }
</style>
