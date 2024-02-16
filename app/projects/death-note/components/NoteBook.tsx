'use client';
import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import deathNoteBlankPage from '../../../../public/images/deathNote/blank.png';
import deathNoteFrontCover from '../../../../public/images/deathNote/frontCover.png';
import { useRef } from 'react';

const FrontCover = React.forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page page-cover fixed bg-red-600"
      ref={ref}
      data-density="hard"
    >
      <Image fill src={deathNoteFrontCover} alt="deathNote" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="page" ref={ref}>
      <Image fill src={deathNoteBlankPage} alt="deathNote" />
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{`Page number ${
          Number(props.number) + 1
        }`}</div>
      </div>
    </div>
  );
});

const NoteBook = (props: any) => {
  return (
    // @ts-ignore
    <HTMLFlipBook
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      // mobileScrollSupport={true}
      // onFlip={this.onPage}
      // onChangeOrientation={this.onChangeOrientation}
      // onChangeState={this.onChangeState}
      // className="demo-book"
    >
      <FrontCover>Start Cover</FrontCover>
      <Page number="1"></Page>
      <Page number="2"></Page>
      <Page number="3"></Page>
      <Page number="4"></Page>
      <FrontCover number="5">The End</FrontCover>
    </HTMLFlipBook>
  );
};
NoteBook.displayName = 'NoteBook';

export default NoteBook;
