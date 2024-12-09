import fs from 'fs'; 
import { Wallet } from ".";
import { AminoWallet } from "./wallet_amino";
import * as secp256k1 from "@noble/secp256k1";
import { toHex } from "@cosmjs/encoding";

const mnemonics = [
  // secret address: secret1ap26qrlp8mcq2pg6r47w43l0y8zkqm8a450s03
  // secp256k1.PubKey: A07oJJ9n4TYTnD7ZStYyiPbB3kXOZvqIMkchGmmPRAzf
  "grant rice replace explain federal release fix clever romance raise often wild taxi quarter soccer fiber love must tape steak together observe swap guitar", // account a
];
const mnemonic = mnemonics[0];
const walletAmino = new AminoWallet(mnemonic);
const walletProto = new Wallet(mnemonic);
console.log(walletAmino.address);

const address = walletAmino.address;
const publicKeyHex = '0x' + toHex(secp256k1.getPublicKey(walletAmino.privateKey, true));
const privateKeyHex = '0x' + toHex(walletAmino.privateKey);
console.log(publicKeyHex);
const wallet = {
  address,
  publicKeyHex,
  privateKeyHex,
}

fs.writeFile('newfile.txt', JSON.stringify(wallet, null, 2), (error) => { 
  if (error) throw "Error: Unable to write privateKey to file"; 
});
