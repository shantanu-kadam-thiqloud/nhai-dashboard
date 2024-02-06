import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const DashboardService = {
  getSnapshot,
  getBankAndEvents,
  getVelocity,
  getAgeing,
  getLimitledger,
  getRO,
  getPIU,
  getAccountLevel,
};

function getSnapshot(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_SNAPSHOT;

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
function getBankAndEvents(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_BANK_AND_EVENTS;

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
function getVelocity(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_VELOCITY;

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
function getAgeing(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_AGEING;
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
function getLimitledger(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_LIMITLEDGER;

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
function getRO(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_RO;

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
function getPIU(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_PIU;

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
function getAccountLevel(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL1 + Global_var.URL_ACCOUNT_LEVEL;
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
