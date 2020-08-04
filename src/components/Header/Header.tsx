import React from 'react'

import './Header.scss'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-block">
          <span className="logo">Requiem Library</span>
        </div>
        <ul className="header__nav-items">
          <li className="header__nav-items--item">
            <a href="https://discord.gg/4yqdafW" target="_blank">
              Discord
            </a>
          </li>
          <li className="header__nav-items--item">
            <a href="https://www.youtube.com/blindwalker" target="_blank">
              Blind Walker
            </a>
          </li>
          <li className="header__nav-items--item">
            <a href="https://vk.com/id158962184" target="_blank">
              По поводу ошибок
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
