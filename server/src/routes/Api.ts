import { Router } from "express";

import LoginController from "../controllers/Api/Auth/Login";
import RegisterController from "../controllers/Api/Auth/Register";
import CryptoController from "../controllers/Api/RSAKeys/Crypto";
import DashboardController from "../controllers/Api/Secure/Dashboard";
import FinancialController from "../controllers/Api/Secure/Financial";
import BankController from "../controllers/Api/Secure/Bank";
import RegionalOfficeController from "../controllers/Api/Secure/RegionalOffice";
import UserController from "../controllers/Api/Secure/User";
import GroupController from "../controllers/Api/Secure/Group";
import ProfileController from "../controllers/Api/Secure/Profile";
import UserCheckerController from "../controllers/Api/Secure/UserChecker";
import GroupCheckerController from "../controllers/Api/Secure/GroupChecker";
import ProfileCheckerController from "../controllers/Api/Secure/ProfileChecker";

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
//router.get("/secure/dashboard", DashboardController.dashboard);

router.post("/secure/bank", BankController.bank);
router.post("/secure/reginolOffice", RegionalOfficeController.regionalOffice);
router.post("/secure/snapshot", DashboardController.snapshot);
router.post("/secure/snapshotStatus", DashboardController.snapshotStatus);
router.post("/secure/financial", FinancialController.financial);
router.post("/secure/financialD", FinancialController.financialD);

router.post("/secure/ageing", DashboardController.ageing);
router.post("/secure/piu", DashboardController.piu);
router.post("/secure/events", DashboardController.events);
router.post("/secure/transaction", DashboardController.transaction);
router.post("/secure/zone", DashboardController.zone);
router.post("/secure/velocity", DashboardController.velocity);
router.post("/secure/limitLedger", DashboardController.limitLedger);
router.post("/secure/accountLevel", DashboardController.accountLevel);


router.post("/secure/users", UserController.users);
router.post("/secure/getUser", UserController.getUser);
router.post("/secure/addUser", UserController.addUser);
router.post("/secure/updateUser", UserController.updateUser);
router.post("/secure/deleteUser", UserController.deleteUser);

router.post("/secure/userRequests", UserCheckerController.userRequests);
router.post("/secure/userAddDeleteDetails", UserCheckerController.userAddDeleteDetails);
router.put("/secure/userUpdateDetails", UserCheckerController.userUpdateDetails);
router.post("/secure/userApproval", UserCheckerController.userApproval);

router.post("/secure/groups", GroupController.groups);
router.post("/secure/getGroup", GroupController.getGroup);
router.post("/secure/addGroup", GroupController.addGroup);
router.post("/secure/updateGroup", GroupController.updateGroup);
router.post("/secure/deleteGroup", GroupController.deleteGroup);

router.post("/secure/groupRequests", GroupCheckerController.groupRequests);
router.post("/secure/groupAddDeleteDetails", GroupCheckerController.groupAddDeleteDetails);
router.put("/secure/groupUpdateDetails", GroupCheckerController.groupUpdateDetails);
router.post("/secure/groupApproval", GroupCheckerController.groupApproval);

router.put("/secure/profiles", ProfileController.profiles);
router.post("/secure/getProfile", ProfileController.getProfile);
router.post("/secure/addProfile", ProfileController.addProfile);
router.post("/secure/updateProfile", ProfileController.updateProfile);
router.post("/secure/deleteProfile", ProfileController.deleteProfile);

router.post("/secure/profileRequests", ProfileCheckerController.profileRequests);
router.post("/secure/profileAddDeleteDetails", ProfileCheckerController.profileAddDeleteDetails);
router.post("/secure/profileUpdateDetails", ProfileCheckerController.profileUpdateDetails);
router.post("/secure/profileApproval", ProfileCheckerController.profileApproval);


// // Handle GET requests to /api route
// router.get("/api", RegisterController.visit);

// // All other GET requests not handled before will return our React app
// router.get("/", RegisterController.ui);


export default router;
