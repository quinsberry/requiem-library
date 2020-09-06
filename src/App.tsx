import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
  BossList,
  RacesStonesGods,
  Alchemy,
  Equipment,
  GameRules,
  Perks,
  Social,
  Spoilers,
  TalentsActiveEffectsScreams,
  Tiers,
  VampiresWerwolves,
} from './pages'
import { Header, Sidebar } from './components'

import { TAppState } from './types/types'

type TMapState = {
  language: string
}

const App = () => {
  const { i18n } = useTranslation()
  const { language } = useSelector<TAppState, TMapState>((state) => ({
    language: state.settings.language,
  }))

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <div className="wrapper">
      <Helmet defaultTitle="Requiem library" titleTemplate="%s | Requiem library">
        <meta
          name="description"
          content="The library about users modification for The Elder Scrolls: Skyrim - Requiem"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <div className="body-wrapper">
        <div className="container">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/boss-list" component={BossList} exact />
              <Route path="/races-stones-gods" component={RacesStonesGods} exact />
              <Route path="/perks" component={Perks} exact />
              <Route path="/equipment" component={Equipment} exact />
              <Route path="/tiers" component={Tiers} exact />
              <Route
                path="/talents-active_effects-screams"
                component={TalentsActiveEffectsScreams}
                exact
              />
              <Route path="/vampires-werewolves" component={VampiresWerwolves} exact />
              <Route path="/spoilers" component={Spoilers} exact />
              <Route path="/social" component={Social} />
              <Route path="/games-rules" component={GameRules} exact />
              <Route path="/alchemy" component={Alchemy} exact />
              <Redirect to="/boss-list" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
