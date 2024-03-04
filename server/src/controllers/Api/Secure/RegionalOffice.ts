
// import * as api from '../../../middlewares/API';
// import Redis from "../../../providers/Redis";
import Locals from '../../../providers/Locals';
import { fetchData } from './Common'
// const useRedis = new Redis();
// const ttlInSeconds = 180; // 30 min
const BASE_URL_A = Locals.config().aBaseUrl;
class RegionalOffice {
  public static async regionalOffice(req: any, res: any, next: any): Promise<any> {
    fetchData(BASE_URL_A + '/dashboard/regional-office/v1', req, res, next);

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
    //     
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
    //         "regionWiseData": [
    //           {
    //             "regionalOffice": "Total",
    //             "zone": "",
    //             "countOfPIU": "130",
    //             "countOfSubsidiaryAccounts": "168",
    //             "crore": {
    //               "sanctionLimit": "39,430.72",
    //               "utilizedLimit": "29,297.98",
    //               "unUtilizedLimit": "10,132.74",
    //               "utilizedPercent": "74.30%"
    //             },
    //             "decimal": {
    //               "sanctionLimit": "3,94,30,71,77,040.11",
    //               "utilizedLimit": "2,92,97,98,09,291.66",
    //               "unUtilizedLimit": "1,01,32,73,67,748.45",
    //               "utilizedPercent": "74.30%"
    //             }
    //           },
    //           {
    //             "regionalOffice": "Bhubaneswar",
    //             "zone": "East",
    //             "countOfPIU": "6",
    //             "countOfSubsidiaryAccounts": "18",
    //             "crore": {
    //               "sanctionLimit": "394.00",
    //               "utilizedLimit": "324.81",
    //               "unUtilizedLimit": "69.19",
    //               "utilizedPercent": "82.44%"
    //             },
    //             "decimal": {
    //               "sanctionLimit": "3,94,00,43,560.88",
    //               "utilizedLimit": "3,24,81,40,501.00",
    //               "unUtilizedLimit": "69,19,03,059.88",
    //               "utilizedPercent": "82.44%"
    //             }
    //           }
    //         ]
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
}

export default RegionalOffice;
