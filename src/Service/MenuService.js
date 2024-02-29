import RestDataSource from "../RestDataSource";
import { Global_var } from "../Global/Global_Var.js";

export const MenuService = {
  addMenu_Submenu_Action,
  updateMenu_Submenu_Action,
  deleteMenu_Submenu_Action,
  // -------------------------------------------------
  getMenu_Submenu_ActionRequests,
  getMenu_Submenu_ActionAddDeleteDetails,
  getMenu_Submenu_ActionUpdateDetails,
  checkerMenu_Submenu_ActionApproval,
  //   --------------------------------------------------
  getMenu_Json_Data,
  updateMenu_Json_Data,
};

function addMenu_Submenu_Action(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_ADD_MENU_SUBMENU_ACTION;

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

function updateMenu_Submenu_Action(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_UPDATE_MENU_SUBMENU_ACTION;

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

function deleteMenu_Submenu_Action(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DELETE_MENU_SUBMENU_ACTION;

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

function getMenu_Submenu_ActionRequests(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_REQUESTS_MENU_SUBMENU_ACTION;

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

function getMenu_Submenu_ActionAddDeleteDetails(mfaInfo, fn, fnError) {
  var url =
    Global_var.AUTH_BASE + Global_var.URL_DETAILS_AD_MENU_SUBMENU_ACTION;

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
function getMenu_Submenu_ActionUpdateDetails(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_DETAILS_U_MENU_SUBMENU_ACTION;

  return new RestDataSource(url, fn).Update(mfaInfo, (res, err) => {
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

function checkerMenu_Submenu_ActionApproval(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_APPROVAL_MENU_SUBMENU_ACTION;

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

function getMenu_Json_Data(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_GET_MENU_JSON;

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

function updateMenu_Json_Data(mfaInfo, fn, fnError) {
  var url = Global_var.AUTH_BASE + Global_var.URL_UPDATE_MENU_JSON;

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
