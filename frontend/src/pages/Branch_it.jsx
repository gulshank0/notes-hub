import { Card } from "../components/ui/Card";
import { Navbar } from "../components/ui/Navbar";
function BranchIT() {
  return (
    <>
      <Navbar />
      <div className="bg-black sm:h-screen text-white flex justify-center items-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          <Card title="DSA" />
          <Card title="OOPS" />

          <Card title="JAVA" />
          <Card title="CPP" />
          <Card title="Web Devs" link="http://google.com" />
          <Card title="computer Netwoks" />
        </div>
      </div>
    </>
  );
}

export default BranchIT;
