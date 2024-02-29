//import { useState } from "react";

const sideData = [
  {
    type: "menuData",
    data: [
      {
        id: 1,
        menuName: "Home",
        url: "/NHAI/Dashboard",
        subMenu: [
          {
            id: 1,
            name: "Snapshot",
            check: true,
            oldCheck: false,
            action: [],
            url: "#",
          },
          {
            id: 2,
            name: "Financial",
            check: false,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 3,
            name: "Financial(D)",
            check: false,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 4,
            name: "Bank",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 5,
            name: "Zone",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 6,
            name: "RO",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 7,
            name: "PIU",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 8,
            name: "Account Level",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 9,
            name: "Transaction",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 10,
            name: "Ageing",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 11,
            name: "Events",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 12,
            name: "Limit Ledger",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
          {
            id: 13,
            name: "Velocity",
            check: true,
            oldCheck: false,
            url: "#",
            action: [],
          },
        ],
      },
      {
        id: 2,
        menuName: "Admin",
        url: "#",
        subMenu: [
          {
            id: 1,
            name: "User",
            url: "/NHAI/Users",
            oldCheck: false,
            check: true,
            action: [
              { id: 3, actionName: "Add", oldCheck: false, check: true },
              { id: 4, actionName: "View", oldCheck: false, check: true },
              { id: 2, actionName: "Update", oldCheck: false, check: true },
              { id: 5, actionName: "Delete", oldCheck: false, check: true },
            ],
          },
          {
            id: 2,
            name: "User Profile",
            url: "/NHAI/Profiles",
            check: true,
            oldCheck: false,
            action: [
              { id: 3, actionName: "Add", oldCheck: false, check: true },
              { id: 4, actionName: "View", oldCheck: false, check: true },
              { id: 2, actionName: "Update", oldCheck: false, check: true },
              { id: 5, actionName: "Delete", oldCheck: false, check: true },
            ],
          },
          {
            id: 3,
            name: "User Group",
            url: "/NHAI/Groups",
            oldCheck: false,
            check: true,
            action: [
              { id: 3, actionName: "Add", oldCheck: false, check: true },
              { id: 4, actionName: "View", oldCheck: false, check: true },
              { id: 2, actionName: "Update", oldCheck: false, check: true },
              { id: 5, actionName: "Delete", oldCheck: false, check: true },
            ],
          },
          {
            id: 4,
            name: "Menu Management",
            url: "/NHAI/MenuManagement",
            check: true,
            oldCheck: false,
            action: [],
          },
          {
            id: 7,
            name: "File Upload",
            url: "/NHAI/FileUpload",
            check: true,
            oldCheck: false,
            action: [],
          },
          {
            id: 8,
            name: "Mapping Master",
            url: "/NHAI/MappingMaster",
            check: true,
            oldCheck: false,
            action: [],
          },
          {
            id: 9,
            name: "Job Execution Log",
            url: "/NHAI/JobExecutionLog",
            check: true,
            oldCheck: false,
            action: [],
          },
        ],
      },
      {
        id: 3,
        menuName: "Manage Password",
        url: "#",
        subMenu: [
          {
            id: 1,
            name: "Change Password",
            url: "/NHAI/ChangePassword",
            check: true,
            oldCheck: false,
            action: [],
          },
        ],
      },
      {
        id: 4,
        menuName: "Reports",
        url: "#",
        subMenu: [
          {
            id: 1,
            name: "User Login Report",
            url: "/NHAI/UserLoginReport",
            check: true,
            oldCheck: false,
            action: [],
          },
          {
            id: 2,
            name: "User Active/Inactive",
            url: "/NHAI/UserActiveInactiveReport",
            check: true,
            oldCheck: false,
            action: [],
          },
          {
            id: 3,
            name: "FIFO Ageing Report",
            url: "/NHAI/FIFOAgeingReport",
            check: true,
            oldCheck: false,
            action: [],
          },
        ],
      },
      {
        id: 5,
        menuName: "Pending Approval",
        url: "#",
        subMenu: [
          {
            id: 1,
            name: "User Request",
            url: "/NHAI/UserRequests",
            oldCheck: false,
            check: true,
            action: [],
          },

          {
            id: 2,
            name: "User Profile Request",
            url: "/NHAI/profileRequests",
            oldCheck: false,
            check: true,
            action: [],
          },
          {
            id: 3,
            name: "User Group Request",
            url: "/NHAI/groupRequests",
            oldCheck: false,
            check: true,
            action: [],
          },
          {
            id: 4,
            name: `Menu Management Request`,
            url: "/NHAI/MenuManagementRequests",
            oldCheck: false,
            check: true,
            action: [],
          },
          {
            id: 5,
            name: "Mapping Master Request",
            url: "/NHAI/MappingMasterRequests",
            oldCheck: false,
            check: true,
            action: [],
          },
        ],
      },
    ],
  },
];

//----------------------------------------------------------------------------------------------------------

// const [data, setData] = useState([]);
// function addMenu(data, newMenu) {
//   data.push(newMenu);
//   setData(data);
//   return data;
// }

// function addSubMenu(data, menuId, newSubMenu) {
//   const menu = data.find((item) => item.id === menuId);
//   if (menu) {
//     if (!menu.subMenu) {
//       menu.subMenu = [];
//     }
//     menu.subMenu.push(newSubMenu);
//   }
//   setData(data);
//   return data;
// }

// // Function to add an action to a specific submenu
// function addAction(data, menuId, subMenuId, newAction) {
//   const menu = data.find((item) => item.id === menuId);
//   if (menu) {
//     const subMenu = menu.subMenu.find((subItem) => subItem.id === subMenuId);
//     if (subMenu) {
//       if (!subMenu.action) {
//         subMenu.action = [];
//       }
//       subMenu.action.push(newAction);
//     }
//   }
//   setData(data);
//   return data;
// }
// //-Edit function---------------------------------------------------------------------------------

// function editMenu(data, menuId, updatedMenu) {
//   const index = data.findIndex((item) => item.id === menuId);
//   if (index !== -1) {
//     data[index] = { ...data[index], ...updatedMenu };
//   }
//   setData(data);
//   return data;
// }

// function editSubMenu(data, menuId, subMenuId, updatedSubMenu) {
//   const menu = data.find((item) => item.id === menuId);
//   if (menu && menu.subMenu) {
//     const subMenuIndex = menu.subMenu.findIndex(
//       (subItem) => subItem.id === subMenuId
//     );
//     if (subMenuIndex !== -1) {
//       menu.subMenu[subMenuIndex] = {
//         ...menu.subMenu[subMenuIndex],
//         ...updatedSubMenu,
//       };
//     }
//   }
//   setData(data);
//   return data;
// }

// function editAction(data, menuId, subMenuId, actionId, updatedAction) {
//   const menu = data.find((item) => item.id === menuId);
//   if (menu && menu.subMenu) {
//     const subMenu = menu.subMenu.find((subItem) => subItem.id === subMenuId);
//     if (subMenu && subMenu.action) {
//       const actionIndex = subMenu.action.findIndex(
//         (action) => action.id === actionId
//       );
//       if (actionIndex !== -1) {
//         subMenu.action[actionIndex] = {
//           ...subMenu.action[actionIndex],
//           ...updatedAction,
//         };
//       }
//     }
//   }
//   setData(data);
//   return data;
// }
// //-Delete Function----------------------------------------------------------------------------------

// function deleteMenu(data, menuId) {
//   return data.filter((menu) => menu.id !== menuId);
// }

// function deleteSubMenu(data, menuId, subMenuId) {
//   return data.map((menu) => {
//     if (menu.id === menuId && menu.subMenu) {
//       menu.subMenu = menu.subMenu.filter((subMenu) => subMenu.id !== subMenuId);
//     }
//     return menu;
//   });
// }

// function deleteAction(data, menuId, subMenuId, actionId) {
//   return data.map((menu) => {
//     if (menu.id === menuId && menu.subMenu) {
//       menu.subMenu = menu.subMenu.map((subMenu) => {
//         if (subMenu.id === subMenuId && subMenu.action) {
//           subMenu.action = subMenu.action.filter(
//             (action) => action.id !== actionId
//           );
//         }
//         return subMenu;
//       });
//     }
//     return menu;
//   });
// }
// //----------------------------------------------------------------------------------------------------------

export default sideData;
