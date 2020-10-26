import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.scss';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BEARER_TOKEN } from '../config';

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
