<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import AppInput from '$lib/components/AppInput.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';
  import { enhance as enh, applyAction } from '$app/forms';
  import { page } from '$app/stores';
  import { getFlash } from 'sveltekit-flash-message';

  const flash = getFlash(page);
  export let data;

  const { form, errors, delayed, enhance, message } = superForm(data.form);
  let isLoading = false;
</script>

<div
  class={`${$message ? 'mb-24' : ''} mx-auto pt-32 md:mt-0 flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0`}
>
  {#if $flash && $flash.type === 'success'}
    <div class="bg-green-800 text-white mb-10 w-full sm:max-w-md rounded-md">
      <p class="p-6 text-center">{$flash?.message}. Login to continue</p>
    </div>
  {/if}
  <div
    class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
  >
    <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
      >
        Sign in to your account
      </h1>
      {#if $message}
        <ErrorAlert>{$message}</ErrorAlert>
      {/if}
      <form
        on:submit={(e) => {
          isLoading = true;
          $flash = undefined
        }}
        use:enh={({ action, cancel }) => {
          // do stuff here

          return async ({ result, update }) => {
            if (result) {
              isLoading = false;
              await applyAction(result);
            }
          };
        }}
        method="post"
        class="space-y-4 md:space-y-6"
      >
        <div>
          <AppInput
            input={{
              name: 'email',
              type: 'email',
              label: 'Your email',
              placeholder: 'name@company.com',
              errors: $errors.email,
              value: $form.email,
            }}
          />
        </div>
        <div>
          <AppInput
            input={{
              name: 'password',
              type: 'password',
              placeholder: '••••••••',
              errors: $errors.password,
              value: $form.password,
            }}
          />
        </div>
        <SubmitButton submitting={isLoading} wFull={true}>Sign in</SubmitButton>
      </form>
      <div class="dark:text-white flex justify-between items-center">
        <a
          class="hover:text-primary-700 inline-flex items-center rounded-lg py-2.5 text-center text-sm font-medium"
          href="/admin/guest/register">Create account</a
        >

        <a
          class="hover:text-primary-700 inline-flex items-center rounded-lg py-2.5 text-center text-sm font-medium"
          href="/admin/guest/reset-password">Forgot Password?</a
        >
      </div>
    </div>
  </div>
</div>
