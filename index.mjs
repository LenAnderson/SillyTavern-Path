import { createRequire } from 'module';
const require  = createRequire(import.meta.url);
const path = require('path');

export async function init(router) {
	router.get('/', (request, response) => {
		return response.send(path.resolve('.'));
		return response.send('Hi');
	});
}

export async function exit() {}

const module = {
	init,
	exit,
	info: {
		id: 'path',
		name: 'Path',
		description: 'Provides the path to the SillyTavern installation.',
	},
};
export default module;
