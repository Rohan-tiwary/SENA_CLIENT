import React, { useState , useContext } from "react";
import { AppContent } from '../context/AppContext';
import NavBar from "../components/NavBar";
import { FaTrophy, FaShareAlt, FaMedal, FaChartLine, FaGamepad } from 'react-icons/fa';

const FAQ = [
  { question: 'How do I earn points?', answer: 'You earn points by winning matches and completing daily challenges.' },
  { question: 'How can I redeem points?', answer: 'You can redeem points once you have at least 100 points in your account.' },
  { question: 'What is the win rate?', answer: 'Win rate is calculated by dividing the number of matches won by total matches played.' },
  { question: 'Can I play with my friends?', answer: 'Yes! You can invite friends to join your matches through the "Play with Friends" option.' },
  { question: 'What rewards can I get with points?', answer: 'You can redeem points for game credits, exclusive skins, and other in-game perks.' },
  { question: 'How do I track my performance?', answer: 'Your performance is tracked on the leaderboard, showing stats like win rate, matches played, and rank.' },
  { question: 'Is there a daily login reward?', answer: 'Yes, logging in daily gives you bonus points and other surprises.' },
  { question: 'Can I reset my stats?', answer: 'No, stats cannot be reset, ensuring a fair competition for all players.' },
  { question: 'Where can I report a bug or issue?', answer: 'You can report bugs through the "Support" section in the app, or contact our helpdesk.' },
];


