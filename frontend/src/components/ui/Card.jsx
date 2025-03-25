import { Link } from "react-router-dom";
export function Card(props) {
  return (
    <div className=" ">
      <div className="w-[400px] bg-gradient-to-br from bg-red-400 to-blue-700 rounded-xl   text-3xl text-center  py-20 m-2 hover:cursor-pointer hover:bg-transparent cursor-pointer transition delay-150 duration-100 ease-in-out hover:translate-y-1 hover:scale-110">
        <Link to="{props.link}">
          <h1>{props.title}</h1>
        </Link>
      </div>
    </div>
  );
}
