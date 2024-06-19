<script lang="ts">
  import AppTable from '$lib/components/AppTable.svelte';
  import AppRow from '$lib/components/AppRow.svelte';

  export let data;

  $: items = data.data.items;
  $: totalPages = data.data.totalPages;

  const name = { singular: 'product' };
</script>

<AppTable
  {items}
  {totalPages}
  {name}
  columns={['Name', 'Price', 'Quantity', 'Categories', 'Image']}
  dummy={false}
>
  {#each items as item}
    <AppRow
      itemId={item.id}
      headingColumn={item.name}
      columns={[item.price, item.quantity]}
      link={name.singular}
    >
      <td class="px-6 py-4">
        <span class="text-white">{item.categories && item.categories.length > 0 ? item.categories.map(category => category.name).join(", ") : "None"}</span>
        <!-- {#each item.categories as category}
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
          >
            {category.name}
          </span>
        {/each} -->
      </td>
      <td class="px-6 py-4">
        <a href={item.image} target="_blank">
          <img
            loading="lazy"
            width="32"
            height="32"
            class="rounded-md"
            src={item.image}
            alt={item.name}
          />
        </a>
      </td>
    </AppRow>
  {/each}
</AppTable>
