import React from "react";
import Personal from "../components/Personal";
import Family from "../components/Family";
import Contact from "../components/Contact";
import { useState } from "react";
const AllDetails = () => {

    const [activeComponent, setActiveComponent] = useState('personal');

    return <div className=" flex m-10">
    <div className=" rounded-2xl w-1/3 m-10 mt-10 gap-4 h-full flex flex-col bg-slate-400">
        <button onClick={()=>{setActiveComponent('personal')}} className=" bg-slate-300  mt-2 hover:bg-slate-200  hover:font-extrabold transition hover:duration-500 font-bold text-xl  w-auto h-auto  ">Personal Details</button>
        <button onClick={()=>{setActiveComponent('family')}} className=" bg-slate-300  hover:bg-slate-200 hover:font-extrabold transition hover:duration-500 font-bold text-xl  w-auto h-auto  ">Family Details</button>
        <button onClick={()=>{setActiveComponent('contact')}} className=" bg-slate-300  hover:bg-slate-200 hover:font-extrabold transition hover:duration-500 font-bold text-xl  w-auto h-auto ">Contact Details</button>
        <button onClick={()=>{setActiveComponent('upload')}} className=" bg-slate-300  mb-2 hover:bg-slate-200 hover:font-extrabold transition hover:duration-500 font-bold text-xl  w-auto h-auto ">Upload documents</button>
    </div>
    {activeComponent === 'personal' && <Personal />}
      {activeComponent === 'family' && <Family />}
      {activeComponent === 'contact' && <Contact />}
        
    </div>
}

export default AllDetails