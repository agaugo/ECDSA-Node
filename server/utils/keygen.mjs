import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { hexToBytes, toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak";

function getAddress(publicKey) {
    const x = publicKey.slice(1);
    const hash = keccak256(x);									//Hashes the public key
    return (hash.slice(-20));
}

const privateKey = secp256k1.utils.randomPrivateKey();  		//Generates a random private key
const publicKey = secp256k1.getPublicKey(privateKey);			//Generates a public key from the private key
const publicAddress = getAddress(publicKey);					//Generates an address from the public key

console.log("Private key:", toHex(privateKey));					//Prints the private key
console.log("Public key:", toHex(publicKey));					//Prints the public key
console.log("Public address:", toHex(publicAddress));			//Prints the public address (the last 20 bytes of the public key)