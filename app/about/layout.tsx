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
      <div className="flex-1 grid grid-cols-5  gap-4 ">
        <div className="col-span-5 md:col-span-1 md:rounded-md cursor-pointer p-5 bg-[#aaaaaa]">
          <h2 className=" underline underline-offset-4 uppercase">
            <Link href={'/about'}>About</Link>
          </h2>
          <ul className="flex flex-col  cursor-pointer hover:text-gray-600">
            <li>
              <Link href={'/about/jimmy'}>Jimmy</Link>
            </li>
            <li>
              <Link href={'/about/adept'}>Adept</Link>
            </li>
            <li>
              <Link href={'/about/testimonial'}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:rounded-md  border-4 border-[#aaaaaa] text-[#9b9b9b] p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
