<script lang="ts">
  import AppTable from '$lib/components/AppTable.svelte';
  import AppRow from '$lib/components/AppRow.svelte';

  export let data;

  $: items = data.data.items;
  $: totalPages = data.data.totalPages;

  $: console.log(items)

  const name = { singular: 'order' };
</script>

<AppTable
  {items}
  {totalPages}
  {name}
  columns={['Name', 'Email', 'Phone', 'Ordered Items',  'Total']}
  dummy={false}
  showCreateBtn={false}
>
  {#each items as item}
    <AppRow
      itemId={item.id}
      headingColumn={item.name}
      columns={[item.email, item.phone, `${[...item.products.map(ite => ite.product.name)].join(",\n")}`, item.total]}
      link={name.singular}
      showAction={false}
    >
      <!-- <td class="px-6 py-4">
        <span
          class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
        >
          {item.name}
        </span>
      </td> -->
    </AppRow>
  {/each}
</AppTable>
