<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import { P } from 'flowbite-svelte';

  export let link: string;
  export let itemId: string;
  export let headingColumn: string | number;
  export let columns: Array<string | number> = [];
  export let showAction: boolean = true;
  let isLoading: boolean = false;
</script>

<tr
  class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
>
  <th
    scope="row"
    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
  >
    {headingColumn}
  </th>
  {#each columns as column}
    <td class="px-6 py-4"> {column} </td>
  {/each}
  <slot />
  {#if showAction}
    <td class="flex justify-end gap-4 px-6 py-4">
      <a
        href="/admin/auth/{link}/{itemId}/upsert"
        class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >Edit</a
      >
      <form
        use:enhance={({ cancel }) => {
          // do stuff here

          return async ({ result, update }) => {
            if (result) {
              isLoading = false;
              await applyAction(result);
              update({ reset: true });
            }
          };
        }}
        class="inline-block"
        method="post"
        action="/admin/auth/{link}/{itemId}/list?/destroy"
        on:submit={(e) => {
          isLoading = true;
        }}
      >
        {#if isLoading}
          <p class="text-red-500">Deleting...</p>
        {:else}
          <button
            type="submit"
            class="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete</button
          >
        {/if}
      </form>
    </td>
  {/if}
</tr>
