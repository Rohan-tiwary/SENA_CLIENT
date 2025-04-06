import React, { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userData } = useContext(AppContent);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/Leaderboard"); 
    }
  }, [userData, navigate]);

  if (userData) {
    return null;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white px-6 sm:px-0 
    bg-[url(https://wallpapercave.com/wp/wp14341949.jpg)] 
    sm:bg-[url(https://wallpapercave.com/wp/wp14341949.jpg)] bg-cover bg-center relative">

  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>

  <div className="relative z-10 max-w-lg w-full bg-black/60 backdrop-blur-md p-10 rounded-xl shadow-2xl text-center space-y-6 border border-gray-700">
    <div className="flex justify-center">
  <div className="w-32 h-32 rounded-full border-4 border-gray-500 shadow-lg transition-all duration-500 hover:rotate-6 hover:scale-105">
    <img
      src="https://i.ytimg.com/vi/Mwd15bFsqLE/maxresdefault.jpg"
      alt="Avatar"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>

    <h1 className="text-4xl font-extrabold text-green-300 animate-flicker">
      Welcome to SENA
    </h1>

    <h2 className="text-lg sm:text-xl flex items-center justify-center gap-2 text-gray-300">
      Hey <span className="text-blue-300 font-bold animate-pulse">Developer</span>!!  
      <img className="w-8 aspect-square animate-bounce" src="https://cdn-icons-png.flaticon.com/512/3405/3405831.png" alt="Wave" />
    </h2>

    <p className="text-sm text-gray-400 leading-relaxed">
      Get ready for beta testing! <br /> A unique journey awaits.
    </p>
    <button
      onClick={() => navigate("/login")}
      className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg animate-pulse"
    >
      Get Started 🚀
    </button>
  </div>
</div>
  );
};

export default Header;
