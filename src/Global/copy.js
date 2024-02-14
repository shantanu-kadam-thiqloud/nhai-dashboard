export const Global_var = {
  //99
  BASEURL: "http://172.16.16.99:8091", //Amol local with VPN
  BASEURL1: "http://172.16.16.201:8085", //Ayush
  BASEURL2: "http://172.16.16.201:7091", //Sumit
  AUTH_BASE: "http://localhost:3007/api",
  //--------Login----------------------------------------
  URL_LOGIN: "http://localhost:3007/api/auth/login", //"/usermanagement/login/v1",
  //--------Users----------------------------------
  URL_GET_USERS: "/usermanagement/admin/users/v1",
  URL_GET_USER_BY_ID: "/usermanagement/admin/userDetails/v1",
  URL_ADD_USER: "/usermanagement/admin/addUser/v1",
  URL_UPDATE_USER: "/usermanagement/admin/updateUser/v1",
  URL_DELETE_USER: "/usermanagement/admin/deleteUser/v1",
  //--------Groups----------------------------------
  URL_GET_GROUPS: "/usermanagement/admin/groups/v1",
  URL_GET_GROUP_BY_ID: "/usermanagement/admin/groupDetails/v1",
  URL_ADD_GROUP: "/usermanagement/admin/addGroup/v1",
  URL_UPDATE_GROUP: "/usermanagement/admin/updateGroup/v1",
  URL_DELETE_GROUP: "/usermanagement/admin/deleteUserGroup/v1",
  //--------Profile----------------------------------
  URL_GET_PROFILES: "/usermanagement/admin/profiles/v1",
  URL_GET_PROFILE_BY_ID: "/usermanagement/admin/profileDetails/v1",
  URL_ADD_PROFILE: "/usermanagement/admin/addProfile/v1",
  URL_UPDATE_PROFILE: "/usermanagement/admin/updateProfile/v1",
  URL_DELETE_PROFILE: "/usermanagement/admin/deleteProfile/v1",
  //----------Checker-USER-----------------------------------------------
  URL_CHECKER_USER_REQUESTS: "/usermanagement/checker/userRequests/v1",
  URL_CHECKER_USER_ADD_DELETE_DETAILS:
    "/usermanagement/checker/requestDetails/v1",
  //PUT
  URL_CHECKER_USER_UPDATE_DETAILS: "/usermanagement/checker/requestDetails/v1",
  URL_CHECKER_USER_APPROVAL: "/usermanagement/checker/user/action/v1",
  //----------Checker-GROUP-------------------------------------------------------
  URL_CHECKER_GROUP_REQUESTS: "/usermanagement/checker/groupRequests/v1",
  URL_CHECKER_GROUP_ADD_DELETE_DETAILS: "/usermanagement/checker/group/v1",
  //PUT
  URL_CHECKER_GROUP_UPDATE_DETAILS: "/usermanagement/checker/group/v1",
  URL_CHECKER_GROUP_APPROVAL: "/usermanagement/checker/group/action/v1",
  //----------Checker-PROFILE-------------------------------------------------------
  //PUT
  URL_CHECKER_PROFILE_REQUESTS: "/usermanagement/checker/profile/v1",
  URL_CHECKER_PROFILE_ADD_DELETE_DETAILS: "/usermanagement/checker/profile/v1",
  URL_CHECKER_PROFILE_UPDATE_DETAILS:
    "/usermanagement/checker/profileRequests/v1",
  URL_CHECKER_PROFILE_APPROVAL: "/usermanagement/checker/profile/action/v1",
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
  URL_REPORT_LOGIN: "/report/userLogin/v1",
  URL_REPORT_ACTIVE_INACTIVE: "/report/userStatus/v1",
  URL_REPORT_FIFO: "/report/fifoAgeing/v1",
  URL_DOWNLOAD_LOGIN: "",
  URL_DOWNLOAD_ACTIVE_INACTIVE: "",
  URL_DOWNLOAD_FIFO: "/report/fifoAgeing/download/v1",
  //---------Dropdown API-----------------------------------------------------------------------------------------------
  URL_DROPDOWN_BRANCH: "/dashboard/dropdowns/branch/v1",
  URL_DROPDOWN_LOCATION: "/dashboard/dropdowns/location/v1",
  URL_DROPDOWN_ZONE: "/dashboard/dropdowns/zone/v1",
  URL_DROPDOWN_RO: "/dashboard/dropdowns/ro/v1",
  URL_DROPDOWN_PIU: "/dropdowns/piu/v1",
  URL_DROPDOWN_PD: "/dropdowns/dropdowns/pd/v1",
};
