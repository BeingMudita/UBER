import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props)=>{
    const [otp, setOtp] = useState('')
    const submitHandler =(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <h5 className='p-1 text-center absolute top-0 w-[93%] ' onClick={()=>{ props.setRidePopupPanel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-s-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm ride to Start</h3>

            <div className='flex items-center justify-between p-3 bg-gray-100 rounded-xl mt-3'>
                <div className='flex items-center gap-3 '>
                    <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbSPvKEqdLc6ychr98s0fzXXnK_aQ9KLYjQ&s" alt="" />
                    <h2 className='text-xl font-medium'>Maxelle Smith</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2km</h5>
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
                <form >
                    <input type="text" />
                </form>
                <div className="mt-6 w-full ">
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }}>
                        <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} className="bg-[#eee] px-6 py-4 font-mono rounded-lg w-full mb-3" type="text" placeholder="Enter OTP" />
                        <Link to="/captain-riding" className="w-full mt-1 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm Ride
                        </Link>
                        <button 
                            onClick={()=>
                                {props.setConfirmRidePopupPanel(false); props.setRidePopupPanel(false)}} className="w-full mt-2 bg-red-600 text-gray-800 font-semibold p-2 rounded-lg">Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default ConfirmRidePopUp;
