import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="bg-green-800 h-16 flex items-center justify-between px-8 shadow-lg">
        <ul className="flex space-x-10 font-semibold text-white">
          <li>
            <Link href="/" className="group relative">
              <span className="group-hover:text-yellow-400 group-hover:scale-105 group-hover:shadow-lg transition-all ease-in-out duration-300">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/LogActivities" className="group relative">
              <span className="group-hover:text-yellow-400 group-hover:scale-105 group-hover:shadow-lg transition-all ease-in-out duration-300">Log Activities</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/Dashboard" className="group relative">
              <span className="group-hover:text-yellow-400 group-hover:scale-105 group-hover:shadow-lg transition-all ease-in-out duration-300">Dashboard</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/Tips" className="group relative">
              <span className="group-hover:text-yellow-400 group-hover:scale-105 group-hover:shadow-lg transition-all ease-in-out duration-300">Tips</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full duration-300"></div>
            </Link>
          </li>
          <li>
            <Link href="/About" className="group relative">
              <span className="group-hover:text-yellow-400 group-hover:scale-105 group-hover:shadow-lg transition-all ease-in-out duration-300">About Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full duration-300"></div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
