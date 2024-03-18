import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
import { DropdownService } from "../../Service/DropdownService";
import {
  usePIUDataList,
  useZoneDataList,
  useRoDataList,
  useGetReduxData,
  getCookie,
} from "../HtmlComponents/CommonFunction";

const MappingMaster = () => {
  const navigate = useNavigate();
  // ----------for Add new--------------------------------------
  const [isLocation, setLocation] = useState(false);
  const [isPIU, setPIU] = useState(false);
  const [isPD, setPD] = useState(false);
  const [isZone, setZone] = useState(false);
  const [isRO, setRO] = useState(false);
  //-----------DD List-----------------------------------------
  const [locationList, setLocationList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [PDList, setPDList] = useState([]);
  //-----------Selected value-------------------------------------
  const [location, setlocation] = useState("");
  const [branch, setbranch] = useState("");
  const [pd, setpd] = useState("");
  // ------------------------------------------
  const [piu, setpiu] = useState("");
  const [zone, setzone] = useState("");
  const [ro, setro] = useState("");
  //---------------------------------------------------------------------------------------
  const zoneList = useZoneDataList(piu);
  //-----------------------------------------------------------------------------------------
  const roList = useRoDataList(piu, zone);
  // ---------------------------------------------------------------------------------------
  const piuList = usePIUDataList(location, ro);

  const [isLoading, setIsLoading] = useState(false);

  //-----------------------------------------------------------------
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //-----------------------------------------------------------------

  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    location: Yup.string().required("Location is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    //non mandatory
    userDomainName: Yup.string("User Domain Name is invalid"),
    workPhone: Yup.string("Work Phone is invalid"),
    userId: Yup.string("User ID is invalid"),
    role: Yup.string("Role is invalid"),
    mobile: Yup.string("Mobile Number is invalid"),
  });

  useEffect(() => {
    //setIsLoading(true);
    FetchBranchDD();
    FetchLocationDD(branch);
    FetchPD_DD(piu);
  }, [branch]);

  // ------------Branch DD-----------------------------------------------------------------
  function FetchBranchDD() {
    DropdownService.getBranchData(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER?.userName || "",
      },
      (res) => {
        if (res.status === 200) {
          var data = res.data.data.branches;
          setBranchList(data);
          console.log("->", data);
          setIsLoading(false);
          //   {
          //     "branchId": 3,
          //     "branchName": "Indusind"
          // },
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  // ------------Location DD---------------------------------------------------------------
  function FetchLocationDD(branchId) {
    DropdownService.getLocationData(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER?.userName || "",
        branchId: branchId, //"586", // null
      },
      (res) => {
        if (res.status === 200) {
          var data = res.data.data.locations;
          console.log("->", data);
          setLocationList(data);
          setIsLoading(false);
          //   {
          //     "locationId": 354,
          //     "locationName": "Sohna"
          // }
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  // ------------PD DD---------------------------------------------------------------------
  function FetchPD_DD(piuId) {
    DropdownService.getPDData(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER?.userName || "",
        piuId: piuId, //"210",
      },
      (res) => {
        //   {
        //     "pdId": 187,
        //     "pdName": "Col Sh",
        //     "pdEmail": "hajipur@nhai",
        //     "pdMobileNo": "7"
        // },
        if (res.status === 200) {
          var data = res.data.data.pds;
          console.log("->", data);
          setPDList(data);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //-------------------------------------------------------------------------------
  const handleSubmit = (values, { resetForm, setSubmitting }, actions) => {
    DropdownService.getPDData(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "",
        },
        userName: "",
        requestObject: {
          branchId: 3,
          addZone: isZone ? 1 : 0,
          addRo: isRO ? 1 : 0,
          zoneName: "UnMapped",
          roName: "Jaipur",
          locationId: 2,
          locationName: "Agra",
          piuId: 1,
          piuName: "Agra",
          pdId: 187,
          pdName: "Col Sh",
          pdEmail: "hajipur@nhai",
          pdMobileNo: "7",
        },
      },
      (res) => {
        //   {
        //     "pdId": 187,
        //     "pdName": "Col Sh",
        //     "pdEmail": "hajipur@nhai",
        //     "pdMobileNo": "7"
        // },
        if (res.status === 200) {
          var data = res.data.data.pds;
          console.log("->", data);
          setPDList(data);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  };
  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Overall Mapping</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  branch: branch,
                  location: location,
                  zone: zone,
                  piu: piu,
                  ro: ro,
                  pd: pd,
                }}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSubmit}
              >
                {({ values }) => (
                  <Form>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="userName" className="form-label">
                              Select Branch
                            </label>
                            <Field
                              as="select"
                              className="form-control form-select"
                              id="branch"
                              name="branch"
                            >
                              {" "}
                              <option value="">--Select Branch--</option>
                              {(branchList || []).map((x) => {
                                return (
                                  <option value={x.branchId}>
                                    {x.branchName}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="branch"
                              component="div"
                              className="error"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="location" className="form-label">
                              {isLocation ? "Add" : "Select"} Location
                            </label>
                            <div className="row">
                              <div className="col-md-9">
                                {" "}
                                {!isLocation ? (
                                  <Field
                                    as="select"
                                    className="form-control form-select"
                                    id="location"
                                    name="location"
                                  >
                                    <option value="">
                                      --Select Location--
                                    </option>
                                    {(locationList || []).map((x) => {
                                      return (
                                        <option value={x.locationId}>
                                          {x.locationName}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                ) : (
                                  <Field
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    name="location"
                                  />
                                )}
                                <ErrorMessage
                                  name="location"
                                  component="div"
                                  className="error"
                                />{" "}
                              </div>
                              <div className="col-md-2 p-0">
                                {" "}
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setLocation(!isLocation);
                                  }}
                                >
                                  {!isLocation ? "Add New" : "Cancel"}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="userDomainName"
                              className="form-label"
                            >
                              {isPIU ? "Add" : "Select"} PIU
                            </label>
                            <div className="row">
                              <div className="col-md-9">
                                {isPIU ? (
                                  <Field
                                    type="text"
                                    className="form-control"
                                    id="piu"
                                    name="piu"
                                  />
                                ) : (
                                  <Field
                                    as="select"
                                    className="form-control form-select"
                                    id="piu"
                                    name="piu"
                                  >
                                    <option value="">--Select PIU--</option>
                                    <option value="">All</option>
                                    {(piuList || []).map((x) => {
                                      return (
                                        <option value={x.piuId}>
                                          {x.piuName}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                )}
                                <ErrorMessage
                                  name="piu"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="col-md-2 p-0">
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setPIU(!isPIU);
                                  }}
                                >
                                  {!isPIU ? "Add New" : "Cancel"}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                              {isRO ? "Add" : "Select"} RO
                            </label>
                            <div className="row">
                              <div className="col-md-9">
                                {isRO ? (
                                  <Field
                                    type="text"
                                    className="form-control"
                                    id="ro"
                                    name="ro"
                                  />
                                ) : (
                                  <Field
                                    as="select"
                                    className="form-control form-select "
                                    id="ro"
                                    name="ro"
                                  >
                                    <option value="">--Select RO--</option>
                                    <option value="">All</option>
                                    {(roList || []).map((x) => {
                                      return (
                                        <option value={x.roName}>
                                          {x.roName}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                )}
                                <ErrorMessage
                                  name="ro"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="col-md-2 p-0">
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setRO(!isRO);
                                  }}
                                >
                                  {!isPIU ? "Add New" : "Cancel"}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              {isZone ? "Add" : "Select"} Zone
                            </label>
                            <div className="row">
                              <div className="col-md-9">
                                {isZone ? (
                                  <Field
                                    type="text"
                                    className="form-control "
                                    id="zone"
                                    name="zone"
                                  />
                                ) : (
                                  <Field
                                    as="select"
                                    className="form-control form-select"
                                    id="zone"
                                    name="zone"
                                  >
                                    <option value="">--Select Zone--</option>
                                    <option value="">All</option>
                                    {(zoneList || []).map((x) => {
                                      return (
                                        <option value={x.zoneName}>
                                          {x.zoneName}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                )}
                                <ErrorMessage
                                  name="zone"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="col-md-2 p-0">
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setZone(!isZone);
                                  }}
                                >
                                  {isZone ? "Cancel" : "Add New"}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="role" className="form-label">
                              {!isPD ? " Select" : "Add"} PD
                            </label>

                            <div className="row">
                              <div className="col-md-9">
                                {isPD ? (
                                  <Field
                                    type="text"
                                    className="form-control"
                                    id="pd"
                                    name="pd"
                                  />
                                ) : (
                                  <Field
                                    as="select"
                                    className="form-control form-select"
                                    id="pd"
                                    name="pd"
                                  >
                                    <option value="">--Select PD--</option>
                                    {(PDList || []).map((x) => {
                                      return (
                                        <option value={x.pdId}>
                                          {x.pdName}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                )}
                                <ErrorMessage
                                  name="pd"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="col-md-2 p-0">
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setPD(!isPD);
                                  }}
                                >
                                  {isPD ? "Cancel" : "Add New"}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Enter email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">
                              Mobile
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="mobile"
                              name="mobile"
                              placeholder="Enter mobile no."
                            />
                            <ErrorMessage
                              name="mobile"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="modal-footer">
                      <button className="btn BackBtn me-2" onClick={() => {}}>
                        Reset
                      </button>
                      <button
                        className="btn addUser min me-2"
                        type="submit"
                        onClick={() => {}}
                      >
                        Save
                      </button>
                      {"  "}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingMaster;
