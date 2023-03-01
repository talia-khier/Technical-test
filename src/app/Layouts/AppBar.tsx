import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from './appBar.module.css';

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div>
        <img src="hambergermenu.svg" alt="hambergermenu" />
      </div>
      <div>
        <img src="notification.svg" alt="notification" />
        <img src="moon.svg" alt="moon" />
        <img src="image.png" alt="user" />
      </div>
    </div>
  );
};

export default AppBar;
