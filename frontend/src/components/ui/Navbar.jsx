import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-black p-4 sticky  top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-3xl font-bold hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110 "
          onClick={() => window.location.reload()}
        >
          NOTES-HUB
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#"
              className="text-white text-2xl hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white text-2xl hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white bg-gradient-to-br from-blue-500 to-slate-900 rounded-2xl p-2 text-center text-2xl hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110"
              to="/signup"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
