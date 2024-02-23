export const Global_var = {
  //99
  BASEURL: "http://172.16.16.99:8091", //Amol local with VPN
  BASEURL1: "http://172.16.16.201:8085", //Ayush
  BASEURL2: "http://172.16.16.201:7091", //Sumit
  AUTH_BASE: "http://localhost:3007/api",
  //--------Login----------------------------------------
  URL_LOGIN: "http://localhost:3007/api/auth/login", //"/usermanagement/login/v1",
  //--------Users----------------------------------
  URL_GET_USERS: "/secure/users", //"/usermanagement/admin/users/v1",
  URL_GET_USER_BY_ID: "/secure/getUser", //"/usermanagement/admin/userDetails/v1",
  URL_ADD_USER: "/secure/addUser", //"/usermanagement/admin/addUser/v1",
  URL_UPDATE_USER: "/secure/updateUser", //"/usermanagement/admin/updateUser/v1",
  URL_DELETE_USER: "/secure/deleteUser", //"/usermanagement/admin/deleteUser/v1",
  //--------Groups----------------------------------
  URL_GET_GROUPS: "/secure/groups", //"/usermanagement/admin/groups/v1",
  URL_GET_GROUP_BY_ID: "/secure/getGroup", //"/usermanagement/admin/groupDetails/v1",
  URL_ADD_GROUP: "/secure/addGroup", //"/usermanagement/admin/addGroup/v1",
  URL_UPDATE_GROUP: "/secure/updateGroup", //"/usermanagement/admin/updateGroup/v1",
  URL_DELETE_GROUP: "/secure/deleteGroup", //"/usermanagement/admin/deleteUserGroup/v1",
  //--------Profile----------------------------------
  URL_GET_PROFILES: "/secure/profiles", //"/usermanagement/admin/profiles/v1",
  URL_GET_PROFILE_BY_ID: "/secure/getProfile", //"/usermanagement/admin/profileDetails/v1",
  URL_ADD_PROFILE: "/secure/addProfile", //"/usermanagement/admin/addProfile/v1",
  URL_UPDATE_PROFILE: "/secure/updateProfile", //"/usermanagement/admin/updateProfile/v1",
  URL_DELETE_PROFILE: "/secure/deleteProfile", //"/usermanagement/admin/deleteProfile/v1",
  //----------Checker-USER-----------------------------------------------
  URL_CHECKER_USER_REQUESTS: "/secure/userRequests", //"/usermanagement/checker/userRequests/v1",
  URL_CHECKER_USER_ADD_DELETE_DETAILS: "/secure/userAddDeleteDetails", //"/usermanagement/checker/requestDetails/v1",
  //PUT
  URL_CHECKER_USER_UPDATE_DETAILS: "/secure/userUpdateDetails", //"/usermanagement/checker/requestDetails/v1",
  URL_CHECKER_USER_APPROVAL: "/secure/userApproval", //"/usermanagement/checker/user/action/v1",
  //----------Checker-GROUP-------------------------------------------------------
  URL_CHECKER_GROUP_REQUESTS: "/secure/groupRequests", //"/usermanagement/checker/groupRequests/v1",
  URL_CHECKER_GROUP_ADD_DELETE_DETAILS: "/secure/groupAddDeleteDetails", //"/usermanagement/checker/group/v1",
  //PUT
  URL_CHECKER_GROUP_UPDATE_DETAILS: "/secure/groupUpdateDetails", //"/usermanagement/checker/group/v1",
  URL_CHECKER_GROUP_APPROVAL: "/secure/groupApproval", //"/usermanagement/checker/group/action/v1",
  //----------Checker-PROFILE-------------------------------------------------------
  //PUT
  URL_CHECKER_PROFILE_REQUESTS: "/secure/profileRequests", //"/usermanagement/checker/profile/v1",
  URL_CHECKER_PROFILE_ADD_DELETE_DETAILS: "/secure/profileAddDeleteDetails", //"/usermanagement/checker/profile/v1",
  URL_CHECKER_PROFILE_UPDATE_DETAILS: "/secure/profileUpdateDetails", // "/usermanagement/checker/profileRequests/v1",
  URL_CHECKER_PROFILE_APPROVAL: "/secure/profileApproval", //"/usermanagement/checker/profile/action/v1",
  //-------------------------------------------------------------------------------------------------------------
  //--------Dashboard API----------------------------------------------------------------------------------------
  URL_BANK: "/secure/bank", //"http://172.16.16.201:8085/dashboard/bank/v1",
  URL_EVENTS: "/secure/events", //"/dashboard/events/v1",
  URL_SNAPSHOT: "/secure/snapshot", //"/dashboard/snapshort/v1",
  URL_SNAPSHOT_STATUS: "/secure/snapshotStatus", //"/dashboard/snapshot-status/v1",
  URL_FINANCIAL: "/secure/financial", //"/dashboard/financial/v1",
  URL_VELOCITY: "/secure/velocity", //"/dashboard/velocity/v1",
  URL_AGEING: "/secure/ageing", //"/dashboard/ageingitem/v1",
  URL_LIMITLEDGER: "/secure/limitLedger", //"/dashboard/limit-ledger/v1",
  URL_RO: "/secure/reginolOffice", //"/dashboard/regional-office/v1",
  URL_PIU: "/secure/piu", //"/dashboard/piu/v1",
  URL_ACCOUNT_LEVEL: "/secure/accountLevel", //"/dashboard/acc-level/v1",
  URL_TRANSACTION: "/secure/transaction", //"/dashboard/transaction/v1",
  URL_FINANCIAL_D: "/secure/financialD",
  URL_ZONE: "/secure/zone",
  //---------Report API-------------------------------------------------------------------------------------------------
  URL_REPORT_LOGIN: "/secure/userLoginReport", //"/report/userLogin/v1",
  URL_REPORT_ACTIVE_INACTIVE: "/secure/userStatusReport", //"/report/userStatus/v1",
  URL_REPORT_FIFO: "/secure/fifoAgeingReport", //"/report/fifoAgeing/v1",
  URL_DOWNLOAD_LOGIN: "/secure/userLoginReportDownload",
  URL_DOWNLOAD_ACTIVE_INACTIVE: "/secure/userStatusReportDownload",
  URL_DOWNLOAD_FIFO: "/secure/fifoAgeingReportDownload", //"/report/fifoAgeing/download/v1",
  //---------Dropdown API-----------------------------------------------------------------------------------------------
  URL_DROPDOWN_BRANCH: "/secure/branchDD", //"/dashboard/dropdowns/branch/v1",
  URL_DROPDOWN_LOCATION: "/secure/locationDD", //"/dashboard/dropdowns/location/v1",
  URL_DROPDOWN_PD: "/secure/pdDD", //"/dashboard/dropdowns/zone/v1",
  URL_DROPDOWN_ZONE: "/secure/zoneDD", //"/dashboard/dropdowns/ro/v1",
  URL_DROPDOWN_RO: "/secure/roDD", //"/dropdowns/piu/v1",
  URL_DROPDOWN_PIU: "/secure/piuDD", //"/dropdowns/dropdowns/pd/v1",
  //------------Dashboard Download----------------------------------------------------------
  URL_DOWNLOAD_RO: "/secure/roDownload",
  URL_DOWNLOAD_PIU: "/secure/piuDownload",
  URL_DOWNLOAD_ACC_LEVEL: "/secure/accountLevelDownload",
  URL_DOWNLOAD_TRANSACTION: "/secure/transactionDownload",
  URL_DOWNLOAD_EVENTS: "/secure/eventsDownload",
  URL_DOWNLOAD_LIMIT_LEDGER: "/secure/limitLedgerDownload",
  URL_DOWNLOAD_VELOCITY: "/secure/velocityDownload",
  URL_DOWNLOAD_SUB_ACCOUNTS: "/secure/subsaideryAccountDownload",
};
