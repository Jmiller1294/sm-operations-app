import React, {useEffect, useState} from 'react';
import styles from "./Calendar.module.css";
import {startOfWeek, endOfWeek} from 'date-fns';


const WeekViewCalendar = ({appointments, day, month, year}:any) => {
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

  const getDate = (index:number) => {
    let result = startOfWeek(new Date(), {weekStartsOn: 1});
    let tomorrow = result;
    if(index > 0) {
      tomorrow.setDate(result.getDate() + index);
      return formatDate(tomorrow);
    }
    else {
      return formatDate(result);
    }
  }

  const formatDate = (date:any)=> {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
  
    return `${dayOfWeek}, ${month.slice(0,3)} ${dayOfMonth}`;
  }

  return (
    <>  
      <div className={styles.calendarContainer}>
        <div className={styles.timeColumn}>
          {timeSlots.map((time:any, index:number) => (
            <div key={index} className={styles.timeSlot}>
              {time}
            </div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
        <div className={styles['small-col']}>
          {numbers.map((index) => (
            <div key={index} className={styles.row}></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WeekViewCalendar