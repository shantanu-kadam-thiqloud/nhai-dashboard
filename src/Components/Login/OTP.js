import React, { useState, useRef, useEffect } from "react";

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
import "./OTP.css";
const OTP = () => {
  const otpSchema = Yup.object().shape({
    // username: Yup.string().required("Username is required"),
  });
  const initialValues = {
    OTP: "",
  };
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState("");
  const location = useLocation();
  React.useEffect(() => {}, []);

  function validateOTP(values) {
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
          //res.data.data.responseObject
          setUserDetails(userData);
          // console.log(
          //   "User Data = > ",
          //   userData.userName,
          //   userData.userId,
          //   userData.profileId
          // );
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
    validateOTP(values);
  };
  //   -----------------------------------------------------------------------
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== 416578) {
      setOtpError("Wrong OTP Please Check Again or");
    } else {
      setOtpError(null);
    }
    console.log("->", otp.join(""));
  }, [otp]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

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
            enableReinitialize
            validationSchema={otpSchema}
            onSubmit={handleSubmit}
          >
            {(values) => (
              <Form className="d-flex flex-column justify-content-center loginForm otpForm">
                <h2 className="mb-3 pageTitle">Two Factor Authentication</h2>
                {/* Two Factor Authentication */}
                <hr class="hr mb-3" />

                <p className="text-base text-black mt-6 mb-4">
                  Enter One Time Password (OTP)
                </p>

                <div className="flex items-center justify-center gap-2 otpBox">
                  {/* otpBox */}
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                      ref={(reference) =>
                        (otpBoxReference.current[index] = reference)
                      }
                      className={`w-20 h-auto text-black p-3 rounded-md block bg-gray focus:border-1 focus:outline-none appearance-none`}
                    />
                  ))}
                </div>
                <button type="submit" className="btn btn-primary loginBtn mt-4">
                  Validate
                </button>

                <p
                  className={`text-lg text-red mt-4 ${
                    otpError ? "error-show" : ""
                  }`}
                >
                  {otpError && (
                    <>
                      {otpError}
                      {"\n"}
                      <a href="#" className="" onClick={() => {}}>
                        Resend OTP
                      </a>
                    </>
                  )}
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default OTP;
