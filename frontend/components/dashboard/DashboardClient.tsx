"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import MainContent from "@/components/dashboard/MainContent";
import { dashboardService } from "@/services/dashboard";

export default function DashboardClient() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await dashboardService.getDashboardData();
        setDashboardData(data);
      } catch (err: any) {
        console.error("Failed to fetch dashboard data:", err);

        // Clear tokens and redirect to login immediately
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen bg-black text-white items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData?.onboardingCompleted) {
    return (
      <div className="flex h-screen bg-black text-white items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Please complete your onboarding first</p>
          <a
            href="/onboarding"
            className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 inline-block"
          >
            Go to Onboarding
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar open={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-black border-b border-slate-800 px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-green-400 hover:text-green-300"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search dashboard..."
              className="bg-slate-800 text-white placeholder-slate-500 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
            <div className="w-8 h-8 rounded bg-green-400/20 border border-green-400"></div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-black">
          <MainContent dashboardData={dashboardData} />
        </div>
      </div>
    </div>
  );
}