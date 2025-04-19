import { Link } from "react-router-dom";

export function Signup() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url(../../arch.gif)] from-red-600 to-blue-500">
        <div className="bg-gradient-to-b from-gray-800 to-blue-500 h-150 w-120  rounded-2xl flex justify-center items-center">
          <div className="grid gap-30 ">
            <p className="text-2xl font-bold text-white ">
              {" "}
              Enter your Credentials
            </p>

            <div className="grid grid-cols-1 gap-5 ">
              <input className="bg-red-100 w-80 h-10 rounded-xl "></input>
              <input className="bg-red-100 w-80 h-10 rounded-xl"></input>
              <Link className="text-2xl font-bold flex items-center">
                {" "}
                Submit
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
