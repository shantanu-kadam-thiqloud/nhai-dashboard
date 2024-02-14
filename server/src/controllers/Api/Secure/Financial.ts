// import * as express from 'express';
// import * as api from '../../../middlewares/API';
// import axios from 'axios';
// import Redis from "../../../providers/Redis";
// import { v4 as uuid } from "uuid";
// import Locals from '../../../providers/Locals';
// const useRedis = new Redis();
// const ttlInSeconds = 180; // 30 min
import Locals from '../../../providers/Locals';
import { fetchData } from './Common'
const BASE_URL_A = Locals.config().aBaseUrl;
class Financial {
  public static async financial(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/financial/v1', req, res, next);
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
    //       data: {
    //         "deposits": {
    //           "cumulativeDeposits": "0.0",
    //           "interestCredited": "0.0",
    //           "totalBalance": "0.0"
    //         },
    //         "disbursements": {
    //           "cumulativeDisbursements": "0.0",
    //           "paidtoBeneficiary": "0.0",
    //           "paidforAdminExpenses": "0.0",
    //           "paidforTDS": "0.0",
    //           "otherDebits": "0.0",
    //           "interestTransfer": "0.0",
    //           "lastDaytransactionReturn": "0.0"
    //         },
    //         "summary": {
    //           "nodalAccountBalance": "10,360.07",
    //           "cumulativeLimitAssigned": "39,430.72",
    //           "returnCreditinPDAccount": "0.0",
    //           "balanceLimittobeAssigned": "0.0",
    //           "interestAccruedtillNow": "0.0",
    //           "creditAdjustment": "0.0"
    //         }
    //       }
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

  public static async financialD(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/financialD/v1', req, res, next);
  }
}

export default Financial;
