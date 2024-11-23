'use client';
import { forwardRef } from 'react';
import { testDataJapaneseZodiacSigns } from '../../../../data/data';
import { displayDeatNoteRulesText } from './NoteBook';

type JapaneseZodiacSign = {
  englishSign: string;
  japaneseSign: string;
  animalKanji: string;
  birthYears: string[];
  positiveAttributes: string[];
  negativeAttributes: string[];
  info: string[];
  ownerName?: string;
  ownerBirthYear?: string;
};

const OwnerPage = forwardRef((props: any, ref: any) => {
  const { formData } = props;

  const japaneseZodiacSigns: JapaneseZodiacSign[] = testDataJapaneseZodiacSigns;

  const matchingZodiacData = japaneseZodiacSigns.find((sign) => {
    if (sign.birthYears.includes(formData?.birthYear)) {
      sign.ownerName = formData.name;
      sign.ownerBirthYear = formData.birthYear;
      return true; // Return true to indicate a match
    }
  });

  // row.map((rank, i, row) => {
  //   if (i + 1 === row.length) {
  //     // Last one.
  //   } else {
  //     // Not last one.
  //   }
  // });

  const displayText = (arrStr: string[]) => {
    return arrStr.map((text: string, index, arrStr) => {
      if (index + 1 === arrStr.length) {
        <span key={index} className="tracking-wide">
          {text}
          {'.'}
        </span>;
      } else {
        <span key={index} className="tracking-wide">
          {text}
          {', '}
        </span>;
      }

      return (
        <span key={index} className="tracking-wide">
          {text}
          if()
          {', '}
        </span>
      );
    });
  };
  // const matchSign = japaneseZodiacSigns.map((element) => {
  //   return element.birthYears.find((year) => year === formData.birthYear);
  // });
  // console.log('🚀 ~ matchSign ~ matchSign:', matchSign);
  // return matchSign;

  console.log('🚀 ~ outPutData ~ outPutData:', matchingZodiacData);

  return (
    <div
      className="page font-deathNote bg-death-note-blank-page bg-cover bg-center p-10"
      ref={ref}
    >
      <div className="page-content w-full h-full flex flex-col overflow-y-auto">
        <h2 className="page-header text-5xl text-center pt-10">Death Note</h2>
        {matchingZodiacData && (
          <>
            <p>Zodiac: {matchingZodiacData?.animalKanji} </p>
            <br />
            <p className="text-2xl">The existing owners information </p>
            <p>Name: {matchingZodiacData.ownerName}</p>
            <p>Year of Birth:{matchingZodiacData?.ownerBirthYear}</p>
            <p>englishSign:{matchingZodiacData.englishSign}.</p>
            <p>japaneseSign: {matchingZodiacData.japaneseSign}</p>
            <p>
              positiveAttributes:{' '}
              {displayText(matchingZodiacData.positiveAttributes)}
            </p>
            <p>
              negativeAttributes:{' '}
              {displayText(matchingZodiacData.negativeAttributes)}
            </p>
            <p>info: {displayDeatNoteRulesText(matchingZodiacData.info)}</p>
          </>
        )}
        {/* <p>Your Shinigami: ".Get Shinigami from array Shinigami's "</p>
        <p>Zodiac: Rooster (tori)</p>
        <p>englishSign:...</p>
        <p>japaneseSign:...</p>
        <p>animalKanji:...</p>
        <p>birthYear:...</p>
        <p>positiveAttributes:...</p>
        <p>negativeAttributes:...</p>
        <p>info:...</p> */}
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
