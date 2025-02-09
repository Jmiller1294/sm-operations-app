import { useState } from 'react';
import styles from './AppointmentPage.module.css';
import { FaList, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import DayViewCalendar from '../../components/Calendar/DayViewCalendar';
import WeekViewCalendar from '../../components/Calendar/WeekViewCalendar';
import MonthViewCalendar from '../../components/Calendar/MonthViewCalendar';

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

const appointments = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "McTest",
    phone: "",
    email: "bob.mctest@example.com",
    date: "July 2, 2013",
    startTime: "1:00am",
    endTime: "5:15am",
    dateCreated: "June 17, 2013",
    datetime: "2013-07-02T10:15:00-0700",
    price: "10.00",
    paid: "no",
    amountPaid: "0.00",
    type: "Regular Visit",
    appointmentTypeID: 1,
    addonIDs: [
      1
    ],
    duration: "480",
    calendar: "My Calendar",
    calendarID: 1,
    canClientCancel: false,
    canClientReschedule: false,
    location: "",
    timezone: "America/New_York",
    forms: [
      {
        "id": 1,
        "name": "Example Intake Form",
        "values": [
          {
            "value": "yes",
            "name": "Is this your first visit?",
            "fieldID": 1,
            "id": 21502993
          },
          {
            "value": "Ninja",
            "name": "What is your goal for this appointment?",
            "fieldID": 2,
            "id": 21502994
          }
        ]
      },
    ]
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "McTest",
    phone: "",
    email: "bob.mctest@example.com",
    date: "February 9, 2025",
    startTime: "2:00pm",
    endTime: "5:15pm",
    dateCreated: "June 17, 2013",
    datetime: "2013-07-02T10:15:00-0700",
    price: "10.00",
    paid: "no",
    amountPaid: "0.00",
    type: "Regular Visit",
    appointmentTypeID: 1,
    addonIDs: [
      1
    ],
    duration: "480",
    calendar: "My Calendar",
    calendarID: 1,
    canClientCancel: false,
    canClientReschedule: false,
    location: "",
    timezone: "America/New_York",
    forms: [
      {
        "id": 1,
        "name": "Example Intake Form",
        "values": [
          {
            "value": "yes",
            "name": "Is this your first visit?",
            "fieldID": 1,
            "id": 21502993
          },
          {
            "value": "Ninja",
            "name": "What is your goal for this appointment?",
            "fieldID": 2,
            "id": 21502994
          }
        ]
      },
    ]
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "McTest",
    phone: "",
    email: "bob.mctest@example.com",
    date: "July 2, 2013",
    startTime: "1:00am",
    endTime: "11:15am",
    dateCreated: "June 17, 2013",
    datetime: "2013-07-02T10:15:00-0700",
    price: "10.00",
    paid: "no",
    amountPaid: "0.00",
    type: "Regular Visit",
    appointmentTypeID: 1,
    addonIDs: [
      1
    ],
    duration: "60",
    calendar: "My Calendar",
    calendarID: 2,
    canClientCancel: false,
    canClientReschedule: false,
    location: "",
    timezone: "America/New_York",
    forms: [
      {
        "id": 1,
        "name": "Example Intake Form",
        "values": [
          {
            "value": "yes",
            "name": "Is this your first visit?",
            "fieldID": 1,
            "id": 21502993
          },
          {
            "value": "Ninja",
            "name": "What is your goal for this appointment?",
            "fieldID": 2,
            "id": 21502994
          }
        ]
      },
    ]
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "McTest",
    phone: "",
    email: "bob.mctest@example.com",
    date: "July 2, 2013",
    startTime: "11:15am",
    endTime: "11:15am",
    dateCreated: "June 17, 2013",
    datetime: "2013-07-02T10:15:00-0700",
    price: "10.00",
    paid: "no",
    amountPaid: "0.00",
    type: "Regular Visit",
    appointmentTypeID: 1,
    addonIDs: [
      1
    ],
    duration: "120",
    calendar: "My Calendar",
    calendarID: 3,
    canClientCancel: false,
    canClientReschedule: false,
    location: "",
    timezone: "America/New_York",
    forms: [
      {
        "id": 1,
        "name": "Example Intake Form",
        "values": [
          {
            "value": "yes",
            "name": "Is this your first visit?",
            "fieldID": 1,
            "id": 21502993
          },
          {
            "value": "Ninja",
            "name": "What is your goal for this appointment?",
            "fieldID": 2,
            "id": 21502994
          }
        ]
      },
    ]
  },
]

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const AppointmentsPage = () => {
  const d = new Date();
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState("left");
  const [calendarType, setCalendarType] = useState('day');
  const [day, setDay] = useState(d.getDate());
  const [month, setMonth] = useState(monthNames[d.getMonth()]);
  const [year, setYear] = useState(d.getFullYear());
  

  const renderCalendar = () => {
    switch (calendarType) {
      case 'day':
        return <DayViewCalendar appointments={appointments} day={day} month={month} year={year} />
      case 'week':
        return <WeekViewCalendar />
      case 'month':
        return <MonthViewCalendar />
      default:
        return null;
    }
  };

  const increaseDate = () => {
    const days = daysInMonth(year, monthNames.indexOf(month) + 1);
    if(day === days) {
      setDay(1);
      setMonth(monthNames[monthNames.indexOf(month) + 1]);
      return;
    }
    setDay(day + 1);
  }

  const decreaseDate = () => {
    const days = daysInMonth(year, monthNames.indexOf(month));
    if(month === 'January' && day < 2) {
      setDay(days);
      setMonth('December');
      setYear(year - 1);
      return;
    }
    if(day < 2) {
      setDay(days);
      setMonth(monthNames[monthNames.indexOf(month) - 1]);
      return;
    }
    setDay(day - 1);
  }

  const getCurrentDate = () => {
    setDay(d.getDate());
    setMonth(monthNames[d.getMonth()]);
    setYear(d.getFullYear());
  }

  const isToday = () => {
    if(day === d.getDate() && month === monthNames[d.getMonth()] && year === d.getFullYear()) {
      return 'Today'
    }
    return null;
  }

  const daysInMonth = (year:number, month:number) => new Date(year, month, 0).getDate();

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
              <span><FaRegCalendarAlt size={16}/></span>
              <span><FaList size={14}/></span>
            </label>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.IconContainer}>
            <span className={styles.calendarArrows} onClick={() => decreaseDate()}><IoIosArrowBack size={24} /></span>
            <span className={styles.calendarArrows} onClick={() => increaseDate()}><IoIosArrowForward size={24} /></span>
          </div>
          <span className={styles.dateText}>{month} {day}, {year} <span className={styles.todayText}>{isToday()}</span></span>
          <div className={styles.buttonsContainer}>
            <button className={styles.todayButton} onClick={() => getCurrentDate()}>Today</button>
            <div className={styles.toggleCon}>
              <input
                type="radio"
                id="left"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "left"}
                onChange={() => {setPosition("left"), setCalendarType("day")}}
              />
              <label htmlFor="left" className={styles.toggleLab}><span style={position === "left" ? {color: '#ffffff'} : {color: '#000000'}}>Day</span></label>
              <input
                type="radio"
                id="center"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "center"}
                onChange={() => {setPosition("center"), setCalendarType("week")}}
              />
              <label htmlFor="center" className={styles.toggleLab}><span style={position === "center" ? {color: '#ffffff'} : {color: '#000000'}}>Week</span></label>
              <input
                type="radio"
                id="right"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "right"}
                onChange={() => {setPosition("right"), setCalendarType("month")}}
              />
              <label htmlFor="right" className={styles.toggleLab}><span style={position === "right" ? {color: '#ffffff'} : {color: '#000000'}}>Month</span></label>
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
              {employees.map((employee:any, index: number) => (
                <div 
                  key={index}
                  className={styles.employeeCon}
                >
                  {employee.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <>
       <div>{renderCalendar()}</div>;
      </>
    </div>
  )
}

export default AppointmentsPage