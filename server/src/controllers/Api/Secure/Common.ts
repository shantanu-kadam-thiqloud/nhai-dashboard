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
        const token = redisRES.responseObject.token;//"abc";//redisRES.token;
        const userName = redisRES.responseObject.userName;
        console.log("Redis details =>", redisRES);
        console.log("User Name from Redis =>", userName, " Token from Redis =>", token);
        const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
        //console.log('tokenVerified:---', tokenVerified.data.message);
        if (tokenVerified.data.message === "Invalid token") {
            const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
            //console.log('session_token', session_token.token);
            const headers: any = {
                'Content-Type': 'application/json',
                'Authorization': session_token.token,
            };
            redisRES.sessionToken = session_token.token;
            const jsonString = JSON.stringify(redisRES);
            await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
            res.status(500).json({
                message: "Token refresh."
            });
        } else {
            try {
                req.body.userName = userName;
                const responseData = await api.post(API_baseUrl, req.body, token);
                console.log("URL =>", API_baseUrl, "Request Headers =>", responseData.headers, "Request Body =>", req.body, " Response =>", responseData.data);
                if (responseData.status === 200) {
                    res.json({
                        data: responseData.data,
                    });
                }
                else if (responseData.status === 404 || responseData.status === 400) {
                    return res.status(404).json({ error: '404 Bad request' });
                }
                else if (responseData.status === 500) {
                    return res.status(500).json({ error: '500 Bad request' });
                }
                else {
                    res.json({
                        data: responseData.data,
                    });
                }



            } catch (error) {
                console.error('Error occurred :', error);
                res.status(404).json({ error: error.message });
            }
        }
    } else if (redisRES == "Please provide redis key") {
        return res.status(500).json({
            message: "Please provide valid redis key"
        });
    } else {
        console.log('session expired');
        return res.status(500).json({
            message: "session expired"
        });
    }
}
// Define the function with a dynamic base URL parameter
export async function fetchPutData(API_baseUrl: string, req: any, res: any, next: any): Promise<any> {

    const uuidHeader = req.headers['xuuid'];
    const useRedis = new Redis();
    const redisRES = await useRedis.get(uuidHeader);


    if (redisRES !== null && redisRES !== "Please provide redis key") {
        const token = redisRES.responseObject.token;//"abc";//redisRES.token;
        const userName = redisRES.responseObject.userName;
        console.log("Redis details =>", redisRES);
        console.log("User Name from Redis =>", userName, " Token from Redis =>", token);
        const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
        // console.log('tokenVerified:---', tokenVerified.data.message);
        if (tokenVerified.data.message === "Invalid token") {
            const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
            //  console.log('session_token', session_token.token);
            const headers: any = {
                'Content-Type': 'application/json',
                'Authorization': session_token.token,
            };
            redisRES.sessionToken = session_token.token;
            const jsonString = JSON.stringify(redisRES);
            await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
            res.status(500).json({
                message: "Token refresh."
            });
        } else {
            try {
                req.body.userName = userName;
                const responseData = await api.put(API_baseUrl, req.body, token);
                console.log("URL =>", API_baseUrl, "Request Headers =>", responseData.headers, "Request Body =>", req.body, " Response =>", responseData.data);
                if (responseData.status === 200) {
                    res.json({
                        data: responseData.data,
                    });
                }
                else if (responseData.status === 404 || responseData.status === 400) {
                    return res.status(404).json({ error: '404 Bad request' });
                }
                else if (responseData.status === 500) {
                    return res.status(500).json({ error: '500 Bad request' });
                }
                else {
                    res.json({
                        data: responseData.data,
                    });
                }

            } catch (error) {
                console.error('Error occurred :', error);
                res.status(404).json({ error: error.message });
            }
        }
    } else if (redisRES == "Please provide redis key") {
        return res.status(500).json({
            message: "Please provide valid redis key"
        });
    } else {
        console.log('session expired');
        return res.status(500).json({
            message: "session expired"
        });
    }
}

export async function downloadData(API_baseUrl: string, req: any, res: any, next: any): Promise<any> {
    const uuidHeader = req.headers['xuuid'];
    const useRedis = new Redis();
    const redisRES = await useRedis.get(uuidHeader);


    if (redisRES !== null && redisRES !== "Please provide redis key") {
        const token = redisRES.responseObject.token;//"abc";//redisRES.token;
        const userName = redisRES.responseObject.userName;
        console.log("Redis details =>", redisRES);
        console.log("User Name from Redis =>", userName, " Token from Redis =>", token);
        const tokenVerified = await api.post(BASE_URL + `/api/auth/verify-JWT`, { session_token: redisRES.sessionToken }, "");
        // console.log('tokenVerified:---', tokenVerified.data.message);
        if (tokenVerified.data.message === "Invalid token") {
            const session_token = await api.get(BASE_URL + `/api/auth/generate-token`);
            // console.log('session_token', session_token.token);
            const headers: any = {
                'Content-Type': 'application/json',
                'Authorization': session_token.token,
            };
            redisRES.sessionToken = session_token.token;
            const jsonString = JSON.stringify(redisRES);
            await useRedis.set(uuidHeader, jsonString, ttlInSeconds);
            res.status(500).json({
                message: "Token refresh."
            });
        } else {

            try {
                req.body.userName = userName;
                const responseData = await api.downloadPost(API_baseUrl, req.body, token);
                console.log("URL =>", API_baseUrl, "Request Headers =>", responseData.headers, "Request Body =>", req.body, " Response =>", responseData.data);
                res.set({
                    'Content-Type': "text/plain",
                });

                if (responseData.status === 200) {
                    res.json({
                        data: responseData.data,
                    });
                }
                else if (responseData.status === 404 || responseData.status === 400) {
                    return res.status(404).json({ error: '404 Bad request' });
                }
                else if (responseData.status === 500) {
                    return res.status(500).json({ error: '500 Bad request' });
                }
                else {
                    res.json({
                        data: responseData.data,
                    });
                }

            } catch (error) {
                console.error('Error occurred :', error);
                res.status(404).json({ error: error.message });
            }

        }
    } else if (redisRES == "Please provide redis key") {
        return res.status(500).json({
            message: "Please provide valid redis key"
        });
    } else {
        console.log('session expired');
        return res.status(500).json({
            message: "session expired"
        });
    }
}