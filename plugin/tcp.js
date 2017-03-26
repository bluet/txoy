'use strict'

const net = require('net');

const showError = (msg) => {
	console.error(msg);
	process.exit(1);
}

exports.setup = function (args) {
	if (args.port) {
		this.port = args.port.replace(/\w+:\/\//, '');
	}
}

exports.client = function (args, handler) {
	var tunnel = args.tunnel;
	var target = args.target;
	const tcpServer = net.createServer();
	
	tcpServer.on('connection', (local) => {
		handler.tunnel(local);
	});
	
	tcpServer.listen(this.port, (err) => {
		if (err) {
			showError(err);
		} else {
			console.info(`listening on ${this.port}, exposing ${target} via ${tunnel}`);
		}
	});
}
