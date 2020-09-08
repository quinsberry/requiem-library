import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'

import { actions as sidebarActions } from '../../store/reducers/sidebar'

import './TalentsActiveEffectsScreams.scss'

const TalentsActiveEffectsScreams = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(sidebarActions.setActiveCategory('Talents/Active-effects/Screams'))
  }, [])
  return (
    <>
      <Helmet>
        <title>Talents/Active effects/Screams</title>
        <meta name="description" content="Talents/Active effects/Screams page" />
      </Helmet>
      <h1 className="todo">Talents/Active effects/Screams content</h1>
    </>
  )
}

export default TalentsActiveEffectsScreams
