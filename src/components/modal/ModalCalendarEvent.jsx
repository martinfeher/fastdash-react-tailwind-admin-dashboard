import { useState, useRef, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import useWindowDimensions from "../utils/useWindowDimensions";
import {
  setOpenCalendarEventModal,
  setCalendarEvents,
} from "../../actions/globalAction";

const ModalCalendarEvent = ({ displayCalendarEvent, setOpenCalendarEventModal, setCalendarEvents, global:{darkMode, calendarEvents} }) => {

    const calendarEventModalRef = useRef(null)
    const { height, width } = useWindowDimensions()


    const [title, setTitle] = useState(displayCalendarEvent.title);

    // useEffect(() => {
    //     searchInputRef.current.select()
    // }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 27) {   // press Escape
      setOpenCalendarEventModal(false);
    }
  });


  const handleEventChange = (e) => {

    let calendarEventsNew = calendarEvents.map((item, index) => {
      if ( item.title === title) {
        item.title = e.target.value
      }
      return item
    })
    
    console.log(calendarEventsNew)
    setTitle(e.target.value)

    setCalendarEvents(calendarEventsNew)
  }
    

  return (
    <div className="fixed top-0 bottom-0 right-0 m-auto left-0 z-100 bg-gray-350 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-30 backdrop-blur-[1px] dark:backdrop-blur-[1px] z-[999]">
      <div
        ref={calendarEventModalRef}
        className={`relative flex w-[90%] md:w-[600px] h-[460px] right-0 left-0 mt-[80px] mx-auto px-6 pb-4 rounded-[12px] z-[999] 
        bg-brandLight dark:bg-brandDarkPrimary border border-gray-300  dark:border-gray-400 `}
      >
        <div
          className="group absolute top-[6px] right-[6px] w-[21px] h-[21px] pl-[5px] pt-[5px] bg-slate-200 dark:bg-slate-500 
              hover:bg-slate-150 dark:hover:bg-slate-400 rounded-[10px] !cursor-pointer"
          onClick={() => {
            setOpenCalendarEventModal(false);
          }}
        >
          <MdClose size={11} className="text-gray-500 dark:text-gray-300 group-hover:sky-100 dark:group-hover:sky-300" />
        </div>
        <div className="mt-[20px] w-full">
          { displayCalendarEvent !== null && (
              <div>
                <div className="mb-[16px]">Edit event</div>
                <div>
                  <input type="text" 
                    value={title}
                    name='title'
                    onChange={handleEventChange}
                  />
                </div>
                <div>{displayCalendarEvent?.extendedProps?.description}</div>
                <div>{displayCalendarEvent?.startStr}</div>
                <div>{displayCalendarEvent?.endStr}</div>
                <div>{displayCalendarEvent?.allDay && 'all day'}</div>
                <div>{displayCalendarEvent?.id}</div>
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
    setOpenCalendarEventModal,
    setCalendarEvents,
  })(ModalCalendarEvent);