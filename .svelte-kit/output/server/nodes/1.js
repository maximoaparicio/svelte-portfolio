

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.576e5ad7.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.44da1c4d.js","_app/immutable/chunks/singletons.6b3146ce.js"];
export const stylesheets = [];
export const fonts = [];
