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
      return await context.prisma.author.findMany({
        include: { lifeLessions: true, books: true, quotes: true },
      });
    },

    books: async (parent: any, args: any, context: Context) => {
      return await context.prisma.book.findMany({
        include: { author: true },
      });
    },

    quotes: async (parent: any, args: any, context: Context) => {
      return await context.prisma.quote.findMany({
        include: {
          author: true,
        },
      });
    },
    lifeLessions: async (parent: any, args: any, context: Context) => {
      return await context.prisma.lifeLession.findMany({
        include: {
          author: true,
        },
      });
    },
    comics: async (parent: any, args: any, context: Context) => {
      return await context.prisma.comic.findMany({
        include: {
          author: true,
        },
      });
    },
  },
};

export const typeDefs = `#graphql
type Author {
    id: ID!
    name: String
    books: [Book]
    quotes: [Quote]
    lifeLessions: [LifeLession]
  }

  type Comic {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authorId: String
    author: [Author]
  }

  type LifeLession {
    id: ID!
    lession: String
    sequense: Int
    likes: Int
    authorId: String
    author: [Author]
  }

  type Quote {
    id: ID!
    title: String
    quote: String
    createdAt: String
    updatedAt: String
    authorId: String
    author: [Author]
  }

  type Book {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authorId: String
    author: [Author]
  }
 
  type Query {
    authors: [Author]
    books: [Book]
    quotes: [Quote]
    lifeLessions: [LifeLession]
    comics: [Comic]
    # quote(id: ID!): Quote
    # lifeLession(id: ID!): LifeLession
    # book(id: ID!): Book
    # author(id: ID!): Author
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
