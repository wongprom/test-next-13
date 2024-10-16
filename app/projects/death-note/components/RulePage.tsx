"use client";

import { forwardRef } from "react";
import { displayDeatNoteRulesText } from "./NoteBook";

const RulePage = forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page relevant font-deathNote bg-death-note-blank-page bg-cover bg-center rounded-lg border border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
      ref={ref}
    >
      <p className="page-header text-2xl text-right pt-8 pr-8">
        Rule {props.pageNumber} / {props.numOfRules}
      </p>
      <div className="absolute top-44 left-7 right-7 bottom-32 overflow-y-auto page-content flex flex-col px-5">
        <br />
        <h3 className="text-3xl uppercase underline decoration-gray-400 tracking-wide">
          {props.rule.heading}
        </h3>
        <br />
        <div className="page-text text-3xl text-gray-400">
          {displayDeatNoteRulesText(props.rule.text)}
        </div>
      </div>
      <p className="page-footer absolute bottom-4 left-1/2 transform -translate-x-1/2">{`-- ${Number(
        props.pageNumber
      )} --`}</p>
    </div>
  );
});

RulePage.displayName = "RulePage";
export default RulePage;
