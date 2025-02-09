import React from "react";
import { Link } from "react-router-dom";

const Riding = ()=>{
    return(
        <div className="h-screen">
            <Link to = "/home" className="fixed block right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full ">
                <i className=" text-lg font-medium ri-home-line"></i>
            </Link>
            <div className="h-1/2">
                <img className="h-full w-full object-cover" src="https://radiorampa.com/wp-content/uploads/2022/12/Zdjecie-12-19-22-12-13-29-PM.jpg" alt="" />
            </div>
            <div className="h-1/2 p-4 ">
                <div className="flex items-center justify-between">
                    <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">Sarthak</h2>
                        <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
                        <p className="text-sm font-gray-600">Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className="flex gap-2 justify-between flex-col items-center">
                    <div className="w-full mt-5 ">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-xl ri-map-pin-fill"></i>
                        <div>
                        <h3 className="text-lg font-medium">562/11A</h3>
                        <p className="text-sm -mt-1 text-gray-600 ">Kankariya Talab, Ahemdabad </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="text-lg ri-cash-line"></i>
                        <div>
                        <h3 className="text-lg font-medium">&#8377;118.86</h3>
                        <p className="text-sm -mt-1 text-gray-600 ">Cash cash </p>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="w-full mt-5 bg-black text-white font-semibold p-2 rounded-lg">Make a payment</button>

            </div>   
        </div>
    );
}

export default Riding;