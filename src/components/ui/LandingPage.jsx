import { Dropdown } from "../ui/dropdown";

import BranchIT from "../../pages/branch_it";
import { Navbar } from "./navbar";
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
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>

      </div>
    </>
  );
}
