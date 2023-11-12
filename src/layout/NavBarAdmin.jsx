import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { connect } from "react-redux";
import ModalSearch from "../components/modal/ModalSearch";
import NavBarAdminRightSection from "./NavBarAdminRightSection";
import { useHotkeys } from 'react-hotkeys-hook';
import {
  setOpenWebsiteSearch,
  setOpenSidebarMenu
} from "../actions/globalAction";
import useWindowDimensions from "../components/utils/useWindowDimensions";


const NavBarAdmin = ({ setOpenWebsiteSearch, setOpenSidebarMenu, global: {sidebarMenuOpen, websiteSearchOpen} }) => {
const { height, width } = useWindowDimensions()

useHotkeys('ctrl+space', () => setOpenWebsiteSearch(!websiteSearchOpen))
  
    return (
      <div className="sticky top-0 z-[999]">
        {websiteSearchOpen && <ModalSearch />}
        <div className="flex items-center justify-between px-4 py-2 backdrop-blur-[3px]">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <div onClick={() => setOpenSidebarMenu(!sidebarMenuOpen)}>
                <HiOutlineMenuAlt2 className="text-[25px] text-gray-500 dark:text-gray-350 cursor-pointer" />
              </div>
              <div
                className="ml-[8px] flex cursor-pointer"
                onClick={() => {
                  setOpenWebsiteSearch(true);
                }}
              >
                <HiOutlineSearch className="text-[25px] text-gray-500 dark:text-gray-350" />
                {width > 1024 && (
                  <div className="flex flex-none mb-[10px] -ml-[4px] text-gray-350 dark:text-gray-450">
                  {/* <div className="flex flex-none mb-[10px] -ml-[4px] text-gray-350 dark:text-gray-450 rounded-[5px] dark:border dark:boder-gray-800"> */}
                    <div
                      className="px-[5px] py-[1px] text-[9px]"
                      style={{ fontFamily: "Arial" }}
                    >
                      ctrl
                    </div>
                    <div className="text-[9px] mt-[1px] -ml-[1px] -mr-[1px]">
                      +
                    </div>
                    <div
                      className="px-[5px] py-[1px] text-[9px]"
                      style={{ fontFamily: "Arial" }}
                    >
                      space
                    </div>
                  </div>
                )}
              </div>
            </div>
            <NavBarAdminRightSection />
          </div>
        </div>
      </div>
    );
  }
  
  
const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, {
  setOpenWebsiteSearch,
  setOpenSidebarMenu,
})(NavBarAdmin);