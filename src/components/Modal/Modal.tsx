import React, {useState} from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }:any) => {
  return (
    <>
    {console.log(isOpen)}
    <div className={isOpen ? `${styles['side-modal']} ${styles.open}` : styles['side-modal']}>
      <div className={styles['modal-content']}>
        <button className={styles['close-button']} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
    </>
  );
};

export default Modal;