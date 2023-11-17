import { useEffect, useRef, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import useClickOutside from "../utils/useClickOutside";
import QuicklinkItem from "../search/QuicklinkItem";
import useWindowDimensions from "../utils/useWindowDimensions";
import {
  setOpenWebsiteSearch,
  setWebsiteSearchText,
  setOpenSidebarMenu,
} from "../../actions/globalAction";

const ModalSearch = ({ setOpenWebsiteSearch, setWebsiteSearchText, setOpenSidebarMenu, global:{websiteSearchText, searchItems} }) => {

    const pageModalRef = useRef(null)
    const searchInputRef = useRef(null)
    const { height, width } = useWindowDimensions()

    useEffect(() => {
        searchInputRef.current.focus()
    }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 27) {   // press Escape
      setOpenWebsiteSearch(false);
    }
  });
    
  useEffect(() => {
      document.addEventListener("keydown", handleKeyDown, false);
      return () => {
        document.removeEventListener("keydown", handleKeyDown, false);
      };
    }, [handleKeyDown]);

  const closePageModal = useCallback(() => {
      setOpenWebsiteSearch(false)
      });
  useClickOutside(pageModalRef, closePageModal);

  const handleClickLink = () => {
    setOpenWebsiteSearch(false)
    width < 1024 && setOpenSidebarMenu(false)
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 m-auto left-0 z-100 bg-gray-350 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-30 backdrop-blur-[1px] dark:backdrop-blur-[1px] z-[999]">
      <div
        ref={pageModalRef}
        className={`relative flex w-[90%] md:w-[600px] h-[460px] right-0 left-0 mt-[80px] mx-auto px-6 pb-4 rounded-[12px] z-[999] 
        bg-brandLight dark:bg-brandDarkPrimary border border-gray-300  dark:border-gray-400 `}
      >
        <div
          className="group absolute top-[6px] right-[6px] w-[21px] h-[21px] pl-[5px] pt-[5px] bg-slate-200 dark:bg-slate-500 
              hover:bg-slate-150 dark:hover:bg-slate-400 rounded-[10px] !cursor-pointer"
          onClick={() => {
            setOpenWebsiteSearch(false);
          }}
        >
          <MdClose size={11} className="text-gray-500 dark:text-gray-300 group-hover:sky-100 dark:group-hover:sky-300" />
        </div>
        <div className="mt-[20px] w-full">
          <div className="relative mb-[10px] pb-[10px] border-b border-gray-200 dark:border-gray-400">
            <HiOutlineSearch className="absolute top-[10px] left-[10px] text-[18px] text-gray-400 dark:text-gray-200" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search ..."
              className="pl-[33px] pr-[10px] h-[36px] w-[95%] dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-[14px] border border-gray-200  dark:border-gray-400 outline-none focus:border rounded-md"
              onChange={(e) => setWebsiteSearchText(e.target.value)}
            />
          </div>

          {websiteSearchText !== "" && (
            <div className="mt-[10px] ml-[8px] text-[15px]">
              <div className="ml-[7px] dark:text-gray-300">Search results</div>
              <div className="overflow-y-auto mt-[6px]">
                <div className="flex flex-col">
                  <div onClick={() => handleClickLink()}>
                    {searchItems?.map((item, index) => (
                      <QuicklinkItem
                        key = {index}
                        icon={
                          <HiOutlineSearch className="text-[17px] text-gray-400" />
                        }
                        title={item.name}
                        link={item.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {websiteSearchText === "" && (
            <div className="mt-[10px] ml-[8px] text-[15px]">
              <div className="ml-[7px] dark:text-gray-300">Quick Links</div>
              <div className="overflow-y-auto mt-[6px]">
                <div className="flex flex-col">
                  <div onClick={() => handleClickLink()}>
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Crm"}
                      link={"/crm"}
                    />
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Kanban"}
                      link={"/kanban"}
                    />
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Profile"}
                      link={"/profile"}
                    />
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Calendar"}
                      link={"/calendar"}
                    />
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Maps"}
                      link={"/maps"}
                    />
                    <QuicklinkItem
                      icon={
                        <HiOutlineSearch className="text-[17px] text-gray-400" />
                      }
                      title={"Charts"}
                      link={"/charts"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
  
const mapStateToProps = (state) => ({
    global: state.global,
  });
  
  export default connect(mapStateToProps, {
    setOpenWebsiteSearch,
    setWebsiteSearchText,
    setOpenSidebarMenu,
  })(ModalSearch);