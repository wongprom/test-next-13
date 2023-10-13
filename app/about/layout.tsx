import '../../styles/globals.css';
import SubLinks from '@/components/SubLinks';

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
        <div className="hidden md:flex flex-col gap-4 text-xl  md:rounded-md bg-[#222222]">
          <ul className="flex flex-1 flex-col gap-5 text-[#ffffff]">
            {routeLinks.map((routeLink) => (
              <SubLinks
                key={routeLink.route}
                route={routeLink.route}
                linkText={routeLink.linkText}
              />
            ))}
          </ul>
        </div>
        <div className="flex-1 md:rounded-md  p-5 overflow">{children}</div>
      </div>
    </div>
  );
}
