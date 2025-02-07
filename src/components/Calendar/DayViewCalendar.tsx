import { useEffect, useState } from "react";
import styles from "./Calendar.module.css";

const DayViewCalendar = ({appointments}:any) => {
  const [timeSlots, setTimeSlots] = useState<any>([]);
  const numbers = Array.from(Array(24).keys()); 

  useEffect(() => {
    createTimeSlots();
  },[]);

  const createTimeSlots = () => {
    let times = [];
    for (let hour = 1; hour <= 24; hour++) {
      if(hour < 12) {
        times.push(`${hour}:00 am`);
      }
      else if(hour === 12) {
       times.push(`${hour}:00 pm`);
      }
      else if(hour === 24) {
        times.push(`${hour - 12}:00 am`);
      }
      else {
        times.push(`${hour - 12}:00 pm`);
      }
    }
    setTimeSlots(times);
  }

  const getStartPosition = (time:string) => {  
    let [hour] = time.split(":").map(Number);
    let minutes = parseInt(time.split(":")[1]);

    if(time.includes('am')) {
      if(hour === 12) {
        return getStartPixels(hour + 12, minutes);
      }
      return getStartPixels(hour, minutes);
    }
    else {
      if(hour === 12) {
        return getStartPixels(hour, minutes);
      }
      else if(hour < 12) {
        return getStartPixels(hour + 12, minutes);
      }
    }
  };

  const getStartPixels = (hour:number, minutes:number) => { 
    return Math.abs((((hour - 1) * 60) + minutes) + (hour * 1));
  };

  const getTimeSlotHeight = (appointment:any) => { 
    return parseInt(appointment.duration);
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.timeColumn}>
        {timeSlots.map((time:any, index:number) => (
          <div key={index} className={styles.timeSlot}>
            {time}
          </div>
        ))}
      </div>
      <div className={styles.col}>
        {appointments.filter((app:any) => app.calendarID === 1).map((appointment:any) => (
          <div
            key={appointment.id}
            className={styles.appointment}
            style={{
              top: `${getStartPosition(appointment.startTime)}px`,
              height: getTimeSlotHeight(appointment),
            }}
          >
            {appointment.type}
          </div>
        ))}
        {numbers.map((index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
      <div className={styles.col}>
        {appointments.filter((app:any) => app.calendarID === 2).map((appointment:any) => (
          <div
            key={appointment.id}
            className={styles.appointment}
            style={{
              top: `${getStartPosition(appointment.startTime)}px`,
              height: getTimeSlotHeight(appointment),
            }}
          >
            {appointment.type}
          </div>
        ))}
        {numbers.map((index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
      <div className={styles.col}>
        {appointments.filter((app:any) => app.calendarID === 3).map((appointment:any) => (
          <div
            key={appointment.id}
            className={styles.appointment}
            style={{
              top: `${getStartPosition(appointment.startTime)}px`,
              height: getTimeSlotHeight(appointment),
            }}
          >
            {appointment.type}
          </div>
        ))}
        {numbers.map((index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
    </div>
  );
};

export default DayViewCalendar;