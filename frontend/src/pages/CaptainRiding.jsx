import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from "../components/FinishRide";

const CaptainRiding = ()=>{
    const [fFinishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(function () {
        if (fFinishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [fFinishRidePanel])
    return(
        <div className="h-screen relative">
            <div>
                <img
                className="w-14 absolute left-5 top-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt="Uber Logo"
                />
                <Link to = "/captain-login" className="fixed block right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full ">
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-4/5">
              <img className="h-full w-full object-cover" src="https://radiorampa.com/wp-content/uploads/2022/12/Zdjecie-12-19-22-12-13-29-PM.jpg" alt="" />
            </div>
            <div onClick={()=>{
                setFinishRidePanel(true);
            }} className="h-1/5 p-6 bg-gray-100 flex items-center justify-between relative">
                <h5 className='p-1 text-center absolute top-0 w-[93%] '><i className="text-3xl text-gray-700 ri-arrow-up-s-line"></i></h5>
                <h4 className="text-xl font-semibold ">4 KM away</h4>
                <button className="w-full mt-1 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg" >Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-8 py-6 px-3 pt-12 rounded-t-xl'>
              <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
            
        </div>
    );
}

export default CaptainRiding