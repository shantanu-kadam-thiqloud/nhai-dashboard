import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginImage from "../../Assets/images/login.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import forge from "node-forge";
import Spinner from "../HtmlComponents/Spinner";
import { LoginService } from "../../Service/LoginService";
import { v4 as uuid } from "uuid";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState("");

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
        if (res.status == 200) {
          toast.success("Login successful!", {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          var userData = res.data.responseObject;
          setUserDetails(userData);
          console.log(
            "User Data = > ",
            userData.userName,
            userData.userId,
            userData.profileId
          );
          setIsLoading(false);
          navigate("/NHAI/Dashboard");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
    Login(values);
    // if (!publicKey) {
    //   console.error("Public key not available");
    //   return;
    // }
    // const publicKeyObject = forge.pki.publicKeyFromPem(publicKey);
    // console.log("object type :-", typeof publicKeyObject);
    // const requestData = {
    //   username: values.username,
    //   password: values.password,
    // };
    // const encodedData = forge.util.encodeUtf8(values);
    // console.log("login data", values);
    // const encrypted = publicKeyObject.encrypt(encodedData, "RSA-OAEP");
    // const encryptedValues = forge.util.encode64(encrypted);
    // console.log(encryptedValues);
    // const response = await axios.post("http://localhost:3007/api/auth/login", {
    //   encrypted: requestData,
    // });
    // console.log(response.data);
    // if (response.data) {
    //   localStorage.setItem("UUID", response.data.session_id);
    //   toast.success("Login successful!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   navigate("/NHAI/Dashboard");
    // } else {
    //   toast.error("Login failed. Please try again.", {
    //     position: "top-right",
    //     autoClose: 5000,
    //   });
    // }
    // if (values.username === "admin" && values.password === "admin123") {
    //   toast.success("Login successful!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   navigate("/Users");
    // } else {
    //   toast.error("Login failed. Please try again.", {
    //     position: "top-right",
    //     autoClose: 5000,
    //   });
    // }
    //---------------------------------------------------------------------------
    // if (values.username === "Siddhesh" && values.password === "admin@123") {
    //   setIsLoading(true);

    //   toast.success("Login successful!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     navigate("/NHAI/Dashboard");
    //   }, 1000);
    // } else if (
    //   values.username === "Shantanu" &&
    //   values.password === "admin@123"
    // ) {
    //   setIsLoading(true);

    //   toast.success("Login successful!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     navigate("/NHAI/Dashboard");
    //   }, 1000);
    // } else {
    //   toast.error("Login failed. Please try again.", {
    //     position: "top-right",
    //     autoClose: 5000,
    //   });
    // }
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

export default Login;
