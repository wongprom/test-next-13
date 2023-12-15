import { Context } from './route';

export const resolvers = {
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
        orderBy: {
          sequense: 'asc',
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
