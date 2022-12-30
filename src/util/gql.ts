import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.bergflix.de/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export default new ApolloClient({
  link: httpLink,
  cache,
})