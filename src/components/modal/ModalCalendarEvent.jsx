import { useState, useEffect, useRef, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import format from "date-fns/format"

import {
  setOpenCalendarEventModal,
  setCalendarEvents,
} from "../../actions/globalAction";

const ModalCalendarEvent = ({ displayCalendarEvent, setOpenCalendarEventModal, setCalendarEvents, global:{darkMode, calendarEvents} }) => {

    const titleRef = useRef(null)
    const calendarEventModalRef = useRef(null)

    const [title, setTitle] = useState(displayCalendarEvent.title);
    const [titleOriginal, setTitleOriginal] = useState(displayCalendarEvent.title);
    const [description, setDescription] = useState(displayCalendarEvent?.extendedProps?.description);
    const [descriptionOriginal, setDescriptionOriginal] = useState(displayCalendarEvent?.extendedProps?.description);

    const [startDate, setStartDate] = useState(displayCalendarEvent?.start);
    const [endDate, setEndDate] = useState(displayCalendarEvent?.end);

    useEffect(() => {
        titleRef.current.focus()
        setTitleOriginal(title)
    }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 27) {   // press Escape
      setOpenCalendarEventModal(false);
    }
    if (e.keyCode === 13) {   // press Enter
      clickUpdateEvent();
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  const clickUpdateEvent = () => {

    let calendarEventsNew = calendarEvents.map((item, index) => {
      if (item.title === titleOriginal && title != "") {
        item.title = title
        item.description = description
        if (startDate) {
          item.start = format(startDate, `yyyy-M-dd HH:mm:ss`)
        }
        if (endDate) {
          item.end = format(endDate, `yyyy-M-dd HH:mm:ss`)
        }
      }
      return item
    })

    setCalendarEvents(calendarEventsNew)
    setOpenCalendarEventModal(false)
  }

  const clickCancelEvent = () => {
    setOpenCalendarEventModal(false)
  }


  return (
    <div className="fixed top-0 bottom-0 right-0 m-auto left-0 z-100 bg-gray-350 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-30 backdrop-blur-[1px] dark:backdrop-blur-[1px] z-[999]">
      <div
        ref={calendarEventModalRef}
        className={`relative flex w-[90%] md:w-[400px] h-[460px] right-0 left-0 mt-[80px] mx-auto px-6 pb-4 rounded-[12px] z-[999]
        bg-brandLight dark:bg-brandDarkPrimary border border-gray-300  dark:border-gray-400 `}
      >
        <div
          className="group absolute top-[6px] right-[6px] w-[21px] h-[21px] pl-[5px] pt-[5px] bg-slate-200 dark:bg-slate-500 
              hover:bg-slate-150 dark:hover:bg-slate-400 rounded-[10px] !cursor-pointer"
          onClick={() => {
            setOpenCalendarEventModal(false);
          }}
        >
          <MdClose
            size={11}
            className="text-gray-500 dark:text-gray-300 group-hover:sky-100 dark:group-hover:sky-300"
          />
        </div>
        <div className="mt-[20px] w-full">
          {displayCalendarEvent !== null && (
            <div>
              <div className="mb-[16px] dark:text-gray-300 text-[18px]">Edit event</div>
              <div className="text-[15px] text-gray-700">
                <div className="mb-[12px] flex flex-col">
                  <label className="dark:text-gray-350">Title:</label>
                  <input
                    ref={titleRef}
                    type="text"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="px-[10px] h-[38px] dark:bg-gray-800 dark:text-gray-300 border border-gray-350 hover:border-gray-500 rounded-[5px] outline-none"
                  />
                </div>
                <div className="mb-[12px] flex flex-col">
                  <label className="dark:text-gray-350">Start date:</label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker 
                    id="dateTimePickerStartDate"
                    label=""
                    value={displayCalendarEvent?.start}
                    onChange={(date) => setStartDate(date)}
                    format="dd/M/yyyy HH:mm:ss"
                    className="dateTimePicker !text-[15px]"
                  />
                </LocalizationProvider>
                </div>

                <div className="mb-[12px] flex flex-col">
                  <label className="dark:text-gray-350">End date:</label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker 
                    id="dateTimePickerEndDate"
                    label=""
                    value={displayCalendarEvent?.end}
                    format="dd/M/yyyy HH:mm:ss"
                    onChange={(date) => setEndDate(date)}
                    className="dateTimePicker !text-[15px]" 
                  />
                </LocalizationProvider>
                </div>

                <div className="mb-[12px] flex flex-col">
                  <label className="dark:text-gray-350">Description:</label>
                  <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="px-[10px] py-[4px] min-h-[78px] dark:bg-gray-800 dark:text-gray-300 text-[14px] border border-gray-350 hover:border-gray-500 rounded-[5px] outline-none"
                  />
                </div>
                {/* <div>{displayCalendarEvent?.allDay && "all day"}</div> */}
              </div>
              <div className="flex justify-end mt-[12px]">
                <button type="button" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                onClick={()=> clickUpdateEvent()}
                >Update</button>
                <button type="button" className="ml-3 px-4 py-2 border hover:bg-red-500 border-red-500 text-[15px] text-red-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                onClick={()=> clickCancelEvent()}
                > Cancel </button> 
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
    setOpenCalendarEventModal,
    setCalendarEvents,
  })(ModalCalendarEvent);