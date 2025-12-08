"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScholershipCard from "../../../component/DashboardComponent/Student/ScholershipCard";

export default function AllScholarship() {
  const [scholership, setScholership] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch("/scholership.json")
      .then((res) => res.json())
      .then((data) => setScholership(data));
  }, []);

  const Recomended = scholership.filter((recom) => recom.recommended === true);
  const subjects = [...new Set(scholership.map((item) => item.subject))];

  const handleApplyClick = (scholarship) => {
    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedScholarship(null);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          All Scholarships
        </h1>
        <p className="text-sm sm:text-base font-medium text-gray-600 max-w-4xl leading-relaxed">
          We collect scholarship information from various reliable sources and
          bring them together on one platform. Based on your profile details, we
          analyze and match the most relevant opportunities. The scholarships
          shown here are carefully recommended because they best align with your
          background and eligibility.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recommended Scholarships
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="bg-white border border-gray-200 rounded-lg py-2.5 px-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <Icon icon="lucide:search" width={20} height={20} className="text-gray-400" />
            <input
              type="search"
              placeholder="Search Scholarships"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:outline-none text-sm w-full sm:w-64"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="px-5 py-2.5 border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2 justify-center min-w-[150px]"
            >
              <Icon icon="lucide:filter" width={18} height={18} />
              <span className="flex-1 text-left">{selectedSubject === "All Subjects" ? "Categorize" : selectedSubject}</span>
              <Icon icon={showCategoryDropdown ? "lucide:chevron-up" : "lucide:chevron-down"} width={16} height={16} />
            </button>

            {showCategoryDropdown && (
              <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg bg-white shadow-lg border border-gray-200 max-h-60 overflow-y-auto scrollbar-hide">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setSelectedSubject("All Subjects");
                      setShowCategoryDropdown(false);
                    }}
                    className={`block px-4 py-2.5 text-sm w-full text-left transition-colors ${selectedSubject === "All Subjects"
                      ? "bg-amber-50 text-amber-900 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    All Subjects
                  </button>
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setShowCategoryDropdown(false);
                      }}
                      className={`block px-4 py-2.5 text-sm w-full text-left transition-colors ${selectedSubject === subject
                        ? "bg-amber-50 text-amber-900 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="space-y-6">
        {/* Recommended Section */}
        {Recomended && Recomended.length > 0 && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="mdi:star" width={24} height={24} className="text-amber-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Recommended for You ({Recomended.length})
              </h3>
            </div>
            <div className={`grid gap-4 ${Recomended.length === 1 ? 'grid-cols-1 max-w-md' :
              Recomended.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl' :
                Recomended.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
              {Recomended.map((item, idx) => (
                <ScholershipCard key={idx} Details={item} onApply={handleApplyClick} />
              ))}
            </div>
          </div>
        )}

        {/* All Scholarships Section */}
        <div className="bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            All Available Scholarships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {scholership.map((item, idx) => (
              <ScholershipCard key={idx} Details={item} onApply={handleApplyClick} />
            ))}
          </div>
        </div>
      </div>

      {/* Scholarship Details Modal */}
      {showModal && selectedScholarship && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">Scholarship Details</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon icon="mdi:close" width={24} height={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedScholarship.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon icon="mdi:clock-outline" width={16} height={16} className="text-orange-500" />
                    <span>Deadline: {selectedScholarship.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="mdi:domain" width={20} height={20} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">Provider</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{selectedScholarship.provider}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="mdi:book-outline" width={20} height={20} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-600">Subject</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{selectedScholarship.subject}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="mdi:currency-usd" width={20} height={20} className="text-green-600" />
                    <span className="text-sm font-medium text-green-700">Scholarship Amount</span>
                  </div>
                  <p className="text-2xl font-bold text-green-700">{selectedScholarship.amount}</p>
                </div>
              </div>

              {/* Description (if available) */}
              {selectedScholarship.description && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedScholarship.description}</p>
                </div>
              )}
            </div>

            {/* Modal Footer - Action Buttons */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push('/dashboard/student/essays')}
                className="flex-1 bg-gradient-to-r from-[#FFCA42] to-[#FFB834] hover:from-[#FFB834] hover:to-[#FFCA42] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Icon icon="mdi:pencil" width={20} height={20} />
                <span>Write Essay</span>
              </button>
              <button
                onClick={() => router.push('/dashboard/student/view_essay')}
                className="flex-1 bg-white border-2 border-[#FFCA42] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-amber-50 flex items-center justify-center gap-2"
              >
                <Icon icon="mdi:file-document-outline" width={20} height={20} />
                <span>Select Best Essay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
