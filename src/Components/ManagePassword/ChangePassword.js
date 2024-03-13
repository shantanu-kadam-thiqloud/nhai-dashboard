import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import forge from "node-forge";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ExternalUserService } from "../../Service/ExternalUserService";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string().matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+]).{8,}$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
  ),
  // .min(6, "Password must be at least 6 characters")
  // .required("New Password is required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm New Password is required"),
});
const ChangePassword = () => {
  const [publicKey, setPublicKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  React.useEffect(() => {
    async function fetchPublicKey() {
      try {
        const response = await axios.get(
          "http://localhost:3007/api/RSA/public-key"
        );
        setPublicKey(response.data);
      } catch (error) {
        console.error("Error fetching public key:", error);
      }
    }
    fetchPublicKey();
  }, []);

  const handleSubmit = async (values) => {
    // if (!publicKey) {
    //   console.error("Public key not available");
    //   return;
    // }

    // try {
    //   const publicKeyObject = forge.pki.publicKeyFromPem(publicKey);
    //   const encrypted = publicKeyObject.encrypt(
    //     JSON.stringify(values),
    //     "RSA-OAEP"
    //   );
    //   const encryptedValues = forge.util.encode64(encrypted);
    //   const response = await axios.post(
    //     "http://localhost:3007/api/auth/change-password",
    //     { encrypted: encryptedValues }
    //   );
    //   console.log(response.data);
    //   if (response.data) {
    //     toast.success("Password changed successfully", {
    //       position: "top-right",
    //       autoClose: 3000,
    //     });
    //     navigate("/NHAI/login");
    //   } else {
    //     toast.error("Password change failed. Please try again.", {
    //       position: "top-right",
    //       autoClose: 5000,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error changing password:", error);
    // }
    changepassword(values);
  };

  function changepassword(values) {
    debugger;
    var userName = localStorage.getItem("userName");
    ExternalUserService.changePassword(
      {
        username: userName, //userData.username, //"Pritam",
        oldPassword: values.currentPassword, //"Pritam@123",
        newPassword: values.newPassword, //"Pritam@123456",
      },
      (res) => {
        if (res.status === 200) {
          toast.success("Password change successfully ! Please Login again.", {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });

          setIsLoading(false);

          navigate("/NHAI/login");
        } else if (res.status === 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    );
  }

  return (
    <div className="container changePasswordContainer">
      <div className="row m-5">
        <div className="col-md-6 mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="d-flex flex-column h-100 justify-content-center loginForm">
              <h2 className="mb-3 pageTitle">Change Password</h2>
              <hr className="hr mb-3" />

              <div className="form-group mb-3">
                <label htmlFor="currentPassword">Current Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  name="currentPassword"
                />
                <ErrorMessage
                  className="text-danger"
                  name="currentPassword"
                  component="div"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="newPassword">New Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                />
                <ErrorMessage
                  className="text-danger"
                  name="newPassword"
                  component="div"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                />
                <ErrorMessage
                  className="text-danger"
                  name="confirmNewPassword"
                  component="div"
                />
              </div>

              <button type="submit" className="btn btn-primary loginBtn">
                Change Password
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
