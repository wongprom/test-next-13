'use client';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { ReactNode } from 'react';

const localBranch = 'http://localhost:3000/api/graphql';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const getGraphqlUri = () => {
  if (
    process.env.NODE_ENV === 'development' ||
    !process.env.NEXT_PUBLIC_SUPABASE_URL
  ) {
    return localBranch;
  }
  return supabaseUrl;
};

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: getGraphqlUri() }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
