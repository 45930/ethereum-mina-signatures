import { Bytes, createEcdsa, createForeignCurve, Crypto, ForeignCurve } from 'o1js';

class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}
class Ecdsa extends createEcdsa(Secp256k1) {}
class Bytes32 extends Bytes(32) {}

let privateKey = Secp256k1.Scalar.random();
let publicKey = Secp256k1.generator.scale(privateKey);

export const verifyEthereumSignature = async (pubKeyStr: string, sigStr: string, msgStr: string) => {
    // const pubKey = Secp256k1.Scalar.from(pubKeyStr.replace('0x', ''))
    // const sig = Ecdsa.fromHex(sigStr.replace('0x', ''));
    // const msg = Bytes32.fromString(msgStr);


    // sig.verifyV2(msg, pubKey)
}