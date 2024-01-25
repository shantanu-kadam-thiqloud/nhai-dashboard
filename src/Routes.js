import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserList from "./Components/User/UserList";
import UserDetails from "./Components/User/UserDetails";
import Dashboard from "./Components/Home/Dashboard";
import ProfileList from "./Components/UserProfile/ProfileList";
import ProfileDetails from "./Components/UserProfile/ProfileDetails";
import GroupList from "./Components/UserGroup/GroupList";
import Logout from "./Components/Login/Logout";
import AddUser from "./Components/User/AddUser";
import ChangePassword from "./Components/ManagePassword/ChangePassword";
import Hyperlink from "./Components/Home/Hyperlink";
import UserLoginReport from "./Components/Reports/userLoginReport";
import UserActiveInactiveReport from "./Components/Reports/userActiveInactiveReport";
import FifoAgeingReport from "./Components/Reports/fifoAgeingReport";
import AddProfile from "./Components/UserProfile/AddProfile";
import AddGroup from "./Components/UserGroup/AddGroup";
import GroupDetails from "./Components/UserGroup/GroupDetails";
import MappingMaster from "./Components/Admin/MappingMaster";
import JobExecutionLog from "./Components/Admin/JobExecutionLog";
import UserCheckerList from "./Components/Checker/UserCheckerList";
import UserCheckerDetails from "./Components/Checker/UserCheckerDetails";
import ProfileCheckerList from "./Components/Checker/ProfileCheckerList";
import ProfilleCheckerDetails from "./Components/Checker/ProfilleCheckerDetails";
import GroupCheckerList from "./Components/Checker/GroupCheckerList";
import GroupCheckerDetails from "./Components/Checker/GroupCheckerDetails";
import FileUpload from "./Components/Admin/FileUpload";
import MenuManagement from "./Components/Admin/MenuManagement";
import MenuManagementCheckerList from "./Components/Checker/MenuManagementCheckerList";
import MenuManagementCheckerDetails from "./Components/Checker/MenuManagementCheckerDetails";
import MappingMasterCheckerList from "./Components/Checker/MappingMasterCheckerList";
import MappingMasterCheckerDetails from "./Components/Checker/MappingMasterCheckerDetails";

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
      <Route
        path="/NHAI/MappingMasterRequests"
        element={<MappingMasterCheckerList />}
      ></Route>
      <Route
        path="/NHAI/MappingMasterDetails/:userId"
        element={<MappingMasterCheckerDetails />}
      ></Route>
      <Route path="/NHAI/JobExecutionLog" element={<JobExecutionLog />}></Route>
      {/* ------------Checker Screen---------------------------------------------------- */}
      <Route path="/NHAI/UserRequests" element={<UserCheckerList />}></Route>
      <Route
        path="/NHAI/userAddRequestDetails/:userId"
        element={<UserCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/userUpdateRequestDetails/:userId"
        element={<UserCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/userDeleteRequestDetails/:userId"
        element={<UserCheckerDetails />}
      ></Route>
      {/* ----------------Profile------------------------- */}
      <Route
        path="/NHAI/profileRequests"
        element={<ProfileCheckerList />}
      ></Route>
      <Route
        path="/NHAI/profileAddRequestDetails/:userId"
        element={<ProfilleCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/profileUpdateRequestDetails/:userId"
        element={<ProfilleCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/profileDeleteRequestDetails/:userId"
        element={<ProfilleCheckerDetails />}
      ></Route>
      {/* ----------------Group------------------------- */}
      <Route path="/NHAI/groupRequests" element={<GroupCheckerList />}></Route>
      <Route
        path="/NHAI/groupAddRequestDetails/:userId"
        element={<GroupCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/groupUpdateRequestDetails/:userId"
        element={<GroupCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/groupDeleteRequestDetails/:userId"
        element={<GroupCheckerDetails />}
      ></Route>

      {/* -------------------------------------------------------------------------------------- */}
      <Route path="/NHAI/FileUpload" element={<FileUpload />}></Route>
      <Route path="/NHAI/MenuManagement" element={<MenuManagement />}></Route>
      <Route
        path="/NHAI/MenuManagementRequests"
        element={<MenuManagementCheckerList />}
      ></Route>
      <Route
        path="/NHAI/MenuRequestDetails/:type"
        element={<MenuManagementCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/SubmenuRequestDetails/:type"
        element={<MenuManagementCheckerDetails />}
      ></Route>
      <Route
        path="/NHAI/ActionRequestDetails/:type"
        element={<MenuManagementCheckerDetails />}
      ></Route>
    </Routes>
  );
};
export default Routers;
