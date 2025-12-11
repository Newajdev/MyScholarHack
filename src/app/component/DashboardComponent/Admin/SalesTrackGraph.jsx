"use client";
import { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const dataDay = [
    { name: "May 5", value: 130, value2: 220 },
    { name: "May 6", value: 140, value2: 190 },
    { name: "May 7", value: 95, value2: 180 },
    { name: "May 8", value: 160, value2: 280 },
    { name: "May 9", value: 230, value2: 390 },
    { name: "May 10", value: 240, value2: 410 },
    { name: "May 11", value: 150, value2: 280 },
    { name: "May 12", value: 60, value2: 210 },
    { name: "May 13", value: 90, value2: 170 },
    { name: "May 14", value: 70, value2: 140 },
];

const dataWeek = [
    { name: "Mon", value: 400, value2: 500 },
    { name: "Tue", value: 300, value2: 450 },
    { name: "Wed", value: 550, value2: 600 },
    { name: "Thu", value: 450, value2: 550 },
    { name: "Fri", value: 350, value2: 400 },
    { name: "Sat", value: 250, value2: 300 },
    { name: "Sun", value: 600, value2: 700 },
];

const dataMonth = [
    { name: "Week 1", value: 1000, value2: 1500 },
    { name: "Week 2", value: 1200, value2: 1800 },
    { name: "Week 3", value: 900, value2: 1600 },
    { name: "Week 4", value: 1500, value2: 2200 },
];

export default function SalesTrackGraph() {
    const [filter, setFilter] = useState("Day");

    const getData = () => {
        if (filter === "Week") return dataWeek;
        if (filter === "Month") return dataMonth;
        return dataDay;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Sales Track</h3>
                <div className="bg-gray-100 rounded-lg p-1 flex">
                    {["Day", "Week", "Month"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${filter === item
                                    ? "bg-[#FFCA42] text-white shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={getData()}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FFCA42" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#FFCA42" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value2"
                            stroke="#22C55E"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue2)"
                            animationDuration={3000}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#FFCA42"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            animationDuration={3000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
