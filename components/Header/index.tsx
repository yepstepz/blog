import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

import { ThemeSwitcher } from '../Partials/ThemeSwitcher';

const MenuItem = ({ name, link }) => (
  <li className={cn('top-menu__item top-menu-item top-menu-item--home', styles.topMenuItem)}>
    <a href={link}>{ name }</a>
  </li>
)

export default function Header() {
  return (
    <header>
      <div className={cn(styles.innerHeader, 'container')}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoType}>BLOG</span>.yepstepz.io
        </a>
        <div className={styles.secondaryLine}>
          <nav className={cn(styles.navigation, "main-navigation navigation")}>
            <ul
              className={cn(
                styles.topMenu,
              )}
            >
              <MenuItem name="Main" link="/" />
              <MenuItem name="Посты" link="/posts" />
              <MenuItem name="Заметки" link="/notes" />
              <MenuItem name="Я сейчас" link="/now" />
            </ul>
          </nav>
          <div className="desktop-theme-switcher">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
