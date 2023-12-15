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
export const GET_LIFE_LESSONS = gql`
  query LifeLessions {
    lifeLessions {
      likes
      sequense
      lession
      author {
        name
      }
    }
  }
`;
