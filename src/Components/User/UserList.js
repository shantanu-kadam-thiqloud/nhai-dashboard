import React, {useState} from 'react';
import DataTable from '../HtmlComponents/DataTable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
//import AddUser from './AddUser';
import { useNavigate, useParams } from "react-router-dom";

const UserList = () => {
    //const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const data = [
        { id: 1, fullName: 'John Doe', userId: 'JD001', userType: 'Admin', role: 'Admin', isActive: true },
        { id: 2, fullName: 'Jane Smith', userId: 'JS002', userType: 'User', role: 'Member', isActive: true },
        { id: 3, fullName: 'Bob Johnson', userId: 'BJ003', userType: 'User', role: 'Member', isActive: true },
        { id: 4, fullName: 'Alice Brown', userId: 'AB004', userType: 'User', role: 'Member', isActive: false },
        { id: 5, fullName: 'Eve Anderson', userId: 'EA005', userType: 'User', role: 'Guest', isActive: false },
        { id: 6, fullName: 'Tom Wilson', userId: 'TW006', userType: 'User', role: 'Guest', isActive: true },
        { id: 7, fullName: 'Laura Lee', userId: 'LL007', userType: 'User', role: 'Guest', isActive: true },
        { id: 8, fullName: 'Michael Johnson', userId: 'MJ008', userType: 'User', role: 'Member', isActive: false },
        { id: 9, fullName: 'Olivia Brown', userId: 'OB009', userType: 'User', role: 'Member', isActive: true },
        { id: 10, fullName: 'William Lee', userId: 'WL010', userType: 'User', role: 'Member', isActive: true },
      ];
      
      const columns = [
        { Header: 'User Full Name', accessor: 'fullName' },
        { Header: 'User ID', accessor: 'userId' },
        { Header: 'User Type', accessor: 'userType' },
        { Header: 'Role', accessor: 'role' },
        { Header: 'Is Active', accessor: 'isActive', 
        Cell: ({ value }) =>  
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={value} /> },
        {
          Header: 'Action',
          accessor: 'id',
        },
      ];
      
      function handleAction(id) {
        // Implement your action logic here based on the id
      };
      
      const HandleAddUser = () => {
        navigate('../NHAI/AddUser');
      }

      return (
        <div className="wrapper">
        <div className="container">
          <div className='ULContainer'>
            <div className='row'>
              <div className="col-md-11 mx-auto"> 
                <h2 className="mb-3 mt-3 pageTitle">User Listing</h2>
                <div className="addUserBtnDiv  mt-3">
                <button
                    className="btn addUser"
                    type="button"
                    onClick={HandleAddUser}
                    >               
                    <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" /> 
                    Add New User         
                </button>
                </div>
              </div>              
            </div>
            <div className='row'>
              <div className='col-md-11 mx-auto flex'>              
                <DataTable columns={columns} data={data} customClass= 'ULTable' detailpage= 'UserList/UserDetails' />
              </div>
            </div>
          </div>
          {/* <AddUser isOpen={isOpen} setModal={setIsOpen} /> */}
        </div>
        </div>
      );
    };

export default UserList;
