import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../components/ui/Dropdown";
import { Navbar } from "../components/ui/Navbar";
export function LandingPage() {
  return (
    <>
  
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white ">
        <p className="text-5xl  text-gradient-to-r from-blue-500 to-purple-500">
          Welcome to my website!
        </p>

        <Dropdown
          branchZero="Select Branch"
          branchFirst="Information Technology"
          branchSecond="Computer Science"
          branchThird="Electronics and Communication"
          branchFourth="Mechanical"
        />

        <Dropdown
          branchZero="Select Semester"
          branchFirst="1st Semester"
          branchSecond="2nd Semester"
          branchThird="3rd Semester"
          branchFourth="4th Semester"
        />

        <Link
          to="/branchIT"
          className=" bg-blue-500 px-5 py-3 rounded-2xl pt-2 mt-3 "
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
