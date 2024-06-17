<<<<<<< HEAD
import type { JwtData } from '$lib/authentication/jwt';

=======
>>>>>>> 7259bfdf (init: initial commit)
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
<<<<<<< HEAD
    interface Locals {
      admin: JwtData;
      flashMessage: string
    }
    interface PageData {
      flash?: { type: 'success' | 'error'; message: string };
    }
=======
    // interface Locals {}
>>>>>>> 7259bfdf (init: initial commit)
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
