import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const ReportService = {
  getFIFOReport,
  getUserLoginReport,
  getUserStatusReport,
  downloadFIFOReport,
  downloadUserLoginReport,
  downloadUserStatusReport,
};

function getFIFOReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_REPORT_FIFO;

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
function getUserLoginReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_REPORT_LOGIN;

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

function getUserStatusReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_REPORT_ACTIVE_INACTIVE;
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

function downloadFIFOReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_DOWNLOAD_FIFO;

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
function downloadUserLoginReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_DOWNLOAD_LOGIN;

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

function downloadUserStatusReport(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL2 + Global_var.URL_DOWNLOAD_ACTIVE_INACTIVE;
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
