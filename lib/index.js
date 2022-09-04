import { PacketSniffer } from "./modules/PacketSniffer.js";

const observer = new PacketSniffer();

observer.on("packet", console.log);