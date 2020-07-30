import React from 'react'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import { Block, Input } from '../common'

import './Sidebar.scss'
import { TAppState } from '../../types/types'

const categoriesList = [
  { title: 'Босс-лист', name: 'BossList', path: '/boss-list' },
  { title: 'Рассы/Камни/Боги', name: 'Races/Stones/Gods', path: '/races-stones-gods' },
  { title: 'Перки', name: 'Perks', path: '/perks' },
  { title: 'Экипировка', name: 'Equipment', path: '/equipment' },
  { title: 'Тиры', name: 'Tiers', path: '/tiers' },
  {
    title: 'Таланты/Активные эффекты/Крики',
    name: 'Talents/Active-effects/Screams',
    path: '/talents-active_effects-screams',
  },
  { title: 'Вампиры и Оборотни', name: 'Vampires/Werewolves', path: '/vampires-werewolves' },
  { title: 'Спойлеры', name: 'Spoilers', path: '/spoilers' },
  { title: 'Социалочка', name: 'Social', path: '/social' },
  { title: 'Правила игры', name: 'GameRules', path: '/game-rules' },
  { title: 'Алхимия', name: 'Alchemy', path: '/alchemy' },
]

type TMapState = {
  active: string
}

const Sidebar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { active } = useSelector<TAppState, TMapState>((state) => ({
    active: state.sidebar.active,
  }))

  const { setActiveCategory } = sidebarActions

  const handleSetActive = React.useCallback((name: string, path: string) => {
    dispatch(setActiveCategory(name))
    history.push(path)
  }, [])

  return (
    <div className="sidebar">
      <div className="search">
        <Input placeholder="Поиск (в разработке)" />
      </div>
      <div className="categories">
        <Block>
          <ul className="categories-list">
            {categoriesList?.map((item, idx) => (
              <li
                key={`${idx}-${item.name}`}
                onClick={() => handleSetActive(item.name, item.path)}
                className={cn('categories-list__item', { active: item.name === active })}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  )
}

export default Sidebar
