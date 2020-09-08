import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../store/reducers/sidebar'

import './Alchemy.scss'

const Alchemy = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Alchemy'))
  }, [])

  return (
    <>
      <Helmet>
        <title>Alchemy</title>
        <meta name="description" content="Alchemy page" />
      </Helmet>
      <h1 className="todo">Alchemy content</h1>
    </>
  )
}

export default Alchemy
