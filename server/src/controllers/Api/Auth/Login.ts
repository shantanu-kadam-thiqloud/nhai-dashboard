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
    console.log("Encrypted value from FE -> ", req?.body?.encrypted);
    const privateKey = Crypto.getPrivateKeyPem();
    const publicKey = Crypto.getPublicKeyPem();
    if (!privateKey || !publicKey) {
      return res.status(500).json({ error: "Key pair is not available." });
    }
    // console.log('decryption publicKeyPem :---', publicKey);
    // console.log('Decryption privateKeyPem :---', privateKey);
    const base64EncodedEncryptedData = req.body.encrypted; // Replace with your received data
    const encryptedData = forge.util.decode64(base64EncodedEncryptedData);
    const privateKeyObject = forge.pki.privateKeyFromPem(privateKey);
    const decrypted = privateKeyObject.decrypt(encryptedData, "RSA-OAEP");
    // Convert the decrypted binary data back to a UTF-8 string
    const decryptedText = forge.util.decodeUtf8(decrypted);
    // console.log('convert to object ', JSON.parse(decrypted));
    // console.log('Decrypted Data:', decryptedText);
    const unencryptedData = JSON.parse(decryptedText);
    console.log("Decrypted value from BE---->", JSON.parse(decryptedText));
    //------------------------------------------------------------------------------------------------------------
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
    req.body = {
      requestMetaData: {
        applicationId: "nhai-dashboard",
        correlationId: uuid(), //"ed75993b-c55c-45b4-805a-c26bda53f0b8",
      },
      email: unencryptedData.username, //"ro_telang@nhai.com",
    };
    try {
      // Dummy login API
      const LoginUserr = await api.post("http://172.16.16.99:8091/usermanagement/login/v1", req.body, "");//'https://dummyjson.com/auth/login'
      console.log('Incoming Data-->', req.body);
      //Set to redis-----------------------------------------------------------------
      const LoginUser = LoginUserr.data;
      if (LoginUser) {
        const session_id = uuid();
        delete LoginUser.token;
        //Internal API call for session Token(30 min) 
        const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);

        LoginUser.sessionId = session_id;
        LoginUser.sessionToken = session_token.token;
        // const usage = 2;
        // const ttlInSeconds = null; 
        console.log("User Details ->", LoginUser);
        const jsonString = JSON.stringify(LoginUser);

        const redisRES = await useRedis.set(session_id, jsonString, ttlInSeconds);
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
      if (error.response) {
        // If the error has a response object, meaning it's an HTTP error response
        const statusCode = error.response.status;
        if (statusCode === 400) {
          // Handle Bad Request error (status code 400) here
          res.status(400).json({ error: 'Bad Request: ' + error.response.data });
        } else if (statusCode === 500) {
          // Handle Internal Server Error (status code 500) here
          res.status(500).json({ error: 'Internal Server Error: ' + error.response.data });
        } else {
          // Handle other HTTP errors here if needed
          res.status(statusCode).json({ error: 'HTTP Error: ' + error.response.data });
        }
      } else {
        // Handle non-HTTP errors here
        res.status(500).json({ error: 'Error during POST request: ' + error });
      }
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