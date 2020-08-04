import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'
import { actions as bossesActions, getBosses } from '../../redux/reducers/bosses'

import { BossCard } from '../../components'

import './BossList.scss'

import { TAppState, TBossesAvailableTypes, TBoss } from '../../types/types'

import test from '../../data/bosses'

const bossesSelectorCategories = [
  { title: 'Легкие', name: 'easy', color: '#BFE88B', shadowColor: 'rgba(191, 232, 139, 0.5)' },
  { title: 'Средние', name: 'medium', color: '#E9F98A', shadowColor: 'rgba(233, 249, 138, 0.8)' },
  { title: 'Сильные', name: 'strong', color: '#F9D65D', shadowColor: 'rgba(249, 214, 93, 0.6)' },
  {
    title: 'Особо опасные мальчишки',
    name: 'dangerBoys',
    color: '#FFB13C',
    shadowColor: 'rgba(255, 177, 59, 0.5)',
  },
  {
    title: 'Боссы гильдий',
    name: 'guildBosses',
    color: '#FF993B',
    shadowColor: 'rgba(255, 153, 59, 0.4)',
  },
  { title: 'Жрецы', name: 'priests', color: '#FF6712', shadowColor: 'rgba(255, 103, 18, 0.3)' },
  {
    title: 'Именные драконы',
    name: 'dragons',
    color: '#FF452C',
    shadowColor: 'rgba(255, 69, 44, 0.3)',
  },
  {
    title: 'Супер боссы',
    name: 'superBosses',
    color: '#E11111',
    shadowColor: 'rgba(225, 17, 17, 0.3)',
  },
] as Array<Selector>

type Selector = {
  title: string
  name: TBossesAvailableTypes
  color: string
  shadowColor: string
}

type TMapState = {
  activeCategory: TBossesAvailableTypes
  bossesList: Array<TBoss>
}

const BossList = () => {
  const dispatch = useDispatch()
  const { activeCategory, bossesList } = useSelector<TAppState, TMapState>((state) => ({
    activeCategory: state.content.bosses.activeCategory,
    bossesList: state.content.bosses.bossesList,
  }))

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('BossList'))
    console.log(test)
  }, [])

  React.useEffect(() => {
    dispatch(getBosses(activeCategory))
  }, [activeCategory])

  const handleSelectClick = React.useCallback((category: TBossesAvailableTypes) => {
    dispatch(bossesActions.setActiveCategory(category))
  }, [])

  return (
    <>
      <Helmet>
        <title>Boss list</title>
        <meta name="description" content="Boss-list page" />
      </Helmet>
      <div className="bossList">
        <div className="bossList__selector">
          {bossesSelectorCategories?.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className={cn('bossList__selector--select', {
                active: item.name === activeCategory,
              })}
              style={{
                backgroundColor: `${item.color}`,
                boxShadow: `1px 2px 4px ${item.shadowColor}`,
              }}
              onClick={() => handleSelectClick(item.name)}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="bossList__bosses">
          {bossesList?.map((el, idx) => (
            <BossCard key={el._id} idx={idx} bossInfo={el} bossesList={bossesList} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BossList
