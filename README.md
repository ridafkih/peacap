# Sniff

Cross-platform Python-based NPM module for sniffing system-wide TCP packets.

```js
import { PacketSniffer } from "sniffer";
const observer = new PacketSniffer();

observer.on("packet", console.log);
```
