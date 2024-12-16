import { useState } from 'react';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center space-x-4">
        {/* LOGO Placeholder */}
        <div className="bg-black text-white rounded px-3 py-1 font-bold">
          HRD LOGO
        </div>

        {/* Baseball link (click to toggle dropdown on small screens) */}
        <div className="relative">
          <button
            className="flex items-center font-semibold hover:text-gray-300"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-xl mr-2">⚾</span>
            Baseball
            <svg
              className={`ml-2 h-4 w-4 transform transition-transform 
                ${showDropdown ? 'rotate-180' : 'rotate-0'
              } lg:hidden`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.9l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
            </svg>
          </button>
          
          {/* Dropdown on small screens only */}
          <div
            className={`absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg py-2 
            ${showDropdown ? 'block' : 'hidden'} lg:hidden`}
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Overall Standings
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Monthly Standings
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Player Stats
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Rules
            </a>
          </div>
        </div>

        {/* (Visible on large screens) */}
        <div className="hidden lg:flex items-center space-x-4 pl-4 border-l border-gray-500">
          <a href="#" className="hover:text-gray-300">
            Overall Standings
          </a>
          <a href="#" className="hover:text-gray-300">
            Monthly Standings
          </a>
          <a href="#" className="hover:text-gray-300">
            Player Stats
          </a>
          <a href="#" className="hover:text-gray-300">
            Rules
          </a>
        </div>
      </div>

      {/* Right section: Login / Register always visible */}
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300">Login</a>
        <span>|</span>
        <a href="#" className="hover:text-gray-300">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;

