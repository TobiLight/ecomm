<script lang="ts">
  import '$lib/css/app.css';
  import type { LinkItem } from './components/Link.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Footer from '$admin/components/Footer.svelte';
  import Navbar from '$admin/components/Navbar.svelte';
  import { getFlash } from 'sveltekit-flash-message';
  import { page } from '$app/stores';
  

  const flash = getFlash(page);

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
      name: 'Logout',
      href: '/admin/auth/guest/logout',
      icon: 'mdi:logout',
    },
  ];
</script>

<div class="relative">
  {#if $flash && $flash.type === 'success'}
    <div class="absolute z-[5] bg-green-800 text-white mb-10 w-auto sm:max-w-md right-0 mt-20 rounded-md">
      <p class="p-6">{$flash?.message}.</p>
    </div>
  {/if}
  <Navbar />

  <Sidebar {links} />

  <div
    class="flex min-h-screen flex-col gap-y-5 bg-gray-100 p-6 dark:bg-gray-900 md:ml-64"
  >
    <section class="mt-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <slot />
    </section>

    <Footer />
  </div>
</div>
