import { useEffect, useState } from 'react';
import styles from './AppointmentPage.module.css';
import { FaList, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import DayViewCalendar from '../../components/Calendar/DayViewCalendar';
import WeekViewCalendar from '../../components/Calendar/WeekViewCalendar';
import MonthViewCalendar from '../../components/Calendar/MonthViewCalendar';
import Modal from '../../components/Modal/Modal';
import { addDays, addMonths, addWeeks, eachDayOfInterval, format, startOfWeek, subDays, subMonths, subWeeks } from 'date-fns';
import { IoPersonCircleSharp } from "react-icons/io5";
import Header from '../../components/Calendar/Header';
import NewAppointmentForm from '../../components/Forms/NewAppointmentForm';
import AppointmentInfo from './AppointmentInfo';


const appointments = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "McTest",
    phone: "",
    email: "bob.mctest@example.com",
    date: "February 21, 2025",
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
    firstName: "Justin",
    lastName: "McTest",
    phone: "",
    email: "justin.mctest@example.com",
    date: "February 20, 2025",
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
    phone: "917-999-2311",
    email: "bob.mctest@example.com",
    date: "February 19, 2025",
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
    duration: "120",
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
    date: "February 18, 2025",
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
  const d = new Date();
  const [isOn, setIsOn] = useState(false);
  const [position, setPosition] = useState("left");
  const [calendarType, setCalendarType] = useState('day');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(format(d, 'MMM dd, yyyy'));
  const [daysOfWeek, setDaysOfWeek] = useState<any>([]);
  const [formType, setFormType] = useState('');
  const [modalType, setModalType] = useState('');
  const [data, setData] = useState({});


  const renderCalendar = () => {
    switch (calendarType) {
      case 'day':
        return <DayViewCalendar appointments={appointments} date={date} open={toggleModal} />
      case 'week':
        return <WeekViewCalendar appointments={appointments} date={date} daysOfWeek={daysOfWeek} open={toggleModal}/> 
      case 'month':
        return <MonthViewCalendar appointments={appointments} date={date} open={toggleModal}/>
      default:
        return null;
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'new appointment':
        return <NewAppointmentForm data={data} onClose={toggleModal} />
      case 'appointment info':
        return <AppointmentInfo data={data} onClose={toggleModal} />
      default:
        return null;
    }
  };

  const setStartDate = (dateType:string) => {
    if(dateType === 'day') {
      const formattedDate = format(d, 'MMM dd, yyyy');
      setDate(formattedDate);
    }
    if(dateType === 'week') {
      const startOfWeekDate = startOfWeek(d, { weekStartsOn: 1 });
      const formattedDate = format(startOfWeekDate, 'MMM d, yyyy');
      setDate(`Week of ${formattedDate}`);
      getDaysOfWeek(formattedDate);
    }
    if(dateType === 'month') {
      const startOfWeekDate = startOfWeek(d, { weekStartsOn: 1 });
      const formattedDate = format(startOfWeekDate, 'MMMM, yyyy');
      setDate(formattedDate);
    }
  }

  const decreaseDate = () => {
    if(calendarType === 'day') {
      const formattedDate = format(subDays(date, 1), 'MMM dd, yyyy');
      setDate(formattedDate);
    }
    if(calendarType === 'week') {
      const nextWeekStart = startOfWeek(subWeeks(date, 1), { weekStartsOn: 1 });
      const formattedDate = format(nextWeekStart, 'MMM d, yyyy');
      setDate(`Week of ${formattedDate}`);
      getDaysOfWeek(formattedDate);
    }
    if(calendarType === 'month') {
      const formattedDate = format(subMonths(date, 1), 'MMMM, yyyy');
      setDate(formattedDate);
    }
  };

  const increaseDate = () => {
    if(calendarType === 'day') {
      const formattedDate = format(addDays(date, 1), 'MMM dd, yyyy');
      setDate(formattedDate);
    }
    if(calendarType === 'week') {
      const nextWeekStart = startOfWeek(addWeeks(date, 1), { weekStartsOn: 1 });
      const formattedDate = format(nextWeekStart, 'MMM d, yyyy');
      setDate(`Week of ${formattedDate}`);
      getDaysOfWeek(formattedDate);
    }
    if(calendarType === 'month') {
      const formattedDate = format(addMonths(date, 1), 'MMMM, yyyy');
      setDate(formattedDate);
    }
  };

  const toggleModal = (data:any, modalType:string) => {
    if(data !== null) {
      setData(appointments[data.id - 1]);
      setFormType(data.type);
      setModalType(data.type)
    }
    else setModalType(modalType);
    setIsModalOpen(!isModalOpen);
  };

  const getDaysOfWeek = (currDate:string) => {
    if(currDate.includes('Week')) {
      currDate = date.replace('Week of ','');
    }
    const weekStart = startOfWeek(currDate, { weekStartsOn: 1 }); // Set week start (Monday)
    const weekDates = eachDayOfInterval({
      start: weekStart,
      end: addDays(weekStart, 6) // Get the next 6 days to complete the week
    });
    setDaysOfWeek(weekDates);
  }

  const getCurrentDate = () => {
    if(calendarType === 'day') {
     setStartDate('day');
    }
    if(calendarType === 'week') {
      setStartDate('week');
    }
    if(calendarType === 'month') {
      setStartDate('month');
    }
  }

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
          <span className={styles.dateText}>{date}<span className={styles.todayText}>{calendarType === 'day' ? 'Today' :  null}</span></span>
          <div className={styles.buttonsContainer}>
            <button className={styles.todayButton} onClick={() => getCurrentDate()}>Today</button>
            <div className={styles.toggleCon}>
              <input
                type="radio"
                id="left"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "left"}
                onChange={() => {setPosition("left"), setCalendarType("day"), setStartDate('day')}}
              />
              <label htmlFor="left" className={styles.toggleLab}><span style={position === "left" ? {color: '#ffffff'} : {color: '#000000'}}>Day</span></label>
              <input
                type="radio"
                id="center"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "center"}
                onChange={() => {setPosition("center"), setCalendarType("week"), setStartDate("week")}}
              />
              <label htmlFor="center" className={styles.toggleLab}><span style={position === "center" ? {color: '#ffffff'} : {color: '#000000'}}>Week</span></label>
              <input
                type="radio"
                id="right"
                name="toggle"
                className={styles.toggleIn}
                checked={position === "right"}
                onChange={() => {setPosition("right"), setCalendarType("month"), setStartDate("month")}}
              />
              <label htmlFor="right" className={styles.toggleLab}><span style={position === "right" ? {color: '#ffffff'} : {color: '#000000'}}>Month</span></label>
              <div className={styles.toggleSlider} data-position={position}></div>
            </div>
            <button  className={styles.appointmentButton} onClick={() => toggleModal(null, 'new appointment')}><FaPlus />New Appointment</button>
          </div>
        </div>
      </div>
      <Header type={calendarType} employees={employees} daysOfWeek={daysOfWeek} />
      <>
       <div>{renderCalendar()}</div>
      </>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {renderModalContent()}
      </Modal>
    </div>
  )
}

export default AppointmentsPage