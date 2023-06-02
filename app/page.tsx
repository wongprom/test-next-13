import LinkButton from '../components/LinkButton';

export default function Home() {
  return (
    // <div className="flex flex-col justify-center items-center bg-gray-300">
    <div className="flex-1  items-center  flex flex-col justify-center  bg-pink-300">
      <h1 className="text-2xl text-white">Home Page</h1>
      <LinkButton url="/about" text="Go to About" />
      <LinkButton url="/contact" text="Go to Contact" />
    </div>
  );
}
