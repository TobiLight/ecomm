<script lang="ts">
  import '$lib/css/app.css';
  import Footer from './components/Footer.svelte';
  import Navbar from './components/Navbar.svelte';
  import type { PageData } from './$types';

  export let data: PageData

  $: user = data.currentUser

</script>

<div class="w-full flex flex-col min-h-screen">
  <Navbar cartCount={data.cartCount} isLoggedIn={user ? true : false} />
  <slot />
  <Footer />
</div>
