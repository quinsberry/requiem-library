import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './GameRules.scss'

const GameRules = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('GameRules'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Game's rules</title>
        <meta name="description" content="Game's rules page" />
      </Helmet>
      <h1 className="todo">Game's rules content</h1>
    </>
  )
}

export default GameRules
