import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '../styles/globals.css';

import { alegreya, roboto_slab, nunito_sans, mulish } from './fonts/fonts';

export const metadata = {
  title: 'test-1',
  description: 'Test new things',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alegreya.className} ${mulish.className} ${roboto_slab.className}`}
    >
      <body
        className={`${nunito_sans.className} flex min-h-screen w-full flex-col bg-[#222222]`}
      >
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
