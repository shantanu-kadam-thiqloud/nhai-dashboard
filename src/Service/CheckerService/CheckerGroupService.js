import RestDataSource from "../RestDataSource";
import { Global_var } from "../../Global/Global_Var";

export const CheckerGroupService = {
  getGroupRequests,
  getGroupAddDeleteDetails,
  getGroupUpdateDetails,
  checkerGroupApproval,
};

function getGroupRequests(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_CHECKER_GROUP_REQUESTS;

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

function getGroupAddDeleteDetails(mfaInfo, fn, fnError) {
  var url =
    Global_var.AUTH_BASE + Global_var.URL_CHECKER_GROUP_ADD_DELETE_DETAILS;

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
function getGroupUpdateDetails(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_CHECKER_GROUP_UPDATE_DETAILS;

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

function checkerGroupApproval(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_CHECKER_GROUP_APPROVAL;

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
