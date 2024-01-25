import RestDataSource from "./RestDataSource";
import { Global_var } from "../Global/Global_Var";

export const GroupService = {
  getGroupList,
  getGroupById,
  addGroup,
  updateGroup,
  deleteGroup,
};

function getGroupList(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_GROUPS;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}

function getGroupById(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_GET_GROUP_BY_ID;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
function addGroup(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_ADD_GROUP;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
function updateGroup(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_UPDATE_GROUP;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}

function deleteGroup(mfaInfo, fn, fnError) {
  var url = Global_var.BASEURL + Global_var.URL_DELETE_GROUP;

  return new RestDataSource(url, fn).Store(mfaInfo, (res) => {
    if (res != null) {
      // If you had other headers to handle, you can do so here

      fn(res);
    }
  });
}
