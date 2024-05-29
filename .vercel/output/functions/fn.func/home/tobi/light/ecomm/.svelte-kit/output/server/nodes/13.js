

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/auth/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.f305a682.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js"];
export const stylesheets = [];
export const fonts = [];
