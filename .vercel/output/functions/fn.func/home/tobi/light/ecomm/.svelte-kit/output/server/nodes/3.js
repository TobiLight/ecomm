import * as server from '../entries/pages/admin/auth/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/auth/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/auth/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.90d707d7.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/functions.187e9af0.js","_app/immutable/chunks/Icon.f584d719.js","_app/immutable/chunks/stores.83cd7827.js","_app/immutable/chunks/singletons.8907a8e2.js","_app/immutable/chunks/Navbar.980b549d.js","_app/immutable/chunks/public.cd5d8002.js","_app/immutable/chunks/DarkMode.a5d579a2.js"];
export const stylesheets = ["_app/immutable/assets/app.c4cf6f73.css","_app/immutable/assets/DarkMode.1d121e74.css"];
export const fonts = [];
