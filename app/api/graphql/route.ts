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
    scribenter: async (parent: any, args: any, context: Context) => {
      return await context.prisma.scribent.findMany({
        include: { TidningsArtiklar: true, SerieTidningar: true },
      });
    },
    tidningsArtiklar: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tidningArtikel.findMany({
        include: { scribent: true },
      });
    },
    serieTidningar: async (parent: any, args: any, context: Context) => {
      return await context.prisma.serieTidning.findMany({
        include: { creater: true },
      });
    },

    // authors: async (parent: any, args: any, context: Context) => {
    //   return await context.prisma.author.findMany();
    // },
    //   novels: async (parent: any, args: any, context: Context) => {
    //     return await context.prisma.novel.findMany();
    //   },
    // lifeLessions: async (parent: any, args: any, context: Context) => {
    //   console.log('Query lifeLessions context ', context);
    //   return await context.prisma.lifeLession.findMany();
    // },
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
  // Scribent: {
  //   TidningsArtiklar: async (parent: any, _args: any, context: Context) => {
  //     console.log(
  //       '🚀 ~ file: route.ts:63 ~ TidningsArtiklar: ~ parent:',
  //       parent
  //     );

  //     return await context.prisma.tidningArtikel.findMany({
  //       where: {
  //         scribentId: parent.id,
  //       },
  //     });
  //   },
  // },
  // TidningArtikel: {
  //   scribent: async (parent: any, _args: any, context: Context) => {
  //     return await context.prisma.tidningArtikel.findMany({
  //       where: {
  //         scribentId: parent.id,
  //       },
  //     });
  //   },
  // },
  // SerieTidning: {
  //   creater: async (parent: any, _args: any, context: Context) => {
  //     console.log('🚀 ~ file: route.ts:83 ~ creater: ~ _args:', _args);

  //     return await context.prisma.serieTidning.findMany({
  //       where: {
  //         scribentId: parent.id,
  //       },
  //     });
  //   },
  // },

  // Author: {
  //   lifeLessions: async (parent: any, _args: any, context: Context) => {
  //     console.log('Author: lifeLessionscontext ', context);
  //     return await context.prisma.lifeLession.findMany({
  //       where: {
  //         authorId: parent.id,
  //       },
  //     });
  //   },
  // },
  // LifeLession: {
  //   author: async (parent: any, _args: any, context: Context) => {
  //     return await context.prisma.lifeLession.findMany({
  //       where: {
  //         authorId: parent.id,
  //       },
  //     });
  //   },
  // },

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

export const typeDefs = `#graphql
type SerieTidning {
  id:ID!
  tidningsNamn: String
  creater: [Scribent]
  scribentId: String
}

type TidningArtikel{
  id:ID!
  titel: String
  scribent: Scribent
  scribentId: String
}

type Scribent {
  id: ID!
  scribentNamn: String
  TidningsArtiklar: [TidningArtikel]
  SerieTidningar: [SerieTidning]
}

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
    scribenter: [Scribent]
    tidningsArtiklar: [TidningArtikel]
    serieTidningar: [SerieTidning]
    # authors: [Author]
    # novels: [Novel]
    # quotes: [Quote]
    # lifeLessions: [LifeLession]
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
