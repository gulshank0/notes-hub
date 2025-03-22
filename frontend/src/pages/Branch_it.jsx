import { Card } from "../components/ui/Card";
import { Navbar } from "../components/ui/Navbar";

function BranchIT() {
return (
  <> 
  <Navbar/>
 <div className="bg-black h-screen sm:h-screen text-white flex justify-center items-center" >
    
<div className="grid grid-cols-3 gap-8" >
<Card title="DSA" />
<Card title="OOPS"/>

<Card title="JAVA"/>
<Card title="CPP"/>
<Card title="Web Devs" link="https://dotnotes.in" />
<Card title="computer Netwoks"/>
</div>

  </div>

 </>
);
}

export default BranchIT;
