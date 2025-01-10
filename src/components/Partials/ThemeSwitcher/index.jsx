'use client';

import { useContext } from 'react';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.css';

import { ThemeProviderContext } from '@components/ThemeProvider';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeProviderContext);

  return (
    <div className={styles.TogglerWrapper}>
      <label
        className={cn(
          styles.Toggler,
          theme === 'dark' ? styles.TogglerActive : ''
        )}
      >
        <input
          className={styles.Checkbox}
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
      </label>
      <span className={styles.TogglerEmotion}>
        {theme === 'dark' ? '🌚' : '🌞'}
      </span>
    </div>
  );
};
