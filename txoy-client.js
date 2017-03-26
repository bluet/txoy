#!/usr/bin/env node
'use strict'

const minimist = require('minimist');
const pkg = require('./package.json');

const argv = minimist(process.argv.slice(2));

check_argv();

var via = require('./plugin/' + argv.tunnel.split("://")[0] + '.js');
var client = require('./plugin/' + argv.port.split("://")[0] + '.js');

via.setup(argv);
client.setup(argv);

client.client(argv, via);




function check_argv () {
	if (argv.help || argv.h) {
		process.stdout.write(`
Name:
    txoy - Tunnel X Over Y
    
Usage:
    txoy --tunnel wss://example.org --target github.com:22 --port tcp://8022

Parameters:
    --tunnel  the WebSocket address of the tunnel server
    --target  the hostname & port to connect to
    --port    the port to listen on
\n`
		);
		process.exit();
	}
	
	if (argv.version || argv.v) {
		process.stdout.write(`${pkg.name} v${pkg.version}\n`);
		process.exit();
	}
	
	if (!argv.tunnel) {
		showError('missing --tunnel parameter')
	}
	
	if (!argv.target) {
		showError('missing --target parameter')
	}
	
	if (!argv.port) {
		showError('missing --port parameter');
	}
}

function showError (msg) {
	console.error(msg);
	process.exit(1);
}
