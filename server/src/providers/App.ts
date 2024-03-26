import * as path from "path";
import * as dotenv from "dotenv";

import Express from "./Express";
import * as express from "express";
import Locals from "./Locals";
import Log from "../middlewares/Log";
import Redis from "./Redis";
const useRedis = new Redis();

class App {
  // Loads your dotenv file
  public loadConfiguration(): void {
    Log.info("Configuration :: Booting @ Master...");
    // dotenv.config({ path: path.join(__dirname, "../../.env") });
  }

  // Loads your Server
  public loadServer(): void {
    Log.info("Server :: Booting @ Master...");
    Express.init();
    //useRedis.quit();
    useRedis.connect();
  }
}

export default new App();
