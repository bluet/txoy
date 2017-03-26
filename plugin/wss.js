'use strict'

const ws = require('websocket-stream');
const pipe = require('multipipe');

const noop = () => {};

exports.setup = function (args) {
	this.host = args.tunnel + (args.tunnel.slice(-1) === '/' ? '' : '/');
	this.target = args.target;
}

exports.tunnel = function (local) {
	var remote = ws(this.host + this.target);
	// mute errors here
	pipe(remote, local, noop);
	pipe(local, remote, noop);
}
