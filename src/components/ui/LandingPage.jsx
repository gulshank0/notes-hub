import { Dropdown } from './dropdown';

export function LandingPage() {
  return (
    <div className="min-h-screen  flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 ">
      <h1 className="flex flex-row text-3xl font-bold mb-4">Welcome to My Website</h1>

<div className='grid grid-cols-1/3 gap-4'>
<Dropdown branchFirst="Information Technology" branchSecond="Computer Science" branchThird="Electronics and Communication" branchFourth="Mechanical" />
</div>
 <div className='grid grid-cols-1/3 gap-4'>
 <Dropdown branchFirst="1st Semester" branchSecond="2nd Semester" branchThird="3rd Semester" branchFourth="4th Semester" />

 </div>
<div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Get Started</button>

</div>




</div>
  );
}
