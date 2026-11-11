'use client';

import dynamic from 'next/dynamic';
import config from '@/sanity.config';

// Client-only: avoids SSR hydration crashes from Sanity + react-dom/server aliasing.
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function Studio() {
  return <NextStudio config={config} />;
}
