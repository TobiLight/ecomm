<script lang="ts" context="module">
  export interface LinkItem {
    href: string;
    icon: string;
    name: string;
    active?: string;
  }
</script>

<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { applyAction, enhance } from '$app/forms';
    import type { ActionResult } from '@sveltejs/kit';

  let form = undefined;
  function onSubmit() {
    return async ({ result }: {result: ActionResult<Record<string, unknown> | undefined, Record<string, unknown> | undefined>}) => {
      await applyAction(result); // might not do anything here

      if (result.type == 'success' || result.type == 'failure')
        form = result.data;
    };
  }

  export let link: LinkItem;

  $: isCurrentLinkActive = $page.url.pathname.startsWith(
    link.active || link.href,
  );
</script>

<li class:active={isCurrentLinkActive}>
  {#if link.href.includes('/logout')}
    <form action="/admin/auth/logout" method="post">
      <button
        class="cursor-pointer group flex items-center rounded-lg p-2 {isCurrentLinkActive
          ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
          : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
      >
        <Icon
          icon={link.icon}
          class="flex-shrink-0 text-2xl transition duration-75 {isCurrentLinkActive
            ? 'text-white'
            : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
        />
        <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
      </button>
    </form>
  {:else}
    <a
      href={link.href}
      class="group flex items-center rounded-lg p-2 {isCurrentLinkActive
        ? 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white'
        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}"
    >
      <Icon
        icon={link.icon}
        class="flex-shrink-0 text-2xl transition duration-75 {isCurrentLinkActive
          ? 'text-white'
          : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'}"
      />
      <span class="ml-3 flex-1 whitespace-nowrap">{link.name}</span>
    </a>
  {/if}
</li>
