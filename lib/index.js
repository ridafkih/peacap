import { join } from "node:path";
import { PacketObserver } from "./modules/packet-observer";

const observer = new PacketObserver();
observer.on("packet", console.log);