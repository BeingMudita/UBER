import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const FinishRide = (props) => {
    return (
            <div>
                <h5 className='p-1 text-center absolute top-0 w-[93%] ' onClick={()=>{ props.setFinishRidePanel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-s-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Complete this Ride</h3>
    
                <div className='flex items-center justify-between p-3 bg-gray-100 rounded-xl mt-3'>
                    <div className='flex items-center gap-3 '>
                        <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbSPvKEqdLc6ychr98s0fzXXnK_aQ9KLYjQ&s" alt="" />
                        <h2 className='text-xl font-medium'>Maxelle Smith</h2>
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
                        <Link to="/captain-home" className="w-full mt-1 text-lg flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg">Finish Ride
                        </Link>   
                        <p className='text-xs mt-10 text-red-500'>Click on finish ride button if you have reached the destination</p> 
                    </div>
                </div>
            </div>
        );
}

export default FinishRide