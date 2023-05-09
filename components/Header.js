export default function Header() {
  return (
    <header className="outer-header">
        <div className="inner inner-header inner--sm">
          <a href="/" className="logo"><span className="logo--type">BLOG</span>.yepstepz.io</a>
          <nav className="main-navigation">
              <ul className="top-menu">
                  <li className="top-menu__item top-menu-item"><a href="/posts/about-me">Обо мне</a></li>
                  <li className="top-menu__item top-menu-item"><a href="/articles">Все статьи</a></li>
              </ul>
          </nav>
        </div>
    </header>
  )
}
