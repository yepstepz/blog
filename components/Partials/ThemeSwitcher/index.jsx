import { useContext } from "react"
import styles from './ThemeSwitcher.module.css';

import { ThemeProviderContext } from "@components/ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeProviderContext);

  return (
    <label className={styles.Toggler}>
      <input
        className={styles.Checkbox}
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
    </label>
  )
}