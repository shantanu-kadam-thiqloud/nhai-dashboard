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
import ReportController from "../controllers/Api/Secure/Report";
import DropdownController from "../controllers/Api/Secure/Dropdown";
import DashboardDownloadController from "../controllers/Api/Secure/DashboardDownload";
import MenuSubmenuActionController from "../controllers/Api/Secure/MenuSubmenuAction";
import ExternalUserController from "../controllers/Api/Auth/ExternalUser";
import TransactionFileController from "../controllers/Api/Secure/TransactionFile";
const router = Router();

router.post("/auth/login", LoginController.login);
router.post("/auth/logout", LoginController.logout);
router.post("/auth/register", RegisterController.register);
router.get("/RSA/public-key", CryptoController.publicKey);
// router.post('/auth/refresh-token', expressJwt({ secret: Locals.config().appSecret }), RefreshTokenController.perform);

router.post("/auth/externalLogin", ExternalUserController.externalLogin);
router.post("/auth/changePassword", ExternalUserController.changePassword);
router.post("/auth/otpValidation", ExternalUserController.otpValidation);
router.post("/auth/externalLogout", ExternalUserController.logout);

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

router.post("/secure/subsaideryAccountDownload", DashboardDownloadController.subsaideryAccountDownload);
router.post("/secure/roDownload", DashboardDownloadController.roDownload);
router.post("/secure/accountLevelDownload", DashboardDownloadController.accountLevelDownload);
router.post("/secure/velocityDownload", DashboardDownloadController.velocityDownload);
router.post("/secure/limitLedgerDownload", DashboardDownloadController.limitLedgerDownload);
router.post("/secure/eventsDownload", DashboardDownloadController.eventsDownload);
router.post("/secure/transactionDownload", DashboardDownloadController.transactionDownload);
router.post("/secure/piuDownload", DashboardDownloadController.piuDownload);


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

router.post("/secure/profiles", ProfileController.profiles);
router.post("/secure/getProfile", ProfileController.getProfile);
router.post("/secure/addProfile", ProfileController.addProfile);
router.post("/secure/updateProfile", ProfileController.updateProfile);
router.post("/secure/deleteProfile", ProfileController.deleteProfile);

router.put("/secure/profileRequests", ProfileCheckerController.profileRequests);
router.post("/secure/profileAddDeleteDetails", ProfileCheckerController.profileAddDeleteDetails);
router.post("/secure/profileUpdateDetails", ProfileCheckerController.profileUpdateDetails);
router.post("/secure/profileApproval", ProfileCheckerController.profileApproval);

router.post("/secure/userLoginReport", ReportController.userLoginReport);
router.post("/secure/userStatusReport", ReportController.userStatusReport);
router.post("/secure/fifoAgeingReport", ReportController.fifoAgeingReport);
router.post("/secure/userLoginReportDownload", ReportController.userLoginReportDownload);
router.post("/secure/userStatusReportDownload", ReportController.userStatusReportDownload);
router.post("/secure/fifoAgeingReportDownload", ReportController.fifoAgeingReportDownload);

router.post("/secure/branchDD", DropdownController.branchDD);
router.post("/secure/locationDD", DropdownController.locationDD);
router.post("/secure/pdDD", DropdownController.pdDD);
router.post("/secure/zoneDD", DropdownController.zoneDD);
router.post("/secure/roDD", DropdownController.roDD);
router.post("/secure/piuDD", DropdownController.piuDD);

router.post("/secure/addMenuSubmenuAction", MenuSubmenuActionController.addMenuSubmenuAction);
router.post("/secure/updateMenuSubmenuAction", MenuSubmenuActionController.updateMenuSubmenuAction);
router.post("/secure/deleteMenuSubmenuAction", MenuSubmenuActionController.deleteMenuSubmenuAction);
router.post("/secure/getMenuSubmenuActionRequests", MenuSubmenuActionController.getMenuSubmenuActionRequests);
router.post(
    "/secure/getMenuSubmenuActionAddDeleteDetails", MenuSubmenuActionController.getMenuSubmenuActionAddDeleteDetails);
router.post(
    "/secure/getMenuSubmenuActionUpdateDetails", MenuSubmenuActionController.getMenuSubmenuActionUpdateDetails);
router.post("/secure/menuSubmenuActionApproval", MenuSubmenuActionController.menuSubmenuActionApproval);
router.post("/secure/getMenuJson", MenuSubmenuActionController.getMenuSubmenuActionJson);
router.post("/secure/UpdateMenuJson", MenuSubmenuActionController.UpdateMenuSubmenuActionJson);


router.post("/secure/uploadAccountFile", TransactionFileController.uploadAcccountSummaryFile);
router.post("/secure/uploadSanctionFile", TransactionFileController.uploadSanctionLimitFile);
router.post("/secure/processMainTransaction", TransactionFileController.processMain);
router.post("/secure/processCalapdTransaction", TransactionFileController.processCalapd);
router.post("/secure/getMainTransaction", TransactionFileController.getMainTransaction);
router.post(
    "/secure/getCALAPDTransaction", TransactionFileController.getCALAPDTransaction);
router.post(
    "/secure/updateCALAPDTransaction", TransactionFileController.updateCALAPDTransaction);
router.post("/secure/updateMainTransaction", TransactionFileController.updateMainTransaction);
router.post("/secure/downloadCALAPDTransaction", TransactionFileController.downloadCALAPDTransaction);
router.post("/secure/downloadMainTransaction", TransactionFileController.downloadMainTransaction);



// // Handle GET requests to /api route
// router.get("/api", RegisterController.visit);

// // All other GET requests not handled before will return our React app
// router.get("/", RegisterController.ui);


export default router;
