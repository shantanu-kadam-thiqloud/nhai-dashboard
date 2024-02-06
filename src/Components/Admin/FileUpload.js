import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const FileUpload = () => {
  const navigate = useNavigate();
  const [isLocation, setLocation] = useState(false);
  const [isPIU, setPIU] = useState(false);
  const [isPD, setPD] = useState(false);
  const [isZone, setZone] = useState(false);
  const [file, setFile] = useState("");
  const validationSchema = Yup.object({
    bank: Yup.string().required("Bank is required"),
    fileType: Yup.string().required("File Type is required"),
    // file: Yup.mixed().test(
    //   "fileType",
    //   "Only .txt files are allowed",
    //   (value) => {
    //     return value && value.type === "text/plain";
    //   }
    // ),
  });
  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">File Upload</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{ file: file }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label
                            htmlFor="location"
                            className="form-label required"
                          >
                            File Type
                          </label>
                          <div className="row">
                            <div className="col-md-9">
                              {" "}
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="fileType"
                                name="fileType"
                              >
                                {/* <option value="">--Select File Type--</option> */}
                                <option value="Sanction Limit">
                                  Sanction Limit
                                </option>
                              </Field>
                              <ErrorMessage
                                name="fileType"
                                component="div"
                                className="error"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="userDomainName"
                            className="form-label required"
                          >
                            Select File
                          </label>
                          <div className="row">
                            <div className="col-md-9">
                              <input
                                type="file"
                                className="form-control"
                                id="file"
                                name="file"
                                accept=".txt"
                                onChange={(event) => {
                                  setFile(event.currentTarget.files[0]);
                                  console.log(
                                    "File->",
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                              <ErrorMessage
                                name="file"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* <div className="modal-footer"> */}
                  <div className="float-start">
                    <button
                      className=" btn addUser min me-2 mt-2"
                      type="submit"
                      onClick={() => {}}
                    >
                      Upload
                    </button>
                  </div>
                  {"  "}
                  {/* </div> */}
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
