import React from 'react';
import styles from './fixeCard.module.css';

const FixedCard = () => {
  return (
    <div className={styles.wrapper}>
      <img src="image.png" alt="user" />
      <h1>This a fixed card</h1>
    </div>
  );
};

export default FixedCard;
