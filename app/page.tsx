import LinkButton from '../components/LinkButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LinkButton url="/about" color="pink" text="Go to About" />
      <LinkButton url="/contact" color="blue" text="Go to Contact" />
    </div>
  );
}
