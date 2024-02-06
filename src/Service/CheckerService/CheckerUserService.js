import RestDataSource from "../RestDataSource";
import { Global_var } from "../../Global/Global_Var";

export const CheckerUserService = {
  getUserRequests,
  getUserAddDeleteDetails,
  getUserUpdateDetails,
  checkerUserApproval,
};

function getUserRequests(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_REQUESTS;

  return new RestDataSource(url, fn).Store(
    mfaInfo,
    (res) => {
      if (res != null) {
        // If you had other headers to handle, you can do so here

        fn(res);
      }
    },
    (err) => {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    }
  );
}

function getUserAddDeleteDetails(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_ADD_DELETE_DETAILS;

  return new RestDataSource(url, fn).Store(
    mfaInfo,
    (res) => {
      if (res != null) {
        // If you had other headers to handle, you can do so here

        fn(res);
      }
    },
    (err) => {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    }
  );
}
function getUserUpdateDetails(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_UPDATE_DETAILS;

  return new RestDataSource(url, fn).Update(
    mfaInfo,
    (res) => {
      if (res != null) {
        // If you had other headers to handle, you can do so here

        fn(res);
      }
    },
    (err) => {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    }
  );
}
function checkerUserApproval(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_APPROVAL;

  return new RestDataSource(url, fn).Store(
    mfaInfo,
    (res) => {
      if (res != null) {
        // If you had other headers to handle, you can do so here

        fn(res);
      }
    },
    (err) => {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    }
  );
}
