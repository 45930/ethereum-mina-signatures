import elliptic from 'elliptic';
import { Bytes, createEcdsa, createForeignCurve, Crypto, ForeignCurve, ForeignField } from 'o1js';

const ec = elliptic.ec;

class Secp256k1 extends createForeignCurve(Crypto.CurveParams.Secp256k1) {}
class Ecdsa extends createEcdsa(Secp256k1) {}
class Bytes32 extends Bytes(32) {}

const eCurve = new ec('secp256k1');

export const verifyEthereumSignature = async (pubKeyStr: string, sigStr: string, msgStr: string) => {
    const publicKeyHex = pubKeyStr.replace('0x', '');
    const publicKeyBytes = Buffer.from(publicKeyHex, 'hex');
    const publicKey = eCurve.keyFromPublic(publicKeyBytes);

    const sig = Ecdsa.fromHex(sigStr);
    const msg = Bytes32.fromString(msgStr);

    console.log({x: BigInt(publicKey.getPublic().getX().toString()), y: BigInt(publicKey.getPublic().getY().toString())});

    const valid = sig.verifyV2(msg, {x: BigInt(publicKey.getPublic().getX().toString()), y: BigInt(publicKey.getPublic().getY().toString())})

    return valid;
}