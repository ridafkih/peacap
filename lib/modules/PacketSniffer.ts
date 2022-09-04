import { join } from "node:path";
import { EventEmitter } from "node:events";
import { PythonShell } from "python-shell";
import { ChunkData } from "@/@types/chunk";

const FILE_PATH = join(__dirname, "../..", "bridge", "main.py");

interface PacketSnifferEvents {
  ready: () => void;
  packet: (chunk: ChunkData) => void;
}

export declare interface PacketSniffer {
  on<U extends keyof PacketSnifferEvents>(
    event: U, listener: PacketSnifferEvents[U]
  ): this;

  emit<U extends keyof PacketSnifferEvents>(
    event: U, ...args: Parameters<PacketSnifferEvents[U]>
  ): boolean;
}

export class PacketSniffer extends EventEmitter {
  constructor() {
    super();

    const shell = new PythonShell(FILE_PATH);
		shell.on("message", this.handleChunk.bind(this));
  }

  private handleChunk(chunk: string) {
		if (chunk === "1") return this.emit("ready");
		
    const [source, destination, outgoing, packet] = chunk.split(",");
		const buffer = Buffer.from(String(packet), "hex");

    const data: ChunkData = {
      source,
      destination,
      outgoing: outgoing === "1",
      packet: buffer,
			size: buffer.byteLength
    };

    this.emit("packet", data);
  }
}
