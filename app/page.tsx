'use client'
import LinkButton from '../components/LinkButton';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LinkButton url="/about" text="Go to About" />
      <LinkButton url="/contact" text="Go to Contact" />
    </div>
  );
}
