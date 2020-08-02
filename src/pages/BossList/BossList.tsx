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
  { title: 'Легкие', name: 'easy', color1: '#DCFED7', color2: '#36FF6E' },
  { title: 'Средние', name: 'medium', color1: '#36FF6E', color2: '#FBFF25' },
  { title: 'Тяжелые', name: 'hard', color1: '#FBFF25', color2: '#FFCD83' },
  { title: 'Особо опасные мальчишки', name: 'dangerBoys', color1: '#FFCD83', color2: '#FFBB54' },
  { title: 'Боссы гильдий', name: 'guildBosses', color1: '#FFBB54', color2: '#FFAD32' },
  { title: 'Жрецы', name: 'priests', color1: '#FFAD32', color2: '#FF7A00' },
  { title: 'Именные драконы', name: 'dragons', color1: '#FF7A00', color2: '#FF0000' },
  { title: 'Супер боссы', name: 'superBosses', color1: '#FF0000', color2: '#FF0000' },
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
                background: `linear-gradient(0.25turn, ${item.color1}, ${item.color2})`,
                boxShadow: item.name === activeCategory ? `1px 2px 4px rgba(0,0,0, .5)` : 'none',
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
