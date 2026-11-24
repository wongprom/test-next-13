import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kakeibo',
  description: 'Plan the month, log spending, review — Swedish krona (Kr).',
};

const shellStyle = {
  '--kakeibo-ink': '#1a2332',
  '--kakeibo-paper': '#f2efe8',
  '--kakeibo-mist': '#e4e9e6',
  '--kakeibo-leaf': '#2f6b4f',
  '--kakeibo-muted': '#5c6670',
  backgroundColor: 'var(--kakeibo-paper)',
  color: 'var(--kakeibo-ink)',
} as CSSProperties;

/**
 * Full-screen app shell for Kakeibo.
 * Covers the portfolio Navbar/Sidebar so app screens are not framed by site chrome.
 */
export default function KakeiboLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden" style={shellStyle}>
      {children}
    </div>
  );
}
