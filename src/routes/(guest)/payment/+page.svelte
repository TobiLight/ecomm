<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import { currency } from '$lib/constants';
  import { createOrderSchema } from '$lib/validation';
  import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';
  import AppInput from '$lib/components/AppInput.svelte';
  import { getTitle } from '$lib/utils';

  export let data;

  let paymentMade: boolean = false

  $: cart = data.cart;
  $: products = data.products;
  $: total = products.reduce((total, product) => {
    return (total + product.price) * (cart.get(product.id) as number);
  }, 0);
</script>

<div class="w-full py-24">
  <div
    class="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-5 xl:px-0 px-5 mb-10"
  >
    <h1 class="text-3xl font-bold dark:text-white">Payment</h1>
  </div>
  <div
    class="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-5 xl:px-0 px-5"
  >
    <!--  -->

    <div class="w-full dark:text-white">
      <div class="grid gap-3">
        <p>Currently Accepted Payment Method:</p>
        <ul class="ml-5 grid gap-5">
          <div class="flex gap-2 items-center">
            <span>BTC Address:</span>
            <li
              class="bg-white border border-gray-200 rounded-lg shadow px-1 font-bold dark:bg-gray-800 dark:border-gray-700"
            >
              dfghj3er6fyuik23456yuhbgvfdf
            </li>
          </div>
          {#if paymentMad}
            <form action="" class="grid gap-4">
              <label
                for="transactionHsh"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Transaction Hash
                <input
                  type="text"
                  name="transactionHsh"
                  placeholder="Enter the transaction hash for this payment"
                  class="block w-96 mt-1 rounded-lg border p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </label>

              <button
                class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 w-fit"
                >Submit</button
              >
            </form>
          {/if}
        </ul>
      </div>
    </div>

    <div
      class="w-full self-start max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Order summary
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          {#each products as product}
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    {product.name}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Quantity:
                    <strong>
                      {cart.get(product.id) || 1}
                    </strong>
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  {currency}{product.price * Number(cart.get(product.id)) || 1}
                </div>
              </div>
            </li>
          {/each}
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  <strong>Order total</strong>
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {currency}{total}
              </div>
            </div>
            <button
            on:click={e => {
                paymentMade = true
            }}
              type="button"
              class="mt-4 text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-200 dark:focus:ring-secondary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >I have made payment</button
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<svelte:head>
  <title>{getTitle('Checkout')}</title>
  <meta
    name="description"
    content="Seamless checkout at its finest! SvelteKit-powered eCommerce ensures a smooth and secure payment process. Complete your order hassle-free. Shop now!"
  />
</svelte:head>
