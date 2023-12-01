import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { prisma } from '../../../prisma/db';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

export type Context = {
  prisma: PrismaClient;
};

const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
    novel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    quotes: async (parent: any, args: any, context: Context) => {
      return await context.prisma.quote.findMany();
    },
    quote: async (parent: any, args: any, context: Context) => {
      return await context.prisma.quote.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    lifeLessions: async (parent: any, args: any, context: Context) => {
      return await context.prisma.lifeLession.findMany();
    },
  },
  Novel: {
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany({
        where: { novelId: parent.id },
      });
    },
  },
  Quote: {
    creaters: async (parent: any, args: any, context: Context) => {
      return await context.prisma.creater.findMany({
        where: { quoteId: parent.id },
      });
    },
  },
};

export const typeDefs = gql`
  type LifeLession {
    id: ID!
    lession: String
    sequense: Int
    likes: Int
  }
  type Quote {
    id: ID!
    quote: String
    createdAt: String
    updatedAt: String
    creaters: [Creater]
  }
  type Creater {
    id: ID!
    name: String
    quoteID: String
  }

  type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }
  type Author {
    id: ID!
    name: String
    novelID: String
  }
  type Query {
    novel(id: ID!): Novel
    novels: [Novel]
    quotes: [Quote]
    quote(id: ID!): Quote
    lifeLessions: [LifeLession]
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
