import { Card } from "../components/ui/Card";
import { Navbar } from "../components/ui/Navbar";
function BranchIT() {
  return (
    <>
      <div className="h-screen bg-[url(../../arch.gif)] min-h-screen">
        <Navbar />
        <div className="text-white flex justify-center items-center py-40">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
            <Card title="DSA" />
            <Card title="OOPS" />

            <Card title="JAVA" />
            <Card title="CPP" />
            <Card title="Web Devs" link="http://google.com" />
            <Card title="computer Netwoks" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BranchIT;
