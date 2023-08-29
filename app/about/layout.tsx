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
  return (
    <div className="flex-1 flex flex-col p-10">
      <div className="flex-1 grid grid-cols-5 gap-4 ">
        <div className="flex flex-col gap-4 text-xl col-span-full md:col-span-1 md:rounded-md p-5 bg-[#aaaaaa]">
          <h2 className=" underline underline-offset-4 uppercase">
            <Link href={'/about'}>About</Link>
          </h2>
          <ul className="flex flex-col gap-5  text-[#ffffff]">
            <li>
              <Link
                href={'/about/jimmy'}
                className="cursor-pointer hover:text-gray-600"
              >
                Jimmy
              </Link>
            </li>
            <li>
              <Link
                href={'/about/adept'}
                className="cursor-pointer hover:text-gray-600"
              >
                Adept
              </Link>
            </li>
            <li>
              <Link
                href={'/about/testimonial'}
                className="cursor-pointer hover:text-gray-600"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                href={'/about/certificates'}
                className="cursor-pointer hover:text-gray-600"
              >
                Certificates
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:rounded-md  border-4 border-[#aaaaaa] p-5 overflow">
          {children}
        </div>
      </div>
    </div>
  );
}
