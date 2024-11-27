"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { ReactNode } from "react";
const testBranchVercel =
  "https://test-next-13-git-34-idea-quotes-advice-wongprom.vercel.app/api/graphql";

const localBranch = "http://localhost:3000/api/graphql";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const getGraphqlUri = () => {
  if (
    process.env.NODE_ENV === "development" ||
    !process.env.NEXT_PUBLIC_SUPABASE_URL
  ) {
    return localBranch;
  }
  return supabaseUrl;
};
export const Providers = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: getGraphqlUri(),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
