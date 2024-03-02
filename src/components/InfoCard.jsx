import React from 'react';

import styles from './infoCard.module.css';

const InfoCard = ({ title, data, message, supScript = null, extra }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.data}>
        {data || 'No data'} {supScript && <sup>{supScript}</sup>}
      </p>
      {extra?.map((item, index) => (
        <p key={index} className={styles.extra}>
          {item}
        </p>
      ))}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default InfoCard;
