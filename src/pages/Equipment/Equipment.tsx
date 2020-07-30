import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './Equipment.scss'

const Equipment = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Equipment'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Equipment</title>
        <meta name="description" content="Equipment page" />
      </Helmet>
      <h1 className="todo">Equipment content</h1>
    </>
  )
}

export default Equipment
