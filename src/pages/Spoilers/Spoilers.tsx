import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './Spoilers.scss'

const Spoilers = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Spoilers'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Spoilers</title>
        <meta name="description" content="Spoilers page" />
      </Helmet>
      <h1 className="todo">Spoilers content</h1>
    </>
  )
}

export default Spoilers
