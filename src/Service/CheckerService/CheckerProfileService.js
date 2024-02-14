import RestDataSource from "../RestDataSource";
import { Global_var } from "../../Global/Global_Var";

export const CheckerProfileService = {
  getProfileRequests,
  getProfileAddDeleteDetails,
  getProfileUpdateDetails,
  checkerProfileApproval,
};

function getProfileRequests(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_PROFILE_REQUESTS;

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
function getProfileAddDeleteDetails(mfaInfo, fn, fnError) {
  var url =
    Global_var.BASEURL + Global_var.URL_CHECKER_PROFILE_ADD_DELETE_DETAILS;

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
function getProfileUpdateDetails(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_PROFILE_UPDATE_DETAILS;

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
function checkerProfileApproval(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_CHECKER_PROFILE_APPROVAL;

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
