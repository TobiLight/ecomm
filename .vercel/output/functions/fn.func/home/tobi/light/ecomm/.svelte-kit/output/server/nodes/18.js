import * as server from '../entries/pages/admin/guest/register/_page.server.ts.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/guest/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/guest/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/18.6cbd3c1f.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/index.dd350c4d.js","_app/immutable/chunks/index.dca13775.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.3ddd995c.js","_app/immutable/chunks/stores.fb76f506.js","_app/immutable/chunks/environment.07c54b58.js","_app/immutable/chunks/AppInput.1bb30858.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SubmitButton.dba9cb2e.js","_app/immutable/chunks/validation.f295058f.js"];
export const stylesheets = [];
export const fonts = [];