const InfluencerPage = () => {
  const { userData } = useContext(AppContent);
  const [activeTab, setActiveTab] = useState('score');
  const [redeemPoints, setRedeemPoints] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const leaderboard = [
    {
      id: userData.id,
      name: userData,
      score: 100,
      totalPoints: 500,
      matchesPlayed: 20,
      winRate: 75,
      rank: 3,
      pic: 'https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg',
      history: [
        { won: true }, { won: false }, { won: true }, { won: true },
        { won: false }, { won: true }, { won: true }, { won: false }, { won: true },
      ],
    },
  ];

  const user = leaderboard[0];

  const handleRedeemPoints = () => {
    if (user.totalPoints >= 100) {
      setRedeemPoints(true);
    } else {
      alert('Minimum 100 points required to redeem.');
    }
  };

  const handlePaymentGateway = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: 50000,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://your-logo-url.com',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Gaurav',
        email: 'gaurav@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };
  
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  

  const handleShareScore = () => {
    const shareText = `Check out my score on GauravGo Leaderboard! Name: ${user.name}, Score: ${user.score}, Win Rate: ${user.winRate}%. Can you beat me?`;
    if (navigator.share) {
      navigator.share({
        title: 'GauravGo Leaderboard Score',
        text: shareText,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white overflow-x-hidden p-4 sm:p-6 bg-[url(https://media4.giphy.com/media/U3qYN8S0j3bpK/giphy.webp?cid=790b76111zx2xfpo8btvh7uzaa797v7nbnmjxc2ad8ht4ov3&ep=v1_gifs_search&rid=giphy.webp&ct=g)] sm:bg-[url(https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/Surface-Of-The-Planet-2560x1600/9479-11.jpg)] bg-center bg-cover">
      <NavBar />
      <div className="flex flex-col items-center mb-6 p-4">
        <img src={user.pic} alt={user.name.name} className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg" />
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-blue-400"> Hey, {user.name.name} 👋</h1>
        <p className="text-gray-400">ID:{user.id}</p>
        <div className="flex gap-4 mt-4">
          <div className="text-center"><FaGamepad className="text-blue-500 text-xl" /><p>{user.matchesPlayed}</p><p className="text-sm text-gray-400">Matches</p></div>
          <div className="text-center"><FaChartLine className="text-green-500 text-xl" /><p>{user.winRate}%</p><p className="text-sm text-gray-400">Win Rate</p></div>
          <div className="text-center"><FaMedal className="text-yellow-500 text-xl" /><p>{user.rank}</p><p className="text-sm text-gray-400">Rank</p></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {['Statistics', 'history', 'matches', 'totalPoints', 'Performance','FAQ','Referral List'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8 overflow-hidden neon-border">
      {activeTab === 'Statistics' && (
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 text-white neon-border">
 {[
   { label: 'Score', value: user.score },
   { label: 'Level', value: 5 },
   { label: 'Time', value: '03:45' },
   { label: 'Enemies Killed', value: 12 },
   { label: 'Coins Collected', value: 150 },
   { label: 'Winrate', value: '68%' },
   { label: 'Power-Ups', value: 3 },
   { label: 'Rank', value: '#1' },
 ].map((item, index) => (
   <div
     key={index}
     className="relative group p-6 bg-gray-800/40 backdrop-blur-lg border border-gray-600 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
   >
     <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
     <p className="text-lg font-semibold tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
       {item.label}
     </p>
     <p className="text-4xl font-bold mt-2 group-hover:text-cyan-400 transition-colors duration-300">
       {item.value}
     </p>
   </div>
 ))}
</div>

)}

{activeTab === 'history' && (
  <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg shadow-lg neon-border">
    {user.history.map((match, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-4 rounded-lg bg-gray-700/60 hover:bg-gray-700 transition duration-300 border border-gray-600 shadow-sm"
      >
        <span className="text-lg font-semibold text-white">
          Match #{index + 1}
        </span>
        <span
          className={`text-lg font-bold ${
            match.won ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {match.won ? 'Victory' : 'Defeat'}
        </span>
      </div>
    ))}
  </div>
)}
{activeTab === "Referral List" && (
  <div className="mt-4 px-2 md:px-0 neon-border ">
    <h2 className="text-2xl font-bold text-gray-100 mb-3 text-center sm:text-center">
      Referral List
    </h2>

    <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[400px]">
          <thead>
            <tr className="bg-gray-800 text-gray-300 text-left text-sm md:text-base">
              <th className="py-2 px-3 md:py-3 md:px-4">#</th>
              <th className="py-2 px-3 md:py-3 md:px-4">Name</th>
              <th className="py-2 px-3 md:py-3 md:px-4">Email</th>
              <th className="py-2 px-3 md:py-3 md:px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
              { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
              { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Active" },
              { id: 4, name: "Emma Brown", email: "emma@example.com", status: "Inactive" },
              { id: 5, name: "John Doe", email: "john@example.com", status: "Active" },
              { id: 6, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
              { id: 7, name: "Mike Johnson", email: "mike@example.com", status: "Active" },
              { id: 8, name: "Emma Brown", email: "emma@example.com", status: "Inactive" },
            ].map((referral, index) => (
              <tr
                key={referral.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition text-sm md:text-base"
              >
                <td className="py-2 px-3 md:py-3 md:px-4 text-gray-400">{index + 1}</td>
                <td className="py-2 px-3 md:py-3 md:px-4 text-white">{referral.name}</td>
                <td className="py-2 px-3 md:py-3 md:px-4 text-gray-300 whitespace-nowrap">
                  {referral.email}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 text-center">
                  <span
                    className={`px-2 py-1 text-xs md:text-sm font-semibold rounded-full ${
                      referral.status === "Active"
                        ? "bg-green-500 text-white"
                        : referral.status === "Pending"
                        ? "bg-yellow-500 text-gray-900"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {referral.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}




{activeTab === 'matches' && (
  <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg text-center space-y-4 border border-gray-700">
    <h2 className="text-2xl font-bold text-white tracking-wider">Matches Played</h2>
    <p className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg animate-pulse">
      {user.matchesPlayed}
    </p>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-700/60 rounded-lg hover:scale-105 transition-transform duration-300">
        <p className="text-lg text-gray-300">Victories</p>
        <p className="text-3xl text-green-400 font-bold">{user.victories}</p>
      </div>
      <div className="p-4 bg-gray-700/60 rounded-lg hover:scale-105 transition-transform duration-300">
        <p className="text-lg text-gray-300">Defeats</p>
        <p className="text-3xl text-red-400 font-bold">{user.defeats}</p>
      </div>
    </div>
  </div>
)}

{activeTab === 'Performance' && (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-6 flex justify-center aign-items-center flex-col sm:ml-32.5">
    <h2 className="text-white text-2xl font-bold mb-4 text-center">Performance Overview</h2>

    {[
      { label: 'Win Rate', value: user.winRate, color: 'bg-green-500' },
      { label: 'Accuracy Rate', value: 69, color: 'bg-yellow-300' },
      { label: 'Kills', value: 20, color: 'bg-red-500' },
      { label: 'Survival Rate', value: 85, color: 'bg-blue-400' },
      { label: 'Headshots', value: 45, color: 'bg-purple-500' },
      { label: 'Challenges Completed', value: 92, color: 'bg-pink-500' },
    ].map((stat, index) => (
      <div key={index}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-lg">{stat.label}</span>
          <span className="text-white text-4xl font-bold">{stat.value}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${stat.color} transition-all duration-500 ease-out`}
            style={{ width: `${stat.value}%` }}
          ></div>
        </div>
      </div>
    ))}

    <div className="text-center mt-6">
      <p className="text-white text-lg mb-2">Overall Performance</p>
      <p className="text-yellow-400 text-5xl font-extrabold animate-pulse">{Math.floor((user.winRate + 69 + 20 + 85 + 45 + 92) / 6)}%</p>
    </div>
  </div>
)}


{activeTab === 'totalPoints' && (
  <div className="relative flex flex-col items-center bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 max-w-md mx-auto">
  
    <div className="relative flex justify-center items-center w-48 h-48">
      <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="8" fill="none"/>
        <circle 
          cx="50" cy="50" r="40" 
          strokeWidth="8" strokeDasharray="250" 
          strokeDashoffset={250 - (user.totalPoints / 1000) * 250} 
          fill="none"
          className="stroke-yellow-500 animate-gradient"
        />
      </svg>
      <p className="text-yellow-400 text-5xl font-bold">{user.totalPoints}</p>
    </div>

    <div className="flex justify-between w-full mt-6 px-6">
      <div className="text-center">
        <p className="text-gray-400 text-sm uppercase font-semibold">Earned</p>
        <p className="text-green-400 text-lg font-bold">+500</p>
      </div>
      <div className="text-center">
        <p className="text-gray-400 text-sm uppercase font-semibold">Redeemed</p>
        <p className="text-red-400 text-lg font-bold">-400</p>
      </div>
    </div>
    <div className="absolute -bottom-6 flex space-x-4">
      {!redeemPoints ? (
        <button
          onClick={handleRedeemPoints}
          className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          🎉 Redeem
        </button>
      ) : (
        <button
          onClick={handlePaymentGateway}
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          💸 Pay Now
        </button>
      )}
    </div>
  </div>
)}
        {activeTab === 'FAQ' && FAQ.map((FAQ, index) => (
          <div key={index} className="mb-4">
            <button className="w-full text-left text-blue-400" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
              {FAQ.question}{activeTab === 'totalPoints' && (
  <div className="flex flex-col items-center space-y-8 bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 max-w-lg mx-auto backdrop-blur-md bg-opacity-90">
  
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 px-14 py-8 rounded-xl shadow-lg border border-yellow-500 text-center">
      <p className="text-yellow-400 text-7xl font-extrabold tracking-widest drop-shadow-xl">
        {user.totalPoints}
      </p>
      <p className="text-gray-300 text-lg mt-3 font-medium">Total Points</p>
    </div>

    <div className="w-full flex justify-between text-gray-300 text-sm px-8">
      <div className="text-center">
        <p className="font-semibold text-gray-200 uppercase tracking-wide">Earned</p>
        <p className="text-green-400 text-xl font-bold">+500</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-200 uppercase tracking-wide">Redeemed</p>
        <p className="text-red-400 text-xl font-bold">-400</p>
      </div>
    </div>

   
    <div className="flex space-x-6 w-full justify-center">
      {!redeemPoints ? (
        <button
          onClick={handleRedeemPoints}
          className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          🎉 Redeem Points
        </button>
      ) : (
        <button
          onClick={handlePaymentGateway}
          className="bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          💸 Payment Gateway
        </button>
      )}
    </div>
  </div>
)}

            </button>
            {openFAQ === index && <p className="text-gray-300">{FAQ.answer}</p>}
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <button onClick={handleShareScore} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
          <FaShareAlt className="inline mr-2" /> Share Your Score
        </button>
      </div>

      <footer className="mt-8 text-center text-sm ">
        © 2025 GauravGo Gaming Leaderboard. All rights reserved.
      </footer>
    </div>
  );
};

export default InfluencerPage;

