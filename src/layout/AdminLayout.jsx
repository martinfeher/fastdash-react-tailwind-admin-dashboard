import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBarAdmin from "./NavBarAdmin";
import { connect } from "react-redux";
import useClickOutside from "../components/utils/useClickOutside";
import useWindowDimensions from "../components/utils/useWindowDimensions";
import { IoMdArrowDropleft } from "react-icons/io";
import {
  setOpenSidebarMenu
} from "../actions/globalAction";

const AdminLayout = ({children, setOpenSidebarMenu, global: {sidebarMenuOpen, sidebarMenuManualClose, darkMode}}) => {

    const sideBarRef = useRef(null)
    // const [menuTooltip, setMenuTooltip] = useState("Analytics");
    const [menuTooltip, setMenuTooltip] = useState(null);

    const { height, width } = useWindowDimensions()

    const closeSideBar = useCallback(() => {
      (sidebarMenuOpen && width < 1024) && setOpenSidebarMenu(false)
      });
    useClickOutside(sideBarRef, closeSideBar)

    useEffect(() => {
     if (sidebarMenuOpen && width < 1024) {  // md responsivity width
        setOpenSidebarMenu(false)
     } else if (!sidebarMenuOpen && !sidebarMenuManualClose) {
      setOpenSidebarMenu(true)
     }
    }, [width]) 
  

  return (
    <div className="flex min-h-screen text-gray-700">
      <motion.div
        ref={sideBarRef}
        initial={
          width < 1024 || !sidebarMenuOpen
            ? { minWidth: "56px", width: "56px" }
            : { minWidth: "220px", width: "220px" }
        }
        animate={{
          minWidth: sidebarMenuOpen ? "220px" : "56px",
          width: sidebarMenuOpen ? "220px" : "56px",
        }}
        transition={{ duration: 0.03 }}
        ease={"linear"}
        className="sidebar h-full min-h-screen px-2 z-50 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300"
        // className="sidebar h-full min-h-screen px-2 z-50 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 overflow-y-hidden"
      >
        <Link
          to={"/"}
          className={`w-full flex items-center ml-[2px] py-[10px] text-[20px] text-gray-600 dark:text-gray-300`}
        >
          <div>
            <img
              src="/img/logo/fastdash.png"
              alt="FastDash"
              className="object-scale-down h-[38px]"
            />
          </div>
          <div className="ml-[10px]">
            {sidebarMenuOpen && <div>FastDash</div>}
          </div>
        </Link>
        <hr />
        <div className="py-3">
          <motion.div
            initial={{ width: "220px" }}
            animate={{ width: sidebarMenuOpen ? "220px" : "40px" }}
            transition={{ duration: 0.3 }}
            className="pl-2 text-gray-500 dark:text-gray-400"
          >
            {sidebarMenuOpen && <div>APPS</div>}
          </motion.div>
          <div
            className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Analytics")}
            onMouseLeave={() => setMenuTooltip(null)}
          >
            {menuTooltip === "Analytics" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Analytics</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className=" flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
                <div
                  className={` ${
                    sidebarMenuOpen ? "w-[220px]" : "w-[70px]"
                  } ml-3 dark:text-gray-300 `}
                >
                  {sidebarMenuOpen && <div>Analytics</div>}
                </div>
              </div>
            </NavLink>
          </div>

          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Crm")}
            onMouseLeave={() => setMenuTooltip(null)}>
              {menuTooltip === "Crm" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Crm</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/crm"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Crm</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Kanban")}
            onMouseLeave={() => setMenuTooltip(null)}>
              {menuTooltip === "Kanban" && !sidebarMenuOpen && (
                <div>
                  <div
                    className={`left-[31px] top-[7px] absolute z-[1000]`}
                  >
                    <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                  </div>
                  <div
                    className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                  >
                    <div className="text-14px text-gray-700 dark:text-gray-200">Kanban</div>
                  </div>
                </div>
              )}
            <NavLink
              to={"/kanban"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Kanban</div>}
                </div>
              </div>
            </NavLink>
          </div>

          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Profile")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Profile" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Profile</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Profile</div>}
                </div>
              </div>
            </NavLink>
          </div>
          {!darkMode && (
            <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Calendar")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Calendar" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Calendar</div>
                </div>
              </div>
            )}
              <NavLink
                to={"/calendar"}
                className={({ isActive }) =>
                  (isActive
                    ? "text-black bg-blue-100 dark:bg-slate-600"
                    : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                  " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
                }
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  <div className="ml-3 dark:text-gray-300">
                    {sidebarMenuOpen && <div>Calendar</div>}
                  </div>
                </div>
              </NavLink>
            </div>
          )}

          <div className="pl-2 mt-[6px] text-gray-500">
            {sidebarMenuOpen && <div>FORMS</div>}
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Newsletter")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Newsletter" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Newsletter</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/newsletter"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Newsletter</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Account")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Account" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Account</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/account-settings"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Account</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className="pl-2 mt-[6px] text-gray-500">
            {sidebarMenuOpen && <div>COMPONENTS</div>}
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Charts")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Charts" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Charts</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/charts"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Charts</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Maps")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Maps" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Maps</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/maps"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Maps</div>}
                </div>
              </div>
            </NavLink>
          </div>

          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Buttons")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Buttons" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="text-14px text-gray-700 dark:text-gray-200">Buttons</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/buttons"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>

                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Buttons</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className="mt-[6px] pl-2 text-gray-500">
            {sidebarMenuOpen && <div>AUTHENTICATION</div>}
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Sign in")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Sign in" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="w-[67px] text-14px text-gray-700 dark:text-gray-200">Sign in</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/sign-in"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Sign in</div>}
                </div>
              </div>
            </NavLink>
          </div>
          <div className={`${sidebarMenuOpen ? "w-full" : "w-[40px]"} relative`}
            onMouseEnter={() => setMenuTooltip("Sign up")}
            onMouseLeave={() => setMenuTooltip(null)}>
            {menuTooltip === "Sign up" && !sidebarMenuOpen && (
              <div>
                <div
                  className={`left-[31px] top-[7px] absolute z-[1000]`}
                >
                  <IoMdArrowDropleft className="text-gray-50 dark:text-gray-650 text-[24px]" />
                </div>
                <div
                  className={`left-[46px] -top-[1px] absolute flex px-[10px] py-[6px] bg-gray-50 dark:bg-gray-650 rounded-[4px] z-[999]`}
                >
                  <div className="w-[67px] text-14px text-gray-700 dark:text-gray-200">Sign up</div>
                </div>
              </div>
            )}
            <NavLink
              to={"/sign-up"}
              className={({ isActive }) =>
                (isActive
                  ? "text-black bg-blue-100 dark:bg-slate-600"
                  : "hover:bg-slate-150 dark:hover:bg-slate-700") +
                " w-full h-[38px] lg:h-[35px] flex items-center px-2 rounded-[5px]"
              }
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[23px] h-[23px] stroke-gray-600 dark:stroke-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                <div className="ml-3 dark:text-gray-300">
                  {sidebarMenuOpen && <div>Sign up</div>}
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </motion.div>
      <div className="w-full max-w-scren">
        <NavBarAdmin />
        <div>{children}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, {
  setOpenSidebarMenu,
})(AdminLayout);
