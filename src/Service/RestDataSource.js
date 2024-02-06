import Axios from "axios";

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

  // async SendRequest(method, url, callback, data) {
  //   try {
  //     let response = await Axios.request({
  //       method: method,
  //       url: url,
  //       data: data,
  //     });
  //     callback(response);
  //   } catch (err) {
  //     if (err && err.response && err.response.data) {
  //       if (err.response.data) {
  //         var k = err.response.data.reasonText;
  //       }

  //       if (err.response.data.reasonCode == 400) {
  //         var k = err.response.data.reasonText;
  //       } else {
  //         var k = "Error encountered, Please try again";
  //       }

  //       var errbx = document.getElementById("processing-status");
  //       if (errbx != null) {
  //         document.getElementById("processing-status").innerHTML =
  //           k + ", Please try again.";
  //       }
  //     }
  //     callback(err.response);
  //   }
  // }

  async SendRequest(method, url, callback, data) {
    try {
      let response = await Axios.request({
        method: method,
        url: url,
        data: data,
      });

      // Check if callback is a function before calling it
      if (typeof callback === "function") {
        callback(response);
      } else {
        console.error("Callback is not a function");
      }
    } catch (err) {
      // Handle the error

      if (err && err.response && err.response.data) {
        let k;

        if (err.response.data.reasonCode == 400) {
          k = err.response.data.reasonText;
        } else {
          k = "Error encountered, Please try again";
        }

        let errbx = document.getElementById("processing-status");
        if (errbx != null) {
          document.getElementById("processing-status").innerHTML =
            k + ", Please try again.";
        }
      }

      // Check if callback is a function before calling it
      if (typeof callback === "function") {
        callback(err.response);
      } else {
        console.error("Callback is not a function");
      }
    }
  }
}
