"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Leaf, Bus, Plug, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const tipsData = [
  { icon: Bus, title: "Use Public Transport", content: "Opt for buses, trains, or carpooling to reduce emissions from personal vehicles." },
  { icon: Leaf, title: "Eat More Plants", content: "Choosing a plant-based diet can significantly lower your food-related carbon footprint." },
  { icon: Plug, title: "Save Energy", content: "Switch to energy-efficient appliances and unplug devices when not in use." },
  { icon: Leaf, title: "Use Renewable Energy", content: "Consider solar panels or green energy providers to power your home." },
  { icon: Recycle, title: "Recycle & Compost", content: "Reduce waste by recycling materials and composting organic scraps." },
];

const Tips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle dropdown
  const toggleTip = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Close the active one or open a new one
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold mb-6 text-center animate__animated animate__fadeIn animate__delay-2s">Tips to Reduce Your Carbon Footprint</h2>
      
      <div className="space-y-4">
        {tipsData.map((tip, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 cursor-pointer bg-white bg-opacity-40 hover:bg-opacity-70 transition-all duration-300"
            onClick={() => toggleTip(index)} // toggle the state
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <tip.icon className="text-green-600 w-8 h-8" />
                <span className="font-semibold text-xl">{tip.title}</span>
              </div>
              {/* Toggle Chevron Icon */}
              {openIndex === index ? (
                <ChevronUp className="text-green-600 w-6 h-6" />
              ) : (
                <ChevronDown className="text-green-600 w-6 h-6" />
              )}
            </div>

            {/* Content visibility logic */}
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-200 text-lg"
              >
                {tip.content}
              </motion.p>
            )}
          </div>
        ))}
      </div>

      {/* Fun Fact or Did You Know Section */}
      <div className="mt-8 p-4 bg-white bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-green-600 mb-4">Did You Know?</h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg text-center text-gray-200"
        >
          The carbon footprint of food production is responsible for about one-quarter of global greenhouse gas emissions. Making mindful food choices can have a significant impact on reducing emissions!
        </motion.p>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="absolute bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('You clicked to get more tips!')}
      >
        <span className="text-2xl">🌱</span>
      </motion.div>
    </div>
  );
};

export default Tips;
