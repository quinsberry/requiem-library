import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'
import { actions as bossesActions } from '../../redux/reducers/bosses'

import { bossesData } from '../../data'

import { BossCard } from '../../components'

import './BossList.scss'

import { TAppState, TBossesCategory } from '../../types/types'

const bossesSelectorCategories = [
  { title: 'Легкие', name: 'easy', color: '#BFE88B', shadowColor: 'rgba(191, 232, 139, 0.5)' },
  { title: 'Средние', name: 'medium', color: '#E9F98A', shadowColor: 'rgba(233, 249, 138, 0.8)' },
  { title: 'Тяжелые', name: 'hard', color: '#F9D65D', shadowColor: 'rgba(249, 214, 93, 0.6)' },
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
]

type TMapState = {
  activeCategory: string
}

const BossList = () => {
  const dispatch = useDispatch()

  const [bosses, setBosses] = React.useState<TBossesCategory>(null)
  const { activeCategory } = useSelector<TAppState, TMapState>((state) => ({
    activeCategory: state.content.bosses.activeCategory,
  }))

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('BossList'))
  }, [])

  React.useEffect(() => {
    const filteredBosses = bossesData!.filter((el) => el.category === activeCategory)[0]
    setBosses(filteredBosses)
  }, [activeCategory])

  const handleSelectClick = (category: string) => {
    dispatch(bossesActions.setActiveCategory(category))
  }

  return (
    <>
      <Helmet>
        <title>Boss list</title>
        <meta name="description" content="Boss-list page" />
      </Helmet>
      <div className="bossList">
        <div className="bossList__selector">
          {bossesSelectorCategories?.map((item) => (
            <div
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
          {bosses?.items?.map((el) => (
            <BossCard
              key={el._id}
              name={el.name}
              experience={el.experience}
              additionalInfo={el.additionalInfo}
              location={el.location}
              links={el?.links}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default BossList
