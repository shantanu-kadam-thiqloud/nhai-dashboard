import React, { useState } from 'react';
import DataTable from '../HtmlComponents/DataTable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddGroup from './AddGroup';

const GroupList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        { id: 1, groupName: 'Admin Group', groupDescription: 'Admin Group Description', isActive: true },
        { id: 2, groupName: 'Finance Group', groupDescription: 'Finance Group Description', isActive: true },
        { id: 3, groupName: 'HR Group', groupDescription: 'HR Group Description', isActive: true },
        { id: 4, groupName: 'IT Group', groupDescription: 'IT Group Description', isActive: false },
      ];
      
      const columns = [
        { Header: 'Group Name', accessor: 'groupName' },
        { Header: 'Group Description', accessor: 'groupDescription' },
        { Header: 'Is Active', accessor: 'isActive', 
          Cell: ({ value }) =>  
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={value} /> 
        },        
      ];
      
      
      function handleAction(id) {
        // Implement your action logic here based on the id
      }
      

      return (
        <div className="wrapper">
        <div className="container">
          <div className='ULContainer'>
            <div className='row'>
              <div className="col-md-11 mx-auto"> 
                <h2 className="mb-3 mt-3 pageTitle">Group Listing</h2>
                <div className="addUserBtnDiv  mt-3">
                <button
                    className="btn addUser"
                    type="button"
                    onClick={() => {
                    setIsOpen(true);
                    }}
                    >               
                    <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" /> 
                    Add New Group         
                </button>
                </div>
              </div>              
            </div>
            <div className='row'>
              <div className='col-md-11 mx-auto flex'>              
                <DataTable columns={columns} data={data} customClass= 'ULTable' detailpage= 'GroupDetails' />
              </div>
            </div>
          </div>
          <AddGroup isOpen={isOpen} setModal={setIsOpen} />
        </div>
        </div>
      );
    };

export default GroupList;
