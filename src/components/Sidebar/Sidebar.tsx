import React, { useMemo } from 'react'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { actions as sidebarActions } from '../../store/reducers/sidebar'

import { Block, Input } from '../common'

import './Sidebar.scss'
import { TAppState } from '../../types/types'

type TMapState = {
  active: string
}

const Sidebar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { active } = useSelector<TAppState, TMapState>((state) => ({
    active: state.sidebar.active,
  }))

  const categoriesList = useMemo(
    () => [
      { title: t('sidebar.categories.bossList'), name: 'BossList', path: '/boss-list' },
      {
        title: t('sidebar.categories.racesStonesGods'),
        name: 'Races/Stones/Gods',
        path: '/races-stones-gods',
      },
      { title: t('sidebar.categories.perks'), name: 'Perks', path: '/perks' },
      { title: t('sidebar.categories.equipment'), name: 'Equipment', path: '/equipment' },
      { title: t('sidebar.categories.tiers'), name: 'Tiers', path: '/tiers' },
      {
        title: t('sidebar.categories.talentsActiveEffectsScreams'),
        name: 'Talents/Active-effects/Screams',
        path: '/talents-active_effects-screams',
      },
      {
        title: t('sidebar.categories.vampiresWerewolves'),
        name: 'Vampires/Werewolves',
        path: '/vampires-werewolves',
      },
      { title: t('sidebar.categories.spoilers'), name: 'Spoilers', path: '/spoilers' },
      { title: t('sidebar.categories.social'), name: 'Social', path: '/social' },
      { title: t('sidebar.categories.gamesRules'), name: 'GameRules', path: '/games-rules' },
      { title: t('sidebar.categories.alchemy'), name: 'Alchemy', path: '/alchemy' },
    ],
    [t],
  )

  const { setActiveCategory } = sidebarActions

  const handleSetActive = React.useCallback((name: string, path: string) => {
    dispatch(setActiveCategory(name))
    history.push(path)
  }, [])

  return (
    <div className="sidebar">
      <div className="search">
        <Input placeholder={t('sidebar.search.placeholder')} />
      </div>
      <div className="categories">
        <Block sidebar>
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
