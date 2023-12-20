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
