import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanels from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePannel, setConfirmRidePannel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver]= useState(false);

    const vehiclePannelRef = useRef(null);
    const waitingForDriverRef = useRef(null)
    const vehicleFoundRef = useRef(null);
    const confirmRidePannelRef = useRef(null);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)
    const navigate = useNavigate()

    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    };

    useGSAP(() => {
        gsap.to(panelRef.current, {
            height: panelOpen ? '70%' : '0%',
            padding: panelOpen ? 24 : 0,
        });
        gsap.to(panelCloseRef.current, {
            opacity: panelOpen ? 1 : 0,
        });
    }, [panelOpen]);

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePannelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePannelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel])

    useGSAP(function () {
        if (confirmRidePannel) {
            gsap.to(confirmRidePannelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePannelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePannel])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])

    async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setFare(response.data)


    }

    return (
        <div className="h-screen relative overflow-hidden">
            <img
                className="w-16 absolute left-5 top-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                alt="Uber Logo"
            />
            <div onClick={()=>{
                    setVehiclePanel(false);
                }}
                className="h-screen w-screen">
                <img
                    className="h-full w-full"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Background"
                />
            </div>


            <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
                <div className="h-[30%] p-6 bg-white rounded-t-3xl relative">
                    <h5
                        ref={panelCloseRef}
                        onClick={() => {
                            setPanelOpen(false);
                        }}
                        className="absolute opacity-0 top-3 left-3 text-2xl"
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-3xl font-semibold mt-3">Find a trip</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                        <div className="line absolute h-16 w-1 top-[53%] bg-gray-900 left-10 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                setActiveField('pickup')
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                setActiveField('destination')
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' 
                        />
                        <button
                            onClick={findTrip}
                            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                            Find Trip
                        </button>

                    </form>
                </div>
                <div ref={panelRef} className="bg-white h-0">
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>
            <div ref={vehiclePannelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-8 py-8 px-3 pt-12 rounded-t-xl'>
                <VehiclePanels fare= {fare} setConfirmRidePannel={setConfirmRidePannel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePannelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-8 py-6 px-3 pt-12 rounded-t-xl'>
                <ConfirmRide setConfirmRidePannel={setConfirmRidePannel} setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full p-8 py-6 px-3 pt-12 rounded-t-xl'>
                <LookingForDriver></LookingForDriver>
            </div>

            <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0 p-8 py-6 px-3 pt-12 rounded-t-xl'>
                <WaitingForDriver  waitingForDriver={waitingForDriver} ></WaitingForDriver>
            </div>
        </div>
    );
};

export default Home;
