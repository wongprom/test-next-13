'use client';

import Link from 'next/link';

const ClientSideLink = ({
  children,
  route,
  styles,
}: {
  children: React.ReactNode;
  route: string;
  styles?: string;
}) => {
  return (
    <Link className={styles} href={route}>
      {children}
    </Link>
  );
};

export default ClientSideLink;
