"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function ScholarshipInfo() {
    return (
        <SectionWrapper
            title="Scholarship Specific Info"
            description="Information specific to scholarship eligibility requirements."
            onSave={() => console.log("Saving Scholarship Info...")}
        >
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Financial Need Based?</label>
                        <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all text-gray-700 cursor-pointer disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:appearance-none disabled:text-gray-900">
                            <option value="">Select option...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Areas of Interest for Scholarships</label>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {['STEM', 'Arts', 'Sports', 'Business', 'Healthcare', 'Social Justice'].map((tag) => (
                            <button key={tag} type="button" className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-[#FFCA42]/10 hover:border-[#FFCA42] hover:text-[#FFCA42] transition-colors disabled:pointer-events-none disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-500">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </form>
        </SectionWrapper>
    );
}
