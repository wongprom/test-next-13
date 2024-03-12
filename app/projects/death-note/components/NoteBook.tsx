'use client';
import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useRef } from 'react';
import { testDeathNoteRules } from '../../../../data/data';

const numOfRules = testDeathNoteRules.length;
const displayDeatNoteRulesText = (ruleText: string[]) => {
  return ruleText.map((rule: string) => (
    <p
      className="first-line:uppercase first-line:tracking-widest first-line:text-gray-200
      first-letter:text-7xl first-letter:font-bold first-letter:text-gray-200
      first-letter:mr-3 first-letter:float-left tracking-wide"
    >
      {rule}
      <br />
      <br />
    </p>
  ));
};

const Cover = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page page-cover relative font-deathNote bg-death-note-cover font-bold bg-cover text-gray-900 text-6xl"
      ref={ref}
      data-density="hard"
    >
      {/* <Image src={deathNoteFrontCover} alt="deathNote" /> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-content animate-pulse ">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
Cover.displayName = 'Cover';

const RulePage = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page font-deathNote bg-death-note-blank-page bg-cover bg-center p-10"
      ref={ref}
    >
      <div className="page-content w-full h-full flex flex-col overflow-y-auto">
        <h2 className="page-header text-5xl text-center pt-10">
          Rule {props.pageNumber} / {numOfRules}
        </h2>
        <br />
        {/* <div className="page-image bg-yellow-200"></div> */}
        <h3 className="text-3xl uppercase underline decoration-gray-400 tracking-wide">
          {props.rule.heading}
        </h3>
        <br />
        <div className="page-text">{props.children}</div>
        <div className="page-text text-3xl text-gray-400">
          {displayDeatNoteRulesText(props.rule.text)}
        </div>
        <div className="page-footer mt-auto mx-auto">{`-- ${Number(
          props.pageNumber
        )} --`}</div>
      </div>
    </div>
  );
});
RulePage.displayName = 'RulePage';

const OwnerPage = React.forwardRef((props: any, ref: any) => {
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

const NoteBook = () => {
  return (
    // @ts-ignore
    <HTMLFlipBook
      width={500}
      minWidth={400}
      maxWidth={500}
      size="stretch"
      height={700}
      minHeight={700}
      maxHeight={800}
      maxShadowOpacity={1}
      showCover={true}

      // mobileScrollSupport={true}
      // onFlip={this.onPage}
      // onChangeOrientation={this.onChangeOrientation}
      // onChangeState={this.onChangeState}
      // className="demo-book"
    >
      <Cover>Doo it...</Cover>
      <OwnerPage />
      {testDeathNoteRules.map((rule, index) => {
        return <RulePage pageNumber={index + 1} rule={rule}></RulePage>;
      })}
      {/* <Page number="1" subHeading="Entering Names"></Page>
      <Page number="2"></Page>
      <Page number="3"></Page>
      <Page number="4"></Page> */}
      <Cover number="5">...end</Cover>
    </HTMLFlipBook>
  );
};

export default NoteBook;
