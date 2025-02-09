import React from "react";

const LocationSearchPanel = (props) => {
    const { setVehiclePannel, setPanelOpen } = props;

    // Sample array for location
    const locations = [
        "Ganpati Apartment, Nai Basti, Devli",
        "RadhKrishna Apartment, Nai Basti, Devli",
        "Pawanputra Apartment, Nai Basti, Devli",
        "Radhe Apartment, Nai Basti, Devli",
    ];

    return (
        <div>
            {locations.map((elem, idx) => (
                <div key={idx}
                    onClick={() => {
                        setVehiclePannel(true);
                        setPanelOpen(false);
                        console.log("clicked")
                    }}
                    className="flex border-2 p-3 rounded-xl border-gray-50 active:border-black gap-4 items-center my-2 justify-start"
                >
                    <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-map-pin-fill text-xl"></i>
                    </h2>
                    <h4 className="text-lg font-base">{elem}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
