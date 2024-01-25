import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const UserService = {
  getUserList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};

function getUserList(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_USERS;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}

function getUserById(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_USER_BY_ID;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
function addUser(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_ADD_USER;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
function updateUser(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_UPDATE_USER;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}

function deleteUser(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_DELETE_USER;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
