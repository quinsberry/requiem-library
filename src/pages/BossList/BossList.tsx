import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import { BossCard } from '../../components'

import './BossList.scss'

const bossesData = [
  {
    title: 'Easy',
    items: [
      {
        _id: '1',
        name: 'Фейковый император',
        experience: '7.500',
        additionalInfo: 'По квесту Тёмного Братства «Смерть Империи»',
        location: 'Солитьюд - Мрачный замок',
        links: {
          additionalInfo:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%A1%D0%BC%D0%B5%D1%80%D1%82%D1%8C_%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D0%B8',
          location:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%9C%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA',
        },
      },
      {
        _id: '2',
        name: 'Рон Ворон',
        experience: '11.250',
        additionalInfo: 'Бандит на максималках',
        location: 'Лагерь Тихих Лун',
        links: {
          location:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%9B%D0%B0%D0%B3%D0%B5%D1%80%D1%8C_%D0%A2%D0%B8%D1%85%D0%B8%D1%85_%D0%9B%D1%83%D0%BD',
        },
      },
      {
        _id: '3',
        name: 'Ален Дюфон',
        experience: '11.250',
        additionalInfo: 'По квесту Тёмного Братства «Прощай, любовь»',
        location: 'Ральдбтхар',
        links: {
          name:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%90%D0%BB%D0%B5%D0%BD_%D0%94%D1%8E%D1%84%D0%BE%D0%BD',
          additionalInfo:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%9F%D1%80%D0%BE%D1%89%D0%B0%D0%B9,_%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C',
          location:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%A0%D0%B0%D0%BB%D1%8C%D0%B4%D0%B1%D1%82%D1%85%D0%B0%D1%80',
        },
      },
      {
        _id: '4',
        name: 'Элси Спайкер',
        experience: '15.000',
        additionalInfo: 'Сильная и независимая женщина с посохом',
        location: 'Башни Валтейм',
        links: {
          location:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%91%D0%B0%D1%88%D0%BD%D0%B8_%D0%92%D0%B0%D0%BB%D1%82%D0%B5%D0%B9%D0%BC',
        },
      },
      {
        _id: '5',
        name: 'Синдинг (Оборотень)',
        experience: '18.750',
        additionalInfo: 'По квесту «Зов луны»',
        location: 'Грот Утопленника',
        links: {
          name:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3',
          additionalInfo:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%97%D0%BE%D0%B2_%D0%BB%D1%83%D0%BD%D1%8B',
          location:
            'https://elderscrolls.fandom.com/ru/wiki/%D0%93%D1%80%D0%BE%D1%82_%D0%A3%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B0',
        },
      },
    ],
  },
]

const BossList = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('BossList'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Boss list</title>
        <meta name="description" content="Boss-list page" />
      </Helmet>
      <div className="bossList">
        {bossesData?.map((el, idx) => (
          <div key={`${el.title}-${idx}`} className="bossList__section">
            <div className="title">{el.title}</div>
            <div className="bosses">
              {el.items?.map((boss) => (
                <BossCard
                  key={boss._id}
                  name={boss.name}
                  experience={boss.experience}
                  additionalInfo={boss.additionalInfo}
                  location={boss.location}
                  links={boss?.links}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BossList
