import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getBase64 } from "../HtmlComponents/CommonFunction";
import { ValueType } from "exceljs";

const FileUpload = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState("");
  const [fileData, setFileData] = useState("");
  const validationSchema = Yup.object({
    bank: Yup.string().required("Bank is required"),
    fileType: Yup.string().required("File Type is required"),
    file: Yup.mixed()
      .required("Text file is required")
      .test("fileType", "Only .txt files are allowed", (value) => {
        if (!value) {
          return false; // Return false if no file is selected
        }
        return value.type === "text/plain";
      }),
    //   if (value.endsWith(".txt")) {
    //     return true;
    //   } else {
    //     return false; //endsWith(".txt"); //
    //   }
    // }),
  });

  async function Upload(file) {
    const base64String = await getBase64(file);
    // Remove the prefix
    const base64Data = base64String.replace(/^data:[^;]+;base64,/, "");
    console.log("BASE64->", base64Data);
  }
  const handleSubmit = (values, { resetForm, setSubmitting }, actions) => {
    debugger;
    console.log("--->", values, fileData);
    Upload(fileData);
  };
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
                initialValues={{ fileType: "", file: null }}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
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
                                  <option value="">--Select File Type--</option>
                                  <option value="Sanction Limit">
                                    Sanction Limit
                                  </option>
                                  <option value="Account Summary">
                                    Account Summary
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
                                  value={undefined}
                                  onChange={(event) => {
                                    console.log("File input changed");
                                    const selectedFile =
                                      event.currentTarget.files[0];
                                    console.log("Selected file:", selectedFile);
                                    setFileData(selectedFile); // Assuming setFile is a state update function to store the selected file
                                    setFieldValue("file", selectedFile); // Update form field value with selected file
                                    // event.target.value = "";
                                    // event.currentTarget.value = "";
                                    console.log("File input value cleared");
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
                      <hr />
                      <div className="float-start">
                        <button
                          className=" btn addUser min me-2 mt-2"
                          type="submit"
                          onClick={() => {
                            Upload(fileData);
                          }}
                        >
                          Upload
                        </button>
                      </div>
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
export default FileUpload;
