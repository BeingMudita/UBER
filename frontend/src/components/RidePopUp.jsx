import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center absolute top-0 w-[93%] ' onClick={()=>{ props.setRidePopupPanel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-s-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New ride available</h3>

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
                <div className='w-full mt-5 flex items -center justify-between '>
                    <button 
                        onClick={()=>
                            {props.setRidePopupPanel(false)}} className=" bg-gray-300 text-gray-800 font-semibold p-3 px-8 rounded-lg">Ignore
                    </button>
                    <button 
                        onClick={()=>
                            { props.setConfirmRidePopupPanel(true)
                        }} className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg">Accept
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RidePopUp