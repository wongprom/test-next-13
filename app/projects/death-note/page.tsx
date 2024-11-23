"use client";
import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import NoteBook from "./components/NoteBook";
import OwnerPageForm from "./components/OwnerPageForm";
import Image from "next/image";
import testImage from "../../../public/images/deathNote/ghost.png";
import AudioPlayer from "./components/AudioPlayer";

const DeathNotePage = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="text-gray-300 p-0 sm:p-8 bg-black">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-7xl text-center lg:text-8xl font-deathNote">
          Death Note
        </h1>
        <div className="mx-auto flex justify-center">
          <AudioPlayer />
        </div>

        <div className="grid grid-cols-7 gap-2 my-10 ">
          <div className="col-span-7 lg:col-span-4 space-y-4 font-specialElite text-lg lg:text-xl leading-relaxed">
            <p className="text-3xl lg:text-4xl font-bold text-red-500 tracking-wider">
              How the original works
            </p>
            <p>
              The <span className="text-red-500"> &apos;Death Note&apos; </span>
              itself, a black notebook with instructions (known as &apos;Rules
              of the Death Note&apos;) written on the inside. When used
              correctly, it allows anyone to commit a murder, knowing only the
              victim&apos;s name and face.
            </p>
            <p>
              The notebook was dropped into the human world by{" "}
              <span className="text-red-500">Ryuk, a Shinigami</span>(
              <span className="text-red-500">god of death</span>), out of sheer
              boredom, setting off a chain of events that would change the world
              forever... knowing only the victim&apos;s name and face...
            </p>
            <p>
              In this iteration, the Death Note takes on a new dimension beyond
              its original purpose...
            </p>
          </div>
          <div className="col-span-7 lg:col-span-3 mx-auto">
            <Image
              src={testImage}
              alt="test image"
              className="rounded-sm border-transparent ring-gray-500  shadow-sm opacity-20 lg:opacity-30"
            />
          </div>
        </div>

        {/* <OwnerPageForm setFormData={setFormData} /> */}
        <NoteBook formData={formData} />
      </div>
    </div>
  );
};

export default DeathNotePage;
