import React from 'react';
import imageStore from 'images/imageStore';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <header className={styles.header}>
      <img src={imageStore.logo} className={styles.logo} alt="logo" />
      <p>Edit src/App.js and save to reload.</p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
