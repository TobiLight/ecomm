<script lang="ts">
  import '$lib/css/app.css';
  import Footer from './components/Footer.svelte';
  import Navbar from './components/Navbar.svelte';
  import type { PageData } from './$types';
  import UpArrow from '$lib/components/Icons/UpArrow.svelte';
  import { onMount } from 'svelte';

  export let data: PageData;

  let scrollToTop: HTMLElement | null;

  onMount(() => {
    scrollToTop = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function () {
      // Get the current scroll position from the top
      const scrollY = window.scrollY;

      // Set a threshold to determine when to show the button (e.g., 100px)
      const threshold = 100;

      console.log(threshold, scrollY)

      if (scrollY > threshold && scrollToTop !== null) {
        scrollToTop.style.opacity = '1'; // Show the button
      } else {
        if (scrollToTop !== null) scrollToTop.style.opacity = '1'; // Hide the button
      }
    });
    return () => {};
  });

  $: user = data.currentUser;
</script>

<div class="w-full flex flex-col min-h-screen relative">
  <div
    class="py-2 px-4 text-gray-200 text-right bg-primary-600 flex justify-center md:justify-end items-center"
  >
    <p class="text-sm text-center font-bold">
      Contact us via WhatsApp or call on +1-(613)-456-8021
    </p>
  </div>
  <button
    id="scroll-to-top"
    class="fixed w-14 h-14 drop-shadow-2xl hover:-translate-y-2 transition-all duration-[1500] ease-in bg-primary-600 rounded-full right-4 bottom-4 z-[899] text-gray-200 flex items-center justify-center"
    on:click={() => {
      // const scrollToTop = () => {
      //   const c = document.documentElement.scrollTop || document.body.scrollTop;
      //   if (c > 0) {
      //     window.requestAnimationFrame(scrollToTop);
      //     window.scrollTo(0, c - c / 8);
      //   }
      // };
      // scrollToTop();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <UpArrow class="w-8 h-8" />
  </button>
  <Navbar cartCount={data.cartCount} isLoggedIn={user ? true : false} />
  <slot />
  <Footer />
</div>

<style lang="postcss">
  #scroll-to-top {
    /* position: fixed; */
    /* bottom: 20px; */
    /* right: 20px; */
    /* padding: 10px 20px; */
    /* background-color: #ddd; */
    /* border: none; */
    /* border-radius: 5px; */
    opacity: 0; /* Initially hide the button */
    transition: opacity 0.5s ease; /* Smooth fade in/out effect */
  }
</style>
