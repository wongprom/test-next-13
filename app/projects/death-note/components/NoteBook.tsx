"use client";

import React, { useCallback, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import { testDeathNoteRules } from "../../../../data/data";
import OwnerPage from "./OwnerPage";
import RulePage from "./RulePage";

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
      className="page page-cover font-deathNote bg-death-note-cover font-bold bg-cover text-gray-900 text-6xl rounded-lg border border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
      ref={ref}
      data-density="hard"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-content animate-pulse ">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
Cover.displayName = "Cover";

const NoteBook = (props: any) => {
  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data);
  }, []);

  return (
    <HTMLFlipBook
      width={500}
      height={800}
      minHeight={400}
      maxHeight={800}
      minWidth={300}
      maxWidth={900}
      size="stretch"
      showCover={true}
      disableFlipByClick={true}
      startZIndex={0}
      onFlip={onFlip}
      className="demo-book bg-death-note-blank-cracks shadow-[8px_8px_16px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_16px_rgba(255,255,255,0.7)]"
      style={{ margin: "0 auto", backgroundColor: "gray" }}
      startPage={1}
      drawShadow={true}
      flippingTime={1000}
      useMouseEvents={true}
      usePortrait={true}
      autoSize={true}
      maxShadowOpacity={0.1}
      mobileScrollSupport={true}
      clickEventForward={true}
      swipeDistance={30}
      showPageCorners={true}
    >
      <Cover>Doo it...</Cover>
      {testDeathNoteRules.map((rule, index) => (
        <RulePage
          key={rule.heading}
          pageNumber={index + 1}
          rule={rule}
          numOfRules={numOfRules}
        />
      ))}
      <Cover>...end</Cover>
    </HTMLFlipBook>
  );
};

export default NoteBook;
