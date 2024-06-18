<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import AppInput from '$lib/components/AppInput.svelte';
  import { upsertProductSchema } from '$lib/validation';
  import AppTextarea from '$lib/components/AppTextarea.svelte';
  import AppForm from '$lib/components/AppForm.svelte';
  import AppFileInput from '$lib/components/AppFileInput.svelte';
  import { page } from '$app/stores';
  import AppSelect from '$lib/components/AppSelect.svelte';
  import {
    showSelected,
    setShowSelected,
    setCategoriesArr,
    categoriesArr,
    removeCategory,
  } from '../../../../../../store/store.js';

  export let data;

  let categories = data.categories as Array<{ id: string; name: string }>;

  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: upsertProductSchema,
    taintedMessage: null,
  });

  let searchQuery = '';

  function handleSearch(
    event: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) {
    searchQuery = event.currentTarget.value;
  }

  const filteredCategories = (searchQuery: string) =>
    searchQuery
      ? categories.filter((category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : categories;

  let filteredCategoriesArr: Array<{id: string, name: string}> = []

  function selectCategory(category: {
    id: string;
    name: string;
  }) {
    filteredCategoriesArr.push(category);
  }
</script>

<AppForm
  {enhance}
  enctype="multipart/form-data"
  name={{ singular: 'product' }}
  submitting={$submitting}
  actionType={'Update'}
>
  <div class="sm:col-span-2 relative">
    <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Select category
      <input
        bind:value={searchQuery}
        on:input={handleSearch}
        type="text"
        name="categories"
        id="categories"
        placeholder="Enter category name"
        class="focus:outline-none mt-2 block w-full rounded-lg border p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      />

      {#if searchQuery}
        <div
          class="top-0 left-0 w-full overflow-y-auto dark:bg-gray-700 bg-white rounded-md shadow-md mt-1 z-10"
          style="max-height: 200px;"
        >
          {#each filteredCategories(searchQuery) as category}
            <button type="button"
              class="hover:bg-gray-100 px-3 py-2 cursor-pointer border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 w-full text-left"
              on:click={() => {
                if (filteredCategoriesArr.some((categ) => categ.id === category.id)) {
                  console.warn(
                    'Category with ID',
                    category.id,
                    'already exists or does not exist in the fetched categories.',
                  );
                  searchQuery = '';
                  return; // Prevent adding duplicate or non-existent category
                }

                setCategoriesArr(category);
                selectCategory(category)
                searchQuery = '';
              }}
            >
              {category.name}
            </button>
          {/each}
          {#if !filteredCategories(searchQuery).length && searchQuery.length > 0}
            <p
              class="px-3 py-2 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            >
              No matches found
            </p>
          {/if}
        </div>
      {/if}

      {#if $categoriesArr.length > 0}
        <div class="flex flex-col mt-2">
          <ul>
            <p for="categoryId" class="mr-2 text-gray-600 dark:text-white">Selected:</p>
            <div class="flex items-center">
              {#each $categoriesArr as categorySelected}
              <div class="flex items-center gap-1">
                <li class="ml-2">{categorySelected.name}</li>
                <button
                type="button"
                  on:click={() => {
                    filteredCategoriesArr = filteredCategoriesArr.filter(categ => categ.id !== categorySelected.id)
                    removeCategory(categorySelected.id)}}
                  class="bg grid h-fit px-2 rounded bg-red-500 font-bold">x</button
                >
                <input type="hidden" name="categoryId" value={categorySelected.id} />
                </div>
                {/each}
              </div>
          </ul>
        </div>
      {/if}
    </label>

    <!-- <AppSelect
      input={{
        name: 'categoryId',
        as: 'category',
        errors: $errors.categoryId,
        value: data.item?.categoryId,
      }}
      bind:value={$form.categoryId}
      options={data.categories}
      valueKey="id"
      textKey="name"
    /> -->
  </div>
  <div class="sm:col-span-2">
    <AppInput
      input={{
        name: 'name',
        placeholder: 'SuperTech X1',
        errors: $errors.name,
        value: data.item?.name,
      }}
      bind:value={$form.name}
    />
  </div>
  <div>
    <AppInput
      input={{
        name: 'price',
        type: 'number',
        placeholder: '300',
        errors: $errors.price,
        value: data.item?.price,
      }}
      bind:value={$form.price}
    />
  </div>
  <div>
    <AppInput
      input={{
        name: 'quantity',
        type: 'number',
        placeholder: '3',
        errors: $errors.quantity,
        value: data.item?.quantity,
      }}
      bind:value={$form.quantity}
    />
  </div>
  <div class="col-span-2">
    <AppTextarea
      input={{
        name: 'description',
        placeholder:
          "Introducing the SuperTech X1 - your all-in-one solution for cutting-edge performance and seamless connectivity. With a lightning-fast chipset, stunning display, and advanced camera system, it's the ultimate tech companion",
        errors: $errors.description,
        value: data.item?.description,
      }}
      bind:value={$form.description}
    />
  </div>
  <div class="col-span-2">
    <AppFileInput
      input={{
        name: 'image',
        type: 'file',
        min: 5,
        multiple: true,
        required: !$page.params.id,
        errors: $errors.image,
      }}
    />
  </div>
  <div class="existing-image col-span-2 text-white">
    <p>Current thumbnail:</p>
    <img src={data.item?.image} alt="" class="w-14 h-14" />
  </div>
</AppForm>
