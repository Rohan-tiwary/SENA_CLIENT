import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 left-0 right-0 z-50">
      <img
        src="https://gauravgo.com/wp-content/uploads/2020/01/cropped-Transparent-Logo-.png"
        alt=""
        className="w-15 sm:max-w-30 animate-bounce"
      />

      {userData ? (
        <div ref={menuRef} className="relative">
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg cursor-pointer transition-all duration-300 hover:bg-blue-700 neon-border"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {userData.name[0].toUpperCase()}
          </div>

          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 overflow-hidden">
              <ul className="list-none text-sm text-gray-700">
                {!userData.isAccountVerified && (
                  <li
                    onClick={sendVerificationOtp}
                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                  >
                    ✉️ Verify E-mail
                  </li>
                )}
                <li
                  onClick={logout}
                  className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                >
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-white hover:bg-gray-400"
        >
          Login <img src={assets.arrow_icon} className="text-white" alt="" />
        </button>
      )}
    </div>
  );
};

export default NavBar;
