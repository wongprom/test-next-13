import Link from 'next/link';

const ClientSideLink = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideLink;
