import {lazy} from 'react';
export const ModularList = [
	'home',
	'blog',
	'poetry',
	'photos'
];

let _apiObj: any = {};
let _routerObj: any = [];

ModularList.forEach(modularName => {
	try {
		const importInfo = require(`./${modularName}/api/index`);
		const ModularInfo = importInfo.ModularInfo || {};
		const ActionList = importInfo.default || {};
		_apiObj[modularName] = {
			ModularInfo,
			ActionList
		}
	} catch (e) {}

	// 集成路由
	try {
		const importInfo = require(`./${modularName}/route/index`);
		const route = importInfo.default;
		route.forEach((el: any) => {
			const component = el.lazy ? lazy(() => import(`../views/${modularName}/page${el.component || el.path}/index`)) : require(`../views/${modularName}/page${el.component || el.path}/index`).default;
			_routerObj.push({
				...el,
				component
			})
		})
	} catch (e) {}
});
export const apiObj = _apiObj;
export const routerObj = _routerObj;
export const menuObj = _routerObj.filter((el: any) => el.menu);
