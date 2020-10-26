import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.scss';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const BEARER_TOKEN = 'Bearer ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: BEARER_TOKEN,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
