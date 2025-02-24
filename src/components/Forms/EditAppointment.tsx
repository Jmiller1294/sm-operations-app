import React from 'react';
import styles from './Forms.module.css';

const EditAppointmentForm = ({data, onClose, onCancel, onSave}:any) => {
  return (
    <div className={styles.EditInfoCon}>
      <div className={styles.buttonCon}>
        <button onClick={onClose} className={styles['close-button']}>
          Close
        </button>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => onSave(data.id, 'appointment info')}>Save</button>
          <button className={styles.button} onClick={() => onCancel(data.id, 'appointment info')}>Cancel Edit</button>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.textContainer}>
          <p>Date</p>
          <span>{data.date}</span>
        </div>
        <div className={styles.textContainer}>
          <p>Time</p>
          <span>{data.startTime} - {data.endTime}</span>
        </div>
        <div className={styles.textContainer}>
          <label>Calendar</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>Appointment Type</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>First Name</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>Last Name</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>Email</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>Phone</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div className={styles.textContainer}>
          <label>Client Address</label>
          <input type='text' className={styles['input-text']}/>
        </div>
        <div style={{marginTop: '30px'}}>
          <h4>Notes</h4>
          <input type='textarea' className={styles['input-textarea']}/>
        </div>
      </form>
    </div>

   

  )
}

export default EditAppointmentForm