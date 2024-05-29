import * as server from '../entries/pages/(guest)/product/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(guest)/product/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(guest)/product/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.0749dbe8.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/constants.fba79f32.js","_app/immutable/chunks/AddToCart.61c41a8c.js","_app/immutable/chunks/index.703af434.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.8907a8e2.js","_app/immutable/chunks/SubmitButton.dba9cb2e.js","_app/immutable/chunks/utils.8b2ea92d.js","_app/immutable/chunks/public.cd5d8002.js"];
export const stylesheets = [];
export const fonts = [];
