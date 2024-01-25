import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { UserService } from "../../Service/UserService";

function UserDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchUserById();
  }, []);

  function fetchUserById() {
    var user = {};
    UserService.getUserById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userId: userId,
        userName: "nhai",
      },
      (res) => {
        if (res.data.responseMetaData.status === "200") {
          user = res.data.responseObject;
          // console.log("UserList->", UserList);
          setUser(user);
        }
        //   return data;
      }
    );
    console.log("user->", user);
    return user;
  }

  // const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isDelete = path.includes("DeleteUser") ? true : false;
  if (!user) {
    return <p>User not found.</p>;
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
            <div className="col-md-6 UDCoulmns">{user.createdDate}</div>
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
                toast.success("Request raised successfully!", {
                  position: "top-right",
                  autoClose: 3000,
                });
                setTimeout(() => {
                  setIsLoading(false);
                  navigate(
                    isDelete ? `/NHAI/Users` : `/NHAI/EditUser/${user.id}`
                  );
                }, 1000);
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
