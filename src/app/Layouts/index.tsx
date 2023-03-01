import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import Sidebar from './Sidebar';

import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    setTheme(
      localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    return () => {
      localStorage.setItem('theme', theme);
    };
  }, []);

  const switchTheme = () => {
    setTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.layout} data-theme={theme}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <AppBar handleToggleTheme={switchTheme} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
