"use client";
import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import NoteBook from "./components/NoteBook";
import OwnerPageForm from "./components/OwnerPageForm";

const DeathNotePage = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="text-white p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-4xl text-center sm:text-left lg:text-5xl font-deathNote">
              Death Note
            </h1>
            <div className="h-full mt-4 flex flex-col items-center sm:flex-row sm:items-start lg:items-end"></div>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2 flex gap-4 flex-col">
            <p>
              The &apos;Death Note&apos; itself, a black notebook with
              instructions (known as &apos;Rules of the Death Note&apos;)
              written on the inside. When used correctly, it allows anyone to
              commit a murder, knowing only the victim&apos;s name and face.
            </p>
            <p>
              In this iteration, the Death Note takes on a new dimension beyond
              its original purpose...
            </p>
          </div>
        </div>

        <section className="border border-white">
          {/* <OwnerPageForm setFormData={setFormData} /> */}
          <NoteBook formData={formData} />
        </section>
      </div>
    </div>
  );
};

export default DeathNotePage;
