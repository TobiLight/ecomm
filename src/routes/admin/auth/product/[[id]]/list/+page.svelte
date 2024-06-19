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
        <span class="text-white"
          >{item.categories && item.categories.length > 0
            ? item.categories.map((category) => category.name).join(', ')
            : 'None'}</span
        >
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
