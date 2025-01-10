import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

import { ThemeSwitcher } from '../Partials/ThemeSwitcher';
import Link from 'next/link';

// @ts-ignore
const MenuItem = ({ name, link }) => (
  <li
    className={cn(
      'top-menu__item top-menu-item top-menu-item--home',
      styles.topMenuItem
    )}
  >
    <Link prefetch={false} href={link}>
      {name}
    </Link>
  </li>
);

export default function Header() {
  return (
    <header>
      <div className={cn('container', styles.innerHeader)}>
        <Link href="/" className={styles.logo} prefetch={false}>
          <span className={styles.logoType}>BLOG</span>.yepstepz.io
        </Link>
        <div className={styles.secondaryLine}>
          <nav className={cn(styles.navigation, 'main-navigation navigation')}>
            <ul className={cn(styles.topMenu)}>
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
