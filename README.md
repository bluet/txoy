# txoy
**Tunnel X over Y.** Tunnel any protocol through any protocol.

Wnat to tunnel TCP through WebSocket? Need X protocol over Y protocol? Not a problem!
There are too many different tunneling tools, all for different protocol and different purpose. TOXY aim to be a solution and framework for all kinds of tunneling needs.

Access anything you want. Even from a crappy WiFi which only allows HTTPS.


*Note:* Inspired by [tcp-over-websockets](https://github.com/derhuerst/tcp-over-websockets). txoy 0.0.1 is basically a refactored version of it.


## tunneling client

```shell
txoy --tunnel wss://example.org --target github.com:22 --port tcp://8022
```

This will expose `github.com:22` on `localhost:8022`, tunneled through `example.org`. `example.org` is the tunneling server.

Works like `ssh -N -L 8022:github.com:22 user@example.org`, except that it's TCP over WebSockets instead of TCP over SSH.


There's a public server running at `wss://tcp-over-websockets-abvntgfmzf.now.sh`, powered by [now](https://zeit.co/now) ❤.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/BlueT/txoy/issues).
