"use client";

interface BmrMeterProps {
    value: number;
    idealValue: number;
}

// Helper function to get dynamic styles based on BMR comparison
const getBmrDetails = (value: number, idealValue: number) => {
    const difference = Math.abs(value - idealValue);
    const percentDiff = (difference / idealValue) * 100;

    if (percentDiff < 10) {
        return {
            color: "text-green-400",
            percent: 50,
        };
    }
    if (percentDiff < 20) {
        return {
            color: "text-yellow-400",
            percent: 65,
        };
    }
    return {
        color: "text-orange-400",
        percent: 80,
    };
};

export default function BmrMeter({ value, idealValue }: BmrMeterProps) {
    // Get dynamic color and percent from the helper function
    const { color, percent } = getBmrDetails(value, idealValue);

    const radius = 42;
    const circumference = 2 * Math.PI * radius; // ~263.89
    const offset = circumference * (1 - percent / 100);

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
            <h3 className="text-white font-semibold mb-1">BMR</h3>
            <p className="text-slate-400 text-sm mb-6">
                Basal Metabolic Rate
            </p>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full border-10 border-slate-700 flex items-center justify-center relative">
                    {/* Background Ring */}
                    <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                        <circle
                            className="text-white/10"
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
                        <p className={`text-3xl font-bold ${color}`}>{value}</p>
                        <p className="text-slate-400 text-xs mt-1">kcal/day</p>
                    </div>
                </div>
                <p className="text-slate-400 text-sm mt-4 font-bold">
                    Ideal: <span className="text-green-400 font-semibold">{idealValue}</span> kcal/day
                </p>
            </div>
        </div>
    );
}
