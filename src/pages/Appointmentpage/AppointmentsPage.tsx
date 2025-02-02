import { useState } from 'react';
import styles from './AppointmentPage.module.css';
import { FaList, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const AppointmentsPage = () => {
  const [isOn, setIsOn] = useState(false);


  return (
    <div>
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
        <div className={styles.IconContainer}>
          <IoIosArrowBack size={22} style={{ backgroundColor: 'lightgrey', padding: '10px', borderRadius: '35px' }}/>
          <IoIosArrowForward size={22} style={{ backgroundColor: 'lightgrey', padding: '10px', borderRadius: '35px' }}/>
        </div>
      </div>
      <div className={styles.row}>
        
      </div>
      <div className={styles.row}>
        
      </div>
      <div className={styles.row}>
        
      </div>
    </div>
  )
}

export default AppointmentsPage