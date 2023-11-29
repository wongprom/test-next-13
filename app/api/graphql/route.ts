import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import prisma from '../../../prisma/db';

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// info You may also pass a context function to startServerAndCreateNextHandler as such:
// export default startServerAndCreateNextHandler(server, {
//   context: async (req, res) => ({ req, res, user: await getLoggedInUser(req) }),
// });

// export default startServerAndCreateNextHandler(server);
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
