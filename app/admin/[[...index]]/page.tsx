import type { Metadata, Viewport } from 'next';
import Studio from './Studio';

export const dynamic = 'force-static';

// Inline studio head config — do not re-export from `next-sanity/studio`
// (that barrel also pulls NextStudio/Sanity into the server graph).
export const metadata: Metadata = {
  referrer: 'same-origin',
  robots: 'noindex',
  title: 'Sanity Studio',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function AdminPage() {
  return <Studio />;
}
