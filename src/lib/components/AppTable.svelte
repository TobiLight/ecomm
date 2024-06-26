<script lang="ts">
  import NoDataRow from './NoDataRow.svelte';
  import DummyButton from './buttons/DummyButton.svelte';
  import AppHeading from '$lib/components/AppHeading.svelte';
  import AppAddLink from '$lib/components/AppAddLink.svelte';
  import AppPagination from '$lib/components/AppPagination.svelte';
  import { dev } from '$app/environment';

  export let dummy = false;
  export let showCreateBtn = true;
  export let items: Record<string, unknown>[];
  export let columns: string[];
  export let totalPages: number;
  export let name: { plural?: string; singular: string };
  if (!name.plural) {
    name.plural = `${name.singular}s`;
  }
</script>

<div class="relative flex flex-col gap-y-5 overflow-x-auto">
  <div
    class="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-x-4 md:space-y-0"
  >
    <AppHeading>All {name.plural}</AppHeading>
    <div
      class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0"
    >
      {#if dummy && dev}
        <form method="post" action="?/dummy">
          <DummyButton />
        </form>
      {/if}
      {#if showCreateBtn}
        <AppAddLink href="/admin/auth/{name.singular}/create">
          {name.singular}
        </AppAddLink>
      {/if}
    </div>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
      <thead
        class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          {#each columns as column}
            <th scope="col" class="px-6 py-3"> {column} </th>
          {/each}
          {#if showCreateBtn}
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          {/if}
        </tr>
      </thead>
      <tbody>
        <NoDataRow totalItems={items !== undefined ? items.length : 0} colspan={columns.length + 1} />
        <slot />
      </tbody>
      <tfoot
        class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          {#each columns as column}
            <th scope="col" class="px-6 py-3"> {column} </th>
          {/each}
          {#if showCreateBtn}
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Actions</span>
            </th>
          {/if}
        </tr>
      </tfoot>
    </table>
  </div>

  <AppPagination {totalPages} />
</div>
