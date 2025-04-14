import { useState } from "react";
import { FaBug, FaCommentAlt, FaExclamationTriangle, FaStar } from "react-icons/fa";

const reports = [
  { id: 1, type: "Bug Report", user: "John Doe", message: "Payment gateway not working properly.", rating: 2 },
  { id: 2, type: "Feedback", user: "Alice Smith", message: "Great sponsorship benefits! Would love more transparency on funds.", rating: 5 },
  { id: 3, type: "Performance Issue", user: "Mike Johnson", message: "Campaign analytics page takes too long to load.", rating: 3 },
  { id: 4, type: "Bug Report", user: "Emma Wilson", message: "Email notifications are inconsistent.", rating: 4 },
];

export default function SponsorReportsFeedback() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredReports = selectedType === "All" ? reports : reports.filter((r) => r.type === selectedType);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6 w-full max-w-4xl mx-auto neon-border">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Reports & Feedback</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {["All", "Bug Report", "Feedback", "Performance Issue"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg text-white transition ${
              selectedType === type ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="max-h-[300px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {report.type === "Bug Report" && <FaBug className="text-red-400 text-xl" />}
              {report.type === "Feedback" && <FaCommentAlt className="text-green-400 text-xl" />}
              {report.type === "Performance Issue" && <FaExclamationTriangle className="text-yellow-400 text-xl" />}
              <div>
                <p className="text-white font-semibold">{report.user}</p>
                <p className="text-gray-300 text-sm max-w-xs">{report.message}</p>
              </div>
            </div>

            <div className="flex text-yellow-400">
              {[...Array(report.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
