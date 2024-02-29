import * as express from 'express';
import * as api from '../../../middlewares/API';
import axios from 'axios';
import Redis from "../../../providers/Redis";
import { v4 as uuid } from "uuid";
import Locals from '../../../providers/Locals';
import * as forge from 'node-forge';
import Crypto from '../RSAKeys/Crypto';
import { json } from 'body-parser';

const useRedis = new Redis();
const BASE_URL = Locals.config().baseUrl;
const ttlInSeconds = 180; // 30 min
class Login {
  public static async login(req: any, res: any, next: any): Promise<any> {
    // console.log("login API i/p -> ", req, res);
    //   const privateKey = Crypto.getPrivateKeyPem();
    //   const publicKey = Crypto.getPublicKeyPem();

    //   if (!privateKey || !publicKey) {
    //     return res.status(500).json({ error: "Key pair is not available." });
    //   }
    //   console.log('decryption publicKeyPem :---', publicKey );
    //   console.log('Decryption privateKeyPem :---', privateKey);
    //   const base64EncodedEncryptedData = req.body.encrypted; // Replace with your received data

    // const encryptedData = forge.util.decode64(base64EncodedEncryptedData);

    // const privateKeyObject = forge.pki.privateKeyFromPem(privateKey);
    // const decrypted = privateKeyObject.decrypt(encryptedData, "RSA-OAEP");
    // // Convert the decrypted binary data back to a UTF-8 string
    // const decryptedText = forge.util.decodeUtf8(JSON.parse(decrypted));
    // console.log('convert to object ',JSON.parse(decrypted));
    // console.log('Decrypted Data:',decryptedText);

    const unencryptedData = req.body.encrypted;
    const URL = BASE_URL + `/api/auth/generate-token`;
    //Internal API call for single use Token 
    const singleUseJwt = await api.get(URL);

    //adding jwt token to header
    const headers: any = {
      'Content-Type': 'application/json', // Example: setting Content-Type
      'Authorization': singleUseJwt.token, // Example: setting an Authorization header
    };
    // axios.defaults.headers = headers;
    //console.log(headers);

    try {
      // Dummy login API
      const LoginUser = await api.post("http://172.16.16.201:8091/usermanagement/login/v1", req.body, "");//'https://dummyjson.com/auth/login'
      console.log('Incoming Data-->', req.body);
      //Set to redis-----------------------------------------------------------------
      if (LoginUser) {
        const userid = LoginUser['responseObject'].userId;
        const redisData = await useRedis.get(userid);
        if(redisData){
          const redisRESDelete = await useRedis.delete(userid);
        }
        const session_id = uuid()
        delete LoginUser.token;
        //Internal API call for session Token(30 min) 
        const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);

        LoginUser.sessionId = session_id;
        LoginUser.sessionToken = session_token.token;
        // const usage = 2;
        // const ttlInSeconds = null; 
        console.log("User Details ->", LoginUser);
        const jsonString = JSON.stringify(LoginUser);
        const redisRES = await useRedis.set(userid, jsonString, ttlInSeconds);
        //console.log(redisRES);
        // Sending the response after processing
        res.json({
          message: "User login successfully.",
          data: LoginUser,
          session_id: session_id
        });
        // await useRedis.get(session_id);
      } else {
        // Sending the response after processing
        res.json({ error: "Login Failed" });
      }

    } catch (error) {
      console.error('Error during POST request:', error);
      res.status(500).json({ error: 'Error during POST request' + error });
    }
  }

  public static async logout(req: any, res: any, next: any): Promise<any> {
    const session_id = req.body.encrypted;
    const redisRES = await useRedis.delete(session_id);
    //console.log(redisRES);       
    res.json({
      message: "User logout successfully."
    });
  }
}

export default Login;