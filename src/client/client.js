import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://sangwook.ml/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default client;