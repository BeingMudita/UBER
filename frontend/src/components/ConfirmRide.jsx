import React from "react";

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute top-0 w-[93%] ' onClick={()=>{ props.setConfirmRidePannel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-s-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>
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
                <button 
                    onClick={()=>
                        {props.setVehicleFound(true);
                        props.setConfirmRidePannel(false);
                    }} className="w-full mt-5 bg-black text-white font-semibold p-2 rounded-lg">Confirm Ride</button>
            </div>
        </div>
    );
};

export default ConfirmRide;