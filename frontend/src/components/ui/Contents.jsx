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
    <div className="h-screen min-h-screen bg-[url(../../arch.gif)]">
      <Navbar />

      <div className=" flex flex-col items-center pt-40 ">
        <p className="text-4xl text-white pb-6 font-extrabold ">
          Welcome to WEB DEV PAGE{" "}
        </p>
        <div className="text-3xl text-pretty text-white text-center bg-gradient-to-br from-red-400 to-violet-700 px-20 p-6 rounded-2xl grid grid-cols-3 sm:grid-cols-7 gap-10 ">
          <Link
            className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110"
            to="/syllabus"
          >
            Syllabus
          </Link>

          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            Notes
          </Link>
          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            PYQ'S
          </Link>
          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            Lab
          </Link>
          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            Books
          </Link>
          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            Akash
          </Link>

          <Link className="hover:underline bg-gradient-to-bl from-violet-800 to-violet-400 rounded-xl text-black p-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
            Videos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contents;
