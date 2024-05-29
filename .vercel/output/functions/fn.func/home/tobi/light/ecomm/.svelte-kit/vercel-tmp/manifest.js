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
		client: {"start":"_app/immutable/entry/start.0ed34871.js","app":"_app/immutable/entry/app.5d09fbe4.js","imports":["_app/immutable/entry/start.0ed34871.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/singletons.3ddd995c.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/entry/app.5d09fbe4.js","_app/immutable/chunks/scheduler.d2feb51b.js","_app/immutable/chunks/index.0b5df535.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js'))
		],
		routes: [
			{
				id: "/(guest)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/auth/admin/[[id]]/list",
				pattern: /^\/admin\/auth\/admin(?:\/([^/]+))?\/list\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/auth/admin/[[id]]/upsert",
				pattern: /^\/admin\/auth\/admin(?:\/([^/]+))?\/upsert\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/auth/category/[[id]]/list",
				pattern: /^\/admin\/auth\/category(?:\/([^/]+))?\/list\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/auth/category/[[id]]/upsert",
				pattern: /^\/admin\/auth\/category(?:\/([^/]+))?\/upsert\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/auth/dashboard",
				pattern: /^\/admin\/auth\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/auth/logout",
				pattern: /^\/admin\/auth\/logout\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/auth/product/[[id]]/list",
				pattern: /^\/admin\/auth\/product(?:\/([^/]+))?\/list\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/auth/product/[[id]]/upsert",
				pattern: /^\/admin\/auth\/product(?:\/([^/]+))?\/upsert\/?$/,
				params: [{"name":"id","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/guest/login",
				pattern: /^\/admin\/guest\/login\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/admin/guest/register",
				pattern: /^\/admin\/guest\/register\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(guest)/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(guest)/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(guest)/product/[id]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/uploads/[...key]",
				pattern: /^\/uploads(?:\/(.*))?\/?$/,
				params: [{"name":"key","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/uploads/_...key_/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
