import { EventEmitter } from "node:events";
import { PythonShell } from "python-shell";

const FILE_PATH = join(__dirname, "..", "bridge", "main.py");

export class PacketObserver extends EventEmitter {
	constructor() {
		super();

		const shell = new PythonShell(FILE_PATH);
		shell.on("message", this._handleChunk)
	}

	_handleChunk(chunk) {
		const [source, destination, outgoing, packet] = chunk.split(",");
		const data = { source, destination, outgoing, packet };

		this.emit("packet", data);
	}
}