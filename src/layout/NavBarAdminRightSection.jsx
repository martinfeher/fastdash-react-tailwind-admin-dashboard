import { PiGear, PiWarningCircle } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { BsShield } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { MdOutlineNotificationsActive, MdOutlineMailOutline, MdOutlineLightMode, MdOutlinePersonOutline, MdOutlineDarkMode } from "react-icons/md";
import { connect } from "react-redux";
import DropdownAnimation from "../components/dropdown/DropdownAnimation";
import { useLocation, matchPath } from "react-router";


import {
  setDarkMode
} from "../actions/globalAction";

const NavBarAdminRightSection = ({ setDarkMode, global: {darkMode} }) => {

  
    return (
        <div className="flex">
          <div className="group w-[34px] h-[34px] flex items-center justify-center bg-slate-150 hover:bg-blue-100 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full cursor-pointer"
          onClick={()=> setDarkMode(!darkMode)}
          > 
          {darkMode ? 
          (<MdOutlineLightMode className="text-gray-450 dark:text-gray-350 group-hover:dark:text-gray-200 text-[21px] transition duration-200 ease-out" />)
          :
          (<MdOutlineDarkMode className="text-gray-450 dark:text-gray-350 group-hover:dark:text-gray-200 text-[21px] transition duration-200 ease-out" />)
          }
          </div>
        <DropdownAnimation
          button={
            <div className="group ml-[7px] w-[34px] h-[34px] flex items-center justify-center bg-slate-150 hover:bg-blue-100 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full cursor-pointer">
              <MdOutlineMailOutline className="text-gray-450 dark:text-gray-350 group-hover:dark:text-gray-200 text-[21px]" />
            </div>
          }
          animation="origin-[70%_20%] transition-all duration-10 ease-out"
          children={
            <div className="flex w-[300px] flex-col bg-white dark:bg-gray-700 p-4 md:w-[425px] text-[15px] border border-gray-200 dark:border-gray-450 rounded-[5px]">
              <div className="flex items-center justify-between pb-[5px] border-b border-gray-200 dark:border-gray-400">
                <div className="dark:text-gray-300">Messages</div>
              </div>
              <div className="flex py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <BsShield className="text-blue-600 dark:text-blue-500 text-[20px] mt-[5px]" />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px] font-bold">Congratulations</div>
                  <div className="dark:text-gray-400 text-gray-600 text-[11px]">
                    Security updates have been completed successfully
                  </div>
                </div>
              </div>

              <div className="flex py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <IoMdInformationCircleOutline className="text-yellow-400 text-[22px] mt-[3px]" />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px] font-bold">Information</div>
                  <div className="dark:text-gray-400 text-gray-600 text-[11px]">
                    You can now edit tasks in the board view
                  </div>
                </div>
              </div>
              <div className="flex py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <PiWarningCircle className="text-orange-600 text-[22px] mt-[3px]" />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px] font-bold">Warning</div>
                  <div className="dark:text-gray-400 text-gray-600 text-[11px]">
                    You have 2GB avalable for file uploading
                  </div>
                </div>
              </div>
              <div className="flex py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <GiCancel className="text-red-600 text-[20px] mt-[3px]" />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px] font-bold">
                    Something went wrong
                  </div>
                  <div className="dark:text-gray-400 text-gray-600 text-[11px]">View report</div>
                </div>
              </div>
              <div className="mt-[10px]">
                <button
                    type="button"
                    className="px-[13px] py-1.5 dark:bg-blue-700 dark:hover:bg-blue-600 border dark:border-none border-blue-700 text-blue-700 hover:text-white dark:text-white text-[14px] rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    View All Messages
                  </button>
              </div>
            </div>
          }
          classNames={"top-[30px] -left-[225px] md:-left-[385px] py-2 "}
        />
        <DropdownAnimation
          button={
            <div className="group ml-[7px] w-[34px] h-[34px] flex items-center justify-center bg-slate-150 hover:bg-blue-100 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full cursor-pointer">
              <MdOutlineNotificationsActive className="text-gray-450 dark:text-gray-350 group-hover:dark:text-gray-200" />
            </div>
          }
          animation="origin-[70%_20%] transition-all duration-10 ease-out"
          children={
            <div className="flex w-[300px] flex-col bg-white dark:bg-gray-700 p-4 md:w-[425px] text-[15px] border border-gray-200 dark:border-gray-450 rounded-[5px]">
              <div className="flex items-center justify-between pb-[5px] border-b border-gray-200 dark:border-gray-400">
                <div className="dark:text-gray-300">Notification</div>
                <div className="text-[13px]">
                  <button className="px-2 py-[3px] bg-blue-600 text-white text-[12px] rounded-[5px]">
                    3 New
                  </button>
                </div>
              </div>
              <div className="flex items-center py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <img
                    src="/img/profile/user-2.png"
                    alt=""
                    className="object-scale-down h-[52px] w-[52px] rounded-full"
                  />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px]">
                    <strong>Anna Bright</strong> mentioned you in{" "}
                    <strong>UI implementation</strong>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-[11px]">45min ago</div>
                </div>
              </div>
              <div className="flex items-center py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <img
                    src="/img/profile/user-9.jpg"
                    alt=""
                    className="object-scale-down h-[52px] rounded-full"
                  />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px]">
                    <strong>Sean Bishop</strong> invites you to{" "}
                    <strong>Prototyping</strong>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-[11px]">4h ago</div>
                </div>
              </div>
              <div className="flex items-center py-[7px] px-1 hover:bg-slate-150 dark:hover:bg-gray-500 border-b border-gray-200 dark:border-gray-400 cursor-pointer transition duration-50 ease-out">
                <div className="flex-none">
                  <img
                    src="/img/profile/user-3.png"
                    alt=""
                    className="object-scale-down h-[52px] rounded-full"
                  />
                </div>
                <div className="ml-[12px]">
                  <div className="dark:text-gray-350 text-[12px]">
                    <strong>Julie Davenport</strong> data source document update
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-[11px]">7h ago</div>
                </div>
              </div>
              <div className="mt-[10px]">
                <button className="w-full px-[13px] py-1.5 flex justify-center items-center bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white text-[14px] rounded-full cursor-pointer transition duration-300 ease-out">
                  Read all notifications
                </button>
              </div>
            </div>
          }
          classNames={"top-[30px] -left-[260px] md:-left-[385px] py-2 "}
        />
        <DropdownAnimation
          button={
            <div>
              <img
                src="/img/profile/user-4.png"
                alt="user"
                className="w-[36px] h-[36px] ml-[7px] rounded-full cursor-pointer"
              />
            </div>
          }
          animation="origin-[70%_20%] transition-all duration-10 ease-out"
          children={
            <div className="flex w-[260px] flex-col bg-white dark:bg-gray-700 p-4 gap-2 md:w-[285px] text-[14px] border border-gray-200 dark:border-gray-450 rounded-[5px]">
              <div className="flex pb-[10px] border-b border-gray-200 dark:border-gray-400">
                <div className="flex-none">
                  <img
                    src="/img/profile/user-4.png"
                    alt=""
                    className="object-scale-down h-[41px] w-[41px] rounded-[5px]"
                  />
                </div>
                <div className="ml-[10px] mt-[1px]">
                  <div className="flex justify-between items-center">
                    <div className="dark:text-gray-300">Robert Peterson</div>
                    <div className="px-2 pt-[2px] pb-[1px] bg-slate-200 dark:bg-slate-500 text-[11px] text-gray-600 dark:text-white rounded-full">
                      Pro
                    </div>
                  </div>
                  <div className="text-gray-400 dark:text-gray-350 text-[12px]">
                    robert_peterson@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex cursor-pointer group">
                <MdOutlinePersonOutline className="text-[22px] text-gray-500 group-hover:text-blue-400 dark:group-hover:text-blue-500" />
                <div className="mt-[2px] ml-[6px] dark:text-gray-350 group-hover:text-blue-400 dark:group-hover:text-blue-500">
                  Profile
                </div>
              </div>
              <div className="flex cursor-pointer group">
                <MdOutlineMailOutline className="text-[22px] text-gray-500 group-hover:text-blue-400 dark:group-hover:text-blue-500" />
                <div className="mt-[2px] ml-[6px] dark:text-gray-350 group-hover:text-blue-400 dark:group-hover:text-blue-500">
                  Inbox
                </div>
              </div>
              <div className="group flex pb-[10px] border-b border-gray-200 dark:border-gray-400 cursor-pointer">
                <PiGear className="text-[22px] text-gray-500 group-hover:text-blue-400 dark:group-hover:text-blue-500" />
                <div className="mt-[2px] ml-[6px] dark:text-gray-350 group-hover:text-blue-400 dark:group-hover:text-blue-500">
                  Settings
                </div>
              </div>
              <div className="flex cursor-pointer group -ml-[2px]">
                <BiLogOut className="text-[22px] text-gray-500 group-hover:text-red-500" />
                <div className="mt-[2px] ml-[6px] dark:text-gray-350 text-gray-500 group-hover:text-red-500">
                  Logout
                </div>
              </div>
            </div>
          }
          classNames={"top-[30px] -left-[220px] md:-left-[236px] py-2 "}
        />
      </div>
    );
  }
  
  
const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, {
  setDarkMode,
})(NavBarAdminRightSection);