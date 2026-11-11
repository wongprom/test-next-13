'use client';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { ReactNode, useMemo } from 'react';

/**
 * Always call the same-origin GraphQL route.
 * Using NEXT_PUBLIC_SUPABASE_URL (production) from a Vercel preview
 * causes CORS failures and empty EpiGram data.
 */
const getGraphqlUri = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api/graphql`;
  }
  return '/api/graphql';
};

export const Providers = ({ children }: { children: ReactNode }) => {
  const client = useMemo(() => {
    return new ApolloClient({
      link: new HttpLink({ uri: getGraphqlUri() }),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
