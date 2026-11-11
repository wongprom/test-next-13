'use client';

import dynamic from 'next/dynamic';

// Separate file so Sanity never enters the server webpack graph.
const StudioClient = dynamic(() => import('./StudioClient'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',
        fontFamily: 'system-ui, sans-serif',
        color: '#111',
      }}
    >
      Loading Studio…
    </div>
  ),
});

export default function Studio() {
  return <StudioClient />;
}
