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
    const uri = getGraphqlUri();

    // #region agent log
    fetch('http://127.0.0.1:7656/ingest/fa45ef92-7957-4ded-a531-2e4d4d33568c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': 'eb5d69',
      },
      body: JSON.stringify({
        sessionId: 'eb5d69',
        runId: 'post-fix',
        hypothesisId: 'A',
        location: 'app/api/graphql/Providers.tsx:getGraphqlUri',
        message: 'Apollo GraphQL URI resolved',
        data: {
          uri,
          origin:
            typeof window !== 'undefined' ? window.location.origin : 'ssr',
          nodeEnv: process.env.NODE_ENV,
          hasSupabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    return new ApolloClient({
      link: new HttpLink({ uri }),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
