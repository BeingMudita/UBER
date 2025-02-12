import React from "react";

const WaitingForDriver = (props)=>{
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%] ' onClick={()=>{ props.waitingForDriver(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-s-line"></i></h5>
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

export default WaitingForDriver