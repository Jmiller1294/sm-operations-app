import React, { useState } from 'react';
import styles from './Forms.module.css';
import Accordion from '../Accordian/Accordian';

const NewAppointmentForm = ({data, onClose}:any) => {
  const accordionData = [
    {
      title: 'Appointment Type',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Date & Time',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Client Info',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'Appointment Info',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button onClick={onClose} className={styles['close-button']}>
        Close NewAppointmentForm {data?.id}
      </button>
      <div>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default NewAppointmentForm