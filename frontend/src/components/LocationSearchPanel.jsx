import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description);  // Ensure correct data structure
        } else if (activeField === 'destination') {
            setDestination(suggestion.description);
        }
        setPanelOpen(false);

        // Open vehicle panel only if both locations are selected
        if (suggestion.description) {
            setVehiclePanel(true);
        }
    };

    return (
        <div>
            {suggestions.length > 0 ? (
                suggestions.map((elem) => (
                    <div 
                        key={elem.id || elem.place_id} // Use unique identifier
                        onClick={() => handleSuggestionClick(elem)} 
                        className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
                    >
                        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className="font-medium">{elem.description}</h4>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center mt-2">No suggestions found</p>
            )}
        </div>
    );
};

export default LocationSearchPanel;
