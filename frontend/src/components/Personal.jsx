import React from "react";

const Personal = () => {

    return <div className=" p-5 rounded-lg w-auto bg-slate-400  flex flex-col">
        <form>
        <div className=" flex gap-5">
            <div className=" flex flex-col">
             <label className=" text-lg font-semibold">First Name</label>
            <input
                    className=" bg-slate-300"
                    placeholder="Name"/>
            </div>
            <div className=" flex flex-col">
         <label className=" text-lg font-semibold">Last Name</label>
        <input
        className=" bg-slate-300"/>
        </div>

        <div className=" flex flex-col">
         <label className=" text-lg font-semibold">Middle Name</label>
        <input
        className=" bg-slate-300"/>
        </div>
        </div>

        <br></br>
        <div className=" flex gap-5">
            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Father's Name</label>
                    <input
                     className=" bg-slate-300"/>
            </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Mother's Name</label>
                    <input
                     className=" bg-slate-300"/>
            </div>
        </div>
        <br></br>


        <div className=" flex gap-5">
            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Date of Birth</label>
                <input
                className=" bg-slate-300"/>
            </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Place of birth</label>
                <input
                className=" bg-slate-300"/>
            </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Blood group</label>
                <input
                className="bg-slate-300"/>
            </div>
        </div>

        <br></br>
        <div className=" flex gap-5">
            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Birth Country</label>
                <input
                className=" bg-slate-300"/>
                </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Birth State</label>
                <input
                className=" bg-slate-300"/>
            </div>
        

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Birth District</label>
                <input
                className=" bg-slate-300"/>
            </div>
        </div>

        <br></br>
        <div className=" flex gap-5">
                <div className="flex flex-col">
                    <label className=" text-lg font-semibold">Native place</label>
                    <input
                    className=" bg-slate-300"/>
                </div>
                
                <div className=" flex flex-col">
                    <label className=" text-lg font-semibold">Native Country</label>
                    <input
                    className=" bg-slate-300"/>
                </div>

                <div className=" flex flex-col">
                    <label className=" text-lg font-semibold">Native District</label>
                    <input
                    className=" bg-slate-300"/>
                </div>


        </div>
        
        <br></br>

        <div className=" flex gap-5">
            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Gender</label>
                <input
                className=" bg-slate-300"/>
            </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Category</label>
                <input
                className=" bg-slate-300"/>
            </div>

            <div className=" flex flex-col">
                <label className=" text-lg font-semibold">Cast</label>
                <input
                className=" bg-slate-300"/>
            </div>
        </div>

        <div className=" flex gap-5">

            <div className="flex flex-col">  
                <label className=" text-lg font-semibold">Email id</label>
                <input
                className=" bg-slate-300"/>
            </div>

            <div className="flex flex-col">  
                <label className=" text-lg font-semibold">Mobile Number</label>
                <input
                className=" bg-slate-300"/>
            </div>

        </div>
        

        

    </form>
    </div>
}

export default Personal