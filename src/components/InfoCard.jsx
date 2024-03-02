import React from 'react';

import styles from './infoCard.module.css';

/**
 * InfoCard component displays a card with a title, data, optional superscript, extra information, and a message.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the card
 * @param {string} [props.data='No data'] - The main data to display in the card
 * @param {string} props.message - A message to display in the card
 * @param {string} [props.supScript=null] - An optional superscript to display next to the data
 * @param {Array<string>} [props.extra=[]] - An array of extra information to display in the card
 * @returns {React.Element} The rendered InfoCard component
 * @example
 * return (
 *   <InfoCard title="Wind Speed" data="5 Km/h" message="Normal 😊" extra={["Direction: N"]} />
 * )
 */

const InfoCard = ({ title, data, message, supScript, extra }) => {
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

InfoCard.defaultProps = {
  data: 'No data',
  supScript: null,
  extra: []
};

export default InfoCard;
