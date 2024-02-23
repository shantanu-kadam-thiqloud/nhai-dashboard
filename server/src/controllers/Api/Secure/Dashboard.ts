// import * as express from 'express';
// import * as api from '../../../middlewares/API';
// import axios from 'axios';
// import Redis from "../../../providers/Redis";
// import { v4 as uuid } from "uuid";
import Locals from '../../../providers/Locals';
import { fetchData } from './Common'
// const useRedis = new Redis();
// const ttlInSeconds = 180; // 30 min
// const BASE_URL = Locals.config().baseUrl;
const BASE_URL_A = Locals.config().aBaseUrl;
class Dashboard {
  public static async snapshot(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/snapshort/v1', req, res, next);
    // const uuidHeader = req.header('XUuid');
    // const useRedis = new Redis();
    // const redisRES = await useRedis.get(uuidHeader);

    // console.log('Received UUID from frontend:- ', uuidHeader || 0);
    // console.log('Redis data present:-', redisRES);

    // if (redisRES !== null && redisRES !== "Please provide redis key") {
    //   console.log('jwt token get from redis:-----', redisRES.sessionToken);
    //   const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
    //   console.log('tokenVerified:---', tokenVerified.message);
    //   if (tokenVerified.message === "Invalid token") {
    //     debugger
    //     const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
    //     console.log('session_token', session_token.token);
    //     const headers: any = {
    //       'Content-Type': 'application/json', // Example: setting Content-Type
    //       'Authorization': session_token.token, // Example: setting an Authorization header
    //     };
    //     //----------Update redis with token----------- 
    //     redisRES.sessionToken = session_token.token;
    //     const jsonString = JSON.stringify(redisRES);
    //     await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
    //     //axios.defaults.headers = headers;
    //     console.log('headers:-', headers);
    //     //const registerUser = await api.post('https://dummyjson.com/users/add', encryptedData);
    //     res.json({
    //       message: "Token refresh."
    //     });
    //   } else {
    //     res.json({
    //       message: "valid token."
    //     });
    //   }
    // } else if (redisRES == "Please provide redis key") {
    //   return res.json({
    //     message: "Please provide valid redis key"
    //   });
    // }
    // else {
    //   console.log('session expired');
    //   return res.json({
    //     message: "session expired"
    //   });

    // }
  }
  public static async snapshotStatus(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/snapshot-status/v1', req, res, next);
  }
  //----------
  public static async ageing(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/ageingitem/v1', req, res, next);
  }
  public static async piu(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/piu/v1', req, res, next);
  }
  public static async events(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/events/v1', req, res, next);
  }
  public static async transaction(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/transaction/v1', req, res, next);
  }
  public static async zone(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/zone/v1', req, res, next);
  }
  public static async velocity(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/velocity/v1', req, res, next);
  }
  public static async limitLedger(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/limit-ledger/v1', req, res, next);
  }
  public static async accountLevel(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/acc-level/v1', req, res, next);
  }

}

export default Dashboard;
