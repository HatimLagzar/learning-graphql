const { ApolloServer } = require('apollo-server');
const dataSources = require('./sources');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`it is running at ${url}`);
});
