import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.css';
import { format, getDay, getDaysInMonth } from 'date-fns';


const tableColumns = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const MonthViewCalendar = ({appointments, date, open}:any) => {
  const [calendarGrid, setCalendarGrid] = useState<any>([]);
  const totalDays = getDaysInMonth(date);
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);


  useEffect(() => {
    createCalendarGrid();
  }, [date]);

  const createCalendarGrid = () => {
    const startDay = getDay(date) - 1;
    let week: any[] = [];
    console.log(startDay)
    if(startDay < 0) week = [];
    else week = Array(startDay).fill(null);
    let grid:any = [];

    daysArray.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        grid.push(week);
        week = [];
      }
    });

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      grid.push(week);
    }
    setCalendarGrid(grid);
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr style={{textAlign: 'left'}}>
            {tableColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {date && calendarGrid.map((week:any, index:number) => (
            <tr key={index} style={{ width: '100%'}}>
              {week.map((day:any, idx:number) => (
                <td key={idx} className={styles.tableCell}>
                  <div className={styles.con}>
                    <div className={styles.dayText}>{day ? day : ""}</div>
                    {appointments.map((app:any, ind:any) => {
                      if(format(app.date, 'MMM') === format(date, 'MMM')&&day === parseInt(format(app.date, 'd'))) {
                        return(<div className={styles.appTypeText} key={ind} onClick={open}><div className={styles.circle}></div>{app.startTime} {app.type}</div>)
                      }
                    })}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthViewCalendar