import { DropdownService } from "../../Service/DropdownService";
import { v4 as uuid } from "uuid";
import sideBarDataChecker from "../Checker/sideBarData";
import { useState } from "react";
import { useEffect } from "react";

export const DateFormatFunction = (inputDate) => {
  if (inputDate) {
    // Parse the input date string into a Date object
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);

    // Extract day, month, and year components
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();

    // Format the date in "dd-mm-yyyy" format
    return `${dd}-${mm}-${yyyy}`;
  } else {
    return;
  }
};

export const ConvertFormat = (inputDate) => {
  if (inputDate) {
    // Split the input date into an array
    var dateArray = inputDate.split("-");
    // Rearrange the array elements to the new format
    var outputDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

    return outputDate;
  } else {
    return;
  }
};

export const getCheckValueByName = (menuData, submenuName, actionName) => {
  //Side bar Data
  // var sidejsonData = sideBarDataChecker.find(
  //   (item) => item.type === "menuData"
  // );
  const MappingData = JSON.parse(sessionStorage.getItem("Mapping"));
  const sidebarMockData = MappingData; //sidejsonData.data;

  for (const menu of sidebarMockData) {
    for (const submenu of menu.subMenu) {
      if (submenu.name === submenuName) {
        if (actionName !== undefined) {
          for (const action of submenu.action) {
            if (action.actionName === actionName) {
              return action.check;
            }
          }
        } else {
          return submenu.check;
        }
      }
    }
  }
  return undefined; // Submenu or action not found
};

export async function DownloadByteArray(filename, response) {
  const date = new Date();
  const linkSource = `data:application/vnd.ms-excel;base64,${response}`;
  const downloadLink = document.createElement("a");
  const fileName = `${filename}_${date}.xlsx`;
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}

export const useZoneDataList = (piuId) => {
  const [zoneList, setZoneList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        DropdownService.getZoneData(
          {
            requestMetaData: {
              applicationId: "nhai-dashboard",
              correlationId: uuid(),
            },
            userName: "nhai",
            piuId: piuId,
          },
          (res) => {
            if (res.status === 200) {
              const list =
                res.data.data.zones == null
                  ? [
                      {
                        zoneName: "UnMapped",
                      },
                      {
                        zoneName: "Asia",
                      },
                      {
                        zoneName: "North",
                      },
                      {
                        zoneName: "MoRTH",
                      },
                    ]
                  : res.data.data.zones;
              setZoneList(list);
              console.log("->", list);
            } else if (res.status === 404) {
              console.log(res.status);
            } else if (res.status === 500) {
              console.log(res.status);
            }
          },
          (error) => {
            console.error("Error->", error);
          }
        );
      } catch (error) {
        console.error("Error->", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // Any necessary clean-up code here
    };
  }, [piuId]); // Dependency array to ensure useEffect runs when piuId changes

  return zoneList;
};

export const useRoDataList = (piuId, piuZoneName) => {
  const [roList, setRoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        DropdownService.getROData(
          {
            requestMetaData: {
              applicationId: "nhai-dashboard",
              correlationId: uuid(),
            },
            userName: "nhai",
            piuId: piuId,
            piuZoneName: piuZoneName,
          },
          (res) => {
            if (res.status === 200) {
              const list =
                res.data.data.ros == null
                  ? [
                      {
                        roName: "Jaipur",
                      },
                      {
                        roName: "Chennai",
                      },
                    ]
                  : res.data.data.ros;
              setRoList(list);
              console.log("->", list);
            } else if (res.status === 404) {
              console.log(res.status);
            } else if (res.status === 500) {
              console.log(res.status);
            }
          },
          (err) => {
            console.error("Error->", err);
          }
        );
      } catch (error) {
        console.error("Error->", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // Any necessary clean-up code here
    };
  }, [piuId, piuZoneName]); // Dependency array to ensure useEffect runs when piuId or piuZoneName changes

  return roList;
};

export const usePIUDataList = (locationId, piuStateName) => {
  const [piuList, setPiuList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        DropdownService.getPIUData(
          {
            requestMetaData: {
              applicationId: "nhai-dashboard",
              correlationId: uuid(),
            },
            userName: "nhai",
            locationId: locationId,
            piuStateName: piuStateName,
          },
          (res) => {
            if (res.status === 200) {
              const list =
                res.data.data.pius == null
                  ? [
                      {
                        piuId: 1,
                        piuName: "Agra",
                      },
                      {
                        piuId: 2,
                        piuName: "Ahmedabad",
                      },
                    ]
                  : res.data.data.pius;
              setPiuList(list);
              console.log("->", list);
            } else if (res.status === 404) {
              console.log(res.status);
            } else if (res.status === 500) {
              console.log(res.status);
            }
          },
          (err) => {
            console.error("Error->", err);
          }
        );
      } catch (error) {
        console.error("Error->", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // Any necessary clean-up code here
    };
  }, [locationId, piuStateName]); // Dependency array to ensure useEffect runs when locationId or piuStateName changes

  return piuList;
};
//export const ZoneDataList = useZoneDataList("");

export async function getBase64(file) {
  if (file === null) {
    return;
  } else {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }
}

//-----------Cookie----------------------------------------------------------------

// Function to set a cookie with JSON data
export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name +
    "=" +
    encodeURIComponent(JSON.stringify(value)) +
    expires +
    "; path=/";
}

// Function to get a cookie and parse JSON data
export function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      let cookieValue = cookie.substring(nameEQ.length, cookie.length);
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  }
  return null;
}

// Function to clear a cookie
export function clearCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
