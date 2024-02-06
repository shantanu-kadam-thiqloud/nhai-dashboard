import React, { useState, useEffect } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from 'axios';

const RO = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const [dbdata, setDbdata] = useState([]);
  const [reginoalTable, setReginoalTable] = useState([]);
  const [corDecimalType, setcoreDecimalType] = useState('');
  

  useEffect(() => {
    // Initialize the data to "Core" when the component mounts
    fetchCoreData('crore');
  }, []);

  const fetchCoreData = (type) => {
    const apiUrl = 'http://localhost:3007/api/secure/reginolOffice';
    const uuid = localStorage.getItem('UUID');
    const headers = {
      'XUuid': uuid
    };

    // Make the Axios GET request with the headers
    axios.get(apiUrl, { headers })
      .then((response) => {
        setDbdata(response.data.data.regionWiseData);
        if(type === 'crore'){          
          setcoreDecimalType('crore');
        } else{         
          setcoreDecimalType('decimal');
        }        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (dbdata && Object.keys(dbdata).length > 0) {
      // const reginoalTable = Object.entries(dbdata).map(([key, value]) => ({
      //   parameters: key,
      //   total: value,
      //   kotak: value
      // }));
     const reginaolData = dbdata.map((item, index) => ({
        id: index + 1,
        office: item.regionalOffice,
        zone: item.zone,
        piu: item.countOfPIU,
        subsidiaryAccounts: item.countOfSubsidiaryAccounts,
        sanctionLimit: corDecimalType === 'crore' ? item.crore.sanctionLimit : item.decimal.sanctionLimit,
        utilizedLimit: corDecimalType === 'crore' ? item.crore.utilizedLimit : item.decimal.utilizedLimit,
        unutilizedLimit: corDecimalType === 'crore' ? item.crore.unUtilizedLimit : item.decimal.unUtilizedLimit,
        percentage: corDecimalType === 'crore' ? item.crore.utilizedPercent : item.decimal.utilizedPercent,
      }));
      setReginoalTable(reginaolData);
      console.log('reginoalTable', reginaolData);
    }
    
  }, [dbdata]);

  const columns = [
    {
      Header: "Sr No.",
      accessor: "id",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "Regional Office", //<div className="float-end fw-bold">Total</div>,
      accessor: "office",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "No. of PIU",
      accessor: "piu",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "No. of Subsidiary Accounts",
      accessor: "subsidiaryAccounts",
    },
    {
      Header: "Sanction Limit",
      accessor: "sanctionLimit",
    },
    {
      Header: "Utilized Limit",
      accessor: "utilizedLimit",
    },
    {
      Header: "Un-Utilized Limit",
      accessor: "unutilizedLimit",
    },
    {
      Header: "Utilized Percentage",
      accessor: "percentage",
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     office: "Total",
  //     zone: "",
  //     piu: "154",
  //     subsidiaryAccounts: "793",
  //     sanctionLimit: "64,251.97",
  //     utilizedLimit: "56,544.68",
  //     unutilizedLimit: "7,707.29",
  //     percentage: "88.00%",
  //   },
  //   {
  //     id: 2,
  //     office: "Bhubaneswar",
  //     zone: "East",
  //     piu: "7",
  //     subsidiaryAccounts: "31",
  //     sanctionLimit: "599.24",
  //     utilizedLimit: "542.88",
  //     unutilizedLimit: "56.36",
  //     percentage: "90.60%",
  //   },
  //   {
  //     id: 3,
  //     office: "Guwahati",
  //     zone: "East",
  //     piu: "4",
  //     subsidiaryAccounts: "10",
  //     sanctionLimit: "20.22",
  //     utilizedLimit: "9.42",
  //     unutilizedLimit: "10.80",
  //     percentage: "46.57%",
  //   },
  //   {
  //     id: 4,
  //     office: "Kolkata",
  //     zone: "East",
  //     piu: "1",
  //     subsidiaryAccounts: "1",
  //     sanctionLimit: "133.78",
  //     utilizedLimit: "129.10",
  //     unutilizedLimit: "4.68",
  //     percentage: "96.50%",
  //   },
  //   {
  //     id: 5,
  //     office: "Patna",
  //     zone: "East",
  //     piu: "9",
  //     subsidiaryAccounts: "35",
  //     sanctionLimit: "3,538.63",
  //     utilizedLimit: "2,671.62",
  //     unutilizedLimit: "96.84",
  //     percentage: "89.00%",
  //   },
  // ];
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            <label className="float-start pageTitle">RO</label>
            <div className="float-end">
              <label className="statusOn">Status as on :</label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                // onChange={(e) => {
                //   setDate(e.target.value);
                // }}
                defaultValue={currentDate}
              />{" "}
              <label className="statusOn">Bank :</label>{" "}
              <select name="bank" className="inputDate">
                <option value="Kotak">Kotak</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
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
                Crore
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => fetchCoreData('decimal')}
              >
                Decimal
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
              >
                Download
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="p-2">
          <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default RO;
