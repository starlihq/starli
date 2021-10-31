import {parseArgs} from './utils/arg.js';

parseArgs(process.argv)
	.command('init', () => console.log('Todo'));
