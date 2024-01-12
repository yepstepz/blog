import styles from './ScrollToTop.module.css';
import { useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

export const ScrollToTop = () => {
  useEffect(() => {}, []);
  const callback = () => {
    if (!isBrowser()) return;
    // @ts-ignore
    document?.querySelector('#contents').scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <button type="button" className={styles.scrollerElement} onClick={callback}>
      Up!
    </button>
  );
};
