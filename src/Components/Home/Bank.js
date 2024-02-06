import React, { useState, useEffect } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from 'axios';
import PieChart from "../Charts/PieChart";

const Bank = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const [dbdata, setDbdata] = useState([]);
  const [bankTable, setBankTable] = useState([]);

  const chartData = [
    { category: 'Kotak', value: 100, color: '#d4af37' }
    // Add more data points as needed
  ];

  useEffect(() => {
    // Initialize the data to "Core" when the component mounts
    fetchCoreData('crore');
  }, []);

  const fetchCoreData = (type) => {
    const apiUrl = 'http://localhost:3007/api/secure/bank';
    const uuid = localStorage.getItem('UUID');
    const headers = {
      'XUuid': uuid
    };

    // Make the Axios GET request with the headers
    axios.get(apiUrl, { headers })
      .then((response) => {
        if(type === 'crore'){
          setDbdata(response.data.data.crore);
        } else{
          setDbdata(response.data.data.decimal);
        }        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (dbdata && Object.keys(dbdata).length > 0) {
      const bankData = Object.entries(dbdata).map(([key, value]) => ({
        parameters: key,
        total: value,
        kotak: value
      }));
      setBankTable(bankData);
      console.log('bankData', bankData);       
    }
    
  }, [dbdata]);
  const columns = [
    {
      Header: "Parameters",
      accessor: "parameters",
    },
    {
      Header: "Total",
      accessor: "total",
    },
    {
      Header: "Kotak",
      accessor: "kotak",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            <label className="float-start pageTitle">Bank</label>
            <div className="float-end">
              <label className="statusOn">As on Date :</label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                defaultValue={currentDate}
              />{" "}
              <label className="statusOn">Zone :</label>{" "}
              <select name="zone" className="inputDate">
                <option value="All">All</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="MoRTH">MoRTH</option>
                <option value="North East">North East</option>
                <option value="Unmapped">Unmapped</option>
              </select>
              {"  "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => fetchCoreData('crore')}
              >
                Core
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => fetchCoreData('decimal')}
              >
                Decimal
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="p-2">
            <DataTable
              columns={columns}
              data={bankTable}
              customClass="BankTable"
              showSearchBar={false}
            />{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 mb-4 mt-4">
        <div className="statusOn">Balance %</div>     
         <div className='card chartBg'>
          <div className="card-body p-0">
          
            <PieChart data ={chartData} chartid = "balance" />
          </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 mb-4 mt-4">
        <div classname="statusOn">No. of Account %</div>
          <div className='card chartBg'>            
              <div className="card-body p-0">
               <PieChart data ={chartData} chartid = "account" />
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-4 mb-4 mt-4">
        <div classname="statusOn">Allocated Limit. %</div>
          <div className='card chartBg'>            
              <div className="card-body p-0">
                <PieChart data ={chartData} chartid = "allocated" />
              </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Bank;
