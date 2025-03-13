import { useState } from "react";

export function Dropdown(props) {
  const [userType, setUserType] = useState("citizen");

  return (
    <div>
      <div>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-transparent"
        >
          <option className="bg-black text-white" value="InformationTechnology">
            {props.branchFirst}{" "}
          </option>
          <option className="bg-black text-white" value="ComputerScience">
            {props.branchSecond}
          </option>
          <option
            className="bg-black text-white"
            value="Electronics and Communication"
          >
            {props.branchThird}{" "}
          </option>
          <option className="bg-black text-white" value="Mechanical">
            {props.branchFourth}
          </option>
        </select>
      </div>
    </div>
  );
}
