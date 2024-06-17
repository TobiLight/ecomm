export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [2,3,4];

export const dictionary = {
		"/(guest)": [~5,[2]],
		"/admin/auth/admin/[[id]]/list": [~9,[3]],
		"/admin/auth/admin/[[id]]/upsert": [~10,[3]],
		"/admin/auth/category/[[id]]/list": [~11,[3]],
		"/admin/auth/category/[[id]]/upsert": [~12,[3]],
		"/admin/auth/dashboard": [13,[3]],
		"/admin/auth/logout": [~14,[3]],
		"/admin/auth/product/[[id]]/list": [~15,[3]],
		"/admin/auth/product/[[id]]/upsert": [~16,[3]],
		"/admin/guest/login": [~17,[4]],
		"/admin/guest/register": [~18,[4]],
		"/(guest)/cart": [~6,[2]],
		"/(guest)/checkout": [~7,[2]],
		"/(guest)/product/[id]": [~8,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';