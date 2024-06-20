import 'o1js';
import { generateEthereumSignature } from "./generateEthereumSignature.js";
import { verifyEthereumSignature } from './verifyEthereumSignature.js';

const msgStr = 'this is a test';
const [sigStr, pubKeyStr] = await generateEthereumSignature(msgStr);
console.log(sigStr);
console.log(pubKeyStr);

verifyEthereumSignature(pubKeyStr, sigStr, msgStr)