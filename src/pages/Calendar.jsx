import { useState } from 'react'
import AdminLayout from "../layout/AdminLayout";
import { connect } from "react-redux";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = ({global: {darkMode}}) => {


  const [displayCalendarEvent, setDisplayCalendarEvent] = useState(null);
  
 const handleEventClick = (e) => { // bind with an arrow function
    // alert(e.event.title)
    setDisplayCalendarEvent(e.event)
    console.log(e.event)
    console.log(e.event.start)
  }

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
            { displayCalendarEvent && (
              <div>
                <div>
                  {displayCalendarEvent.title}
                </div>
                <div>{displayCalendarEvent?.allDay && 'all day'}</div>
                <div>{displayCalendarEvent?.extendedProps?.description}</div>
                <div>{displayCalendarEvent?.startStr}</div>
                <div>{displayCalendarEvent?.endStr}</div>
              </div>
            )}
              
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                  { title: 'event 1', date: '2023-11-01', description: 'Lorem ipsum' },
                  { title: 'event 2', date: '2023-11-12' },
                  { title: 'event 3', start: '2023-11-15', end: '2023-11-18' }
                ]}
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
  
  export default connect(mapStateToProps)(Calendar);