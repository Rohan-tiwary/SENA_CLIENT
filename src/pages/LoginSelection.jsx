import React from "react";
import { useNavigate} from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaBullhorn, FaHandshake } from "react-icons/fa";

const LoginSelection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 8 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 }, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)" },
    tap: { scale: 0.95 },
  };
  console.log(motion);

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1],
      scale: [1, 1.05],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 z-0 bg-[url(https://media3.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/200.webp?cid=ecf05e470aqlll8svh24j60ezl408b1bvltvnip35rcntga2&ep=v1_gifs_related&rid=200.webp&ct=g)] bg-cover bg-center"
        style={{ animation: "backgroundScroll 10s linear infinite" }}
      ></div>
      <style>{`
        @keyframes backgroundScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
      `}</style>

      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-cyan-500 opacity-40 blur-lg"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-purple-500 opacity-40 blur-lg"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

<motion.h1
  className="text-5xl sm:text-7xl font-extrabold mb-12 relative z-10 text-center animate-bounce"
  style={{
    textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
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
    delay:1,
    duration:1.2
  }}
>
  The Multiverse Gateway
</motion.h1>
      <motion.div
        className="flex flex-col space-y-6 w-96 relative z-10 p-8 rounded-xl shadow-xl border border-gray-400 max-w-xs sm:max-w-md"
        style={{
          boxShadow: "0 0 12px #FFFFFF, 0 0 24px #00FFFF, 0 0 36px #00FFFF",
          border: "2px solid #FFFFFF",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.button
          onClick={() => {navigate("/login" ,{ state: { role: "user" }})}}
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaUser className="text-xl" /> User Login
        </motion.button>

        <motion.button
          onClick={() => navigate("/login",{ state: { role: "developer" } })}
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaCode className="text-xl" /> Developer Login
        </motion.button>

        <motion.button
           onClick={() => navigate("/login",{ state: { role: "influencer" }})}
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaBullhorn className="text-xl" /> Influencer Login
        </motion.button>

        <motion.button
          onClick={() => navigate("/login",{ state: { role: "sponsor" }})}
          className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaHandshake className="text-xl" />Sponsor Login
        </motion.button>
      </motion.div>
      <footer className="mt-8 text-center text-sm z-30">
        © 2025 GauravGo Gaming Leaderboard. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginSelection;
