import Axios from "axios";
import { toast } from "react-toastify";
export default class RestDataSource {
  constructor(base_url, userId, errorCallback) {
    this.BASE_URL = base_url;
    this.handleError = errorCallback;
  }

  async GetData(callback) {
    this.SendRequest("get", this.BASE_URL, callback);
  }

  async GetOneByParam(id, callback) {
    this.SendRequest("get", `${this.BASE_URL}?${id}`, callback);
  }

  async GetOne(data, callback) {
    this.SendRequest("get", this.BASE_URL, callback, data);
  }

  async Store(data, callback) {
    this.SendRequest("post", this.BASE_URL, callback, data);
  }

  async Update(data, callback) {
    this.SendRequest("put", this.BASE_URL, callback, data);
  }

  async Delete(data, callback) {
    this.SendRequest("delete", this.BASE_URL, callback, data);
  }

  async SendRequest(method, url, callback, data) {
    const uuid = localStorage.getItem("UUID");

    const headers = {
      XUuid: uuid,
    };
    //console.log(uuid, "from frontend");

    try {
      let response = await Axios.request({
        method: method,
        url: url,
        data: data,
        headers: headers, //localstorage uuid
      });

      // Check if callback is a function before calling it
      if (typeof callback === "function") {
        callback(response, null);
      } else {
        console.error("Callback is not a function");
      }
    } catch (err) {
      // Handle the error
      let errorMessage;

      if (err && err.response && err.response.data) {
        errorMessage =
          err.response.data.reasonText || "Error encountered, Please try again";
        let errbx = document.getElementById("processing-status");
        if (errbx != null) {
          errbx.innerHTML = errorMessage + ", Please try again.";
        }
      } else if (err.message === "Network Error") {
        errorMessage = "Network Error";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        errorMessage = "Unknown Error";
      }

      // Check if errorCallback is a function before calling it
      if (typeof this.handleError === "function") {
        this.handleError(errorMessage);
      } else {
        console.error("ErrorCallback is not a function");
      }

      // Check if callback is a function before calling it
      if (typeof callback === "function") {
        callback(null, errorMessage);
      } else {
        console.error("Callback is not a function");
      }
    }
  }
}
