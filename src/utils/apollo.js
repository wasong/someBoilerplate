// Apollo
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { RetryLink } from 'apollo-link-retry'

const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjbybhg8640ni01344uc8ut6e' })

// authLink (use when required)
// const authLink = new ApolloLink((operation, forward) => {
//   operation.setContext({
//     headers: {
//       authorization: localStorage.getItem('token') || null,
//     },
//   })
//   return forward(operation)
// })

// errorLink
const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    // do something
  }
})

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__) // eslint-disable-line

// Setup Apollo client
export default new ApolloClient({
  link: ApolloLink.from([
    // authLink,
    errorLink,
    httpLink,
  ]),
  cache,
})
