import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

function Contents(subjects) {
  const units = [
    {
      id: 1,
      title: "UNIT - I",
      content:
        "Boolean Algebra and Combinational Logic: Review of number systems, signed, unsigned, fixed point, floating point numbers, Binary Codes...",
    },
    { id: 2, title: "UNIT - II", content: "Content for Unit 2..." },
    { id: 3, title: "UNIT - III", content: "Content for Unit 3..." },
    { id: 4, title: "UNIT - IV", content: "Content for Unit 4..." },
  ];

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id); // Toggle expand
  };

  return (
    <div>
      <Navbar />

      <div className="h-screen flex flex-col items-center bg-black pt-40 ">
        <p className="text-4xl text-white pb-6 ">Welcome to WEB DEV PAGE </p>
        <div className="text-3xl text-pretty text-white bg-gradient-to-br from-violet-500 to-red-400 flex gap-10  px-25 p-10 rounded-2xl ">
          <Link className="hover:underline"> Syllabus</Link>

          <Link className="hover:underline"> Notes </Link>
          <Link className="hover:underline"> PYQ'S</Link>
          <Link className="hover:underline"> Lab</Link>
          <Link className="hover:underline"> Books </Link>
          <Link className="hover:underline"> Akash</Link>

          <Link className="hover:underline"> Videos</Link>
        </div>
      </div>
    </div>
  );
}

export default Contents;
