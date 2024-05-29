

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.92b8877f.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/stores.fb76f506.js","_app/immutable/chunks/singletons.3ddd995c.js"];
export const stylesheets = [];
export const fonts = [];
