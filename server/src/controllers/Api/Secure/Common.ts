import * as api from '../../../middlewares/API';
import Redis from "../../../providers/Redis";
import Locals from '../../../providers/Locals';
const useRedis = new Redis();
const ttlInSeconds = 180; // 30 min
const BASE_URL = Locals.config().baseUrl;

// Define the function with a dynamic base URL parameter
export async function fetchData(API_baseUrl: string, req: any, res: any, next: any): Promise<any> {
    const uuidHeader = req.headers['xuuid'];
    const useRedis = new Redis();
    const redisRES = await useRedis.get(uuidHeader);

    if (redisRES !== null && redisRES !== "Please provide redis key") {
        console.log('jwt token get from redis:-----', redisRES.sessionToken);
        const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
        console.log('tokenVerified:---', tokenVerified.message);
        if (tokenVerified.message === "Invalid token") {
            const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
            console.log('session_token', session_token.token);
            const headers: any = {
                'Content-Type': 'application/json',
                'Authorization': session_token.token,
            };
            redisRES.sessionToken = session_token.token;
            const jsonString = JSON.stringify(redisRES);
            await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
            res.json({
                message: "Token refresh."
            });
        } else {
            const responseData = await api.post(API_baseUrl, req.body, "");
            console.log(`Response from ${API_baseUrl} api ->`, responseData);
            res.json({
                data: responseData,
            });
        }
    } else if (redisRES == "Please provide redis key") {
        return res.json({
            message: "Please provide valid redis key"
        });
    } else {
        console.log('session expired');
        return res.json({
            message: "session expired"
        });
    }
}
