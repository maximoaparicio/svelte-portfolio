export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bd511c11.js","app":"_app/immutable/entry/app.5c3bec37.js","imports":["_app/immutable/entry/start.bd511c11.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.6b3146ce.js","_app/immutable/entry/app.5c3bec37.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.44da1c4d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
