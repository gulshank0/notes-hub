import React, { useState } from "react";
import { Linkedin, Twitter, ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Navbar } from "../components/ui/Navbar";

function TeamPage() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-violet-800 to-red-200 py-8 px-4 text-center flex justify-center items-center">
        <div className="relative flex items-center justify-center mt-6">
          <div className="bg-amber-200 m-8 p-25 rounded-full">hi there</div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
