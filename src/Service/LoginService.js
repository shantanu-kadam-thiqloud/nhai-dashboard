import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const LoginService = {
  userLogin,
};

function userLogin(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_GROUPS;

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
