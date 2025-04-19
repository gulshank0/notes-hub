import React from "react";
import { Navbar } from "../components/ui/Navbar";

function Syllabus() {
  return (
    <div className="h-screen bg-[url(../../arch.gif)]">
      <Navbar />
      <div className=" flex justify-center text-5xl text-white pt-0">
        <div className="bg-gradient-to-br from-blue-500 to-red-500 hover:bg-transparent rounded-2xl px-80 m-20 ">
          <p className="text-6xl text-white pb-6 ">Syllabus</p>
          <div className="flex flex-col items-center gap-30">
            <p>unit-1 </p>
            <p>unit-2 </p>
            <p>unit-3 </p>
            <p>unit-4 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
