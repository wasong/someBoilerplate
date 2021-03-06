import React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import { configureStore } from 'utils/store'
import client from 'utils/apollo'

import Routes from './routes'

// Base stylesheets
import './styles/normalize.css'

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <div>
        <Helmet
          titleTemplate="%s | Some Boilerplate"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        <Routes />
      </div>
    </Provider>
  </ApolloProvider>
)

export default App
