import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { prisma } from '../../../prisma/db';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export type Context = {
  prisma: PrismaClient;
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
