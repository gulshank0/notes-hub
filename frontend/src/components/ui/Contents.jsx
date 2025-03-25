import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

function Contents(subjects) {
  return (
    <div>
      <Navbar />

      <div className="h-screen flex flex-col items-center bg-black underline pt-40 ">
        <p className="text-4xl text-white pb-6 ">Welcome to WEB DEV PAGE </p>
        <div className="text-3xl text-pretty text-white bg-red-600 flex space-x-10 px-25 p-10 rounded-2xl ">
          <Link> Syllabus</Link>
          <Link> Notes </Link>
          <Link> PYQ'S</Link>
          <Link> Lab</Link>
          <Link> Books </Link>
          <Link> Akash</Link>

          <Link> Videos</Link>
        </div>
      </div>
    </div>
  );
}

export default Contents;
