import { useState } from "react";

export function Dropdown(props) {
  const [userType, setUserType] = useState("citizen");

  return (
    <div>
      <div className="mt-6 space-y-2 w-full max-w-md ">
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="py-4 w-120 px-45  border rounded-md select-all border-gray-300 bg-transparent cursor-pointer "
        >
          <option className="bg-black text-white " value="select branch">
            {props.branchZero}
          </option>
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
          <option className="bg-black text-white" value="Mechanical">
            {props.branchFifth}
          </option>
          <option className="bg-black text-white" value="Mechanical">
            {props.branchSixth}
          </option>
          <option className="bg-black text-white" value="Mechanical">
            {props.branchSeventh}
          </option>
        </select>
      </div>
    </div>
  );
}
