import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './BossList.scss'

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
      <h1 className="todo">Boss list content</h1>
    </>
  )
}

export default BossList
