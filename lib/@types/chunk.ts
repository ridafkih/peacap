export interface ChunkData {
  source: string;
  destination: string;
  outgoing: boolean;
  size: number;
  packet: Buffer;
}