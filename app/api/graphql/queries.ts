import { gql } from '@apollo/client';

export const GET_QUOTES = gql`
  query Query {
    quotes {
      id
      quote
      author {
        name
      }
    }
  }
`;
