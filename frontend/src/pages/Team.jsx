import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import { Navbar } from "../components/ui/Navbar";

function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black ">
        <div className="pt-30 flex justify-center">
          <div className=" bg-gradient-to-br from-blue-500 to-purple-500 rounded-4xl py-30 px-30 flex flex-col hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110 ">
            <div className=" rounded-full flex justify-center pb-5 ">
              <img
                src="../../public/CuteCat.png"
                alt="Description"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
            <p className="text-3xl text-center">Linux Guy</p>
            <p>
              {" "}
              Full Stack Developer <br /> Using Arch btw
            </p>
            <div className="flex flex-col gap-2">
              <a>
                <Twitter />
              </a>
              <a>
                <GithubIcon />
              </a>
              <a>
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
