import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'
import { actions as bossesActions, getBosses, addArrayOfBosses } from '../../redux/reducers/bosses'

import { BossCard, BossCardLoader } from '../../components'

import './BossList.scss'

import { TAppState, TBossesAvailableTypes, TBoss } from '../../types/types'

import test from '../../data/bosses'

type Selector = {
  title: string
  name: TBossesAvailableTypes
  color: string
  shadowColor: string
}

type TMapState = {
  activeCategory: TBossesAvailableTypes
  bossesList: Array<TBoss>
  isLoading: boolean
  initialized: boolean
  language: string
}

const BossList = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const { activeCategory, bossesList, isLoading, initialized, language } = useSelector<
    TAppState,
    TMapState
  >((state) => ({
    activeCategory: state.content.bosses.activeCategory,
    bossesList: state.content.bosses.bossesList,
    isLoading: state.content.bosses.isLoading,
    initialized: state.content.bosses.initialized,
    language: state.settings.language,
  }))

  const bossesSelectorCategories = useMemo(
    () => [
      {
        title: t('bossList.buttons.ease'),
        name: 'ease',
        color: '#BFE88B',
        shadowColor: 'rgba(191, 232, 139, 0.5)',
      },
      {
        title: t('bossList.buttons.medium'),
        name: 'medium',
        color: '#E9F98A',
        shadowColor: 'rgba(233, 249, 138, 0.8)',
      },
      {
        title: t('bossList.buttons.strong'),
        name: 'strong',
        color: '#F9D65D',
        shadowColor: 'rgba(249, 214, 93, 0.6)',
      },
      {
        title: t('bossList.buttons.dangerBoys'),
        name: 'dangerBoys',
        color: '#FFB13C',
        shadowColor: 'rgba(255, 177, 59, 0.5)',
      },
      {
        title: t('bossList.buttons.guildBosses'),
        name: 'guildBosses',
        color: '#FF993B',
        shadowColor: 'rgba(255, 153, 59, 0.4)',
      },
      {
        title: t('bossList.buttons.priests'),
        name: 'priests',
        color: '#FF6712',
        shadowColor: 'rgba(255, 103, 18, 0.3)',
      },
      {
        title: t('bossList.buttons.dragons'),
        name: 'dragons',
        color: '#FF452C',
        shadowColor: 'rgba(255, 69, 44, 0.3)',
      },
      {
        title: t('bossList.buttons.superBosses'),
        name: 'superBosses',
        color: '#E11111',
        shadowColor: 'rgba(225, 17, 17, 0.3)',
      },
    ],
    [t],
  ) as Array<Selector>

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('BossList'))
    if (!bossesList.length) {
      dispatch(getBosses(activeCategory))
    }
  }, [])

  const handleSelectClick = React.useCallback(
    (category: TBossesAvailableTypes) => {
      if (activeCategory !== category) {
        dispatch(bossesActions.setActiveCategory(category))
        dispatch(getBosses(category))
      }
    },
    [activeCategory],
  )

  return (
    <>
      <Helmet>
        <title>Boss list</title>
        <meta name="description" content="Boss-list page" />
      </Helmet>
      <div className="bossList">
        <div className={cn('bossList__selector', { en: language === 'en' })}>
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
          {bossesList && isLoading
            ? bossesList.map((item, idx) => <BossCardLoader key={idx} />)
            : bossesList.map((el, idx) => (
                <BossCard key={el._id} idx={idx} bossInfo={el} bossesList={bossesList} />
              ))}
          {!initialized && [...Array(12)].map((el, idx) => <BossCardLoader key={idx} />)}
        </div>
      </div>
    </>
  )
}

export default BossList
