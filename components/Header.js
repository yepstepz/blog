import React from 'react';
import cn from 'classnames';

import { ThemeSwitcher } from './Partials/ThemeSwitcher';
import { Burger } from './Partials/Burger';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="outer-header">
      <div className="inner inner-header inner--sm">
        <a href="/" className="logo">
          <span className="logo--type">BLOG</span>.yepstepz.io
        </a>
        <nav className="main-navigation navigation">
          <Burger onClick={() => setOpen(!open)} isOpen={open} />
          <ul
            className={cn(
              'top-menu',
              `top-menu${open ? '--opened' : '--closed'}`
            )}
          >
            <li className="top-menu__item top-menu-item top-menu-close">
              <Burger onClick={() => setOpen(!open)} isOpen={open} />
            </li>
            <li className="top-menu__item top-menu-item">
              <a href="/posts/about-me">Обо мне</a>
            </li>
            <li className="top-menu__item top-menu-item">
              <a href="/articles">Все статьи</a>
            </li>
            <li className="top-menu__item top-menu-item mobile-theme-switcher">
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
        <div className="desktop-theme-switcher">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
