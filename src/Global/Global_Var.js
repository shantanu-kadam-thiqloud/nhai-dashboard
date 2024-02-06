export const Global_var = {
  BASEURL: "http://172.16.16.99:8091", //Amol local with VPN
  BASEURL1: "http://172.16.16.99:8085",
  //--------Login----------------------------------------
  URL_LOGIN: "/usermanagement/login/v1",
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
  URL_BANK_AND_EVENTS: "/dashboard/events/v1",
  URL_SNAPSHOT: "/dashboard/snapshort/v1",
  URL_VELOCITY: "/dashboard/velocity/v1",
  URL_AGEING: "/dashboard/ageingitem/v1",
  URL_LIMITLEDGER: "/dashboard/limit-ledger/v1",
  URL_RO: "/dashboard/regional-office/v1",
  URL_PIU: "/dashboard/piu/v1",
  URL_ACCOUNT_LEVEL: "/dashboard/acc-level/v1",
};
