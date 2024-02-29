import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const DashboardDownloadService = {
  downloadSubsaideryAccount,
  downloadEvents,
  downloadVelocity,
  downloadLimitledger,
  downloadRO,
  downloadPIU,
  downloadAccountLevel,
  downloadTransaction,
};

function downloadSubsaideryAccount(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_SUB_ACCOUNTS;

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

function downloadEvents(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_EVENTS;

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
function downloadVelocity(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_VELOCITY;

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

function downloadLimitledger(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_LIMIT_LEDGER;

  return new RestDataSource(url, fn).Store(mfaInfo, (res, err) => {
    if (err) {
      // Handle error
      if (fnError) {
        fnError(err);
      }
    } else {
      // If you had other heaers to handle, you can do so here
      fn(res);
    }
  });
}
function downloadRO(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_RO;

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
function downloadPIU(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_PIU;

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
function downloadAccountLevel(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_ACC_LEVEL;
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

function downloadTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DOWNLOAD_TRANSACTION;
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
