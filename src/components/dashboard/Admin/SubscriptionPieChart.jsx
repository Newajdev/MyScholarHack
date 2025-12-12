"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Essay Hack", value: 1500, color: "#5F8BFF" },
    { name: "Essay Hack Plus", value: 1000, color: "#22C55E" },
    { name: "Essay Hack Pro", value: 500, color: "#FFCA42" },
];

export default function SubscriptionPieChart() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Subscription Summary</h3>

            <div className="space-y-4 mb-6">
                {data.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-sm font-medium text-gray-600 border-b border-gray-50 pb-2 bg-white">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="h-[180px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                            animationDuration={2000}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                {/* Legend */}
                <div className="mt-4 space-y-2">
                    {data.map((item) => (
                        <div key={item.name} className="flex justify-between items-center text-xs font-semibold">
                            <span style={{ color: item.color }}>{item.name}</span>
                            <span style={{ color: item.color }}>{Math.round(item.value / 30)}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
