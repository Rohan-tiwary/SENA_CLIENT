import React from "react";
import { FaHandHoldingUsd, FaClock, FaBullhorn, FaCheckCircle } from "react-icons/fa";

const SponsorOverview = () => {
  return (
    <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-md neon-border">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center uppercase tracking-wide">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 border border-gray-700 overflow-hidden">
          <span className="absolute inset-0 border-2 border-transparent animate-border rounded-xl"></span>
          <FaCheckCircle className="text-green-400 text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300">Total Sponsorships</h3>
          <p className="text-2xl sm:text-4xl font-bold text-green-400 mt-1 sm:mt-2">24</p>
        </div>
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 border border-gray-700 overflow-hidden">
          <span className="absolute inset-0 border-2 border-transparent animate-border rounded-xl"></span>
          <FaHandHoldingUsd className="text-blue-400 text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300">Funds Raised</h3>
          <p className="text-2xl sm:text-4xl font-bold text-blue-400 mt-1 sm:mt-2">$12,500</p>
        </div>

        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 border border-gray-700 overflow-hidden">
          <span className="absolute inset-0 border-2 border-transparent animate-border rounded-xl"></span>
          <FaClock className="text-yellow-400 text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300">Pending Approvals</h3>
          <p className="text-2xl sm:text-4xl font-bold text-yellow-400 mt-1 sm:mt-2">5</p>
        </div>
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 border border-gray-700 overflow-hidden">
          <span className="absolute inset-0 border-2 border-transparent animate-border rounded-xl"></span>
          <FaBullhorn className="text-red-400 text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300">Live Campaigns</h3>
          <p className="text-2xl sm:text-4xl font-bold text-red-400 mt-1 sm:mt-2">3</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorOverview;
