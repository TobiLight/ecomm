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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27')
];

export const server_loads = [2,3,5,6];

export const dictionary = {
		"/(guest)": [~7,[2]],
		"/admin/auth/admin/create": [~14,[3]],
		"/admin/auth/admin/[[id]]/list": [~12,[3]],
		"/admin/auth/admin/[[id]]/upsert": [~13,[3]],
		"/admin/auth/category/create": [~17,[3]],
		"/admin/auth/category/[[id]]/list": [~15,[3],[,4]],
		"/admin/auth/category/[[id]]/upsert": [~16,[3]],
		"/admin/auth/dashboard": [18,[3]],
		"/admin/auth/logout": [~19,[3]],
		"/admin/auth/order/[[id]]/list": [~20,[3]],
		"/admin/auth/order/[[id]]/upsert": [~21,[3]],
		"/admin/auth/product/create": [~24,[3]],
		"/admin/auth/product/[[id]]/list": [~22,[3]],
		"/admin/auth/product/[[id]]/upsert": [~23,[3]],
		"/admin/guest/login": [~25,[5]],
		"/admin/guest/register": [~26,[5]],
		"/admin/super/register": [~27,[6]],
		"/(guest)/cart": [~8,[2]],
		"/(guest)/checkout": [~9,[2]],
		"/(guest)/product": [~10,[2]],
		"/(guest)/product/[id]": [~11,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';