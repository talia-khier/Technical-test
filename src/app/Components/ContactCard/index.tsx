import React from 'react';
import styles from './contactCard.module.css';

const ContentCard = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>This a fixed contact card</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <form>
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          contact
        </button>
      </form>
    </div>
  );
};

export default ContentCard;
