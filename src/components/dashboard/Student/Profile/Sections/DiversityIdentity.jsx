"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function DiversityIdentity() {
    return (
        <SectionWrapper
            title="Diversity and Identity"
            description="Optional information to find scholarships relevant to your background."
            onSave={() => console.log("Saving Diversity & Identity...")}
        >
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Race/Ethnicity</label>
                        <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all text-gray-700 cursor-pointer disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:appearance-none disabled:text-gray-900">
                            <option value="">Select option...</option>
                            <option value="asian">Asian</option>
                            <option value="black">Black or African American</option>
                            <option value="hispanic">Hispanic or Latino</option>
                            <option value="white">White</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Gender</label>
                        <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all text-gray-700 cursor-pointer disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:appearance-none disabled:text-gray-900">
                            <option value="">Select option...</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Generation College Student?</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer disabled:pointer-events-none disabled:opacity-75">
                            <input type="radio" name="first_gen" className="w-4 h-4 text-[#FFCA42] focus:ring-[#FFCA42] disabled:text-gray-400" disabled />
                            <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer disabled:pointer-events-none disabled:opacity-75">
                            <input type="radio" name="first_gen" className="w-4 h-4 text-[#FFCA42] focus:ring-[#FFCA42] disabled:text-gray-400" disabled />
                            <span className="text-gray-700">No</span>
                        </label>
                    </div>
                </div>
            </form>
        </SectionWrapper>
    );
}
