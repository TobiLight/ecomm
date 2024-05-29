import * as server from '../entries/pages/(guest)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(guest)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(guest)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.5ace8497.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/DarkMode.a5d579a2.js","_app/immutable/chunks/public.cd5d8002.js","_app/immutable/chunks/functions.187e9af0.js","_app/immutable/chunks/stores.83cd7827.js","_app/immutable/chunks/singletons.8907a8e2.js"];
export const stylesheets = ["_app/immutable/assets/app.c4cf6f73.css","_app/immutable/assets/DarkMode.1d121e74.css"];
export const fonts = [];
