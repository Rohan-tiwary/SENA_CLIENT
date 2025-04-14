import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const campaigns = [
  { id: 1, name: "Summer Promo", clicks: 1200, views: 5000, conversions: 300, roi: 35, engagement: 75 },
  { id: 2, name: "New Game Launch", clicks: 1800, views: 8000, conversions: 450, roi: 50, engagement: 85 },
  { id: 3, name: "Holiday Sale", clicks: 900, views: 4000, conversions: 250, roi: 28, engagement: 65 },
];

export default function SponsorCampaignPerformance() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Engagement (%)",
        data: [60, 72, 80, selectedCampaign.engagement],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.5)",
      },
      {
        label: "ROI (%)",
        data: [20, 30, 45, selectedCampaign.roi],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6 w-full max-w-4xl mx-auto neon-border">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Campaign Performance</h2>

      {/* Dropdown for Campaign Selection */}
      <div className="mb-4">
        <select
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          onChange={(e) => setSelectedCampaign(campaigns.find((c) => c.id === parseInt(e.target.value)))}
        >
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>
      </div>

      {/* Stats Display - Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
        {[
          { label: "Clicks", value: selectedCampaign.clicks },
          { label: "Views", value: selectedCampaign.views },
          { label: "Conversions", value: selectedCampaign.conversions },
          { label: "ROI (%)", value: `${selectedCampaign.roi}%` },
          { label: "Engagement (%)", value: `${selectedCampaign.engagement}%` },
        ].map((stat, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Performance Trend Chart */}
      <div className="mt-6">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>
    </div>
  );
}
