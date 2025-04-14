import SponsorOverview from "../components/SponsorOverview.jsx";
import SponsorTransactionHistory from "../components/SponsorTransactionHistory.jsx";
import SponsorCampaignPerformance from "../components/SponsorCampaignPerformance.jsx";
import SponsorReportsFeedback from "../components/SponsorReportsFeedback.jsx";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar.jsx";

const SponsorDashboard = () => {
  return (
    <div className="p-6 text-white min-h-screen relative bg-gradient-to-r from-gray-900 to-blue-900">
      <NavBar />
      <motion.h1
              className=" mt-12 text-3xl sm:text-7xl font-extrabold mb-12 text-center animate-bounce "
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
              Sponsor Dashboard
      </motion.h1>

      <SponsorOverview />
      <SponsorTransactionHistory />

      <h2 className="text-4xl font-bold text-center mb-7 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mt-6">
        Campaign & Reports Overview
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full md:w-1/2 p-4rounded-2xl shadow-lg"
        >
          <SponsorCampaignPerformance />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full md:w-1/2 p-4 rounded-2xl shadow-lg"
        >
          <SponsorReportsFeedback />
        </motion.div>
      </div>
      <footer className="mt-8 text-center text-sm ">
        &copy; 2025 GauravGo Gaming Leaderboard. All rights reserved.
      </footer>
    </div>
  );
};

export default SponsorDashboard;
