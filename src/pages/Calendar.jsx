import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AdminLayout from "../layout/AdminLayout";
import ModalCalendarEvent from "../components/modal/ModalCalendarEvent";
import { connect } from "react-redux";
import {
  setOpenCalendarEventModal,
} from "../actions/globalAction";


const Calendar = ({setOpenCalendarEventModal, global: {darkMode, calendarEventModalOpen, calendarEvents}}) => {


const [displayCalendarEvent, setDisplayCalendarEvent] = useState(null);

const [events, setEvents] = useState([]);


useEffect(() => {

  console.log('calendarEvents && calendarEvents')
  console.log(calendarEvents && calendarEvents)
  setEvents(calendarEvents && calendarEvents)
  
}, [calendarEvents]);
  
 const handleEventClick = (e) => {

  let eventVal = e.event
  console.log(eventVal)
    setDisplayCalendarEvent(e.event)
    setOpenCalendarEventModal(true)
  }

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">

        {calendarEventModalOpen && <ModalCalendarEvent displayCalendarEvent={displayCalendarEvent} />}

          <AdminLayout>
            <main className="p-4 w-full">
            
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                // events={events}
                events={calendarEvents}
                eventClick={handleEventClick}
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