import React from 'react';

import styles from './sidebar.module.css';

const iconsArray: string[] = [
  'chart',
  'call',
  'convertshape',
  'diagram',
  'setting',
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src="logo.png" alt="logo" />
      <div className={styles.sideBarIcons}>
        {iconsArray.map((icon) => (
          <img src={`${icon}.svg`} alt={icon} key={icon} />
        ))}
      </div>
      <div>
        <img src="logoutcurve.svg" alt="logoutcurve" />
      </div>
    </div>
  );
};

export default Sidebar;
