"use client";

import BmiMeter from "@/components/dashboard/BmiMeter";
import BmrMeter from "@/components/dashboard/BmrMeter";
import StressLevelMeter from "@/components/dashboard/StressLevelMeter";
import NutriGenScore from "@/components/dashboard/NutriGenScore";
import GoalProgressCard from "@/components/dashboard/GoalProgressCard";
import StreakTrackerCard from "@/components/dashboard/StreakTrackerCard";

interface MainContentProps {
  dashboardData: any;
}

export default function MainContent({ dashboardData }: MainContentProps) {
  const { user, profile, fitnessGoals, computed, stored } = dashboardData;

  // Calculate BMI status
  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  // Static NutriGen score (can be calculated based on various metrics)
  const nutrigenScore = 75;

  // Streak data (placeholder - this should come from activity tracking)
  const streakData = {
    title: "Daily Fitness Streak",
    subtitle: "Maintain consistency with your daily workouts.",
    currentStreak: 5,
    longestStreak: 17,
    streakData: [
      { day: "M", active: true },
      { day: "T", active: true },
      { day: "W", active: false },
      { day: "T", active: true },
      { day: "F", active: true },
      { day: "S", active: false },
      { day: "S", active: false },
    ],
    date: new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-2">Dashboard Overview</h1>
      <p className="text-gray-400 font-bold mb-8">Welcome back, {user?.name || user?.email || "User"}!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <BmiMeter
          value={computed.bmi}
          status={getBMIStatus(computed.bmi)}
          bodyFat={computed.bodyFat}
        />
        <StressLevelMeter
          status={stored.stressLevel}
          risk={stored.stressRisk}
          emoji={stored.stressEmoji}
          message={stored.stressMsg}
          msf={computed.msf}
        />
        <BmrMeter
          value={computed.bmr}
          idealValue={computed.idealBmr}
        />
      </div>

      {/* NutriGen Score */}
      <div className="mb-6">
        <NutriGenScore score={nutrigenScore} />
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <GoalProgressCard
          title={fitnessGoals.primaryGoal}
          subtitle="Your current fitness goal"
          unit="kg"
          initialWeight={profile.initialWeight || profile.weightKg}
          currentWeight={profile.weightKg}
          targetWeight={computed.idealWeight}
          weightLossPercentage={computed.weightLossPercentage}
        />
        <StreakTrackerCard
          title={streakData.title}
          subtitle={streakData.subtitle}
          currentStreak={streakData.currentStreak}
          longestStreak={streakData.longestStreak}
          streakData={streakData.streakData}
          date={streakData.date}
        />
      </div>
    </div>
  );
}