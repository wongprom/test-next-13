'use client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

import { ReactNode } from 'react';
const testBranchVercel =
  'https://test-next-13-git-34-idea-quotes-advice-wongprom.vercel.app';

const localBranch = 'http://localhost:3000';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: testBranchVercel + '/api/graphql',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
