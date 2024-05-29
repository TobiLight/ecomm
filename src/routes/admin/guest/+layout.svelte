<script lang="ts">
  import '$lib/css/app.css';
  import Navbar from '$admin/components/Navbar.svelte';
  import Footer from '$admin/components/Footer.svelte';
</script>

<div>
  <Navbar />
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <slot />
  </section>
  <div class="fixedd bottom-0 w-full">
    <Footer />
  </div>
</div>
