import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { fetchEvents, addEvent } from '../pages/api/events';

const Calendar = () => {
  const [events, setEvents] = useState([]); // State to store events and pass to FullCalendar component

  // Fetch events on component mount
  useEffect(() => {
    // Load events from the API
    async function loadEvents() {
      const data = await fetchEvents();
      // console.log("Events loaded:", data);
      setEvents(data);
    }
    loadEvents();
  }, []);

  // // Handle adding new events
  // const handleDateClick = async (info) => {
  //   const title = prompt("Enter the study plan title:");
  //   if (title) {
  //     const newEvent = { title, date: info.dateStr };
  //     const result = await addEvent(newEvent);

  //     if (!result.error) {
  //       setEvents([...events, newEvent]); // Update state with the new event
  //     } else {
  //       alert("Failed to add event: " + result.error);
  //     }
  //   }
  // };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      // dateClick={handleDateClick}
      height='auto' // Set height to auto to adjust to content
      className='w-fit'
    />
  );

};

export default Calendar;
