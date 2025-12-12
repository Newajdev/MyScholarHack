"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function AcademicInterests() {
    return (
        <SectionWrapper
            title="Academic Interests"
            description="Share your educational background and future goals."
            onSave={() => console.log("Saving Academic Interests...")}
        >
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Current Grade/Level</label>
                        <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all text-gray-700 cursor-pointer disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:appearance-none disabled:text-gray-900">
                            <option value="">Select current grade</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>
                            <option value="undergrad">Undergraduate</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">GPA (Weighted)</label>
                        <input type="number" step="0.01" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:text-gray-900" placeholder="4.0" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Intended Major</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:text-gray-900" placeholder="e.g. Computer Science, Biology..." />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Academic Honors & Awards</label>
                    <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 min-h-[120px] resize-y disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="List any honors or awards you have received..."></textarea>
                </div>
            </form>
        </SectionWrapper>
    );
}
