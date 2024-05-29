

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d39b2b2d.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js","_app/immutable/chunks/stores.83cd7827.js","_app/immutable/chunks/singletons.8907a8e2.js"];
export const stylesheets = [];
export const fonts = [];
