import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const DashboardService = {
  getSnapshot,
  getSnapshotStatus,
  getBank,
  getEvents,
  getVelocity,
  getAgeing,
  getLimitledger,
  getRO,
  getPIU,
  getAccountLevel,
  getFinancial,
  getTransaction,
  getFinancialD,
  getZone,
};

function getSnapshot(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_SNAPSHOT;

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
function getSnapshotStatus(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_SNAPSHOT_STATUS;

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
function getBank(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_BANK;

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
function getEvents(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_EVENTS;

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
function getVelocity(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_VELOCITY;

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
function getAgeing(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_AGEING;
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
function getLimitledger(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_LIMITLEDGER;

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
function getRO(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_RO;

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
function getPIU(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_PIU;

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
function getAccountLevel(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_ACCOUNT_LEVEL;
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
function getFinancial(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_FINANCIAL;
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
function getFinancialD(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_FINANCIAL_D;
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
function getTransaction(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_TRANSACTION;
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
function getZone(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_ZONE;
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
