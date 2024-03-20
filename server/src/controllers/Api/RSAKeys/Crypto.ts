
import * as forge from 'node-forge';

class Crypto {
  private static privateKeyPem: string | null = null;
  private static publicKeyPem: string | null = null;
  public static publicKey(req, res): any {
    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
    Crypto.publicKeyPem = forge.pki.publicKeyToPem(keyPair.publicKey);
    Crypto.privateKeyPem = forge.pki.privateKeyToPem(keyPair.privateKey);
    res.send(Crypto.publicKeyPem);
    // console.log('Crypto.publicKeyPem :---', Crypto.publicKeyPem);
    // console.log('Crypto.privateKeyPem :---', Crypto.privateKeyPem);
    //res.json({ message: "Heello" });
  }
  public static getPublicKeyPem(): string | null {
    return Crypto.publicKeyPem;
  }
  public static getPrivateKeyPem(): string | null {
    return Crypto.privateKeyPem;
  }
}

export default Crypto;