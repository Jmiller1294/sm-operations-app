import React from 'react';
import styles from './Forms.module.css';

const NewAppointmentForm = ({data, onClose}:any) => {
  return (
    <div>
      <button onClick={onClose} className={styles['close-button']}>
        Close
      </button>
      <div>NewAppointmentForm {data?.id}</div>
    </div>
  )
}

export default NewAppointmentForm