import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css';

import { alegreya, roboto_slab, nunito_sans, mulish } from './fonts/fonts';
import { Providers } from './api/graphql/Providers';

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
      <ClerkProvider>
        <body
          className={`${nunito_sans.className} flex min-h-screen w-full flex-col bg-[#222222]`}
        >
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5 h-screen overflow-auto overflow-x-hidden no-scrollbar">
              <Providers>{children}</Providers>
            </div>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
