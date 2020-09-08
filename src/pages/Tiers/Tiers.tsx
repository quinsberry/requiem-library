import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../store/reducers/sidebar'

import './Tiers.scss'

const Tiers = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Tiers'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Tiers</title>
        <meta name="description" content="Tiers page" />
      </Helmet>
      <h1 className="todo">Tiers content</h1>
    </>
  )
}

export default Tiers
