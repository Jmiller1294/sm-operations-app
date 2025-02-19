import React from 'react';
import styles from './AppointmentPage.module.css';

const AppointmentInfo = ({data, onClose}:any) => {
  return ( 
    <div className={styles.appointmentInfoCon}>
      <div className={styles.appointmentButtonCon}>
        <button onClick={onClose} className={styles['close-button']}>
          Close
        </button>
        <div className={styles.buttonContainer}>
          <button className={styles.appointmentbtns}>Edit</button>
          <button className={styles.appointmentbtns}>Reschedule</button>
          <button className={styles.appointmentbtns}>Cancel</button>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div>
          <div>
            <h2>{data.firstName} {data.lastName}</h2>
            <p className={styles['appointment-info-text']}>{data.type}</p>
            <p>{data.startTime} - {data.endTime}</p>
            <p>{data.date} - {data.duration} mins</p>
          </div>
          <div style={{marginTop: '48px'}}>
            <h4>Appointment Info</h4>
            <div style={{borderBottom: '1px solid rgb(225, 225, 225)', display: 'flex', flexDirection: 'row'}}>
              <p>Email</p>
              <p style={{marginLeft: 'auto'}}>{data.email}</p>
            </div>
            <div style={{borderBottom: '1px solid rgb(225, 225, 225)', display: 'flex', flexDirection: 'row'}}>
              <p>Phone</p>
              <p style={{marginLeft: 'auto'}}>{data.phone}</p>
            </div>
            <div style={{borderBottom: '1px solid rgb(225, 225, 225)', display: 'flex', flexDirection: 'row'}}>
              <p>Location</p>
              <p style={{marginLeft: 'auto'}}>{data.location}</p>
            </div>
            <div style={{borderBottom: '1px solid rgb(225, 225, 225)', display: 'flex', flexDirection: 'row'}}>
              <p>Price</p>
              <p style={{marginLeft: 'auto'}}>${data.price}</p>
            </div>
          </div>
          <div style={{marginTop: '48px'}}>
            <h4>Notes</h4>
            <p style={{borderBottom: '1px solid rgb(225, 225, 225)'}}>No Notes</p>
          </div>
          <div style={{marginTop: '48px'}}>
            <h4>History</h4>
            <div>
              <p style={{borderBottom: '1px solid rgb(225, 225, 225)'}}>Regular Cleaning</p>
            </div>
            <p style={{borderBottom: '1px solid rgb(225, 225, 225)'}}>Regular Cleaning</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentInfo