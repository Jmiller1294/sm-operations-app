import React, {useEffect, useRef, useState} from 'react';
import styles from "./Calendar.module.css";
import {startOfWeek, endOfWeek, format, hoursToMinutes, getMinutes, getHours} from 'date-fns';


const WeekViewCalendar = ({appointments, date, daysOfWeek, open}:any) => {
  const [timeSlots, setTimeSlots] = useState<any>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [dotHeight, setDotHeight] = useState(0);
  const numbers = Array.from(Array(24).keys()); 
  const elementRef = useRef<any>();

  useEffect(() => {
    createTimeSlots();
    scrollToTime();
  },[]);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if(lineHeight % 60 === 0) {
        setDotHeight(dotHeight + 2);
        setLineHeight(dotHeight + 2);
      }
      else {
        setDotHeight(dotHeight + 1);
        setLineHeight(dotHeight + 1);
      }
    }, 60000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [dotHeight, lineHeight]);

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

  const scrollToTime = () => {
    const minutes = hoursToMinutes(getHours(new Date()));
    const halfMinutes = getMinutes(new Date());
    setDotHeight((minutes - 60) + halfMinutes + (1 * getHours(new Date())));
    setLineHeight((minutes - 60) + halfMinutes + (1 * getHours(new Date())));
    setTimeout(() => {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500)
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
    <>  
      <div className={styles.calendarContainer}>
      <div 
          className={styles.timeLine} 
          style={{
            top: `${lineHeight}px`
          }}
        >
        </div>
        <div 
          className={styles.timeDot}
          style={{
            top: `${dotHeight}px`
          }}
        >
        </div>
        <div className={styles.timeColumn}>
          {timeSlots.map((time:any, index:number) => {
            if(index === parseInt(format(new Date(), "H"))){
              return(<div ref={elementRef} key={index} className={styles.timeSlot}>
                {time}
              </div>)
            }
            else{
              return(<div key={index} className={styles.timeSlot}>
                {time}
              </div>)
            }
          })}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[0], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[1], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[2], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[3], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[4], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[5], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
        {date && 
          appointments
          .filter((app:any) => app.date === format(daysOfWeek[6], 'MMMM dd, yyyy'))
          .map((appointment:any) => (
            <div
              key={appointment.id}
              className={styles.appointment}
              style={{
                top: `${getStartPosition(appointment.startTime)}px`,
                height: getTimeSlotHeight(appointment),
              }}
              onClick={open}
            >
              <div className={styles.appointmentInfoCon}>
                hello
              </div>
              <div>
                {appointment.startTime} - {appointment.endTime}
              </div>
            </div>
          ))}
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WeekViewCalendar