import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { prisma, type PrismaClient } from '../../../prisma/db';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export type Context = {
  prisma: PrismaClient;
};

const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async () => ({ prisma }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
