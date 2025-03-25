import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../components/ui/Dropdown";
import { Navbar } from "../components/ui/Navbar";
export function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white ">
        <p className="text-5xl">
          Welcome to my Notes Hub!
        </p>

        <Dropdown
          branchZero="Select  Branch"
          branchFirst="CSE"
          branchSecond="IT"
          branchSeventh="CST"
          branchThird="EEE"
          branchFourth="ECE"
          branchFifth="MAE"
          branchSixth="ME"
        />

        <Dropdown
          branchZero="Select Semester"
          branchFirst="1st Semester"
          branchSecond="2nd Semester"
          branchThird="3rd Semester"
          branchFourth="4th Semester"
          branchFifth="5th Semester"
          branchSixth="6th Semester"
          branchSeventh="7th Semester"
        />

        <Link
          to="/branchIT"
          className=" bg-gradient-to-br from-blue-500 to-purple-500 px-9 py-4 rounded-2xl mt-4  hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110 "
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
