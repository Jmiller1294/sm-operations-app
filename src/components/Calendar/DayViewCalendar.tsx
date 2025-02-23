import { useEffect, useState, useRef } from "react";
import styles from "./Calendar.module.css";
import { format, getHours, getMinutes, hoursToMinutes } from 'date-fns';
import { useLocation, useOutletContext, useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";


const DayViewCalendar = () => {
  const [timeSlots, setTimeSlots] = useState<any>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [dotHeight, setDotHeight] = useState(0);
  const numbers = Array.from(Array(25).keys()); 
  const elementRef = useRef<any>();
  const { appointments, date, employees, toggleModal } = useOutletContext<any>();



  useEffect(() => {
    createTimeSlots();
    scrollToTime();
  },[]);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setDotHeight(dotHeight + 1);
      setLineHeight(lineHeight + 1);
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
    setDotHeight((minutes + halfMinutes) - 5);
    setLineHeight(minutes + halfMinutes);
    setTimeout(() => {
      elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    return Math.abs((((hour - 1) * 59) + minutes) + (hour * 1) + 59);
  };

  const getTimeSlotHeight = (appointment:any) => { 
    return parseInt(appointment.duration) - 5;
  };

  const handleClick = (id:any, type:any) => {
    toggleModal(id, type);
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
            if(index === parseInt(format(new Date(), "H"))) {
              return(<div ref={elementRef} key={index} className={styles.timeSlot}>
                {time}
              </div>)
            }
            else {
              return(<div key={index} className={styles.timeSlot}>
                {time}
              </div>)
            }
          })}
        </div>
        {employees.map((employee:any, idx:number) => {
          return(
            <div 
              className={styles.col}
              key={idx}
            >
              {date && 
                appointments
                .filter((app:any) => app.calendar === employee.name && app.date === format(date, 'MMMM dd, yyyy'))
                .map((appointment:any) => (
                  <div
                    key={appointment.id}
                    className={styles.appointment}
                    style={{
                      top: `${getStartPosition(appointment.startTime)}px`,
                      height: getTimeSlotHeight(appointment),
                    }}
                    onClick={() => handleClick(appointment.id, 'appointment info')}
                  >
                    <div className={styles.appointmentInfoCon}>
                      <span className={styles.appointmentName}>{appointment.firstName} {appointment.lastName}: &nbsp;</span>
                      <span className={styles.appointmentType}>{appointment.type}</span>
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
          )
        })}
      </div>
    </>
  );
};

export default DayViewCalendar;


