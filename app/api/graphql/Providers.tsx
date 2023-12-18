'use client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: 'https://test-next-13-hzqlpdy00-wongprom.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
