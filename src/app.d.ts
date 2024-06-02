import type { JwtData } from '$lib/authentication/jwt';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      admin: JwtData;
      flashMessage: string
    }
    interface PageData {
      flash?: { type: 'success' | 'error'; message: string };
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
