import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);
  const [confirmRidePopUp, setConfirmRidePopupPanel] = useState(false);
  const ConfirmRidePopupRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ridePopupPanel])

useGSAP(function () {
  if (confirmRidePopUp) {
      gsap.to(ConfirmRidePopupRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(ConfirmRidePopupRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [confirmRidePopUp])

  return(
        <div className="h-screen">
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
            <div className="h-3/5">
              <img className="h-full w-full object-cover" src="https://radiorampa.com/wp-content/uploads/2022/12/Zdjecie-12-19-22-12-13-29-PM.jpg" alt="" />
            </div>
            <div className="h-2/5 p-6 ">
              <CaptainDetails/>
            </div>   

            <div ref={ridePopupPanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-8 py-6 px-3 pt-12 rounded-t-xl'>
              <RidePopUp  setRidePopupPanel={setRidePopupPanel } setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
            </div>

            <div ref={ConfirmRidePopupRef} className='fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full p-8 py-6 px-3 pt-12 rounded-t-xl'>
              <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div>
    );
}

export default CaptainHome;