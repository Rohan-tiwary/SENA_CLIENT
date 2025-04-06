import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaHistory, FaMoneyCheckAlt, FaBug, FaGamepad, FaUsers } from "react-icons/fa";
import NavBar from "../components/NavBar";
const DeveloperPage = () => {
  const [stats, setStats] = useState([]);
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null); // Track selected feature

  useEffect(() => {
    const fetchStats = async () => {
      const statsData = [
        { title: "Total Games", value: "120", icon: <FaGamepad size={30} className="text-blue-500" /> },
        { title: "Total Revenue", value: "$45,000", icon: <FaMoneyCheckAlt size={30} className="text-green-500" /> },
        { title: "Active Users", value: "15,500", icon: <FaUsers size={30} className="text-yellow-500" /> },
        { title: "Bugs Reported", value: "24", icon: <FaBug size={30} className="text-red-500" /> },
      ];
      setStats(statsData);
    };

    const fetchFeatures = async () => {
      const featuresData = [
        { key: "dayStats", title: "Specific Day Statistics", description: "View game stats for specific days.", icon: <FaChartLine size={30} className="text-blue-500" /> },
        { key: "history", title: "Statistic History", description: "Access past statistical reports.", icon: <FaHistory size={30} className="text-green-500" /> },
        { key: "transactions", title: "All Transactions", description: "View all financial and game transactions.", icon: <FaMoneyCheckAlt size={30} className="text-yellow-500" /> },
        { key: "bugs", title: "Bugs / Reports", description: "Manage and resolve bug reports.", icon: <FaBug size={30} className="text-red-500" /> },
      ];
      setFeatures(featuresData);
    };

    console.log(motion);
    fetchStats();
    fetchFeatures();
  }, []);

  const staticFeatureData = {
    dayStats: {
      header: "Specific Day Statistics",
      description: "Detailed static data for daily game statistics:",
      data: [
        { label: "User Activity", value: "High during evening hours" },
        { label: "Revenue Generated", value: "$1,250 on April 3rd" },
        { label: "Peak Gameplay", value: "Puzzle game at 8 PM" },
      ],
    },
    history: {
      header: "Statistic History",
      description: "Static historical data report:",
      data: [
        { label: "March Revenue", value: "$12,000" },
        { label: "Active Users in March", value: "13,000" },
        { label: "Bug Resolutions", value: "15 major fixes completed" },
      ],
    },
    transactions: {
      header: "All Transactions",
      description: "Static transaction overview:",
      data: [
        { label: "Total Transactions", value: "235" },
        { label: "Refunded Transactions", value: "10 refunds processed" },
        { label: "Pending Payments", value: "3 awaiting confirmation" },
      ],
    },
    bugs: {
      header: "Bugs / Reports",
      description: "Static bug management data:",
      data: [
        { label: "Critical Bugs", value: "3 requiring immediate attention" },
        { label: "Resolved Bugs", value: "21 resolutions completed" },
        { label: "Pending Reports", value: "5 awaiting verification" },
      ],
    },
  };
  const renderFeatureDetails = (featureKey) => {
    const featureData = staticFeatureData[featureKey];

    return featureData ? (
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-blue-400">{featureData.header}</h3>
        <p className="text-gray-300 mt-2">{featureData.description}</p>
        <ul className="text-gray-400 mt-4 space-y-2">
          {featureData.data.map((item, index) => (
            <li key={index}>
              <strong className="text-white">{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </motion.div>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 bg-[url(https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?t=st=1743944206~exp=1743947806~hmac=98825a789479bf0826ea7126641b40df6ef7bcfa2cc85b3295c9cc1130348add&w=1380)] bg-cover bg-center bg-fixed">
      <NavBar/>
      <motion.h1
        className="text-3xl sm:text-7xl font-extrabold mb-12 text-center animate-bounce"
        style={{
          textShadow: "0 0 10px #A020F0, 0 0 20px #A020F0, 0 0 40px #A020F0",
          color: "#FFFFFF",
        }}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 8,
          mass: 1,
          bounce: 0.6,
          delay: 1,
          duration: 1.2,
        }}
      >
        Developer Dashboard
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full max-w-5xl">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      className="relative bg-gradient-to-br from-gray-950 to-blue-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all
        hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-5 rounded-full shadow-md mb-4 border border-white/20 flex items-center justify-center w-16 h-16">
        {stat.icon}
      </div>

      <h2 className="text-3xl font-bold text-gold-400 tracking-wide">
        {stat.value}
      </h2>
      <p className="text-gray-300 text-sm mt-1 uppercase font-medium tracking-wide">
        {stat.title}
      </p>
      <div className="absolute inset-0 bg-gold-500/5 opacity-0 hover:opacity-20 rounded-2xl transition-all duration-300"></div>
    </motion.div>
  ))}
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
  {features.map((feature, index) => (
    <div key={index} className="w-full">
      <motion.button
        onClick={() =>
          setSelectedFeature(selectedFeature === feature.key ? null : feature.key)
        }
        className={`p-6 rounded-xl shadow-lg transition-all w-full flex flex-col items-center
          bg-gradient-to-r from-gray-800 to-gray-700 
          hover:shadow-[0px_0px_10px_rgba(0,255,255,0.5)]
          ${
            selectedFeature === feature.key
              ?"bg-gradient-to-br from-gray-950 via-blue-900 to-gray-900"
              : ""
          }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        {feature.icon}
        <h2 className="text-lg font-semibold mt-3 text-white">{feature.title}</h2>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: selectedFeature === feature.key ? 1 : 0,
          height: selectedFeature === feature.key ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden mt-2 rounded-lg shadow-lg
          ${selectedFeature === feature.key ? "p-4 bg-gray-800/90 border-l-4 border-white neon-border" : ""}`}
      >
        {selectedFeature === feature.key && renderFeatureDetails(feature.key)}
      </motion.div>
    </div> 
  ))}
</div>
      <footer className="mt-30 text-center text-sm z-30">
        © 2025 GauravGo Gaming Leaderboard. All rights reserved.
      </footer>
    </div>
  );
};

export default DeveloperPage;
