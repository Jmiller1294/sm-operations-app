import React from 'react';
import styles from './Calendar.module.css';
import { format } from 'date-fns';

const Header = ({type, employees, daysOfWeek}:any) => {

  const render = (headerType:string) => {
    switch (headerType) {
        case 'day':
          return(
            <div className={styles.employeesCon}>
              {employees.map((employee:any, index: number) => (
                <div 
                  key={index}
                  className={styles.employeeCon}
                >
                  {employee.name}
                </div>
              ))}
            </div>
          );
        case 'week':
          return(
            <div className={styles.employeeInfoCon}>
              <div className={styles.timeTextCon}>
                <span>Time</span>
              </div>
              <div className={styles.DaysCon}>
                {daysOfWeek.map((day:any, index: number) => (
                  <div 
                    key={index}
                    className={styles.DayCon}
                  >
                    {format(day, 'EEEE, MMM dd')}
                  </div>
                ))}
              </div>
            </div> 
          );
        case 'month':
            return <h1>Admin Dashboard</h1>;
        default:
            return null;
    }
};

  return (
    <div className={styles.employeeInfoCon}>
        <div className={styles.timeTextCon}>
          <span>Time</span>
        </div>
        {render(type)}
      </div>
  )
}

export default Header