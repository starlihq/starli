import {parseArgs} from './utils/arg.js';

parseArgs(process.argv.slice(2))
	.command('init', () => console.log('Todo'));
