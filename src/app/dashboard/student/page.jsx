"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import AdminStatsCard from "@/components/dashboard/Admin/AdminStatsCard";
import ScholershipCard from "@/components/dashboard/Student/ScholershipCard";
import Table from "@/components/dashboard/Table";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const router = useRouter();
  const [scholarships, setScholarships] = useState([]);

  // Mock Essay Data to match the image
  const essays = [
    {
      id: 1,
      title: "Leadership and Community Work",
      subtitle: "Leadership and Community Work",
      status: "Draft",
    },
    {
      id: 2,
      title: "Overcoming Adversity",
      subtitle: "STEM Scholars Program",
      status: "Compiled",
    },
    {
      id: 3,
      title: "Career Goals",
      subtitle: "Future Innovators Scholarship",
      status: "Draft",
    },
    {
      id: 4,
      title: "Academic Journey",
      subtitle: "Merit Scholars Program",
      status: "Compiled",
    },
    {
      id: 5,
      title: "Challenges Faced",
      subtitle: "Delaware Scholars",
      status: "Compiled",
    },
    {
      id: 6,
      title: "Educational Goals",
      subtitle: "Tomorrow's Leaders Iniative",
      status: "Compiled",
    },
  ];

  useEffect(() => {
    fetch("/scholership.json")
      .then((res) => res.json())
      .then((data) => setScholarships(data))
      .catch((err) => console.error("Failed to load scholarships", err));
  }, []);

  const recommendedScholarships = scholarships
    .filter((s) => s.recommended === true)
    .slice(0, 4); // Taking more to fill the grid

  const TableHeads = [
    {
      Title: "Essay",
      key: "essay",
      width: "70%",
      render: (row) => (
        <div className="text-left pl-4">
          <h3 className="font-semibold text-gray-900 text-base">{row.title}</h3>
          <p className="text-gray-400 text-sm mt-0.5">{row.subtitle}</p>
        </div>
      ),
    },
    {
      Title: "View",
      key: "view",
      width: "30%",
      render: (row) => (
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/dashboard/student/view_essay")}
            className="w-10 h-10 rounded-lg border border-[#FFCA42] text-[#FFCA42] flex items-center justify-center hover:bg-[#FFF9E5] transition-colors"
          >
            <Icon icon="lucide:eye" width={20} height={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Jay</h1>
        <p className="text-gray-500 mt-1">Here’s your progress this week.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <AdminStatsCard
          icon="mdi:file-document-edit-outline"
          label="Total Essays"
          value="12"
          trend="up"
          trendValue="10"
          iconColor="text-[#ECA20E]"
          bgIconColor="bg-[#FEF5E3]"
        />
        <AdminStatsCard
          icon="mdi:school-outline"
          label="Scholarship Added"
          value="10"
          trend="up"
          trendValue="15"
          iconColor="text-[#36B37E]"
          bgIconColor="bg-[#EBF9F3]"
        />
        <AdminStatsCard
          icon="mdi:clock-time-four-outline"
          label="Upcoming Application Datelines"
          value="05"
          trend="down"
          trendValue="0"
          iconColor="text-[#FF5630]"
          bgIconColor="bg-[#FFF0ED]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Your Essays Table */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-900">Your Essays</h2>
          </div>
          <Table TableHeads={TableHeads} TableRows={essays} />
        </div>

        {/* Right Column: Recommended Scholarships */}
        <div className="w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Recommended Scholarships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recommendedScholarships.length > 0 ? (
              recommendedScholarships.map((item, idx) => (
                <ScholershipCard
                  key={idx}
                  Details={item}
                  onApply={() =>
                    router.push("/dashboard/student/all_scholarship")
                  }
                  compact={true}
                />
              ))
            ) : (
              <div className="col-span-2 text-gray-500 text-center py-10 bg-white rounded-2xl border border-gray-100">
                Loading recommendations...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
