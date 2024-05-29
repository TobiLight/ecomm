import * as server from '../entries/pages/(guest)/product/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(guest)/product/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(guest)/product/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.964df782.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/constants.fba79f32.js","_app/immutable/chunks/AddToCart.c5775e53.js","_app/immutable/chunks/index.dca13775.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.3ddd995c.js","_app/immutable/chunks/SubmitButton.dba9cb2e.js","_app/immutable/chunks/utils.dcb3154d.js","_app/immutable/chunks/public.cd5d8002.js"];
export const stylesheets = [];
export const fonts = [];
