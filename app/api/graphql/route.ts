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
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany();
    },
    //   novels: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.novel.findMany();
    //   },
    lifeLessions: async (parent: any, args: any, context: Context) => {
      console.log('Query lifeLessions context ', context);
      return await context.prisma.lifeLession.findMany();
    },
    //   quotes: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.quote.findMany();
    //   },
    //   novel: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.novel.findUnique({
    //       where: {
    //         id: args.id,
    //       },
    //     });
    //   },
    //   quote: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.quote.findUnique({
    //       where: {
    //         id: args.id,
    //       },
    //     });
    //   },
    //   lifeLession: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.lifeLession.findUnique({
    //       where: {
    //         id: args.id,
    //       },
    //     });
    //   },
  },

  Author: {
    lifeLessions: async (parent: any, _args: any, context: Context) => {
      console.log('Author: lifeLessionscontext ', context);
      return await context.prisma.lifeLession.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },
  LifeLession: {
    author: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.lifeLession.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },

  // Novel: {
  //   authors: async (parent: any, args: any, context: Context) => {
  //     return await context.prisma.author.findMany({
  //       where: { novelId: parent.id },
  //     });
  //   },
  // },
  // Quote: {
  //   authors: async (parent: any, args: any, context: Context) => {
  //     return await context.prisma.author.findMany({
  //       where: { quoteId: parent.id },
  //     });
  //   },
  // },
  // LifeLession: {
  //   Author: async (parent: any, args: any, context: Context) => {
  //     return context.prisma.lifeLession.findMany({
  //       where: { authorId: parent.id },
  //     });
  //   },
  // },
};

export const typeDefs = gql`
  type LifeLession {
    id: ID!
    lession: String
    sequense: Int
    likes: Int
    authorId: String
    author: Author
  }

  type Quote {
    id: ID!
    title: String
    quote: String
    createdAt: String
    updatedAt: String
    authorId: String
  }

  type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authorId: String
  }
  type Author {
    id: ID!
    name: String
    novels: [Novel]
    quotes: [Quote]
    lifeLessions: [LifeLession]
  }
  type Query {
    authors: [Author]
    # novels: [Novel]
    # quotes: [Quote]
    lifeLessions: [LifeLession]
    # quote(id: ID!): Quote
    # lifeLession(id: ID!): LifeLession
    # novel(id: ID!): Novel
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
