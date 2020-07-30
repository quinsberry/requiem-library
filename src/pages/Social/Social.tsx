import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../redux/reducers/sidebar'

import './Social.scss'

const Social = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Social'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Social</title>
        <meta name="description" content="Social page" />
      </Helmet>
      <h1 className="todo">Social content</h1>
    </>
  )
}

export default Social
