import { Link } from "react-router-dom";
export function Card(props) {
  return (
    <div className=" " >
  <div className="w-[400px] bg-gradient-to-br from bg-red-400 to-blue-700 rounded-xl   text-3xl text-center cursor-pointer py-14  " >

  <Link to="{link}" target="_blank">
    <h1>{props.title}</h1> 
  </Link>
  </div>
 </div> 
  
  );
}
