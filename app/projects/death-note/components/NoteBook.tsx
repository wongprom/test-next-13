'use client';

import React, { useCallback, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useRef } from 'react';
import { testDeathNoteRules } from '../../../../data/data';
import OwnerPage from './OwnerPage';
import RulePage from './RulePage';

const numOfRules = testDeathNoteRules.length;

//@ts-ignore

export const displayDeatNoteRulesText = (ruleText: string[]) => {
  return ruleText.map((rule: string, index) => (
    <p
      key={index}
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
      className="page page-cover font-deathNote bg-death-note-cover font-bold bg-cover text-gray-900 text-6xl"
      ref={ref}
      data-density="hard"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-content animate-pulse ">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
Cover.displayName = 'Cover';

const NoteBook = (props: any) => {
  const onFlip = useCallback((e: any) => {
    console.log('Current page: ' + e.data);
  }, []);

  //@ts-ignore
  // const pageCount = pageFlip.current.getPageFlip().getPageCount();

  return (
    <>
      {/* @ts-ignore */}
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
        disableFlipByClick={true}
        startZIndex={0}
        onFlip={onFlip}
        // mobileScrollSupport={true}
        // onFlip={this.onPage}
        // onChangeOrientation={this.onChangeOrientation}
        // onChangeState={this.onChangeState}
        // className="demo-book"
      >
        <Cover>Doo it...</Cover>
        <OwnerPage formData={props.formData} />
        {testDeathNoteRules.map((rule, index) => {
          return (
            <RulePage
              key={rule.heading}
              pageNumber={index + 1}
              rule={rule}
              numOfRules={numOfRules}
            ></RulePage>
          );
        })}
        {/* <Page number="1" subHeading="Entering Names"></Page>
      <Page number="2"></Page>
      <Page number="3"></Page>
      <Page number="4"></Page> */}
        <Cover number="5">...end</Cover>
      </HTMLFlipBook>
    </>
  );
};

export default NoteBook;
