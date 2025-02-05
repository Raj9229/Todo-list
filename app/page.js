import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-white">
      <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Welcome to the Carbon Footprint Tracker
      </h1>
      <p className="text-xl mb-10 animate__animated animate__fadeIn animate__delay-2s">
        Calculate your carbon footprint based on your daily activities.
      </p>

      <Link href="/LogActivities" passHref>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 px-6 rounded-full shadow-xl hover:scale-110 hover:from-yellow-500 hover:to-yellow-700 transform transition-all duration-500 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Log Activities
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
