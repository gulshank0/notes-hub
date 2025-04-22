import { Link } from "react-router-dom";

export function Signup() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url(../../arch.gif)] from-red-600 to-blue-500">
        <div className="bg-gradient-to-b from-gray-800 to-blue-500 h-150 w-120  rounded-2xl flex justify-center items-center">
          <div className="grid gap-30 ">
            <p className="text-4xl font-bold text-white flex justify-center items-center pt-30 ">
              {" "}
              Enter your Credentials
            </p>

            <div className="grid grid-cols-1 gap-5 pb-40 px-4">
              <input
                type="email"
                className="bg-red-100 w-80 h-10 rounded-xl focus:ring-2 placeholder:text-center "
                placeholder="Enter Email"
              ></input>
              <input
                type="text"
                className="bg-red-100 w-80 h-10 rounded-xl placeholder:text-center"
                placeholder="Enter the Password"
              ></input>
              <Link className="text-2xl font-bold flex items-center justify-center pt-10 ">
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
