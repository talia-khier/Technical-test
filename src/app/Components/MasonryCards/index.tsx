import React from 'react';
import styles from './masonarycards.module.css';

const MasonryCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.masonryCardRow}>
        <div className={styles.masonryCardColumn}>
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
        </div>
        <div className={styles.masonryCardColumn}>
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
          <GreyCard height={148} />
          <GreyCard height={327} />
        </div>
      </div>
    </div>
  );
};

const GreyCard = ({ height }: { height: number }) => {
  return (
    <div
      className={height === 148 ? styles.greyCard_148 : styles.greyCard_327}
    ></div>
  );
};
export default MasonryCard;
