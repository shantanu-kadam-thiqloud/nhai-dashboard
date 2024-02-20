import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const DropdownService = {
  getBranchData,
  getLocationData,
  getZoneData,
  getROData,
  getPIUData,
  getPDData,
};

function getBranchData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_BRANCH;

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
function getLocationData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_LOCATION;

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
function getZoneData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_ZONE;

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
function getROData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_RO;

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
function getPIUData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_PIU;

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
function getPDData(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DROPDOWN_PD;

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
