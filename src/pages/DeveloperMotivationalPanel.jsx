import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ end, text, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-gradient-to-t from-blue-900 to-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all sm:p-4 md:p-6 lg:p-8"
    >
      {icon && <div className="text-3xl sm:text-4xl lg:text-5xl mb-2">{icon}</div>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{count}</h2>
      <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 uppercase font-medium tracking-wide">{text}</p>
    </motion.div>
  );
};

const DeveloperMotivationPanel = () => {
  const quotes = [
    "Code never lies, but comments sometimes do.",
    "Your code is not a mess; it's an unexplored masterpiece.",
    "Fixing bugs is like playing detective with your own mistakes.",
    "Eat, Sleep, Code, Repeat. 🚀",
    "The best way to predict the future is to invent it. 💡",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const stats = [
    { end: 150, text: "Projects Completed", icon: "📂" },
    { end: 500000, text: "Lines of Code", icon: "💻" },
    { end: 10000, text: "Bugs Fixed", icon: "🐞" },
    { end: 2000, text: "Coffee Cups ☕", icon: "☕" },
    { end: 120, text: "Commits Pushed", icon: "💾" }, 
    { end: 300, text: "Team Meetings", icon: "🤝" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-md shadow-lg border border-gray-700 neon-border">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 tracking-wide">🚀 Developer Stats Dashboard</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-30 lg:gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} end={stat.end} text={stat.text} icon={stat.icon} />
        ))}
      </div>

      <motion.div
        className="mt-8 p-6 text-center bg-gray-700 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-sm sm:text-base md:text-lg font-semibold italic neon-border">"{randomQuote}"</p>
      </motion.div>

      <motion.div
        className="mt-6 text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium shadow-md hover:shadow-lg transition-transform hover:scale-105"
          onClick={() => window.location.reload()}
        >
          Refresh Stats
        </button>
      </motion.div>
    </div>
  );
};

export default DeveloperMotivationPanel;
