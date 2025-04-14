import { useState } from "react";

const transactions = [
  { id: 1, sponsor: "GauravGo Games", amount: 5000, date: "2024-04-05", status: "Completed" },
  { id: 2, sponsor: "Epic Gamers", amount: 1200, date: "2024-04-07", status: "Pending" },
  { id: 3, sponsor: "Tech Titans", amount: 800, date: "2024-04-10", status: "Failed" },
  { id: 4, sponsor: "Gaming Universe", amount: 3000, date: "2024-04-12", status: "Completed" },
];

export default function SponsorTransactionHistory() {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((tx) =>
    tx.sponsor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6 neon-border">
      <h2 className="text-2xl font-semibold text-white mb-4">Transaction History</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search sponsor..."
        className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Transactions Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3">Sponsor</th>
              <th className="p-3">Amount ($)</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-600 hover:bg-gray-700 transition">
                <td className="p-3">{tx.sponsor}</td>
                <td className="p-3">${tx.amount.toLocaleString()}</td>
                <td className="p-3">{tx.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      tx.status === "Completed"
                        ? "bg-green-500 text-white"
                        : tx.status === "Pending"
                        ? "bg-yellow-500 text-black"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
