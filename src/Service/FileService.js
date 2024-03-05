import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const FileService = {
  uploadAccountFile,
  uploadSanctionFile,
  processMain,
  processCalapd,
  //-----------------------------------
  getMainTransaction,
  getCALAPDTransaction,
  updateMainTransaction,
  downloadMainTransaction,
  downloadCALAPDTransaction,
  updateCALAPDTransaction,
};
function uploadAccountFile(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_UPLOAD_ACCOUNT_FILE;

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

function uploadSanctionFile(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_UPLOAD_SANCTION_FILE;

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
function processMain(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_PROCESS_MAIN;

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
function processCalapd(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_PROCESS_CALAPD;
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

function getMainTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_GET_MAIN_TRANSACTION;

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
function getCALAPDTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_GET_CALAPD_TRANSACTION;

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

function updateMainTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_UPDATE_MAIN_TRANSACTION;
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
function updateCALAPDTransaction(mfaInfo, fn, fnError) {
  //var url = "http://172.16.16.201:7091/report/download/userStatus/v1";
  var url = Global_var.AUTH_BASE + Global_var.URL_UPDATE_CALAPD_TRANSACTION;
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

function downloadMainTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_MAIN_TRANSACTION;

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
function downloadCALAPDTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_CALAPD_TRANSACTION;

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
