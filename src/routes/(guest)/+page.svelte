<script lang="ts">
  import '$lib/css/app.css';
  import CategoryItem from './components/CategoryItem.svelte';
  import AddToCart from './components/AddToCart.svelte';
  import AppPagination from '$lib/components/AppPagination.svelte';
  import { currency } from '$lib/constants';
  import { noDataFound } from '$lib/images';
  import { getTitle } from '$lib/utils';
  import { navigating } from '$app/stores';
  import { superForm } from 'sveltekit-superforms/client';
  import { addToCartSchema } from '$lib/validation';

  export let data;

  const { form } = superForm(data.form, {
    validators: addToCartSchema,
    taintedMessage: null,
  });

  $: categories = data.categories;
  $: products = data.products.items;
  $: totalPages = data.products.totalPages;
  $: cart = data.cart;

</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5 p-5">
  <div class="w-full">
    <div class="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5">
      {#each categories as category}
        <CategoryItem {category} />
      {/each}
    </div>
  </div>
  <div class="w-full col-span-3 flex">
    {#if $navigating && $navigating.type === 'link' && $navigating.to?.route.id === '/(guest)'}
      <div class="mx-auto grid items-center justify-center text-white">
        <div class="flex items-center">
          <svg
            aria-hidden="true"
            role="status"
            class="inline w-4 h-4 mr-1 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          <p>Please wait</p>
        </div>
      </div>
    {:else if products && products.length === 0}
      <div class="w-full flex flex-col items-center justify-center gap-10">
        <img loading="lazy" src={noDataFound} alt="No Products Found" />
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          Currently, there are no products available.
        </h3>
      </div>
    {:else}
      <div class="gap-16 flex flex-col">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {#each products as product}
            <div
              class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit"
            >
              <div class="w-full text-center relative">
                <a
                  href="/product/{product.id}"
                  class="w-[300px] h-[300px] mx-auto relative flex"
                >
                  <!-- TODO: CLOUDINARY IMAGE -->
                  <img
                    loading="lazy"
                    width="320"
                    height="288"
                    class="p-8 rounded-t-lg object-contain max-w-sm"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
              </div>
              <div class="px-5 pb-5 flex flex-col gap-4">
                <a href="/product/{product.id}">
                  <h5
                    class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                  >
                    {product.name}
                  </h5>
                </a>
                <div
                  class="grid grid-cols-1 gap-2 items-center justify-between w-full"
                >
                  <span class="text-xl font-bold text-gray-900 dark:text-white"
                    >{currency}{product.price}</span
                  >

                  <div class="flex items-end justify-between dark:text-white">
                    <div class="qty flex flex-col gap-1">
                      <p>qty</p>
                      <input
                        type="number"
                        name="quantity"
                        min={1}
                        max={product.quantity}
                        on:change={(e) => {
                          if (product.id !== $form.productID) {
                            $form.quantity = 0
                            $form.productID = product.id;
                            $form.quantity = parseInt(e.currentTarget.value);
                          } else {
                            $form.quantity += 1
                          }
                        }}
                        value={data.arr.map(d => d.productID === product.id ? d.quantity : 1)}
                        class="w-[75px] bg-transparent px-3 py-1 rounded"
                      />
                    </div>
                    <AddToCart
                      isInCart={cart.has(product.id)}
                      {product}
                      quantity={$form.quantity}
                    />
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        <AppPagination {totalPages} class="flex justify-center" />
      </div>
    {/if}
  </div>
</div>

<svelte:head>
  <title>{getTitle()}</title>
  <meta
    name="description"
    content="Unleash the shopping bliss! Fast, secure, and delightful retail therapy. Discover now!"
  />
</svelte:head>
