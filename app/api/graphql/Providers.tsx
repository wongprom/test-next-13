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
    uri: process.env.NEXT_PUBLIC_SUPABASE_URL + '/api/graphql',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
