import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const ProfileService = {
  getProfileList,
  getProfileById,
  addProfile,
  updateProfile,
  deleteProfile,
};

function getProfileList(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_PROFILES;

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

function getProfileById(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_PROFILE_BY_ID;

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
function addProfile(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_ADD_PROFILE;

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
function updateProfile(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_UPDATE_PROFILE;

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

function deleteProfile(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_DELETE_PROFILE;

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
