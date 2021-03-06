import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider as PaperProvider } from 'react-native-paper'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import SplashScreen from './Containers/SplashScreen/SplashScreen'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fab } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        <PaperProvider>
          {/**
           * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
           * and saved to redux.
           * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
           * for example `loading={<SplashScreen />}`.
           * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
           */}
          <PersistGate loading={<SplashScreen />} persistor={persistor}>
            <RootScreen />
          </PersistGate>
        </PaperProvider>
      </Provider>
    )
  }
}
