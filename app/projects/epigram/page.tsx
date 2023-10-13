import React from 'react';

const EpiGramPage = () => {
  return (
    <div className="text-white text-4xl grid gap-10">
      <div>
        Some hello text like, This route get information from Supabase DB with
        help of GraphQL
      </div>
      <div>
        <h1>Display all epigrams</h1>
      </div>
      <button>
        button to access Modal add new quote, Before Modal popups, Clerk auth
        will do a check, OK ? Modal form popups : denied
      </button>
    </div>
  );
};

export default EpiGramPage;
