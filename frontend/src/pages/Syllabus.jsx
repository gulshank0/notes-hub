import React from "react";
import { Navbar } from "../components/ui/Navbar";

function Syllabus() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center bg-black text-5xl text-white pt-35">
        <div className="bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl px-80 m-20 ">
          <p className="text-6xl text-white pb-6 ">Syllabus</p>
          <div className="flex flex-col items-center gap-20">
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
