// import * as api from '../../../middlewares/API';
// import Redis from "../../../providers/Redis";
import Locals from '../../../providers/Locals';
import { fetchData } from './Common'
// const useRedis = new Redis();
// const ttlInSeconds = 180; // 30 min
// const BASE_URL = Locals.config().baseUrl;
const BASE_URL_A = Locals.config().aBaseUrl;
class Bank {
  public static async bank(req: any, res: any, next: any): Promise<any> {

    fetchData(BASE_URL_A + '/dashboard/bank/v1', req, res, next);
    // const uuidHeader = req.headers['xuuid'];
    // const useRedis = new Redis();
    // const redisRES = await useRedis.get(uuidHeader);

    // if (redisRES !== null && redisRES !== "Please provide redis key") {
    //   console.log('jwt token get from redis:-----', redisRES.sessionToken);
    //   const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
    //   console.log('tokenVerified:---', tokenVerified.message);
    //   if (tokenVerified.message === "Invalid token") {
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
    //     res.json({
    //       message: "Token refresh."
    //     });
    //   } else {
    //     const Bankdata = await api.post(BASE_URL_A + '/dashboard/bank/v1', req.body, "");
    //     console.log("Bank from api", Bankdata);
    //     res.json({
    //       data: Bankdata,
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
}

export default Bank;
