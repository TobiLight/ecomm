<script lang="ts">
  import '$lib/css/app.css';
  import Footer from '$admin/components/Footer.svelte';
  import Navbar from '$guest/components/Navbar.svelte';
  import type { PageData } from '../../(guest)/$types';

  export let data: PageData;

  $: user = data.currentUser;
</script>

<div>
  <Navbar isLoggedIn={user ? true : false} />
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <slot />
  </section>
  <div class="fixedd bottom-0 w-full">
    <Footer />
  </div>
</div>
