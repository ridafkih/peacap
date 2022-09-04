<div align="center">
  <h1>Sniff</h1>
  <p>Cross-platform Python-based NPM module for sniffing system-wide TCP packets.</p>
  	<span>
		<a href="#prerequisites">Prerequisites</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#installation">Installation</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#usage">Usage</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#contribute">Contribute</a>
	</span>
</div>
<hr>

![example usage](https://user-images.githubusercontent.com/9158485/184518260-c6961cdd-e665-484c-ae83-e3896f604bd4.png)

## Prerequisites

You **must** have Python installed, and available at the `python` command on Windows, and `python3` on Windows & Linux.

## Installation

Simply install using your favourite Node.js package manager.

```bash
yarn add sniff
```

```bash
npm install sniff
```

## Usage

Usage is simple, simply instantiate the `PacketSniffer` constructor, and observe.

```ts
import { PacketSniffer } from "sniff";

const sniffer = new PacketSniffer();
sniffer.on("packet", console.log);
/**
 * {
 *   source: "10.0.0.2",
 *   destination: "10.0.0.3",
 *   outgoing: true,
 *   size: 420,
 *   packet: <Buffer 00 00 00 ...>
 * }
 */
```

## Contribute

Feel free to contribute to the repository. Pull requests and issues with feature requests are _super_ welcome!
