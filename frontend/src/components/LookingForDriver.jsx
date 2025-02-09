import React from "react";

const LookingForDriver = ()=>{
    return (
        <div>
            <h3 className='text-2xl text-center font-semibold mb-5'>Looking for a Driver</h3>
            <div className="flex gap-2 justify-between flex-col items-center">
                <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className="w-full mt-5 ">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-xl ri-map-pin-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11A</h3>
                            <p className="text-sm -mt-1 text-gray-600 ">Kankariya Talab, Ahemdabad </p>
                        </div>
                    </div>
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
        </div>
    );
}

export default LookingForDriver;