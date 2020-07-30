import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './Perks.scss'

const Perks = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Perks'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Perks</title>
        <meta name="description" content="Perks page" />
      </Helmet>
      <h1 className="todo">Perks content</h1>
    </>
  )
}

export default Perks
