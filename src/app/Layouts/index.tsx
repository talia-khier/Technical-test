import React from 'react';
import AppBar from './AppBar';
import Sidebar from './Sidebar';

import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <AppBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
