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

  return new RestDataSource(url, fn).Store(mfaInfo, (res, err) => {
    if (err) {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    } else {
      // If you had other headers to handle, you can do so here
      fn(res);
    }
  });
}

function getUserAddDeleteDetails(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_ADD_DELETE_DETAILS;
  return new RestDataSource(url, fn).Store(mfaInfo, (res, err) => {
    if (err) {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    } else {
      // If you had other headers to handle, you can do so here
      fn(res);
    }
  });
}
function getUserUpdateDetails(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_UPDATE_DETAILS;

  return new RestDataSource(url, fn).Update(mfaInfo, (res, err) => {
    if (err) {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    } else {
      // If you had other headers to handle, you can do so here
      fn(res);
    }
  });
}
function checkerUserApproval(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_USER_APPROVAL;

  return new RestDataSource(url, fn).Store(mfaInfo, (res, err) => {
    if (err) {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    } else {
      // If you had other headers to handle, you can do so here
      fn(res);
    }
  });
}
