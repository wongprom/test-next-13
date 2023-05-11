import Navbar from '@/components/Navbar';
import '../../styles/globals.css';

export const metadata = {
  title: 'About',
  description: 'Generated WongP',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="">{children}</main>
    </div>
  );
}
