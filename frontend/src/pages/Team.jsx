import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import { Navbar } from "../components/ui/Navbar";

function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black ">
        <div className="pt-30 flex justify-center">
          <div className=" bg-gradient-to-br from-blue-500 to-red-500 rounded-4xl py-30 px-30 flex flex-col hover:bg-transparent transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110 ">
            <div className=" rounded-full flex justify-center pb-5 ">
              <img
                src="../../CuteCat.png"
                alt="Description"
                className="w-45 h-45 object-cover rounded-full shadow-amber-200 hover:cursor-pointer"
              />
            </div>
            <p className="text-3xl font-bold text-center">Linux Guy</p>
            <p className="text-center">
              Full Stack Developer <br /> Using Arch btw
            </p>
            <div className="flex space-x-4 pt-3 justify-center">
              <a href="https://x.com/gulshank0" target="_blank">
                <Twitter className="cursor-pointer" />
              </a>
              <a href="https://github.com/gulshank0" target="_blank">
                <GithubIcon className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/gulshan-kumar-872512270/"
                target="_blank"
              >
                <LinkedinIcon className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
