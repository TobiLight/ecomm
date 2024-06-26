<script lang="ts">
  import { currency } from '$lib/constants';
  import AddToCart from '$guest/components/AddToCart.svelte';
  import { getTitle } from '$lib/utils';
  import BackIcon from '$lib/components/BackIcon.svelte';
  import { addToCartSchema } from '$lib/validation.js';
  import { superForm } from 'sveltekit-superforms/client';

  export let data;

  const { form } = superForm(data.form, {
    validators: addToCartSchema,
    taintedMessage: null,
  });

  $: product = data.product;
  $: isInCart = data.isInCart;
</script>

<div class="w-full pt-16 pb-24 lg:px-0 px-5">
  <div class="max-w-screen-lg dark:text-white mx-auto pb-10">
    <a
      href="/"
      class="flex items-center rounded bg-white border-primary-800 dark:bg-transparent border dark:border-primary-800 p-2 w-fit"
    >
      <BackIcon class="w-8 h-8" />
      back
    </a>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 rounded-lg py-8 sm:px-16 mx-auto max-w-screen-lg lg:py-16 bg-white dark:bg-gray-800 px-4 gap-5"
  >
    <div class="flex justify-center h-fit">
      <img width="320" height="288" src={product.image} alt={product.name} />
    </div>
    <div>
      <h2
        class="mb-2 text-xl font-semibold leading-none text-gray-800 md:text-2xl dark:text-white"
      >
        {product.name}
      </h2>
      <p
        class="mb-4 text-xl font-extrabold leading-none text-gray-800 md:text-2xl dark:text-white"
      >
        {currency}{product.price}
      </p>
      <dl>
        <dt
          class="mb-2 font-semibold leading-none text-gray-800 dark:text-white"
        >
          Details
        </dt>
        <dd
          class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400 whitespace-pre-wrap"
        >
          {product.description}
        </dd>
      </dl>
      <dl class="flex items-center space-x-6">
        <div>
          <dt
            class="mb-2 font-semibold leading-none text-gray-800 dark:text-white"
          >
            Category
          </dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            {product.categories.map((category) => category.name).join(', ') ||
              '-'}
          </dd>
        </div>
      </dl>
      <div class="flex items-center space-x-4">
        <AddToCart
          {isInCart}
          {product}
          quantity={$form.quantity > 1 ? $form.quantity - 1: $form.quantity + 1}
        />
      </div>
    </div>
  </div>
</div>

<svelte:head>
  <title>{getTitle(product.name)}</title>
  <meta name="description" content={product.description} />
</svelte:head>
