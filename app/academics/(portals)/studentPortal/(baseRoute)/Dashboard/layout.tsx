'use client'
import { useEffect, useState } from "react";

export default function Layout({ children,upcoming,topDeals }: { children: React.ReactNode,upcoming:React.ReactNode,topDeals:React.ReactNode }) {
   
    const [activeTab, setActiveTab] = useState(1); // Setting the default active tab to 2
    useEffect(()=>{},[activeTab])
   
   return <div className="w-full h-screen bg-white " >
     <div role="tablist" className="tabs tabs-bordered justify-center p-2  ">
        <button name="my_tabs_1" 
        role="tab" 
        className="tab text-black " 
        aria-label="Tab 3" 
        //onClick={activeTab === 3} 
        onClick={() => setActiveTab(1)}  > My Courses </button>
      

        <button name="my_tabs_1" 
        role="tab" 
        className="tab text-black " 
        aria-label="Tab 3" 
        //onClick={activeTab === 3} 
        onClick={() => setActiveTab(2)}  > Upcoming Activities <div className="badge badge-primary text-white ml-1  "> 5 </div> </button>
     

        <button name="my_tabs_1" 
        role="tab" 
        className="tab text-black " 
        aria-label="Tab 3" 
        //onClick={activeTab === 3} 
        onClick={() => setActiveTab(3)}  > Top Deals <div className="badge badge-secondary text-white ml-1  "> new </div> </button>
     
    </div>
    {/*contents*/}
    {activeTab === 1 && (
        <div role="tabpanel" className="tab-content p-10  ">{children}</div>
      )}
       {activeTab === 2 && (
        <div role="tabpanel" className="tab-content p-10">{upcoming}</div>
      )}
       {activeTab === 3 && (
        <div role="tabpanel" className="tab-content bg-red-500 p-10 h-full ">{topDeals}</div>
      )}
    </div>
}