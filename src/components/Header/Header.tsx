import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { actions as SettingsActions } from '../../store/reducers/settings'

import { Switcher } from '../common'

import './Header.scss'
const Header = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { setLanguage } = SettingsActions
  const [languageUsed, setLanguageUsed] = React.useState(false)

  useEffect(() => {
    const changeLang = (bool: boolean) => {
      return bool ? dispatch(setLanguage('en')) : dispatch(setLanguage('ru'))
    }

    changeLang(languageUsed)
  }, [languageUsed])

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-block">
          <span className="logo">Requiem Library</span>
        </div>
        <div className="header__rightside">
          <ul className="header__nav-items">
            <li className="header__nav-items--item">
              <a href="https://discord.gg/4yqdafW" target="_blank">
                {t('header.links.discord')}
              </a>
            </li>
            <li className="header__nav-items--item">
              <a href="https://www.youtube.com/blindwalker" target="_blank">
                {t('header.links.author')}
              </a>
            </li>
            <li className="header__nav-items--item">
              <a href="https://vk.com/id158962184" target="_blank">
                {t('header.links.forContact')}
              </a>
            </li>
          </ul>
          <Switcher
            first="RU"
            second="EN"
            value={languageUsed}
            onChange={() => setLanguageUsed((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
