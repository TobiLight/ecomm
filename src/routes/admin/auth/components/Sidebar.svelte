<script lang="ts">
  import { loadIcons } from '@iconify/svelte';
  import Link, { type LinkItem } from './Link.svelte';

  export let links: LinkItem[];

  loadIcons(links.map(({ icon }) => icon));

  export let isOpen: boolean = false;
</script>


<aside
  class:isOpen
  class="fixed left-[-500px] top-0 z-40 mt-16 h-screen w-64 border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0 py-6 {!isOpen ? "md:!left-0": ""}"
  aria-label="Sidebar"
>
  <div class="h-full overflow-y-auto bg-white px-3 dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      {#each links as link}
        <Link {link} />
      {/each}
    </ul>
  </div>
</aside>

<style>
  aside {
    /* position: absolute; */
    left: -500px;
    transition: all 0.5s;
    /* height: 500px; */
    /* width: 300px; */
    /* padding: 20px; */
    /* border: 1px solid #ddd; */
    /* background-color: #efefef; */
  }
  .isOpen {
    left: 0px;
  }
</style>
