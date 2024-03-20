import * as express from "express";
import * as path from "path";
import Locals from "./Locals";
import Routes from "./Routes";
import Bootstrap from "../middlewares/Kernel";
import ExceptionHandler from "../exception/Handler";


class Express {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = express();
    // Have Node serve the files for our built React app
    this.express.use(express.static(path.join(__dirname, '../../../build')));
    this.express.get('/NHAI', (req, res) => {

      // Set headers here before sending the HTML file
      res.setHeader('Strict-Transport-Security', 'max-age=31536000');
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');

      res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });
    this.express.get('/NHAI/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });
    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  private mountDotEnv(): void {
    this.express = Locals.init(this.express);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    // Middleware to add custom headers
    this.express.use((req, res, next) => {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000');
      res.setHeader('Content-Security-Policy', "default-src 'self'");
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
      next();
    });

    this.express = Bootstrap.init(this.express);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    // this.express = Routes.mountWeb(this.express);
    this.express = Routes.mountApi(this.express);
  }

  /**
   * Starts the express server
   */
  public init(): any {
    const port: number = Locals.config().port;

    // Registering Exception / Error Handlers
    this.express.use(ExceptionHandler.logErrors);
    this.express = ExceptionHandler.notFoundHandler(this.express);
    // Start the server on the specified port
    this.express
      .listen(port, () => {
        return console.log(
          "\x1b[33m%s\x1b[0m",
          `Server :: Running @ 'http://localhost:${port}'`
        );
      })
      .on("error", (_error) => {
        return console.log("Error: ", _error.message);
      });
  }
}

/** Export the express module */
export default new Express();
