import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../store/reducers/sidebar'

import './RacesStonesGods.scss'

const RacesStonesGods = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Races/Stones/Gods'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Races/Stones/Gods</title>
        <meta name="description" content="Races/Stones/Gods page" />
      </Helmet>
      <h1 className="todo">Races/Stones/Gods content</h1>
    </>
  )
}

export default RacesStonesGods
