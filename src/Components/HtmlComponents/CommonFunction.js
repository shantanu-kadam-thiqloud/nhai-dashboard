import { DropdownService } from "../../Service/DropdownService";
import { v4 as uuid } from "uuid";
import sideBarDataChecker from "../Checker/sideBarData";
import * as XLSX from "xlsx";
import { useState } from "react";
import { useEffect } from "react";
import FileSaver from "file-saver";

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
  var sidejsonData = sideBarDataChecker.find(
    (item) => item.type === "menuData"
  );
  const sidebarMockData = sidejsonData.data;

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
  const hexString = response;
  // Convert hexadecimal string to binary data
  const binaryData = hexString
    .match(/.{1,2}/g)
    .map((byte) => parseInt(byte, 16));
  const byteArray = new Uint8Array(binaryData);

  // Create a Blob from the binary data
  // const blob = new Blob([response]);

  // // Read the Blob data as an ArrayBuffer
  // const reader = new FileReader();
  // reader.readAsArrayBuffer(blob);

  // // When the FileReader finishes reading, create the XLSX file and trigger the download
  // reader.onload = function (event) {
  //   const arrayBuffer = event.target.result;
  //   const workbook = XLSX.read(arrayBuffer, { type: "array" });

  //   // Write the workbook back as an XLSX file
  //   const xlsxData = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });

  //   // Convert binary string to Blob
  //   const xlsxBlob = new Blob([xlsxData], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });

  //   // Create a download link
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(xlsxBlob);
  const date = new Date();
  //   link.download = `${filename}_${date}.xlsx`; // Change the file name as needed

  //   // Simulate a click on the download link
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(link.href);
  // };
  //----------------------------------------------------------------------------------------------------
  // Convert byte array to Blob
  // const blob = new Blob([response]);
  // var byteArray = new Uint8Array(response);
  // const xlsxBlob = new Blob([byteArray], {
  //   type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  // });
  // // Create a download link
  // const link = document.createElement("a");
  // link.href = URL.createObjectURL(xlsxBlob);
  // link.download = `${filename}_${date}.xlsx`; //filename;

  // // Simulate a click on the download link
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  // URL.revokeObjectURL(link.href);
  // -----------------------------------------------------------------------------------------------------
  // const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${response}`;
  // const downloadLink = document.createElement("a");
  // const fileName = `${attachment.name}.xlsx`;

  // downloadLink.href = linkSource;
  // downloadLink.download = fileName;
  // downloadLink.click();

  // const link = document.createElement("a");
  // link.href = linkSource;
  // link.download = `${filename}_${date}.xlsx`; //filename;

  // // Simulate a click on the download link
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  // URL.revokeObjectURL(link.href);
  //------------------------------------------------------------------------------------------
  // If you want to download file automatically using link attribute.
  // const url = URL.createObjectURL(new Blob([response]));
  // // const blob = new Blob([response], { type: "application/vnd.ms-excel" });
  // const link = document.createElement("a");
  // link.href = url;
  // link.setAttribute("download", `${filename}_${date}.xlsx`);
  // document.body.appendChild(link);
  // link.click();
  // ---------------------------------------------------------------------------------------------
  // const blob = new Blob([response]);
  // var byteArray = new Uint8Array(blob);
  // const xlsxBlob = new Blob([byteArray], {
  //   type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  // });
  // const xlsxBlob = new Blob([byteArray], {
  //   type: "application/vnd.ms-excel", // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //
  // });
  // const cleanData = response.replace(/^"|"$/g, "");
  // const blob = new Blob([cleanData], { type: "application/octet-stream" });
  // Create a link element
  // const link = document.createElement("a");
  // link.href =
  //   "https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls"; //cleanData; //window.URL.createObjectURL(response);
  // link.target = "_blank"; // Open in a new tab if needed
  // link.download = `${filename}_${date}.xlsx`;

  // // Append the link to the body
  // document.body.appendChild(link);

  // // Trigger the download
  // link.click();

  // // Cleanup
  // document.body.removeChild(link);
  //--------------------------------------------------------------------------------------------------------------------------
  // const binaryData = response; // Paste the binary data string here
  // const fileName = `${filename}_${date}.xlsx`;

  // const binaryStringToArrayBuffer = (binaryData) => {
  //   const binary = atob(binaryData);
  //   const arrayBuffer = new ArrayBuffer(binary.length);
  //   const uint8Array = new Uint8Array(arrayBuffer);
  //   for (let i = 0; i < binary.length; i++) {
  //     uint8Array[i] = binary.charCodeAt(i);
  //   }
  //   return arrayBuffer;
  // };

  // const handleDownload = () => {
  //   const blob = new Blob([binaryStringToArrayBuffer(binaryData)], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = fileName;
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  //   document.body.removeChild(a);
  // };
  // handleDownload();
  var sample = new Blob(["Hello, world!"], {
    type: "text/plain;charset=utf-8",
  });
  FileSaver.saveAs(sample, "Sample.txt");
  //---------------------------------------------------------------------------------
  const blob = new Blob([byteArray], { type: "application/vnd.ms-excel" });
  FileSaver.saveAs(blob, `${filename}_${date}.xlsx`);
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
