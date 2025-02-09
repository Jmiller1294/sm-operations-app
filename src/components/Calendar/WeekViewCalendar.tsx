import React, {useEffect, useState} from 'react';
import styles from "./Calendar.module.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

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
  return (
    <>
      <div className={styles.employeeInfoCon}>
        <div className={styles.timeTextCon}>
          <span>Time</span>
        </div>
        <div className={styles.DaysCon}>
          {days.map((day:any, index: number) => (
            <div 
              key={index}
              className={styles.DayCon}
            >
              {day},
            </div>
          ))}
        </div>
      </div>   
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