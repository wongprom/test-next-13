import { forwardRef } from 'react';
import { displayDeatNoteRulesText } from './NoteBook';

const RulePage = forwardRef((props: any, ref: any) => {
  return (
    <div
      className="page font-deathNote bg-death-note-blank-page bg-cover bg-center p-10"
      ref={ref}
    >
      <div className="page-content w-full h-full flex flex-col overflow-y-auto">
        <h2 className="page-header text-5xl text-center pt-10">
          Rule {props.pageNumber} / {props.numOfRules}
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
export default RulePage;
