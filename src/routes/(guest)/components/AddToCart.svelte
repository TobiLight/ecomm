<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';
  import type { Product } from '@prisma/client';

  export let isInCart: boolean;
  export let product: Pick<Product, 'id'>;
  export let quantity: number;

  let submitting = false;

  $: console.log("quantity", quantity)
</script>

<form
  method="post"
  action="/product/{product.id}?/{isInCart ? 'remove' : 'add'}"
  class="flex gap-5"
  use:enhance={() => {
    submitting = true;
    return async ({ update, result }) => {
      submitting = false;
      await applyAction(result);
      return await update();
    };
  }}
>
  {#if !isInCart}
    <input type="hidden" name="quantity" value={quantity} />
  {/if}
  <SubmitButton {submitting}>
    {#if isInCart}
      Remove from cart
    {:else}
      Add to cart
    {/if}
  </SubmitButton>
</form>
