import React from 'react';

const LEFT_MENU_CLOSED = -140;
const LEFT_MENU_OPENED = 0;

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="outer-header">
        <div className="inner inner-header inner--sm">
          <a href="/" className="logo"><span className="logo--type">BLOG</span>.yepstepz.io</a>
          <nav className="main-navigation navigation">
              <button onClick={() => setOpen(!open)} className="navigation__button">Меню</button>
              <ul className="top-menu" style={{ right: open ? LEFT_MENU_OPENED : LEFT_MENU_CLOSED }}>
                  <li className="top-menu__item top-menu-item"><a href="/posts/about-me">Обо мне</a></li>
                  <li className="top-menu__item top-menu-item"><a href="/articles">Все статьи</a></li>
                  <li className="top-menu__item top-menu-item top-menu-close">
                    <button onClick={() => setOpen(!open)}></button>
                  </li>
              </ul>
          </nav>
        </div>
    </header>
  )
}
