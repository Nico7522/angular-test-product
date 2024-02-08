import { PublicKey } from '../secret/Key.Model';

export function FromBytesToString(key: PublicKey): string {
  const publicKeyBase64 = key.publicKey;
  const publicKeyBytes = base64ToUint8Array(publicKeyBase64);
  const decoder = new TextDecoder('utf-8');
  const publicKeyString = decoder.decode(publicKeyBytes);
  return publicKeyString;
}

export function base64ToUint8Array(base64String: string): Uint8Array {
  const binaryString = atob(base64String);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
