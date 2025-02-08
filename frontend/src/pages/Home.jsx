import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
    const[pickup, setPickup] = useState('');
    const[destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])
    return (
        <div className="h-screen relative">
            <img className='w-16 absolute left-5 top-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <div className="h-screen w-screen ">
                <img className="h-full w-full" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
                <div className="h-[30%] p-6 bg-white rounded-t-3xl relative">
                    <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}}
                        className='absolute opacity-0 top-3 left-3 text-2xl '>
                            <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-3xl font-semibold mt-3">Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>
                        <div className="line absolute h-16 w-1 top-[53%] bg-gray-900 left-10 rounded-full"></div>
                        <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5 mb-3" 
                            onClick={()=>{
                                setPanelOpen(true);
                            }}
                            type="text" 
                            placeholder="Add a pick-up location"
                            value={pickup}
                            onChange={(e)=>{
                                setPickup(e.target.value);
                            }} />
                        <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-3" 
                            onClick={()=>{
                                setPanelOpen(true);
                            }}
                            type="text" 
                            placeholder="Enter your destination" 
                            value={destination}
                            onChange={(e)=>{
                                setDestination(e.target.value);
                            }}/>
                    </form>
                </div>
                <div ref={panelRef} className="bg-white h-0" >

                            <LocationSearchPanel/>
                </div>
            </div>
        </div>
    );
};

export default Home;
