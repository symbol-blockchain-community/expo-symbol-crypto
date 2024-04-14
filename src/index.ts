import * as ExpoCrypto from "expo-crypto";
import type { CryptoDigestAlgorithm } from "expo-crypto";
import type { IntBasedTypedArray, UintBasedTypedArray } from "expo-modules-core";
import hmac from "create-hmac";
import cryptobrowserify from "crypto-browserify";

export function randomBytes(num: number): IntBasedTypedArray | UintBasedTypedArray {
  return ExpoCrypto.getRandomValues(new Uint8Array(num));
}

export function createHash(algorithm: CryptoDigestAlgorithm): any {
  return cryptobrowserify.createHash(algorithm);
}

export function createHmac(algorithm: hmac.Algorithm, data: string | Buffer) {
  return hmac(algorithm, data);
}

export function createCipheriv(algorithm: any, key: any, iv: any, options?: any) {
  return cryptobrowserify.createCipheriv(algorithm, key, iv, options);
}

export function createDecipheriv(algorithm: any, key: any, iv: any, options?: any) {
  return cryptobrowserify.createDecipheriv(algorithm, key, iv, options);
}

// default export
export default {
  randomBytes,
  createHash,
  createHmac,
  createCipheriv,
  createDecipheriv,
};
