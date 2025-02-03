import { useState } from 'react';
import styles from './AppointmentPage.module.css';
import { FaList, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";

const employees = [
  {
    name: 'Millieann',
    avatar: <IoPersonCircleSharp />,
    hours: 4
  },
  {
    name: 'Justin',
    avatar: <IoPersonCircleSharp />,
    hours: 6
  },
  {
    name: 'Shine Masters',
    avatar: <IoPersonCircleSharp />,
    hours: 8
  }
]

const AppointmentsPage = () => {
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState("left");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.row}>
          <div className={styles.toggleContainer}>
            <input 
              type="checkbox" 
              id="toggle" 
              className={styles.toggleInput} 
              checked={isOn} 
              onChange={() => setIsOn(!isOn)} 
            />
            <label htmlFor="toggle" className={styles.toggleLabel}>
              <span><FaList size={18}/></span>
              <span><FaRegCalendarAlt size={20}/></span>
            </label>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.IconContainer}>
            <IoIosArrowBack size={20} style={{ backgroundColor: 'lightgrey', padding: '10px', borderRadius: '35px' }}/>
            <IoIosArrowForward size={20} style={{ backgroundColor: 'lightgrey', padding: '10px', borderRadius: '35px' }}/>
          </div>
          <span className={styles.dateText}>Mar 24,2021</span>
          <div className={styles.buttonsContainer}>
            <button className={styles.todayButton}>Today</button>
            <div className={styles.toggleCon}>
              <input
                type="radio"
                id="left"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "left"}
                onChange={() => setPosition("left")}
              />
              <label htmlFor="left" className={styles.toggleLab}>Day</label>
              <input
                type="radio"
                id="center"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "center"}
                onChange={() => setPosition("center")}
              />
              <label htmlFor="center" className={styles.toggleLab}>Week</label>
              <input
                type="radio"
                id="right"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "right"}
                onChange={() => setPosition("right")}
              />
              <label htmlFor="right" className={styles.toggleLab}>Month</label>
              <div className={styles.toggleSlider} data-position={position}></div>
            </div>
            <button className={styles.appointmentButton}><FaPlus />New Appointment</button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.employeeInfoCon}>
            <div className={styles.timeTextCon}>
              <span>Time</span>
            </div>
            <div className={styles.employeesCon}>
              {employees.map((employee:any) => (
                <div className={styles.employeeCon}>
                  {employee.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calendarCon}>
        sdfsdfsd
      </div>
    </div>
  )
}

export default AppointmentsPage