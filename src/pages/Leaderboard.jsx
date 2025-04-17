import React, { useState, useContext } from 'react';
import NavBar from '../components/NavBar';
import { FaTrophy, FaShareAlt, FaMedal, FaChartLine, FaGamepad } from 'react-icons/fa';
import { AppContent } from '../context/AppContext';


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


const Leaderboard = () => {
  const { userData } = useContext(AppContent);
  const [activeTab, setActiveTab] = useState('Statistics');
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
      mapName: "Dust II",
      playTime: "15m 32s",
      kills: 12,
      rank: "Gold",
      won: true,
      pic: 'https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg',
      history: [
        { won: true }, { won: false }, { won: true }, { won: true },
        { won: false }, { won: true }, { won: true }, { won: false }, { won: true },
      ],

      transactions :[
        { title: 'Tournament Entry', amount: -100, date: '2024-08-01' },
        { title: 'Reward Claim', amount: +300, date: '2024-08-05' },
        { title: 'Redeem Coins', amount: -200, date: '2024-08-10' },
      ]
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
        <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-blue-400">{user.name.name}</h1>
        <p className="text-gray-400">ID: {user.id}</p>
        <div className="flex gap-4 mt-4">
          <div className="text-center"><FaGamepad className="text-blue-500 text-xl" /><p>{user.matchesPlayed}</p><p className="text-sm text-gray-400">Matches</p></div>
          <div className="text-center"><FaChartLine className="text-green-500 text-xl" /><p>{user.winRate}%</p><p className="text-sm text-gray-400">Win Rate</p></div>
          <div className="text-center"><FaMedal className="text-yellow-500 text-xl" /><p>{user.rank}</p><p className="text-sm text-gray-400">Rank</p></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {['Statistics', 'history', 'totalPoints', 'Performance','FAQ'].map((tab) => (
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
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 text-white">
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
  <div className="space-y-4 p-4 bg-gray-800/50 rounded-lg shadow-lg">
    {user.history.map((match, index) => (
      <div
        key={index}
        className="p-4 rounded-lg bg-gray-700/60 hover:bg-gray-700 transition duration-300 border border-gray-600 shadow-sm"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-white">Match #{index + 1}</span>
          <span
            className={`text-lg font-bold ${
              match.won ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {match.won ? 'Victory' : 'Defeat'}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base text-gray-300">
          <div>
            <span className="font-medium text-white">Map:</span> {user.mapName}
          </div>
          <div>
            <span className="font-medium text-white">Play Time:</span> {user.playTime}
          </div>
          <div>
            <span className="font-medium text-white">Kills:</span> {user.kills}
          </div>
          <div>
            <span className="font-medium text-white">Rank:</span> {user.rank}
          </div>
        </div>
      </div>
    ))}
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
  <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">

    <div className="flex justify-center mb-6 md:mb-8">
      <div className="relative flex justify-center items-center w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 p-4">
        <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="8" fill="none"/>
          <circle 
            cx="50" cy="50" r="40" 
            strokeWidth="8" strokeDasharray="250" 
            strokeDashoffset={250 - (user.totalPoints / 1000) * 250} 
            fill="none"
            className="stroke-teal-500 animate-gradient"
          />
        </svg>
        <p className="text-white text-3xl sm:text-4xl font-semibold">{user.totalPoints}</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-110 mb-8">
  {[ 
    { label: 'Earned', value: 500, icon: '🎯', bgColor: 'from-teal-400 to-teal-600' },
    { label: 'Redeemed', value: 400, icon: '💸', bgColor: 'from-red-400 to-red-600' }
  ].map((item, index) => (
    <div
      key={index}
      className={`p-2 px-1.5 sm:p-6 md:p-3 gap-1 bg-gradient-to-r ${item.bgColor} rounded-xl shadow-lg text-center hover:scale-105 transition-all md:min-w-[180px]`}
    >
      <p className="text-white text-base sm:text-lg font-semibold">{item.label}</p>
      <div className="flex justify-center items-center">
        <p className="text-white text-xl sm:text-2xl font-bold mr-2">{item.value}</p>
        <span className="text-white">{item.icon}</span>
      </div>
    </div>
  ))}
</div>

<div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-full">
  <h3 className="text-xl sm:text-2xl font-bold text-teal-500 mb-4 text-center">Transaction History</h3>
  
  <div className="overflow-x-auto">
    <table className="min-w-full text-left table-auto">
      <thead>
        <tr>
          <th className="py-2 px-4 text-gray-400 text-sm sm:text-base whitespace-nowrap">Transaction</th>
          <th className="py-2 px-4 text-gray-400 text-sm sm:text-base whitespace-nowrap">Date</th>
          <th className="py-2 px-4 text-gray-400 text-sm sm:text-base whitespace-nowrap">Amount</th>
        </tr>
      </thead>
      <tbody>
        {user.transactions?.length ? (
          user.transactions.map((txn, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-all">
              <td className="py-4 px-4 text-white text-sm sm:text-base whitespace-nowrap">{txn.title || 'Transaction'}</td>
              <td className="py-4 px-4 text-gray-400 text-sm sm:text-base whitespace-nowrap">{txn.date}</td>
              <td className={`py-4 px-4 text-lg font-bold whitespace-nowrap ${txn.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {txn.amount > 0 ? `+${txn.amount}` : `${txn.amount}`}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="py-4 text-center text-gray-500">No transactions found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


    {/* Action Buttons */}
    <div className="mt-6 sm:mt-8 flex justify-center space-x-6">
      {!redeemPoints ? (
        <button
          onClick={handleRedeemPoints}
          className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold px-8 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-all"
        >
          🎉 Redeem
        </button>
      ) : (
        <button
          onClick={handlePaymentGateway}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-all"
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

export default Leaderboard;
