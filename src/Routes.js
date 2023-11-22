import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserList from "./Components/User/UserList";
import UserDetails from "./Components/User/UserDetails";
import Dashboard from "./Components/Home/Dashboard";
import ProfileList from "./Components/UserProfile/ProfileList";
import ProfileDetails from "./Components/UserProfile/ProfileDetails";
import GroupList from "./Components/UserGroup/GroupList";
import Registration from "./Components/Login/Registration";
import Logout from "./Components/Login/Logout";
import VarientSidebar from "./Components/Varients/varientSidebar1";
import Varients from "./Components/Varients/varients";
import AddUser from "./Components/User/AddUser";
import ChangePassword from "./Components/ManagePassword/ChangePassword";

import Hyperlink from "./Components/Home/Hyperlink";
import UserLoginReport from "./Components/Reports/userLoginReport";
import UserActiveInactiveReport from "./Components/Reports/userActiveInactiveReport";
import FifoAgeingReport from "./Components/Reports/fifoAgeingReport";
import UserAdd from "./Components/User/userAdd";
import AddProfile from "./Components/UserProfile/AddProfile";
import AddGroup from "./Components/UserGroup/AddGroup";
import GroupDetails from "./Components/UserGroup/GroupDetails";
import FunctionPointList from "./Components/FunctionPoint/FunctionPointList";
import AddFunctionPoint from "./Components/FunctionPoint/AddFunctionPoint";
import FunctionPointDetails from "./Components/FunctionPoint/FunctionPointDetails";
import MappingMaster from "./Components/Admin/MappingMaster";
import JobExecutionLog from "./Components/Admin/JobExecutionLog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/NHAI" element={<Login />}></Route>
      <Route path="/NHAI/login" element={<Login />}></Route>
      <Route path="/NHAI/Dashboard" element={<Dashboard />}></Route>
      {/* ------------USER------------------------------------------------------------- */}
      <Route path="/NHAI/Users" element={<UserList />}></Route>
      <Route path="/NHAI/AddUser" element={<AddUser />}></Route>
      <Route path="/NHAI/EditUser/:userId" element={<AddUser />}></Route>
      <Route path="/NHAI/UserDetails/:userId" element={<UserDetails />}></Route>
      <Route path="/NHAI/DeleteUser/:userId" element={<UserDetails />}></Route>
      {/* ------------USER Profile---------------------------------------------------------- */}
      <Route path="/NHAI/Profiles" element={<ProfileList />}></Route>
      <Route path="/NHAI/AddProfile" element={<AddProfile />}></Route>
      <Route path="/NHAI/EditProfile/:userId" element={<AddProfile />}></Route>
      <Route
        path="/NHAI/ProfileDetails/:userId"
        element={<ProfileDetails />}
      ></Route>
      <Route
        path="/NHAI/DeleteProfile/:userId"
        element={<ProfileDetails />}
      ></Route>
      {/* ------------USER Group--------------------------------------------------------------- */}
      <Route path="/NHAI/Groups" element={<GroupList />}></Route>
      <Route path="/NHAI/AddGroup" element={<AddGroup />}></Route>
      <Route path="/NHAI/EditGroup/:userId" element={<AddGroup />}></Route>
      <Route
        path="/NHAI/GroupDetails/:userId"
        element={<GroupDetails />}
      ></Route>
      <Route
        path="/NHAI/DeleteGroup/:userId"
        element={<GroupDetails />}
      ></Route>
      {/* ------------Function Point---------------------------------------------------------- */}
      {/* <Route
        path="/NHAI/FunctionPoints"
        element={<FunctionPointList />}
      ></Route>
      <Route
        path="/NHAI/AddFunctionPoint"
        element={<AddFunctionPoint />}
      ></Route>
      <Route
        path="/NHAI/EditFunctionPoint/:userId"
        element={<AddFunctionPoint />}
      ></Route>
      <Route
        path="/NHAI/FunctionPointDetails/:userId"
        element={<FunctionPointDetails />}
      ></Route>
      <Route
        path="/NHAI/DeleteFunctionPoint/:userId"
        element={<FunctionPointDetails />}
      ></Route> */}
      {/* -------------------------------------------------------------------------------------- */}
      <Route path="/NHAI/Logout" element={<Logout />}></Route>
      <Route path="/NHAI/ChangePassword" element={<ChangePassword />}></Route>
      <Route path="/NHAI/Hyperlink" element={<Hyperlink />}></Route>
      <Route path="/NHAI/UserLoginReport" element={<UserLoginReport />}></Route>
      <Route
        path="/NHAI/UserActiveInactiveReport"
        element={<UserActiveInactiveReport />}
      ></Route>
      <Route
        path="/NHAI/FIFOAgeingReport"
        element={<FifoAgeingReport />}
      ></Route>
      <Route path="/NHAI/MappingMaster" element={<MappingMaster />}></Route>
      {/* <Route path="/NHAI/JobExecutionLog" element={<JobExecutionLog />}></Route> */}
      {/*--------------------------------------------------------------------------- */}
      <Route path="/NHAI/varients" element={<Varients />}></Route>
      <Route path="/NHAI/UserAdd" element={<UserAdd />}></Route>
      {/* //--------------------------------------------------------------------------- */}
    </Routes>
  );
};
export default Routers;