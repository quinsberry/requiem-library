import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './VampiresWerwolves.scss'

const VampiresWerewolves = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Vampires/Werewolves'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Vampires/Werewolves</title>
        <meta name="description" content="Vampires/Werewolves page" />
      </Helmet>
      <h1 className="todo">Vampires and Werewolves content</h1>
    </>
  )
}

export default VampiresWerewolves
