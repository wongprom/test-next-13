import LinkButton from '../components/LinkButton';
import { alegreya } from './fonts/fonts';

export default function Home() {
  return (
    <div className="flex-1 bg-[#222222] p-40">
      <h1 className={`${alegreya.className} text-center text-7xl text-white`}>
        Home Page
      </h1>
      <div className="flex flex-col justify-center items-center">
        <LinkButton url="/about" text="Go to About" />
        <LinkButton url="/contact" text="Go to Contact" />
      </div>
    </div>
  );
}
