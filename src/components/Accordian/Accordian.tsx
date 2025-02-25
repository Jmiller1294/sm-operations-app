import React, { useState } from 'react';
import styles from './Accordian.module.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles['accordion-title']} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={styles['accordion-content']}>{content}</div>}
    </div>
  );
};

export default Accordion;