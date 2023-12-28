import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { hexToBytes, toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";
import { keccak256 } from "ethereum-cryptography/keccak";

function getAddress(publicKey) {
    const x = publicKey.slice(1);
    const hash = keccak256(x);									//Hashes the public key
    return (hash.slice(-20));
}

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey, setValidPair}) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    	}
	}

  async function refKey(evt) {
    const privateKey = evt.target.value;
	let validPair = 0;
	setPrivateKey(privateKey);
	if (privateKey.length != 64) {
		return ;
	}
	const derivedAddress = toHex(getAddress(secp256k1.getPublicKey(privateKey)));
    console.log("Address :", address);
    console.log("Calculated Address:", derivedAddress);
    if (address) 
	{
		if (address === derivedAddress){
			setValidPair(1);
			console.log("Valid Pair!");
		} else {
			console.log("Invalid Pair :(");
			setValidPair(0);
			return ;
			}
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input>
      </label> 
	  <label>
        Private Key
        <input placeholder="Enter your private key for address if you want to transfer funds" value={privateKey} onChange={refKey}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;