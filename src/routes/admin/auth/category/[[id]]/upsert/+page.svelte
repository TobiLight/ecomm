<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import AppInput from '$lib/components/AppInput.svelte';
  import { upsertCategorySchema } from '$lib/validation';
  import AppForm from '$lib/components/AppForm.svelte';
  import AppFileInput from '$lib/components/AppFileInput.svelte';
  import { page } from '$app/stores';

  export let data;

  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: upsertCategorySchema,
    taintedMessage: null,
  });

  $: console.log(errors)

</script>

<AppForm
  actionType="Update"
  {enhance}
  enctype="multipart/form-data"
  name={{ singular: 'category', plural: 'categories' }}
  submitting={$submitting}
>
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
    <p>Current Icon:</p>
    <img src={data.item?.image} alt="" class="w-14 h-14">
  </div>
</AppForm>
