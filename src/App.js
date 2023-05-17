import React, { Suspense, memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import AppPlayer from './views/app-player'
import routes from './router'
import store from './store'
const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
        <AppFooter></AppFooter>
        <AppPlayer></AppPlayer>
      </HashRouter>
    </Provider>
  )
})

export default App
