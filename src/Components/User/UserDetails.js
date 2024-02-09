import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { UserService } from "../../Service/UserService";
import { ConvertFormat } from "../HtmlComponents/CommonFunction";
import { v4 as uuid } from "uuid";
function UserDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchUserById();
  }, []);
  // const users = [
  //   {
  //     id: 1,
  //     fullName: "Sumit Bajrang Kadam",
  //     userId: "2697",
  //     userType: "Admin",
  //     role: "Admin",
  //     isActive: true,
  //     employeeNumber: "EMP202",
  //     domainName: "example.com",
  //     gender: "Male",
  //     email: "Sumit@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  //   {
  //     id: 2,
  //     fullName: "Mandar Milind Naphad",
  //     userId: "2698",
  //     userType: "User",
  //     role: "Member",
  //     isActive: true,
  //     employeeNumber: "EMP203",
  //     domainName: "example.com",
  //     gender: "Male",
  //     email: "Mandar@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  //   {
  //     id: 3,
  //     fullName: "Ajay Dilip Sharma",
  //     userId: "2699",
  //     userType: "User",
  //     role: "Member",
  //     isActive: true,
  //     employeeNumber: "EMP202",
  //     domainName: "example.com",

  //     gender: "Male",
  //     email: "Ajay@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  // ];

  // const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isDelete = path.includes("DeleteUser") ? true : false;
  if (!user) {
    return <p>User not found.</p>;
  }

  //----------------------Get User--------------------------------------------
  function fetchUserById() {
    var user = {};
    UserService.getUserById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userId: userId,
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          user = res.data.responseObject;
          // console.log("UserList->", UserList);
          setUser(user);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
    console.log("user->", user);
    return user;
  }
  //----------------------Delete User-----------------------------------------
  function DeleteUser() {
    UserService.deleteUser(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: user.userId, //"nhai",
        requsterUserId: "35611",
        userId: userId,
        requestType: "Delete",
        status: "Initiated",
        //----------------------------------
        userName: user.userId, //"Shantanu",
        fullName: user.fullName,
        employeeNumber: user.employeeNumber, //"12345",
        userRole: user.userRole, //"Administrator",
        profileId: user.profileId,
        email: user.email, //"shantanu@example.com",
        mobileNumber: user.mobileNumber, //"123-456-7890",
        createdDate: ConvertFormat(user.createdDate),
        createdBy: user.createdBy,
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Users");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  return (
    <div className="container UDContainer">
      <Spinner isLoading={isLoading} />
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete User" : "User Details"}
            </h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          {isDelete ? (
            <h4 className="mb-4 mx-5">
              Are you sure you want to delete this ?
            </h4>
          ) : (
            ""
          )}
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>User Full Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.fullName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Mobile Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.mobileNumber}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>EMail:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.email}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {/* {user.isActive ? "Yes" : "No"} */}
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={user.isActive}
                readOnly
              />
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {ConvertFormat(user.createdDate)}
            </div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>User ID:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userId}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Employee Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.employeeNumber}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Role:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userRole}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
          </div>
        </div>

        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/Users");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                setIsLoading(true);
                //setIsOpen(true);
                // toast.success("Request raised successfully!", {
                //   position: "top-right",
                //   autoClose: 3000,
                // });
                // setTimeout(() => {
                //   setIsLoading(false);
                navigate(`/NHAI/EditUser/${user.id}`);
                if (isDelete) {
                  DeleteUser();
                }
                // }, 1000);
              }}
            >
              {isDelete ? "Delete" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
