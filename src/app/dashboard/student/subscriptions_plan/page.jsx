"use client";
import { Icon } from "@iconify/react";

export default function SubscriptionsPlan() {
    // Mock data - replace with actual data from your backend
    const currentPlan = {
        name: "3-Month Plan",
        description: "Perfect for students looking for short-term access to premium scholarship matching and essay assistance tools. Get started quickly with all essential features.",
        price: "20.00",
        totalPrice: "20.00",
        duration: "3 months",
        features: [
            "Short-term financial commitment",
            "Gain market insights quickly",
            "Standard support included"
        ]
    };

    const previousPlans = [
        {
            id: 1,
            plan: "1-Month Trial",
            start: "Jan 1, 2024",
            end: "Feb 1, 2024",
            status: "End",
            invoice: "INV-001"
        },
        {
            id: 2,
            plan: "3-Month Plan",
            start: "Feb 1, 2024",
            end: "May 1, 2024",
            status: "Active",
            invoice: "INV-002"
        }
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-screen">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Subscriptions Plan
                </h1>
                <p className="text-base text-gray-600">
                    Here's your progress this week.
                </p>
            </div>

            {/* Section 1: Your Plan */}
            <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Plan</h2>

                {/* Plan Card */}
                <div className="relative bg-white border-2 border-[#F6C844] rounded-2xl p-6 shadow-sm mb-6">
                    {/* Active Badge */}
                    <div className="absolute top-6 right-6">
                        <span className="bg-[#F6C844] text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full">
                            Active Plan
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-0 lg:pr-24">
                        {/* Left Side - Plan Details */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {currentPlan.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {currentPlan.description}
                            </p>
                        </div>

                        {/* Right Side - Pricing & Features */}
                        <div>
                            <div className="mb-4">
                                <p className="text-3xl font-bold text-gray-900">
                                    USD ${currentPlan.price}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Total for {currentPlan.duration}: USD ${currentPlan.totalPrice}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2">
                                {currentPlan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <Icon
                                            icon="mdi:check-circle"
                                            width={20}
                                            height={20}
                                            className="text-[#F6C844] mt-0.5 flex-shrink-0"
                                        />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 bg-[#F6C844] hover:bg-[#EDB91C] text-gray-900 font-semibold rounded-lg transition-colors">
                        Upgrade Plan
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold rounded-lg transition-colors">
                        Cancel Plan
                    </button>
                </div>
            </div>

            {/* Section 2: Previous Plan */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Previous Plan</h2>

                {/* Table Container */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-amber-200">
                                    <th className="text-left px-6 py-4 text-gray-700 font-semibold text-sm">
                                        Subscription Plan
                                    </th>
                                    <th className="text-left px-6 py-4 text-gray-700 font-semibold text-sm">
                                        Start
                                    </th>
                                    <th className="text-left px-6 py-4 text-gray-700 font-semibold text-sm">
                                        End
                                    </th>
                                    <th className="text-left px-6 py-4 text-gray-700 font-semibold text-sm">
                                        Status
                                    </th>
                                    <th className="text-left px-6 py-4 text-gray-700 font-semibold text-sm">
                                        Invoice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {previousPlans.map((plan) => (
                                    <tr key={plan.id} className="border-b border-amber-100 last:border-b-0">
                                        <td className="px-6 py-4 text-gray-900 font-medium">
                                            {plan.plan}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {plan.start}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {plan.end}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${plan.status === 'Active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}>
                                                {plan.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
