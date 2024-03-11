'use client';
import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import deathNoteBlankPage from '../../../../public/images/deathNote/blank.png';
import deathNoteFrontCover from '../../../../public/images/deathNote/frontcover.png';
import { useRef } from 'react';

const Cover = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page page-cover relative bg-death-note-cover bg-cover border border-pink-300"
      ref={ref}
      data-density="hard"
    >
      {/* <Image src={deathNoteFrontCover} alt="deathNote" /> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
Cover.displayName = 'Cover';

const Page = React.forwardRef((props: any, ref: any) => {
  console.log(ref);
  return (
    <div
      className="page bg-death-note-blank-page bg-cover bg-center p-10"
      ref={ref}
    >
      <div className="page-content w-full h-full flex flex-col  ">
        <h2 className="page-header text-center pt-10">
          Page header - {props.number}
        </h2>
        {/* <div className="page-image bg-yellow-200"></div> */}
        <div className="page-text bg-red-200 ">{props.children}</div>
        <div className="page-footer mt-auto mx-auto bg-blue-200">{`-- ${Number(
          props.number
        )} --`}</div>
      </div>
    </div>
  );
});
Page.displayName = 'Page';

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
      maxShadowOpacity={0.5}
      showCover={true}

      // mobileScrollSupport={true}
      // onFlip={this.onPage}
      // onChangeOrientation={this.onChangeOrientation}
      // onChangeState={this.onChangeState}
      // className="demo-book"
    >
      <Cover>Start Cover</Cover>
      <Page number="1">some text here</Page>
      <Page number="2"></Page>
      <Page number="3"></Page>
      <Page number="4"></Page>
      <Cover number="5">The End</Cover>
    </HTMLFlipBook>
  );
};

export default NoteBook;
