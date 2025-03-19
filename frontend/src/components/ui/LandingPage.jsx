import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { Navbar } from "./Navbar";
import BranchIT from "../../pages/Branch_it";
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
<div>




        <BrowserRouter> 

        <AppBar />

        <Routes>
<Route path="/branchIT" element={<BranchIT/>}/>


        </Routes>
        
        
        </BrowserRouter>

</div>

      </div>
    </>
  );
}



function AppBar(){
  const navigate =useNavigate();
  return <div>

<button className="bg-slate-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
onClick={()=>{
window.location.href="/BranchIT"
}}
>Get Started</button>




  </div>
}