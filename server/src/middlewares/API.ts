import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

// Middleware function to make a GET request
export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// Middleware function to make a POST request
export const post = async (url: string, data: any, customHeaders: any) => {

  try {
    const response = await axios.post(url, data, customHeaders);

    return response;
  } catch (error) {
    throw error;
  }
};

export const downloadPost = async (url: string, data: any) => {
  const headers = { 'Content-Type': 'blob' };
  try {
    const response = await axios.post(url, data);//, { headers: headers }responseType: 'arraybuffer',
    return response;
  } catch (error) {
    throw error;
  }
};

// Middleware function to make a PUT request
export const put = async (url: string, data: any, customHeaders: any) => {
  //const { endpoint, data } = req.body;

  try {
    const response = await axios.put(url, data);
    return response; // Sending the response back to the client
  } catch (error) {
    throw (error); // Passing the error to the error handling middleware
  }
};

// Middleware function to make a DELETE request
export const del = async (req: Request, res: Response, next: NextFunction) => {
  const { endpoint } = req.params;

  try {
    const response = await axios.delete(endpoint);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
