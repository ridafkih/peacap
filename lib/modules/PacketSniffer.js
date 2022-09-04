import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { EventEmitter } from "node:events";
import { PythonShell } from "python-shell";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = join(__dirname, "../..", "bridge", "main.py");

export class PacketSniffer extends EventEmitter {
  constructor() {
    super();

    const shell = new PythonShell(FILE_PATH);

		setImmediate(() => {
			shell.on("message", this._handleChunk.bind(this));
		})
  }

  _handleChunk(chunk) {
    const [source, destination, outgoing, packet] = chunk.split(",");

		const buffer = Buffer.from(String(packet), "hex");

    const data = {
      source,
      destination,
      outgoing: outgoing === "1",
      packet: buffer,
			size: buffer.byteLength
    };

    this.emit("packet", data);
  }
}
