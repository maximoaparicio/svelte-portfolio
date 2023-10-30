

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.23a567f6.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.44da1c4d.js"];
export const stylesheets = ["_app/immutable/assets/0.33c785d1.css"];
export const fonts = [];
