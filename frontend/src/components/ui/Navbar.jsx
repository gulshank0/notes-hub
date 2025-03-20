import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="bg-black p-4 sticky  top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold hover:cursor-pointer " onClick={() => window.location.reload()} >Logo</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#" className="text-white text-2xl hover:text-gray-300" to="/" >Home</Link>
          </li>
          <li>
            <Link href="#" className="text-white text-2xl hover:text-gray-300" to="/about" >About Us</Link>
          </li>
          <li>
            <Link href="#" className="text-white text-2xl hover:text-gray-300" to="/contact" >Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
