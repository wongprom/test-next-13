import { forwardRef } from 'react';

const OwnerPage = forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page font-deathNote bg-death-note-blank-page bg-cover bg-center p-10"
      ref={ref}
    >
      <div className="page-content w-full h-full flex flex-col overflow-y-auto">
        <h2 className="page-header text-5xl text-center pt-10">Death Note</h2>
        <br />
        {/* <div className="page-image bg-yellow-200"></div> */}
        <p>Name: Jimmy Backstrom</p>
        <p>Alias: Wongprom</p>
        <p>Age: 42</p>
        <p>Gender: Man</p>
        <p>Your Shinigami: Ryuk</p>
        <p>Likes:...</p>
        <p>Disslikes:...</p>
        <p>Main wish:...</p>
        <p>Zodiac: Rooster (tori)</p>
        <p>Personality based of your Zodiac:...</p>
        <h3 className="text-3xl uppercase underline decoration-gray-400 tracking-wide">
          {}
        </h3>
        <br />
        <div className="page-text">{props.children}</div>
        <div className="page-text text-3xl text-gray-400">{}</div>
        <div className="page-footer mt-auto mx-auto">{`-- ${Number(
          props.pageNumber
        )} --`}</div>
      </div>
    </div>
  );
});
OwnerPage.displayName = 'OwnerPage';

export default OwnerPage;
