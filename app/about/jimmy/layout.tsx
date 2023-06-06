import '../../../styles/globals.css';

export const metadata = {
  title: 'About Jimmy',
  description: 'Info about Jimmy',
};

export default function AboutJimmyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`flex-1 flex flex-col`}>{children}</div>;
}
