import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginImage from "../../Assets/images/login.png";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import forge from "node-forge";
import Spinner from "../HtmlComponents/Spinner";
import { LoginService } from "../../Service/LoginService";
import { v4 as uuid } from "uuid";
import { ProfileService } from "../../Service/ProfileService";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const InternalLogin = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState("");
  const location = useLocation();
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

  function Login(values) {
    LoginService.userLogin(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ed75993b-c55c-45b4-805a-c26bda53f0b8",
        },
        email: values.username, //"ro_telang@nhai.com",
      },
      (res) => {
        debugger;
        if (res.status === 200) {
          toast.success("Login successful!", {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          var userData = res.data.data.responseObject;
          localStorage.setItem("UUID", res.data.data.sessionId);
          setUserDetails(userData);
          setIsLoading(false);
          navigate("/NHAI/Dashboard", { state: { userData: userData } });
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
      }
    );
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);
    Login(values);
  };

  return (
    <div className="container loginContainer">
      <Spinner isLoading={isLoading} />
      <div className="row">
        <div className="col-md-6">
          <img src={loginImage} alt="Login" className="img-fluid" />
        </div>
        <div className="col-md-6 mt-5">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {(values) => (
              <Form className="d-flex flex-column justify-content-center loginForm">
                <h2 className="mb-3 pageTitle">Login</h2>
                <hr class="hr mb-3" />
                <div className="mb-2">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter your username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {/* <div>
                  <div className="mb-3 d-inline signupInTxt">
                    <a href="/">Sign Up</a>
                  </div>
                  <div className="mb-3 d-inline float-end signupInTxt">
                    <a href="/forgot-password">Forgot Password?</a>
                  </div>
                </div> */}
                <button type="submit" className="btn btn-primary loginBtn">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InternalLogin;
