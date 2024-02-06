import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import AddUser from "./AddUser";

function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const users = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "Admin",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "Administrator",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userId: "JS002",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userId: "BJ003",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 4,
      fullName: "Alice Brown",
      userId: "AB004",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 5,
      fullName: "Eve Anderson",
      userId: "EA005",
      userType: "User",
      role: "Guest",
      isActive: false,
    },
    {
      id: 6,
      fullName: "Tom Wilson",
      userId: "TW006",
      userType: "User",
      role: "Guest",
      isActive: true,
    },
    {
      id: 7,
      fullName: "Laura Lee",
      userId: "LL007",
      userType: "User",
      role: "Guest",
      isActive: true,
    },
    {
      id: 8,
      fullName: "Michael Johnson",
      userId: "MJ008",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 9,
      fullName: "Olivia Brown",
      userId: "OB009",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 10,
      fullName: "William Lee",
      userId: "WL010",
      userType: "User",
      role: "Member",
      isActive: true,
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h2 className="mb-3 mt-3 pageTitle">User Details</h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>USER Full Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.fullName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User Role:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userRole}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User ID:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userId}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userType}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Employee Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.employeeNumber}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User Domain Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.domainName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
          </div>

          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>Gender:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.gender}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Email:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.email}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Mobile Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.mobileNumber}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>WORK NO:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.workNo}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {user.isActive ? "Yes" : "No"}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdDate}</div>
          </div>
        </div>

        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/UserList");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
              }}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
      {/* <AddUser isOpen={isOpen} setModal={setIsOpen} /> */}
    </div>
  );
}

export default UserDetails;
