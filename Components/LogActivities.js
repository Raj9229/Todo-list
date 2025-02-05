"use client";

import React, { useState } from 'react';

const LogActivities = () => {
  const [transportMode, setTransportMode] = useState('');
  const [distance, setDistance] = useState(null);
  const [foodChoice, setFoodChoice] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [error, setError] = useState("");

  const distances = [5, 10, 20, 50]; // Example distances in km
  const transportModes = ["Car", "Bus", "Bicycle"];
  const energyOptions = ["Electricity", "Gas"];

  const calculateCarbonFootprint = () => {
    let transportEmissions = 0;
    let foodEmissions = 0;
    let energyEmissions = 0;

    const transportFactors = {
      Car: 0.25,
      Bus: 0.1,
      Bicycle: 0,
    };
    if (transportMode && distance !== null) {
      transportEmissions = distance * (transportFactors[transportMode] || 0);
    }

    const foodFactors = {
      vegetarian: 1.5,
      vegan: 1.0,
      meat: 3.0,
    };
    foodEmissions = foodFactors[foodChoice] || 0;

    const energyFactors = {
      Electricity: 0.5,
      Gas: 1.0,
    };
    energyEmissions = energyFactors[energyUsage] || 0;

    const totalEmissions = transportEmissions + foodEmissions + energyEmissions;
    setCarbonFootprint(totalEmissions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if all fields are selected
    if (!transportMode || distance === null || !foodChoice || !energyUsage) {
      setError("Please fill out all fields to calculate your carbon footprint.");
      return;
    }

    setError(""); // Clear previous errors
    calculateCarbonFootprint();
  };

  const resetForm = () => {
    setTransportMode('');
    setDistance(null);
    setFoodChoice('');
    setEnergyUsage('');
    setCarbonFootprint(null);
  };

  return (
    <div className="p-4 flex flex-col items-center bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-white">
      <h2 className="text-3xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Log Your Activities
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md animate__animated animate__fadeIn animate__delay-2s">
        
        {/* Transport Mode */}
        <div className="mb-6">
          <label className="block mb-2">Mode of Transport:</label>
          <div className="flex gap-2">
            {transportModes.map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setTransportMode(mode)}
                className={`px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out ${
                  transportMode === mode ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl" : "bg-gray-300 text-black"
                } hover:scale-105`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Distance Selection */}
        <div className="mb-6">
          <label className="block mb-2">Distance (in km):</label>
          <div className="flex gap-2">
            {distances.map((km) => (
              <button
                key={km}
                type="button"
                onClick={() => setDistance(km)}
                className={`px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out ${
                  distance === km ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl" : "bg-gray-300 text-black"
                } hover:scale-105`}
              >
                {km} km
              </button>
            ))}
          </div>
        </div>

        {/* Food Choice */}
        <div className="mb-6">
          <label className="block mb-2">Food Choice:</label>
          <select
            value={foodChoice}
            onChange={(e) => setFoodChoice(e.target.value)}
            className="border p-3 w-full rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
          >
            <option value="">Select</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="meat">Meat-based</option>
          </select>
        </div>

        {/* Energy Usage */}
        <div className="mb-6">
          <label className="block mb-2">Energy Usage:</label>
          <div className="flex gap-2">
            {energyOptions.map((energy) => (
              <button
                key={energy}
                type="button"
                onClick={() => setEnergyUsage(energy)}
                className={`px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out ${
                  energyUsage === energy ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl" : "bg-gray-300 text-black"
                } hover:scale-105`}
              >
                {energy}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-full shadow-xl transition duration-300 ease-in-out hover:scale-105">
          Calculate Carbon Footprint
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Carbon Footprint Display */}
      {carbonFootprint !== null && (
        <div className="mt-8 text-xl">
          <h3 className="font-semibold">Your Carbon Footprint:</h3>
          <p>{carbonFootprint.toFixed(2)} kg CO2</p>
        </div>
      )}

      {/* Reset Button */}
      <button onClick={resetForm} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full shadow-xl hover:scale-105">
        Reset Form
      </button>
    </div>
  );
};

export default LogActivities;
