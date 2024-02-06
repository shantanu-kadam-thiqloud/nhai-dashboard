import { Router } from "express";

import LoginController from "../controllers/Api/Auth/Login";
import RegisterController from "../controllers/Api/Auth/Register";
import CryptoController from "../controllers/Api/RSAKeys/Crypto";
import DashboardController from "../controllers/Api/Secure/Dashboard";
import FinancialController from "../controllers/Api/Secure/Financial";
import BankController from "../controllers/Api/Secure/Bank";
import RegionalOfficeController from "../controllers/Api/Secure/RegionalOffice";


const router = Router();

router.post("/auth/login", LoginController.login);
router.post("/auth/logout", LoginController.logout);
router.post("/auth/register", RegisterController.register);
router.get("/RSA/public-key", CryptoController.publicKey);
// router.post('/auth/refresh-token', expressJwt({ secret: Locals.config().appSecret }), RefreshTokenController.perform);

//Dummy API for JWT
router.get("/auth/generate-token", RegisterController.genrateToken);
router.post("/auth/verify-token", RegisterController.verifyToken);
router.post("/auth/verify-JWT", RegisterController.verifyJWT);

//API for checking Redis access
router.get("/auth/redis", RegisterController.redisAccess);

//API for Dashboard with /secure
router.get("/secure/dashboard", DashboardController.dashboard);
router.get("/secure/financial", FinancialController.financial);
router.get("/secure/reginolOffice", RegionalOfficeController.regionalOffice);

// // Handle GET requests to /api route
// router.get("/api", RegisterController.visit);

// // All other GET requests not handled before will return our React app
// router.get("/", RegisterController.ui);


export default router;
