import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const ExternalUserService = {
  externalUserLogin,
  changePassword,
  otpValidation,
};

function externalUserLogin(mfaInfo, fn, fnError) {
  var url = Global_var.URL_EXTERNAL_LOGIN; // Global_var.BASEURL +

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

function otpValidation(mfaInfo, fn, fnError) {
  var url = Global_var.URL_OTP_VALIDATION; // Global_var.BASEURL +

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

function changePassword(mfaInfo, fn, fnError) {
  var url = Global_var.URL_CHNG_PWD; // Global_var.BASEURL +

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
