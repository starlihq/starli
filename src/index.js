import {parseArgs} from './utils/arg.js';

import {initHandler} from './handlers/init.js';
import {helpHandler} from './handlers/help.js';

parseArgs(process.argv.slice(2))
	.command('init', initHandler)
	.command('help', helpHandler);
