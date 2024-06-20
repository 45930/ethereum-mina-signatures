import { ethers } from 'ethers';

export const generateEthereumSignature = async (msg: string) => {
    const wallet = ethers.Wallet.createRandom();
    const signedMessage = await wallet.signMessage(msg);

    return [signedMessage.toString(), wallet.address];
}