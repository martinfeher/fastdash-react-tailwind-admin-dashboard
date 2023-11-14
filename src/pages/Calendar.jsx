import { useState } from 'react'
import AdminLayout from "../layout/AdminLayout";
import ModalCalendarEvent from "../components/modal/ModalCalendarEvent";
import { connect } from "react-redux";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import {
  setOpenCalendarEventModal,
} from "../actions/globalAction";



const Calendar = ({setOpenCalendarEventModal, global: {darkMode, calendarEventModalOpen}}) => {


  const [displayCalendarEvent, setDisplayCalendarEvent] = useState(null);

  const calendarEvents = [
    { title: 'event 1', date: '2023-11-01', description: 'Lorem ipsum' },
    { title: 'event 2', start: '2023-11-12 08:15:00', end: '2023-11-12 08:45:00'},
    // { title: 'event 3', start: '2023-11-12 15:30:00' },
    { title: 'event 4', start: '2023-11-15', end: '2023-11-18' }
  ]
  
//  const handleEventClick = (e) => {
    
//     setDisplayCalendarEvent(e.event)
//     // console.log(e.event)
//     // console.log(e.event.start)
//     // setOpenCalendarEventModal(true)
//   }

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">

        {/* {displayCalendarEvent !== null && <ModalCalendarEvent />} */}

          <AdminLayout>
            <main className="p-4 w-full">
            {/* { displayCalendarEvent && (
              <div>
                <div>
                  {displayCalendarEvent.title}
                </div>
                <div>{displayCalendarEvent?.extendedProps?.description}</div>
                <div>{displayCalendarEvent?.startStr}</div>
                <div>{displayCalendarEvent?.endStr}</div>
                <div>{displayCalendarEvent?.allDay && 'all day'}</div>
              </div>
            )} */}
              
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={calendarEvents}
                // eventClick={handleEventClick}
              />

            </main>
          </AdminLayout>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    global: state.global,
  });
  
  export default connect(mapStateToProps, {
    setOpenCalendarEventModal,
  })(Calendar);