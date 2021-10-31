import argsParse from 'minimist';

export class ArgParser {
	constructor(args, options = {}) {
		this.args = argsParse(args, options);
	}

	command(name, handler) {
		if (this.args._[0] === name) {
			handler(this.args);
		}

		return this;
	}

	defaultCommand(handler) {
		if (this.args._.length === 0) {
			handler();
		}

		return this;
	}
}

// Sugar
export function parseArgs(args, options = {}) {
	return new ArgParser(args, options);
}
