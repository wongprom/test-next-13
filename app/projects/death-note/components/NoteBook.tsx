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
Cover.displayName = "Cover";

const NoteBook = (props: any) => {
  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data);
  }, []);

  return (
    <HTMLFlipBook
      width={500} // Justera detta efter behov
      height={800}
      minHeight={400}
      maxHeight={800} // 90% av viewport-höjden
      minWidth={300} // Lägger till minsta bredd
      maxWidth={900} // Lägger till största bredd
      size="stretch"
      showCover={true}
      disableFlipByClick={true}
      startZIndex={0}
      onFlip={onFlip}
      className="demo-book"
      style={{ margin: "0 auto" }}
      startPage={1}
      drawShadow={true}
      flippingTime={1000}
      useMouseEvents={true}
      usePortrait={true}
      autoSize={true}
      maxShadowOpacity={0.5}
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
