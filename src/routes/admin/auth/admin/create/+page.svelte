<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import AppInput from '$lib/components/AppInput.svelte';
  import AppForm from '$lib/components/AppForm.svelte';
  import { userSchema } from '$lib/validation';

  export let data;

  const { form, errors, submitting, enhance } = superForm(data.form, {
    validators: userSchema,
    taintedMessage: null,
  });
</script>

<AppForm name={{ singular: 'admin' }} {enhance} submitting={$submitting} actionType="Add">
  <div class="sm:col-span-2">
    <AppInput
      input={{
        name: 'name',
        placeholder: 'John Doe',
        errors: $errors.name,
        value: data.form.data.name,
      }}
      bind:value={$form.name}
    />
  </div>
  <div>
    <AppInput
      input={{
        name: 'email',
        placeholder: 'name@company.com',
        errors: $errors.email,
        value: data.item?.email,
      }}
      bind:value={$form.email}
    />
  </div>
  <div>
    <AppInput
      input={{
        name: 'password',
        type: 'password',
        placeholder: '••••••••',
        errors: $errors.password,
      }}
      bind:value={$form.password}
    />
  </div>
</AppForm>
