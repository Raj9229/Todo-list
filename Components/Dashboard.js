"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [userActivities, setUserActivities] = useState([]);
  const [totalFootprint, setTotalFootprint] = useState(0);

  const [formData, setFormData] = useState({
    transportMode: "",
    distance: "",
    foodChoice: "",
    energyUsage: "",
    carbonFootprint: 0,
  });

  const COLORS = ["#FF5733", "#33FF57", "#3385FF"];

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to calculate carbon footprint based on user input
  const calculateCarbonFootprint = () => {
    let footprint = 0;

    if (formData.transportMode === "Car") {
      footprint += formData.distance * 0.25; // Example: 0.25 kg/km for car travel
    }
    if (formData.foodChoice === "Vegetarian") {
      footprint += 1.5; // Example footprint for vegetarian food
    } else if (formData.foodChoice === "Non-Vegetarian") {
      footprint += 3; // Example footprint for non-vegetarian food
    }
    if (formData.energyUsage === "Electricity") {
      footprint += 1.0; // Example footprint for using electricity
    }

    return footprint;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFootprint = calculateCarbonFootprint();

    const newActivity = {
      ...formData,
      carbonFootprint: newFootprint,
    };

    setUserActivities((prevActivities) => [...prevActivities, newActivity]);
    setTotalFootprint((prevFootprint) => prevFootprint + newFootprint);

    // Reset form
    setFormData({
      transportMode: "",
      distance: "",
      foodChoice: "",
      energyUsage: "",
      carbonFootprint: 0,
    });
  };

  // Calculate emissions for each category (transport, food, energy)
  const transportEmissions = userActivities.reduce(
    (acc, act) => acc + (act.transportMode === "Car" ? act.carbonFootprint : 0),
    0
  );
  const foodEmissions = userActivities.reduce(
    (acc, act) => acc + (act.foodChoice === "Vegetarian" ? act.carbonFootprint : 0),
    0
  );
  const energyEmissions = userActivities.reduce(
    (acc, act) => acc + (act.energyUsage === "Electricity" ? act.carbonFootprint : 0),
    0
  );

  // Prepare chart data
  const chartData = [
    { name: "Transport", value: transportEmissions },
    { name: "Food", value: foodEmissions },
    { name: "Energy", value: energyEmissions },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
        Carbon Footprint Dashboard
      </h2>
      <p className="text-gray-300 mb-6 text-center animate__animated animate__fadeIn animate__delay-2s">
        Track and visualize your footprint over time.
      </p>

      <h3 className="text-xl font-semibold mb-4">Log an Activity:</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-lg mb-2">Transport Mode</label>
          <select
            name="transportMode"
            value={formData.transportMode}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          >
            <option value="">Select Transport Mode</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Bike">Bike</option>
          </select>
        </div>
        <div>
          <label className="block text-lg mb-2">Distance Traveled (in km)</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2">Food Choice</label>
          <select
            name="foodChoice"
            value={formData.foodChoice}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          >
            <option value="">Select Food Choice</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
        </div>
        <div>
          <label className="block text-lg mb-2">Energy Usage</label>
          <select
            name="energyUsage"
            value={formData.energyUsage}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          >
            <option value="">Select Energy Usage</option>
            <option value="Electricity">Electricity</option>
            <option value="Gas">Gas</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-full shadow-xl transform transition-all duration-300 ease-in-out"
        >
          Submit Activity
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-4">User History:</h3>
      <ul className="list-disc pl-5 mb-6 bg-gray-100 text-black p-3 rounded-lg">
        {userActivities.length > 0 ? (
          userActivities.map((activity, index) => (
            <li key={index} className="mb-2">
              {activity.transportMode} for {activity.distance} km, Food: {activity.foodChoice}, Energy: {activity.energyUsage}
            </li>
          ))
        ) : (
          <li>No activities logged yet.</li>
        )}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Total Carbon Footprint:</h3>
      <p className="text-lg mb-6">{totalFootprint.toFixed(2)} kg CO₂</p>

      {/* Pie Chart for Carbon Footprint Breakdown */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-center mb-4">Emissions Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
