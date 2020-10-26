require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const HelbizAPI = require('./datasources/helbiz');

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const bearerToken = req.headers.authorization || '';
    return { bearerToken };
  },
  dataSources: () => ({
    helbizAPI: new HelbizAPI(),
  }),
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`⚡️⚡️🛴 Server listening on http://localhost:${PORT} 🛴⚡️⚡️`));
