"use client";

import { Leaf } from "lucide-react";

interface StressLevelMeterProps {
  status: string;
  risk: string;
  emoji: string;
  message: string;
  msf: number;
}

// Helper function to get dynamic styles based on risk
const getStressDetails = (risk: string) => {
  switch (risk) {
    case "Low":
      return { color: "text-green-400", percent: 25 };
    case "Mild":
      return { color: "text-yellow-400", percent: 50 };
    case "Moderate":
      return { color: "text-orange-400", percent: 70 };
    case "High":
      return { color: "text-red-400", percent: 90 };
    default:
      return { color: "text-slate-400", percent: 0 };
  }
};

export default function StressLevelMeter({ status, risk, emoji, message, msf }: StressLevelMeterProps) {
  // Get dynamic color and percent
  const { color, percent } = getStressDetails(risk);

  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-white font-semibold mb-1">Metabolic Stress</h3>
      <p className="text-slate-400 text-sm mb-6">
        {message}
      </p>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-40 h-40 rounded-full border-10 border-slate-700 flex items-center justify-center relative">
          {/* Background Ring */}
          <svg className="w-full h-full absolute" viewBox="0 0 100 100">
            <circle
              className="text-white/10"
              stroke="currentColor"
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            />
            {/* Value Ring */}
            <circle
              className={color} // DYNAMIC COLOR
              stroke="currentColor"
              strokeWidth="10"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset} // DYNAMIC OFFSET
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          {/* Text Inside */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl">{emoji}</span>
            <p className={`text-sm font-bold text-slate-400 mt-1`}>{risk}</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm mt-4 font-bold">
          MSF (Metabolic Shift Factor): <span className={`${color} font-semibold`}>{msf}%</span>
        </p>
        <p className="text-slate-500 text-xs mt-1">{status}</p>
      </div>
    </div>
  );
}