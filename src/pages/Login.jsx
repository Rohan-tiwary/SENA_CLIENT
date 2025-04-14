import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast, Bounce, Zoom } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setIsLoggedin, getUserData } = useContext(AppContent);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [captchaToken, setCaptchaToken] = useState("");
  const [specialCode, setSpecialCode] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const validatePassword = (value) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if (!regex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters, include 1 capital letter, 1 special symbol, and 1 number."
      );
    } else {
      setPasswordError("");
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!captchaToken) {
        toast.error("Please complete the CAPTCHA");
        return;
      }

      if (passwordError) {
        toast.error(
          "Password must contain at least 8 characters, a number, a capital letter, and a special symbol.",
          {
            position: "top-right",
            autoClose: 10000,
            transition: Zoom,
          }
        );
        return;
      }

      const dev = import.meta.env.VITE_DEV_CODE;
      const inf = import.meta.env.VITE_INF_CODE;
      const spo = import.meta.env.VITE_SPO_CODE;

      if (
        (role === "developer" && specialCode !== dev) ||
        (role === "influencer" && specialCode !== inf) ||
        (role === "sponsor" && specialCode !== spo)
      ) {
        toast.error("Invalid special access code.");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      if (state === "Sign Up") {
        const { data } = await axios.post(
          backendUrl + "/api/auth/register",
          { name, email, password, captchaToken, role, specialCode },
          config
        );

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          handleNavigation();
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + "/api/auth/login",
          { email, password, captchaToken, role, specialCode },
          config
        );

        if (data.success) {
          setIsLoggedin(true);
          localStorage.setItem("user", JSON.stringify(data.user));
          getUserData();
          handleNavigation();
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleNavigation = () => {
    switch (role) {
      case "user":
        navigate("/Leaderboard");
        break;
      case "developer":
        navigate("/developer-dashboard");
        break;
      case "influencer":
        navigate("/influencer-dashboard");
        break;
      case "sponsor":
        navigate("/sponsor-dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-b from-gray-900 to-black sm:bg-[url(https://media3.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/200.webp?cid=ecf05e470aqlll8svh24j60ezl408b1bvltvnip35rcntga2&ep=v1_gifs_related&rid=200.webp&ct=g)]  bg-[url(https://media3.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/200.webp?cid=ecf05e470aqlll8svh24j60ezl408b1bvltvnip35rcntga2&ep=v1_gifs_related&rid=200.webp&ct=g)] bg-cover bg-center">
      <div
        className=" p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm"
        style={{
          boxShadow: "0 0 12px #FFFFFF, 0 0 24px #00FFFF, 0 0 36px #00FFFF",
          border: "2px solid #FFFFFF",
        }}
      >
        <h2 className="text-2xl font-semibold text-white text-center mb-3 animate-bounce">
          {state === "Sign Up"
            ? "Create your Account"
            : "Login to your Account!"}
        </h2>
        <p className="text-center text-sm mb-4 ">
          {state === "Sign Up"
            ? "Create your Account"
            : "Login to your account!"}
        </p>
        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none"
                type="text"
                placeholder="Full Name"
                required
              ></input>
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] ">
            <img src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent w-full outline-none overflow-hidden text-ellipsis whitespace-nowrap text-indigo invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
              type="email"
              placeholder="@gmail.com"
              required
            ></input>
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] ">
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              value={password}
              className="bg-transparent outline-none"
              type="password"
              placeholder="Password"
              required
              autocomplete="current-password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Select Role:</label>
            <select
              className="w-full p-2 bg-gray-700 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="developer">Developer</option>
              <option value="influencer">Influencer</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </div>
          {(role === "developer" ||
            role === "influencer" ||
            role === "sponsor") && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="" />
              <input
                onChange={(e) => setSpecialCode(e.target.value)}
                value={specialCode}
                className="bg-transparent outline-none"
                type="text"
                placeholder="Enter Special Access Code"
                required
              />
            </div>
          )}

<div className="mb-4 flex justify-center transform scale-100  sm:scale-60 md:scale-40">
  <ReCAPTCHA
    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    onChange={handleCaptcha}
  />
</div>


          <p
            onClick={() => navigate("/reset-password")}
            className="mb-4 text-indigo-600 cursor-pointer"
          >
            Forgot Password?
          </p>
          <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium">
            {state}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?
            <span
              onClick={() => setState("login")}
              className="text-blue-400 cursor-pointer underline mt-2"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-500 cursor-pointer underline mt-2 "
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
