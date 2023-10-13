import '../../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Generated WongP',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeLinks = [
    {
      route: '/about',
      linkText: 'About',
    },
    {
      route: '/about/jimmy',
      linkText: 'Jimmy',
    },
    {
      route: '/about/adept',
      linkText: 'Adept',
    },
    {
      route: '/about/testimonial',
      linkText: 'Testimonial',
    },
    {
      route: '/about/certificates',
      linkText: 'Certificates',
    },
  ];
  return (
    <div className="flex-1 flex flex-col p-10">
      <div className="flex gap-4">
        <div className="hidden md:flex flex-col gap-4 text-xl  md:rounded-md p-5 bg-[#aaaaaa]">
          <ul className="flex flex-1 flex-col gap-5 text-[#ffffff]">
            {routeLinks.map((routeLink) => (
              <li key={routeLink.linkText}>
                <Link
                  href={routeLink.route}
                  className="cursor-pointer hover:text-gray-600"
                >
                  {routeLink.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 md:rounded-md border-4 border-[#aaaaaa] p-5 overflow">
          {children}
        </div>
      </div>
    </div>
  );
}
